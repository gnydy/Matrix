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

const users = [
  { email: 'admin@matrix.local', name: 'Owner', role: 'owner', password: 'Admin@2030', permissions: ['*'] },
  { email: 'cashier@matrix.local', name: 'Cashier', role: 'cashier', password: 'Cashier@2030', permissions: ['erp:read', 'core:read', 'inventory:read', 'sales:read', 'sales:write', 'debts:read', 'debts:write', 'accounting:read'] },
  { email: 'employee@matrix.local', name: 'Employee', role: 'employee', password: 'Employee@2030', permissions: ['erp:read', 'core:read', 'inventory:read', 'inventory:write'] },
];

async function main() {
  const tenant = await prisma.tenant.upsert({
    where: { slug: 'matrix-internal' },
    update: { name: 'Matrix Internal', status: 'active' },
    create: { name: 'Matrix Internal', slug: 'matrix-internal', status: 'active' },
  });

  for (const account of users) {
    const role = await prisma.role.upsert({
      where: { slug: account.role },
      update: { name: account.role, permissions: account.permissions },
      create: { slug: account.role, name: account.role, permissions: account.permissions },
    });
    const passwordHash = await bcrypt.hash(account.password, 12);
    const user = await prisma.user.upsert({
      where: { email: account.email },
      update: { name: account.name, passwordHash, status: 'active', tenantId: tenant.id, deletedAt: null },
      create: { email: account.email, name: account.name, passwordHash, status: 'active', tenantId: tenant.id },
    });
    await prisma.userRole.upsert({
      where: { userId_roleId: { userId: user.id, roleId: role.id } },
      update: {},
      create: { userId: user.id, roleId: role.id },
    });
    console.log('USER', account.email, account.password);
  }

  const company = await prisma.erpCompany.upsert({
    where: { id: (await prisma.erpCompany.findFirst({ where: { tenantId: tenant.id } }))?.id ?? '__missing__' },
    update: { name: 'Matrix Demo Company', status: 'active', deletedAt: null },
    create: { tenantId: tenant.id, name: 'Matrix Demo Company', legalName: 'Matrix Demo Company', currency: 'EGP', status: 'active' },
  });

  const branch = await prisma.erpBranch.upsert({
    where: { id: (await prisma.erpBranch.findFirst({ where: { companyId: company.id } }))?.id ?? '__missing__' },
    update: { name: 'Main Branch', deletedAt: null },
    create: { companyId: company.id, name: 'Main Branch', code: 'MAIN' },
  });

  await prisma.erpWarehouse.upsert({
    where: { id: (await prisma.erpWarehouse.findFirst({ where: { companyId: company.id, code: 'MAIN' } }))?.id ?? '__missing__' },
    update: { name: 'Main Warehouse', branchId: branch.id, deletedAt: null },
    create: { companyId: company.id, branchId: branch.id, name: 'Main Warehouse', code: 'MAIN' },
  });

  const accounts = [
    ['1000', 'Cash', 'asset'],
    ['1100', 'Accounts Receivable', 'asset'],
    ['1200', 'Inventory', 'asset'],
    ['2000', 'Accounts Payable', 'liability'],
    ['3000', 'Owner Equity', 'equity'],
    ['4000', 'Sales Revenue', 'revenue'],
    ['5000', 'Cost of Goods Sold', 'expense'],
    ['5100', 'Operating Expenses', 'expense'],
  ];
  for (const [code, name, type] of accounts) {
    await prisma.erpAccount.upsert({
      where: { companyId_code: { companyId: company.id, code } },
      update: { name, type, isActive: true, deletedAt: null },
      create: { companyId: company.id, code, name, type },
    });
  }

  console.log('PACK1 SEED DONE');
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
}).finally(() => prisma.$disconnect());
