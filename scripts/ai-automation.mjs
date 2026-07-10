#!/usr/bin/env node
import { existsSync, readdirSync, readFileSync, statSync, writeFileSync, mkdirSync, unlinkSync, rmSync } from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { spawnSync } from 'node:child_process';
import { fileURLToPath, pathToFileURL } from 'node:url';

const allowedActionTypes = new Set([
  'list_dir',
  'read_file',
  'write_file',
  'search_files',
  'search_text',
  'run_command',
  'git_status',
  'git_commit',
  'git_push',
  'create_pull_request',
  'create_issue_comment',
  'create_pr_comment',
]);

const forbiddenPatterns = [
  /\b(rm|del|erase|rmdir|rd|delete|remove|unlink|reset|revert|drop|truncate|clean)\b/i,
  /--force\b/i,
  /rm\s+-rf/i,
  /git\s+clean/i,
  /\.git\//i,
  /\bshutdown\b/i,
];

function isSafeAction(action) {
  if (!action || typeof action !== 'object') return false;
  if (!allowedActionTypes.has(action.type)) return false;
  if (action.type === 'run_command') {
    const command = String(action.command || '');
    return !forbiddenPatterns.some((pattern) => pattern.test(command));
  }
  return true;
}

function parseArgs(argv) {
  const args = { prompt: '', workspace: process.cwd(), repo: '', dryRun: false, githubToken: process.env.GITHUB_TOKEN || '' };
  for (let index = 0; index < argv.length; index += 1) {
    const current = argv[index];
    if (current === '--prompt') args.prompt = argv[index + 1] || '';
    else if (current === '--workspace') args.workspace = argv[index + 1] || process.cwd();
    else if (current === '--repo') args.repo = argv[index + 1] || '';
    else if (current === '--dry-run') args.dryRun = true;
    else if (current === '--github-token') args.githubToken = argv[index + 1] || '';
    else if (current === '--help' || current === '-h') {
      args.help = true;
    }
  }
  return args;
}

function toSafePath(base, value) {
  const resolved = path.resolve(base, value || '.');
  const relative = path.relative(base, resolved);
  if (relative.startsWith('..') || path.isAbsolute(relative)) {
    throw new Error(`Path escapes workspace: ${value}`);
  }
  return resolved;
}

function shell(command, cwd) {
  const result = spawnSync(command, { cwd, shell: true, encoding: 'utf8' });
  return {
    status: result.status ?? 0,
    stdout: result.stdout?.toString() || '',
    stderr: result.stderr?.toString() || '',
  };
}

function listFiles(root, current = root) {
  const entries = readdirSync(current, { withFileTypes: true });
  const result = [];
  for (const entry of entries) {
    const fullPath = path.join(current, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === '.git' || entry.name === 'node_modules' || entry.name === '.next') continue;
      result.push(...listFiles(root, fullPath));
    } else {
      result.push(path.relative(root, fullPath));
    }
  }
  return result;
}

function searchText(root, pattern) {
  const files = listFiles(root);
  const matches = [];
  for (const relativePath of files) {
    const fullPath = path.join(root, relativePath);
    try {
      const content = readFileSync(fullPath, 'utf8');
      if (content.includes(pattern)) {
        matches.push(relativePath);
      }
    } catch {
      // Ignore binary or unreadable files.
    }
  }
  return matches;
}

function fallbackPlan(prompt, workspace, repo) {
  const lower = prompt.toLowerCase();
  const actions = [];
  if (lower.includes('status') || lower.includes('inspect')) {
    actions.push({ type: 'git_status', description: 'Inspect repository state' });
  }
  if (lower.includes('test') || lower.includes('lint')) {
    actions.push({ type: 'run_command', command: 'pnpm lint', description: 'Run lint checks' });
  }
  if (lower.includes('build')) {
    actions.push({ type: 'run_command', command: 'pnpm build', description: 'Run build' });
  }
  if (actions.length === 0) {
    actions.push({ type: 'git_status', description: 'Inspect repository state' });
  }
  return {
    summary: `Prepared a safe automation plan for ${repo || workspace}.`,
    actions,
  };
}

async function callOpenAI(prompt, workspace, repo) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) return null;

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: process.env.OPENAI_MODEL || 'gpt-4o-mini',
      temperature: 0.1,
      messages: [
        {
          role: 'system',
          content: [
            'You are Matrix automation agent.',
            'Return JSON only with the shape {"summary":"...","actions":[{"type":"...","description":"...","path":"...","command":"...","content":"...","title":"...","body":"...","issueNumber":1,"prNumber":1,"commitMessage":"..."}]}.',
            'Only use the allowed action types: list_dir, read_file, write_file, search_files, search_text, run_command, git_status, git_commit, git_push, create_pull_request, create_issue_comment, create_pr_comment.',
            'Never suggest delete, remove, rm, or destructive git operations.',
          ].join(' '),
        },
        {
          role: 'user',
          content: `Task: ${prompt}\nWorkspace: ${workspace}\nRepository: ${repo || 'local'}`,
        },
      ],
    }),
  });

  if (!response.ok) {
    throw new Error(`OpenAI request failed: ${response.status} ${response.statusText}`);
  }

  const json = await response.json();
  const text = json?.choices?.[0]?.message?.content || '{}';
  const cleaned = text.replace(/```json/g, '').replace(/```/g, '').trim();
  return JSON.parse(cleaned);
}

async function executeAction(action, workspace, repo, githubToken, dryRun) {
  if (!isSafeAction(action)) {
    throw new Error(`Unsafe action rejected: ${action.type}`);
  }

  switch (action.type) {
    case 'list_dir': {
      const target = toSafePath(workspace, action.path || '.');
      return { ok: true, output: readdirSync(target).join('\n') };
    }
    case 'read_file': {
      const target = toSafePath(workspace, action.path || '');
      return { ok: true, output: readFileSync(target, 'utf8') };
    }
    case 'write_file': {
      if (dryRun) return { ok: true, output: `Dry run: would write ${action.path}` };
      const target = toSafePath(workspace, action.path || '');
      mkdirSync(path.dirname(target), { recursive: true });
      writeFileSync(target, action.content || '', 'utf8');
      return { ok: true, output: `Wrote ${action.path}` };
    }
    case 'search_files': {
      const target = toSafePath(workspace, action.path || '.');
      return { ok: true, output: listFiles(target).join('\n') };
    }
    case 'search_text': {
      const target = toSafePath(workspace, action.path || '.');
      return { ok: true, output: searchText(target, action.pattern || '').join('\n') };
    }
    case 'run_command': {
      if (dryRun) return { ok: true, output: `Dry run: ${action.command}` };
      const result = shell(action.command, workspace);
      return { ok: result.status === 0, output: `${result.stdout}${result.stderr}`.trim() };
    }
    case 'git_status': {
      const result = shell('git status --short', workspace);
      return { ok: result.status === 0, output: result.stdout || result.stderr };
    }
    case 'git_commit': {
      if (dryRun) return { ok: true, output: `Dry run: git commit (${action.commitMessage || 'automated'})` };
      const commitMessage = action.commitMessage || 'chore: automated update';
      const add = shell('git add -A', workspace);
      if (add.status !== 0) return { ok: false, output: `${add.stdout}${add.stderr}` };
      const commit = shell(`git commit -m "${commitMessage}"`, workspace);
      return { ok: commit.status === 0, output: `${commit.stdout}${commit.stderr}` };
    }
    case 'git_push': {
      if (dryRun) return { ok: true, output: 'Dry run: git push' };
      const result = shell('git push', workspace);
      return { ok: result.status === 0, output: `${result.stdout}${result.stderr}` };
    }
    case 'create_pull_request': {
      if (dryRun) return { ok: true, output: `Dry run: create PR (${action.title || 'Automated PR'})` };
      const token = githubToken || process.env.GH_TOKEN || process.env.GITHUB_TOKEN || '';
      const env = { ...process.env, GH_TOKEN: token, GITHUB_TOKEN: token };
      const command = [
        'gh pr create',
        `--title "${(action.title || 'Automated PR').replace(/"/g, '\\"')}"`,
        `--body "${(action.body || 'Automated PR from Matrix automation').replace(/"/g, '\\"')}"`,
      ];
      const result = spawnSync(command.join(' '), { cwd: workspace, shell: true, encoding: 'utf8', env });
      return { ok: result.status === 0, output: `${result.stdout}${result.stderr}` };
    }
    case 'create_issue_comment': {
      if (dryRun) return { ok: true, output: `Dry run: comment on issue #${action.issueNumber}` };
      const token = githubToken || process.env.GH_TOKEN || process.env.GITHUB_TOKEN || '';
      const env = { ...process.env, GH_TOKEN: token, GITHUB_TOKEN: token };
      const command = `gh issue comment ${action.issueNumber} --body "${(action.body || 'Automated update').replace(/"/g, '\\"')}"`;
      const result = spawnSync(command, { cwd: workspace, shell: true, encoding: 'utf8', env });
      return { ok: result.status === 0, output: `${result.stdout}${result.stderr}` };
    }
    case 'create_pr_comment': {
      if (dryRun) return { ok: true, output: `Dry run: comment on PR #${action.prNumber}` };
      const token = githubToken || process.env.GH_TOKEN || process.env.GITHUB_TOKEN || '';
      const env = { ...process.env, GH_TOKEN: token, GITHUB_TOKEN: token };
      const command = `gh pr comment ${action.prNumber} --body "${(action.body || 'Automated update').replace(/"/g, '\\"')}"`;
      const result = spawnSync(command, { cwd: workspace, shell: true, encoding: 'utf8', env });
      return { ok: result.status === 0, output: `${result.stdout}${result.stderr}` };
    }
    default:
      throw new Error(`Unsupported action type: ${action.type}`);
  }
}

export async function runAutomation(prompt, options = {}) {
  const workspace = options.workspace || process.cwd();
  const repo = options.repo || '';
  const githubToken = options.githubToken || process.env.GITHUB_TOKEN || '';
  const dryRun = Boolean(options.dryRun);

  let plan = null;
  try {
    plan = await callOpenAI(prompt, workspace, repo);
  } catch (error) {
    console.warn(`OpenAI planning unavailable: ${error.message}`);
  }

  if (!plan || !Array.isArray(plan.actions)) {
    plan = fallbackPlan(prompt, workspace, repo);
  }

  const results = [];
  for (const action of plan.actions) {
    const actionResult = await executeAction(action, workspace, repo, githubToken, dryRun);
    results.push({ action, ...actionResult });
  }

  return { plan, results };
}

export function isSafeActionForTesting(action) {
  return isSafeAction(action);
}

export function parseActionPlan(raw) {
  const parsed = typeof raw === 'string' ? JSON.parse(raw) : raw;
  return parsed;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help) {
    console.log('Usage: node scripts/ai-automation.mjs --prompt "..." [--workspace .] [--repo owner/name] [--dry-run] [--github-token TOKEN]');
    return;
  }

  const prompt = args.prompt || process.env.AI_AUTOMATION_PROMPT || 'inspect repository state';
  const result = await runAutomation(prompt, {
    workspace: path.resolve(args.workspace),
    repo: args.repo,
    githubToken: args.githubToken,
    dryRun: args.dryRun,
  });

  console.log(JSON.stringify(result, null, 2));
}

const currentFile = fileURLToPath(import.meta.url);
if (process.argv[1] && path.resolve(process.argv[1]) === currentFile) {
  main().catch((error) => {
    console.error(error.message);
    process.exitCode = 1;
  });
}
