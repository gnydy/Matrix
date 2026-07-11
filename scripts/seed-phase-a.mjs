/**
 * Seed Phase A — Tenant, Roles, and ERP demo users
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

const DEFAULT_PASSWORD = process.env.ADMIN_PASSWORD ?? 'Matrix@2030';

const roles = [
  {
    slug: 'owner',
    name: 'Owner',
    permissions: ['*'],
  },
  {
    slug: 'admin',
    name: 'Admin',
    permissions: [
      'erp:*',
      'users:read',
      'users:write',
      'roles:read',
      'roles:write',
      'audit:read',
      'settings:read',
      'settings:write',
      'core:read',
      'core:write',
      'inventory:read',
      'inventory:write',
      'sales:read',
      'sales:write',
      'purchases:read',
      'purchases:write',
      'accounting:read',
      'accounting:write',
      'hr:read',
      'hr:write',
      'debts:read',
      'debts:write',
      'workflow:read',
      'workflow:write',
    ],
  },
  {
    slug: 'cashier',
    name: 'Cashier',
    permissions: [
      'erp:read',
      'core:read',
      'inventory:read',
      'sales:read',
      'sales:write',
      'debts:read',
      'debts:write',
    ],
  },
  {
    slug: 'employee',
    name: 'Employee',
    permissions: [
      'erp:read',
      'core:read',
      'inventory:read',
      'sales:read',
      'purchases:read',
      'hr:read',
      'workflow:read',
    ],
  },
];

const users = [
  {
    email: (process.env.ADMIN_EMAIL ?? 'admin@matrix.local').toLowerCase(),
    name: process.env.ADMIN_NAME ?? 'الأدمن',
    roleSlug: 'owner',
    password: DEFAULT_PASSWORD,
    adminRole: 'owner',
  },
  {
    email: 'cashier@matrix.local',
    name: 'الكاشير',
    roleSlug: 'cashier',
    password: DEFAULT_PASSWORD,
    adminRole: 'cashier',
  },
  {
    email: 'employee@matrix.local',
    name: 'الموظف',
    roleSlug: 'employee',
    password: DEFAULT_PASSWORD,
    adminRole: 'employee',
  },
];

async function main() {
  const tenant = await prisma.tenant.upsert({
    where: { slug: 'matrix-internal' },
    update: { name: 'Matrix Internal', status: 'active' },
    create: { name: 'Matrix Internal', slug: 'matrix-internal', status: 'active' },
  });

  const roleBySlug = new Map();

  for (const role of roles) {
    const saved = await prisma.role.upsert({
      where: { slug: role.slug },
      update: { name: role.name, permissions: role.permissions },
      create: { name: role.name, slug: role.slug, permissions: role.permissions },
    });
    roleBySlug.set(role.slug, saved);
  }

  for (const account of users) {
    const role = roleBySlug.get(account.roleSlug);
    if (!role) throw new Error(`Missing role: ${account.roleSlug}`);

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

    await prisma.adminUser.upsert({
      where: { email: account.email },
      update: { name: account.name, role: account.adminRole, active: true },
      create: { email: account.email, name: account.name, role: account.adminRole, active: true },
    });

    console.log('Seed user OK:', account.email, 'role:', account.roleSlug);
  }

  console.log('Phase A seed OK:', { tenant: tenant.slug, users: users.length });
}

main()
  .catch((e) => {
    console.error('Seed failed:', e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
