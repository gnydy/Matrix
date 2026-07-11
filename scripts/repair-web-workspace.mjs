import fs from 'node:fs';
import path from 'node:path';

const root = 'E:\\Matrix';
const appsDir = path.join(root, 'apps');
const webDir = path.join(appsDir, 'web-erp');
const pkgPath = path.join(webDir, 'package.json');
const workspacePath = path.join(root, 'pnpm-workspace.yaml');

if (!fs.existsSync(webDir)) {
  console.log('ERROR: apps/web-erp غير موجود');
  console.log('المجلدات الموجودة داخل apps:');
  if (fs.existsSync(appsDir)) {
    for (const item of fs.readdirSync(appsDir)) console.log('-', item);
  }
  process.exit(1);
}

const pkg = fs.existsSync(pkgPath)
  ? JSON.parse(fs.readFileSync(pkgPath, 'utf8'))
  : {};

pkg.name = '@allinall/web-erp';
pkg.version = pkg.version || '0.1.0';
pkg.private = true;

pkg.scripts = {
  dev: 'next dev -p 3002',
  build: 'next build',
  start: 'next start -p 3002',
  ...(pkg.scripts || {}),
};

pkg.dependencies = {
  next: 'latest',
  react: 'latest',
  'react-dom': 'latest',
  ...(pkg.dependencies || {}),
};

pkg.devDependencies = {
  typescript: 'latest',
  '@types/node': 'latest',
  '@types/react': 'latest',
  '@types/react-dom': 'latest',
  ...(pkg.devDependencies || {}),
};

fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2), 'utf8');

fs.writeFileSync(
  workspacePath,
  `packages:
  - "apps/*"
  - "packages/*"
`,
  'utf8',
);

console.log('DONE: workspace fixed');
console.log('WEB package:', pkgPath);
console.log('WEB name:', pkg.name);

console.log('\\nCurrent app packages:');
for (const item of fs.readdirSync(appsDir, { withFileTypes: true })) {
  if (!item.isDirectory()) continue;

  const itemPkg = path.join(appsDir, item.name, 'package.json');

  if (fs.existsSync(itemPkg)) {
    const data = JSON.parse(fs.readFileSync(itemPkg, 'utf8'));
    console.log('-', item.name, '=>', data.name);
  }
}