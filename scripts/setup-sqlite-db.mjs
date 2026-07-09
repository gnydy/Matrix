/**
 * إعداد SQLite محلياً — بدون Docker
 */
import { spawn } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dataDir = path.join(root, 'data');
const dbFile = path.join(dataDir, 'matrix.db');
const databaseUrl = `file:${dbFile.replace(/\\/g, '/')}`;
const dbPkg = path.join(root, 'packages', 'database');
const prismaCli = path.join(
  dbPkg,
  'node_modules',
  'prisma',
  'build',
  'index.js',
);

fs.mkdirSync(dataDir, { recursive: true });

function runPrisma(args) {
  return new Promise((resolve, reject) => {
    const child = spawn(process.execPath, [prismaCli, ...args], {
      cwd: dbPkg,
      shell: false,
      stdio: 'inherit',
      env: { ...process.env, DATABASE_URL: databaseUrl },
    });
    child.on('close', (code) => (code === 0 ? resolve() : reject(new Error(`exit ${code}`))));
  });
}

console.log('قاعدة SQLite المحلية:', dbFile);
console.log('');

await runPrisma(['generate', '--schema=prisma/schema.sqlite.prisma']);
await runPrisma(['db', 'push', '--schema=prisma/schema.sqlite.prisma']);

console.log('');
console.log('تشغيل seed المرحلة A...');
await new Promise((resolve, reject) => {
  const child = spawn(
    process.execPath,
    [path.join(root, 'scripts', 'seed-phase-a.mjs')],
    {
      cwd: root,
      shell: false,
      stdio: 'inherit',
      env: { ...process.env, DATABASE_URL: databaseUrl },
    },
  );
  child.on('close', (code) => (code === 0 ? resolve() : reject(new Error(`seed exit ${code}`))));
});

console.log('');
console.log('تم — قاعدة البيانات جاهزة بدون Docker.');
