import fs from 'node:fs';
import path from 'node:path';

const file = path.join(process.cwd(), 'scripts', 'reset-admin-login.mjs');

let code = fs.readFileSync(file, 'utf8');

if (!code.includes("createRequire")) {
  code = code.replace(
    "import crypto from 'node:crypto';",
    "import crypto from 'node:crypto';\nimport { createRequire } from 'node:module';",
  );
}

if (!code.includes('const apiRequire = createRequire')) {
  code = code.replace(
    "process.env.DATABASE_URL ||= 'file:E:/Matrix/data/matrix.db';",
    "process.env.DATABASE_URL ||= 'file:E:/Matrix/data/matrix.db';\n\nconst apiRequire = createRequire(path.join(process.cwd(), 'apps', 'api', 'package.json'));",
  );
}

code = code.replace(
  "const { PrismaClient, Prisma } = await import('@prisma/client');",
  "const { PrismaClient, Prisma } = apiRequire('@prisma/client');",
);

code = code.replace(
  "const argon2 = await import('argon2');",
  "const argon2 = apiRequire('argon2');",
);

code = code.replace(
  "const bcryptjs = await import('bcryptjs');",
  "const bcryptjs = apiRequire('bcryptjs');",
);

code = code.replace(
  "const bcrypt = await import('bcrypt');",
  "const bcrypt = apiRequire('bcrypt');",
);

code = code.replace(
  "const bcrypt = await import('@node-rs/bcrypt');",
  "const bcrypt = apiRequire('@node-rs/bcrypt');",
);

fs.writeFileSync(file, code, 'utf8');

console.log('DONE: reset-admin-login now loads Prisma from apps/api');