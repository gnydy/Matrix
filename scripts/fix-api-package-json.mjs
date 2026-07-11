import fs from 'node:fs';
import path from 'node:path';

const file = path.join(process.cwd(), 'apps', 'api', 'package.json');

if (!fs.existsSync(file)) {
  throw new Error('apps/api/package.json غير موجود. تأكد أنك وضعت مجلد apps/api في E:\\Matrix');
}

const pkg = JSON.parse(fs.readFileSync(file, 'utf8'));

pkg.name = '@allinall/api';
pkg.version ||= '0.1.0';
pkg.private = true;
pkg.type = 'module';

pkg.scripts = {
  ...(pkg.scripts || {}),
  dev: 'tsx watch src/server.ts',
  start: 'node dist/server.js',
  build: 'tsc -p tsconfig.json',
  'db:generate': 'prisma generate --schema prisma/schema.prisma',
  'db:push': 'prisma db push --schema prisma/schema.prisma',
  'db:seed': 'tsx prisma/seed.ts',
  setup: 'pnpm run db:generate && pnpm run db:push && pnpm run db:seed',
};

pkg.dependencies = {
  ...(pkg.dependencies || {}),
  '@prisma/client': 'latest',
  bcryptjs: 'latest',
  cors: 'latest',
  dotenv: 'latest',
  express: 'latest',
  jsonwebtoken: 'latest',
  zod: 'latest',
};

pkg.devDependencies = {
  ...(pkg.devDependencies || {}),
  prisma: 'latest',
  tsx: 'latest',
  typescript: 'latest',
  '@types/bcryptjs': 'latest',
  '@types/cors': 'latest',
  '@types/express': 'latest',
  '@types/jsonwebtoken': 'latest',
};

fs.writeFileSync(file, JSON.stringify(pkg, null, 2), 'utf8');

console.log('DONE: apps/api/package.json fixed');