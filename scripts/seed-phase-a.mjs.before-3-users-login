/**
 * Seed Phase A — Tenant, Roles, Owner user
 */
import path from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dbPkg = path.join(root, 'packages', 'database');
const require = createRequire(path.join(dbPkg, 'package.json'));

const bcrypt = require('bcryptjs');
const { PrismaClient } = require('@prisma/client');

const dbFile = path.join(root, 'data', 'matrix.db');
process.env.DATABASE_URL = process.env.DATABASE_URL ?? `file:${dbFile.replace(/\\/g, '/')}`;

const prisma = new PrismaClient();

const ADMIN_EMAIL = (process.env.ADMIN_EMAIL ?? 'admin@matrix.local').toLowerCase();
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD ?? 'matrix_admin_change_me';
const ADMIN_NAME = process.env.ADMIN_NAME ?? 'المسؤول';

const OWNER_PERMS = ['*'];
const ADMIN_PERMS = [
  'users:read',
  'roles:read',
  'leads:read',
  'leads:write',
  'customers:read',
  'customers:write',
  'quotes:read',
  'quotes:write',
  'projects:read',
  'projects:write',
  'payments:read',
  'payments:write',
  'settings:read',
  'audit:read',
];

async function main() {
  const tenant = await prisma.tenant.upsert({
    where: { slug: 'matrix-internal' },
    update: { name: 'Matrix Internal', status: 'active' },
    create: { name: 'Matrix Internal', slug: 'matrix-internal', status: 'active' },
  });

  const ownerRole = await prisma.role.upsert({
    where: { slug: 'owner' },
    update: { name: 'Owner', permissions: OWNER_PERMS },
    create: { name: 'Owner', slug: 'owner', permissions: OWNER_PERMS },
  });

  await prisma.role.upsert({
    where: { slug: 'admin' },
    update: { name: 'Admin', permissions: ADMIN_PERMS },
    create: { name: 'Admin', slug: 'admin', permissions: ADMIN_PERMS },
  });

  const passwordHash = await bcrypt.hash(ADMIN_PASSWORD, 12);

  const user = await prisma.user.upsert({
    where: { email: ADMIN_EMAIL },
    update: {
      name: ADMIN_NAME,
      passwordHash,
      status: 'active',
      tenantId: tenant.id,
      deletedAt: null,
    },
    create: {
      email: ADMIN_EMAIL,
      name: ADMIN_NAME,
      passwordHash,
      status: 'active',
      tenantId: tenant.id,
    },
  });

  await prisma.userRole.upsert({
    where: { userId_roleId: { userId: user.id, roleId: ownerRole.id } },
    update: {},
    create: { userId: user.id, roleId: ownerRole.id },
  });

  await prisma.adminUser.upsert({
    where: { email: ADMIN_EMAIL },
    update: { name: ADMIN_NAME, role: 'owner', active: true },
    create: { email: ADMIN_EMAIL, name: ADMIN_NAME, role: 'owner', active: true },
  });

  console.log('Phase A seed OK:', { tenant: tenant.slug, user: user.email });
}

main()
  .catch((e) => {
    console.error('Seed failed:', e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
