import path from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dbPkg = path.join(root, 'packages', 'database');
const require = createRequire(path.join(dbPkg, 'package.json'));

process.env.DATABASE_URL = process.env.DATABASE_URL ?? 'file:E:/Matrix/data/matrix.db';

const bcrypt = require('bcryptjs');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const accounts = [
  {
    email: 'admin@matrix.local',
    name: 'Owner',
    roleSlug: 'owner',
    password: 'Admin@2030',
    permissions: ['*'],
  },
  {
    email: 'cashier@matrix.local',
    name: 'Cashier',
    roleSlug: 'cashier',
    password: 'Cashier@2030',
    permissions: ['erp:read', 'sales:read', 'sales:write', 'debts:read', 'debts:write', 'accounting:read', 'accounting:write', 'core:read'],
  },
  {
    email: 'employee@matrix.local',
    name: 'Employee',
    roleSlug: 'employee',
    password: 'Employee@2030',
    permissions: ['erp:read', 'inventory:read', 'inventory:write', 'core:read'],
  },
];

async function main() {
  const tenant = await prisma.tenant.upsert({
    where: { slug: 'matrix-internal' },
    update: { name: 'Matrix Internal', status: 'active' },
    create: { name: 'Matrix Internal', slug: 'matrix-internal', status: 'active' },
  });

  for (const account of accounts) {
    const role = await prisma.role.upsert({
      where: { slug: account.roleSlug },
      update: { name: account.roleSlug, permissions: account.permissions },
      create: { slug: account.roleSlug, name: account.roleSlug, permissions: account.permissions },
    });

    const passwordHash = await bcrypt.hash(account.password, 12);

    const user = await prisma.user.upsert({
      where: { email: account.email },
      update: {
        name: account.name,
        passwordHash,
        status: 'active',
        tenantId: tenant.id,
        deletedAt: null,
      },
      create: {
        email: account.email,
        name: account.name,
        passwordHash,
        status: 'active',
        tenantId: tenant.id,
      },
    });

    await prisma.userRole.upsert({
      where: { userId_roleId: { userId: user.id, roleId: role.id } },
      update: {},
      create: { userId: user.id, roleId: role.id },
    });

    console.log('OK:', account.email, '/', account.password);
  }

  console.log('DONE');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());