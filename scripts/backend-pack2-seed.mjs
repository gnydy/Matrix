import path from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dbPkg = path.join(root, 'packages', 'database');
const require = createRequire(path.join(dbPkg, 'package.json'));

process.env.DATABASE_URL = process.env.DATABASE_URL ?? 'file:E:/Matrix/data/matrix.db';

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const company = await prisma.erpCompany.findFirst({ where: { status: 'active', deletedAt: null }, orderBy: { createdAt: 'asc' } });
  if (!company) throw new Error('No ERP company. Run backend-pack1-seed first.');
  let branch = await prisma.erpBranch.findFirst({ where: { companyId: company.id, deletedAt: null }, orderBy: { createdAt: 'asc' } });
  if (!branch) {
    branch = await prisma.erpBranch.create({ data: { companyId: company.id, name: 'Main Branch', code: 'MAIN' } });
  }
  const departments = ['Sales', 'Inventory', 'Accounting', 'HR'];
  for (const name of departments) {
    const existing = await prisma.erpDepartment.findFirst({ where: { branchId: branch.id, name } });
    if (!existing) await prisma.erpDepartment.create({ data: { branchId: branch.id, name } });
  }
  console.log('PACK2 SEED DONE');
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
}).finally(() => prisma.$disconnect());
