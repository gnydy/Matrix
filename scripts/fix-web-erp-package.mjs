import fs from 'node:fs';
import path from 'node:path';

const root = 'E:\\Matrix';
const webDir = path.join(root, 'apps', 'web-erp');
const pkgPath = path.join(webDir, 'package.json');
const workspacePath = path.join(root, 'pnpm-workspace.yaml');

if (!fs.existsSync(webDir)) {
  throw new Error('apps/web-erp غير موجود');
}

let pkg = {};

if (fs.existsSync(pkgPath)) {
  pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
}

pkg.name = '@allinall/web-erp';
pkg.version = pkg.version || '0.1.0';
pkg.private = true;

pkg.scripts = {
  ...(pkg.scripts || {}),
  dev: 'next dev -p 3002',
  build: 'next build',
  start: 'next start -p 3002',
  lint: 'next lint',
};

pkg.dependencies = {
  ...(pkg.dependencies || {}),
  '@next/env': pkg.dependencies?.['@next/env'] || 'latest',
  next: pkg.dependencies?.next || 'latest',
  react: pkg.dependencies?.react || 'latest',
  'react-dom': pkg.dependencies?.['react-dom'] || 'latest',
};

pkg.devDependencies = {
  ...(pkg.devDependencies || {}),
  typescript: pkg.devDependencies?.typescript || 'latest',
  '@types/node': pkg.devDependencies?.['@types/node'] || 'latest',
  '@types/react': pkg.devDependencies?.['@types/react'] || 'latest',
  '@types/react-dom': pkg.devDependencies?.['@types/react-dom'] || 'latest',
};

fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2), 'utf8');

let workspace = '';

if (fs.existsSync(workspacePath)) {
  workspace = fs.readFileSync(workspacePath, 'utf8');
}

if (!workspace.includes('apps/*')) {
  workspace = `packages:
  - "apps/*"
  - "packages/*"
`;
  fs.writeFileSync(workspacePath, workspace, 'utf8');
}

console.log('DONE: web-erp package fixed');
console.log('package:', pkgPath);