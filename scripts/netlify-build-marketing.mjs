/**
 * بناء الموقع التسويقي على Netlify (monorepo / pnpm)
 */
import { spawn } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const isWin = process.platform === 'win32';
const pnpm = isWin ? 'pnpm.cmd' : 'pnpm';

function run(cmd, args, opts = {}) {
  return new Promise((resolve, reject) => {
    const child = spawn(cmd, args, {
      cwd: root,
      stdio: 'inherit',
      shell: isWin,
      env: { ...process.env, ...opts.env },
      ...opts,
    });
    child.on('close', (code) => (code === 0 ? resolve() : reject(new Error(`${cmd} exit ${code}`))));
  });
}

console.log('Matrix — Netlify build (marketing)');
console.log('');

// Netlify يشغّل pnpm install قبل أمر البناء — لا نكرّر التثبيت على السحابة
if (!process.env.NETLIFY && !process.env.CI) {
  await run(pnpm, ['install']);
}

// prisma generate يحتاج DATABASE_URL معرّفاً (لا يتصل فعلياً أثناء generate)
const generateEnv = {
  ...process.env,
  DATABASE_URL:
    process.env.DATABASE_URL ||
    'postgresql://build:build@localhost:5432/build?schema=public',
};

await run(pnpm, ['--filter', '@allinall/security', 'build']);
await run(pnpm, ['--filter', '@allinall/database', 'db:generate'], { env: generateEnv });
await run(pnpm, ['--filter', '@allinall/web-marketing', 'build'], { env: generateEnv });

console.log('');
console.log('Netlify build OK');
