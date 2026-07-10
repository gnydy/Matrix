# AI automation

This workspace now includes a safe automation layer that can be invoked from VS Code or GitHub Actions.

## What it can do

- Inspect files and repository state
- Run lint/build/test commands
- Create or update files
- Commit and push changes
- Open pull requests
- Comment on issues or pull requests

## What it cannot do

- Delete files, directories, branches, or commits
- Force-push or run destructive cleanup commands

## VS Code

1. Open the Command Palette.
2. Run Tasks: Run Task.
3. Select GPT Automation.
4. Enter the task description when prompted.

## GitHub Actions

1. Open the Actions tab in GitHub.
2. Run GPT Automation.
3. Provide a prompt and whether to run in dry-run mode.
4. Configure the repository secret OPENAI_API_KEY if you want OpenAI planning.

## Local CLI

```bash
node scripts/ai-automation.mjs --prompt "inspect the repository and run lint" --dry-run
```
