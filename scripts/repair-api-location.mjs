import fs from 'node:fs';
import path from 'node:path';

const root = 'E:\\Matrix';
const target = path.join(root, 'apps', 'api');

function walk(dir, out = []) {
  if (!fs.existsSync(dir)) return out;

  for (const item of fs.readdirSync(dir, { withFileTypes: true })) {
    if (
      item.name === 'node_modules' ||
      item.name === '.next' ||
      item.name === 'dist' ||
      item.name === '.git'
    ) {
      continue;
    }

    const full = path.join(dir, item.name);

    if (item.isDirectory()) {
      walk(full, out);
    } else if (item.name === 'schema.prisma') {
      out.push(full);
    }
  }

  return out;
}

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });

  for (const item of fs.readdirSync(src, { withFileTypes: true })) {
    if (item.name === 'node_modules' || item.name === 'dist') continue;

    const from = path.join(src, item.name);
    const to = path.join(dest, item.name);

    if (item.isDirectory()) {
      copyDir(from, to);
    } else {
      fs.copyFileSync(from, to);
    }
  }
}

const schemas = walk(root);

const candidates = schemas
  .map((schemaPath) => path.dirname(path.dirname(schemaPath)))
  .filter((apiDir) => {
    return (
      fs.existsSync(path.join(apiDir, 'package.json')) &&
      fs.existsSync(path.join(apiDir, 'prisma', 'schema.prisma')) &&
      fs.existsSync(path.join(apiDir, 'src', 'server.ts'))
    );
  });

if (candidates.length === 0) {
  console.log('لم أجد API كامل يحتوي package.json + prisma/schema.prisma + src/server.ts');
  console.log('schema.prisma الموجود:');
  for (const item of schemas) console.log(item);
  process.exit(1);
}

const source = candidates.find((item) => item !== target) || candidates[0];

console.log('SOURCE:', source);
console.log('TARGET:', target);

if (source === target) {
  console.log('API موجود بالفعل في المكان الصحيح.');
  process.exit(0);
}

fs.mkdirSync(path.dirname(target), { recursive: true });

if (fs.existsSync(target)) {
  const backup = path.join(root, 'apps', 'api-old-' + new Date().toISOString().replace(/[:.]/g, '-'));
  fs.renameSync(target, backup);
  console.log('OLD API BACKUP:', backup);
}

copyDir(source, target);

console.log('DONE: API copied to E:\\Matrix\\apps\\api');