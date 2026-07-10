import test from 'node:test';
import assert from 'node:assert/strict';
import { isSafeActionForTesting, parseActionPlan } from './ai-automation.mjs';

test('allows safe non-delete actions', () => {
  assert.equal(isSafeActionForTesting({ type: 'read_file', path: 'README.md' }), true);
  assert.equal(isSafeActionForTesting({ type: 'write_file', path: 'README.md', content: 'x' }), true);
  assert.equal(isSafeActionForTesting({ type: 'run_command', command: 'pnpm lint' }), true);
});

test('blocks destructive operations', () => {
  assert.equal(isSafeActionForTesting({ type: 'run_command', command: 'rm -rf dist' }), false);
  assert.equal(isSafeActionForTesting({ type: 'run_command', command: 'git clean -fd' }), false);
  assert.equal(isSafeActionForTesting({ type: 'delete_file', path: 'README.md' }), false);
});

test('parses action plans from JSON', () => {
  const plan = parseActionPlan('{"summary":"ok","actions":[{"type":"git_status"}]}');
  assert.equal(plan.summary, 'ok');
  assert.equal(plan.actions[0].type, 'git_status');
});
