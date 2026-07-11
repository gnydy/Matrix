import 'dotenv/config';
import bcrypt from 'bcryptjs';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const ADMIN_EMAIL = 'admin@matrix.local';
const ADMIN_PASSWORD = 'Admin@2030';

async function main() {
  const company = await prisma.company.upsert({
    where: { code: 'MATRIX' },
    update: { name: 'Matrix ERP' },
    create: { code: 'MATRIX', name: 'Matrix ERP' },
  });

  const passwordHash = await bcrypt.hash(ADMIN_PASSWORD, 10);

  await prisma.user.upsert({
    where: { email: ADMIN_EMAIL },
    update: { passwordHash, name: 'مدير النظام', role: 'owner', status: 'active', companyId: company.id },
    create: { email: ADMIN_EMAIL, passwordHash, name: 'مدير النظام', role: 'owner', status: 'active', companyId: company.id },
  });

  const accounts = [
    ['1000', 'الصندوق / النقدية', 'asset'],
    ['1010', 'البنك', 'asset'],
    ['1100', 'العملاء / حسابات مدينة', 'asset'],
    ['1200', 'المخزون', 'asset'],
    ['2000', 'الموردون / حسابات دائنة', 'liability'],
    ['3000', 'رأس المال', 'equity'],
    ['4000', 'إيراد المبيعات', 'revenue'],
    ['5000', 'تكلفة البضاعة المباعة', 'expense'],
    ['5100', 'مصروفات تشغيلية', 'expense'],
    ['5200', 'رواتب وأجور', 'expense'],
  ];

  for (const [code, name, type] of accounts) {
    await prisma.erpAccount.upsert({
      where: { companyId_code: { companyId: company.id, code } },
      update: { name, type, isActive: true },
      create: { companyId: company.id, code, name, type, isActive: true },
    });
  }

  const mainWarehouse = await prisma.erpWarehouse.upsert({
    where: { companyId_code: { companyId: company.id, code: 'MAIN' } },
    update: { name: 'المخزن الرئيسي' },
    create: { companyId: company.id, code: 'MAIN', name: 'المخزن الرئيسي' },
  });

  await prisma.erpParty.upsert({
    where: { id: 'cash-customer' },
    update: { companyId: company.id, type: 'customer', name: 'عميل نقدي' },
    create: { id: 'cash-customer', companyId: company.id, type: 'customer', name: 'عميل نقدي' },
  });

  await prisma.erpParty.upsert({
    where: { id: 'default-supplier' },
    update: { companyId: company.id, type: 'supplier', name: 'مورد عام' },
    create: { id: 'default-supplier', companyId: company.id, type: 'supplier', name: 'مورد عام' },
  });

  const products = [
    ['MILK-1L-001', 'لبن 1 لتر', 'قطعة', 32, 38, 30],
    ['RICE-1KG-001', 'أرز 1 كيلو', 'كيس', 28, 35, 40],
    ['SUGAR-1KG-001', 'سكر 1 كيلو', 'كيس', 30, 38, 40],
    ['OIL-1L-001', 'زيت 1 لتر', 'زجاجة', 62, 75, 25],
    ['TEA-250G-001', 'شاي 250 جرام', 'علبة', 70, 85, 20],
    ['SOAP-001', 'صابونة', 'قطعة', 9, 14, 50],
    ['WATER-1.5L-001', 'مياه 1.5 لتر', 'زجاجة', 6, 10, 80],
    ['BISCUIT-001', 'بسكويت', 'قطعة', 4, 7, 100],
  ] as const;

  for (const [sku, name, unit, costPrice, salePrice, quantity] of products) {
    const product = await prisma.erpProduct.upsert({
      where: { companyId_sku: { companyId: company.id, sku } },
      update: { name, unit, costPrice, salePrice, type: 'stock' },
      create: { companyId: company.id, sku, name, unit, costPrice, salePrice, type: 'stock' },
    });

    await prisma.erpStockLevel.upsert({
      where: { productId_warehouseId: { productId: product.id, warehouseId: mainWarehouse.id } },
      update: { quantity },
      create: { companyId: company.id, productId: product.id, warehouseId: mainWarehouse.id, quantity },
    });
  }

  console.log('Database seeded.');
  console.log('Email:', ADMIN_EMAIL);
  console.log('Password:', ADMIN_PASSWORD);
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
