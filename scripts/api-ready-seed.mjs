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

const accounts = [
  { code: '1000', name: 'الصندوق / البنك', type: 'asset' },
  { code: '1100', name: 'العملاء', type: 'asset' },
  { code: '1200', name: 'المخزون', type: 'asset' },
  { code: '2000', name: 'الموردون', type: 'liability' },
  { code: '3000', name: 'رأس المال', type: 'equity' },
  { code: '4000', name: 'المبيعات', type: 'revenue' },
  { code: '5000', name: 'تكلفة المبيعات', type: 'expense' },
];

const users = [
  { email: 'admin@matrix.local', name: 'Owner', password: 'Admin@2030', roleSlug: 'owner', permissions: ['*'] },
  { email: 'cashier@matrix.local', name: 'Cashier', password: 'Cashier@2030', roleSlug: 'cashier', permissions: ['erp:read', 'sales:read', 'sales:write', 'debts:read', 'debts:write', 'accounting:read'] },
  { email: 'employee@matrix.local', name: 'Employee', password: 'Employee@2030', roleSlug: 'employee', permissions: ['erp:read', 'inventory:read', 'inventory:write'] },
];

const workflowSteps = [
  { module: 'workflow', stepKey: 'request', label: 'طلب / احتياج', sortOrder: 1 },
  { module: 'workflow', stepKey: 'purchase', label: 'شراء', sortOrder: 2 },
  { module: 'workflow', stepKey: 'receive', label: 'استلام مخزون', sortOrder: 3 },
  { module: 'workflow', stepKey: 'sale', label: 'بيع', sortOrder: 4 },
  { module: 'workflow', stepKey: 'collect', label: 'تحصيل', sortOrder: 5 },
  { module: 'workflow', stepKey: 'journal', label: 'قيد محاسبي', sortOrder: 6 },
];

async function main() {
  const tenant = await prisma.tenant.upsert({
    where: { slug: 'matrix-internal' },
    update: { name: 'Matrix Internal', status: 'active' },
    create: { name: 'Matrix Internal', slug: 'matrix-internal', status: 'active' },
  });

  for (const u of users) {
    const role = await prisma.role.upsert({
      where: { slug: u.roleSlug },
      update: { name: u.roleSlug, permissions: u.permissions },
      create: { slug: u.roleSlug, name: u.roleSlug, permissions: u.permissions },
    });
    const passwordHash = await bcrypt.hash(u.password, 12);
    const user = await prisma.user.upsert({
      where: { email: u.email },
      update: { name: u.name, passwordHash, status: 'active', tenantId: tenant.id, deletedAt: null },
      create: { email: u.email, name: u.name, passwordHash, status: 'active', tenantId: tenant.id },
    });
    await prisma.userRole.upsert({
      where: { userId_roleId: { userId: user.id, roleId: role.id } },
      update: {},
      create: { userId: user.id, roleId: role.id },
    });
  }

  await prisma.adminUser.upsert({
    where: { email: 'admin@matrix.local' },
    update: { name: 'Owner', role: 'owner', active: true },
    create: { email: 'admin@matrix.local', name: 'Owner', role: 'owner', active: true },
  }).catch(() => undefined);

  let company = await prisma.erpCompany.findFirst({ where: { tenantId: tenant.id, deletedAt: null } });
  if (!company) {
    company = await prisma.erpCompany.create({ data: { tenantId: tenant.id, name: 'Matrix Demo Company', legalName: 'Matrix Demo Company', taxId: 'EG-DEMO-001', currency: 'EGP' } });
  } else {
    company = await prisma.erpCompany.update({ where: { id: company.id }, data: { currency: 'EGP', status: 'active' } });
  }

  let branch = await prisma.erpBranch.findFirst({ where: { companyId: company.id, deletedAt: null } });
  if (!branch) branch = await prisma.erpBranch.create({ data: { companyId: company.id, name: 'الفرع الرئيسي', code: 'HQ', address: 'مصر' } });

  const dept = await prisma.erpDepartment.findFirst({ where: { branchId: branch.id, name: 'التشغيل' } })
    ?? await prisma.erpDepartment.create({ data: { branchId: branch.id, name: 'التشغيل' } });

  const year = new Date().getFullYear();
  const existingFy = await prisma.erpFiscalYear.findFirst({ where: { companyId: company.id, name: String(year) } });
  if (!existingFy) await prisma.erpFiscalYear.create({ data: { companyId: company.id, name: String(year), startsOn: new Date(year, 0, 1), endsOn: new Date(year, 11, 31) } });

  let warehouse = await prisma.erpWarehouse.findFirst({ where: { companyId: company.id, deletedAt: null } });
  if (!warehouse) warehouse = await prisma.erpWarehouse.create({ data: { companyId: company.id, branchId: branch.id, name: 'المخزن الرئيسي', code: 'MAIN' } });

  for (const a of accounts) {
    await prisma.erpAccount.upsert({
      where: { companyId_code: { companyId: company.id, code: a.code } },
      update: { name: a.name, type: a.type },
      create: { companyId: company.id, ...a },
    });
  }

  const products = [
    { sku: 'P-001', name: 'منتج تجريبي 1', unit: 'pcs', type: 'stock', costPrice: 50, salePrice: 100, minStock: 5, qty: 50 },
    { sku: 'P-002', name: 'منتج تجريبي 2', unit: 'pcs', type: 'stock', costPrice: 80, salePrice: 150, minStock: 3, qty: 30 },
    { sku: 'S-001', name: 'خدمة تركيب', unit: 'service', type: 'service', costPrice: 0, salePrice: 250, minStock: 0, qty: 0 },
  ];
  for (const p of products) {
    const product = await prisma.erpProduct.upsert({
      where: { companyId_sku: { companyId: company.id, sku: p.sku } },
      update: { name: p.name, unit: p.unit, type: p.type, costPrice: p.costPrice, salePrice: p.salePrice, minStock: p.minStock },
      create: { companyId: company.id, sku: p.sku, name: p.name, unit: p.unit, type: p.type, costPrice: p.costPrice, salePrice: p.salePrice, minStock: p.minStock },
    });
    if (p.type === 'stock') {
      await prisma.erpStockLevel.upsert({
        where: { productId_warehouseId: { productId: product.id, warehouseId: warehouse.id } },
        update: { quantity: p.qty },
        create: { productId: product.id, warehouseId: warehouse.id, quantity: p.qty },
      });
    }
  }

  await prisma.erpParty.create({ data: { companyId: company.id, type: 'customer', name: `عميل تجريبي ${Date.now()}`, phone: '01000000000' } });
  await prisma.erpParty.create({ data: { companyId: company.id, type: 'supplier', name: `مورد تجريبي ${Date.now()}`, phone: '01100000000' } });

  await prisma.erpEmployee.upsert({
    where: { companyId_employeeNo: { companyId: company.id, employeeNo: 'EMP-001' } },
    update: { name: 'موظف تجريبي', departmentId: dept.id },
    create: { companyId: company.id, departmentId: dept.id, employeeNo: 'EMP-001', name: 'موظف تجريبي', jobTitle: 'تشغيل', hireDate: new Date() },
  });

  for (const s of workflowSteps) {
    await prisma.erpWorkflowStep.upsert({ where: { module_stepKey: { module: s.module, stepKey: s.stepKey } }, update: { label: s.label, sortOrder: s.sortOrder, isActive: true }, create: s });
  }

  console.log('API READY SEED OK');
  console.log('Login: admin@matrix.local / Admin@2030');
  console.log('Company:', company.id, company.name);
  console.log('Warehouse:', warehouse.id, warehouse.name);
}

main().catch((e) => { console.error(e); process.exit(1); }).finally(() => prisma.$disconnect());
