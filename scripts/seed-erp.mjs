/**
 * Seed ERP — شركة، فروع، مخزون، أسئلة، دورة عمل
 */
import path from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dbPkg = path.join(root, 'packages', 'database');
const require = createRequire(path.join(dbPkg, 'package.json'));
const { PrismaClient } = require('@prisma/client');

const dbFile = path.join(root, 'data', 'matrix.db');
process.env.DATABASE_URL = process.env.DATABASE_URL ?? `file:${dbFile.replace(/\\/g, '/')}`;

const prisma = new PrismaClient();

const FAQ = [
  { module: 'core', question: 'ما هو الإعداد الأساسي للنظام؟', answer: 'أنشئ الشركة والفرع والسنة المالية قبل أي عملية تشغيلية.' },
  { module: 'core', question: 'كيف أضيف فرعاً جديداً؟', answer: 'من مديول الأساسيات → الفروع، أدخل الاسم والرمز ثم احفظ.' },
  { module: 'inventory', question: 'ما الفرق بين حركة المخزون والجرد؟', answer: 'الحركة تسجّل دخول/خروج فعلي. الجرد يقارن الكمية الفعلية بالنظام ويُرحّل الفروقات.' },
  { module: 'inventory', question: 'كيف أبدأ جرداً؟', answer: 'أنشئ جرداً بحالة مسودة، ابدأ العد، أدخل الكميات المعدودة، ثم رحّل الجرد لتحديث المخزون.' },
  { module: 'inventory', question: 'متى يُنشأ تنبيه نقص مخزون؟', answer: 'عندما تقل كمية الصنف عن الحد الأدنى المعرّف في بطاقة المنتج.' },
  { module: 'sales', question: 'ما مسار فاتورة المبيعات؟', answer: 'عرض سعر → أمر بيع → فاتورة → تحصيل (مديونية).' },
  { module: 'sales', question: 'هل يمكن تأكيد فاتورة بدون عميل؟', answer: 'لا، يجب ربط المستند بعميل (طرف) مسجّل.' },
  { module: 'purchases', question: 'كيف أسجّل فاتورة مورد؟', answer: 'من المشتريات أنشئ مستنداً من نوع فاتورة، أضف الأصناف، ثم أكّد وارحّل.' },
  { module: 'purchases', question: 'هل تُحدَّث الكميات تلقائياً؟', answer: 'عند ترحيل فاتورة شراء مرتبطة بأصناف مخزنية تُسجَّل حركة دخول للمخزن.' },
  { module: 'accounting', question: 'ما هي القيد المزدوج؟', answer: 'كل قيد يجب أن يتساوى فيه مجموع المدين والدائن قبل الترحيل.' },
  { module: 'accounting', question: 'متى يُرحَّل القيد؟', answer: 'بعد المراجعة، غيّر الحالة إلى مرحّل؛ لا يمكن تعديل قيد مرحّل.' },
  { module: 'hr', question: 'كيف أسجّل حضور موظف؟', answer: 'من الموارد البشرية → الحضور، اختر الموظف والتاريخ وأدخل وقت الدخول والخروج.' },
  { module: 'hr', question: 'كيف أطلب إجازة؟', answer: 'أنشئ طلب إجازة بالتواريخ والسبب؛ يبقى معلقاً حتى الموافقة.' },
  { module: 'debts', question: 'ما الفرق بين الذمم المدينة والدائنة؟', answer: 'المدينة لعملائك (مستحق لك). الدائنة لمورديك (مستحق عليك).' },
  { module: 'debts', question: 'كيف أتابع الأقساط؟', answer: 'كل ذمة قد تحتوي جدول دفعات بتواريخ واستحقاقات منفصلة.' },
  { module: 'workflow', question: 'ما هي دورة العمل؟', answer: 'مسار موحّد يربط المديولات: طلب → شراء → استلام → جرد → بيع → تحصيل → قيد.' },
  { module: 'workflow', question: 'كيف أتابع حالة العملية؟', answer: 'من دورة العمل تظهر الخطوة الحالية لكل كيان (مبيعات، مشتريات، جرد...).' },
];

const WORKFLOW_STEPS = [
  { module: 'workflow', stepKey: 'request', label: 'طلب / احتياج', sortOrder: 1 },
  { module: 'workflow', stepKey: 'purchase', label: 'شراء', sortOrder: 2 },
  { module: 'workflow', stepKey: 'receive', label: 'استلام مخزون', sortOrder: 3 },
  { module: 'workflow', stepKey: 'audit', label: 'جرد', sortOrder: 4 },
  { module: 'workflow', stepKey: 'sale', label: 'بيع', sortOrder: 5 },
  { module: 'workflow', stepKey: 'collect', label: 'تحصيل', sortOrder: 6 },
  { module: 'workflow', stepKey: 'journal', label: 'قيد محاسبي', sortOrder: 7 },
];

async function main() {
  const tenant = await prisma.tenant.findUnique({ where: { slug: 'matrix-internal' } });
  if (!tenant) {
    console.log('تخطي seed ERP — لا يوجد tenant (شغّل seed-phase-a أولاً)');
    return;
  }

  let company = await prisma.erpCompany.findFirst({
    where: { tenantId: tenant.id, deletedAt: null },
  });

  if (!company) {
    company = await prisma.erpCompany.create({
      data: {
        tenantId: tenant.id,
        name: 'شركة Matrix التجريبية',
        legalName: 'Matrix Demo Co.',
        taxId: '300000000000003',
        currency: 'SAR',
      },
    });
  }

  let branch = await prisma.erpBranch.findFirst({ where: { companyId: company.id, deletedAt: null } });
  if (!branch) {
    branch = await prisma.erpBranch.create({
      data: { companyId: company.id, name: 'الفرع الرئيسي', code: 'HQ', address: 'الرياض' },
    });
  }

  let dept = await prisma.erpDepartment.findFirst({ where: { branchId: branch.id } });
  if (!dept) {
    dept = await prisma.erpDepartment.create({
      data: { branchId: branch.id, name: 'العمليات' },
    });
  }

  const fyStart = new Date(new Date().getFullYear(), 0, 1);
  const fyEnd = new Date(new Date().getFullYear(), 11, 31);
  const fy = await prisma.erpFiscalYear.findFirst({ where: { companyId: company.id } });
  if (!fy) {
    await prisma.erpFiscalYear.create({
      data: {
        companyId: company.id,
        name: String(new Date().getFullYear()),
        startsOn: fyStart,
        endsOn: fyEnd,
      },
    });
  }

  let warehouse = await prisma.erpWarehouse.findFirst({ where: { companyId: company.id, deletedAt: null } });
  if (!warehouse) {
    warehouse = await prisma.erpWarehouse.create({
      data: { companyId: company.id, branchId: branch.id, name: 'المخزن الرئيسي', code: 'WH-01' },
    });
  }

  const products = [
    { sku: 'SKU-001', name: 'منتج تجريبي أ', unit: 'pcs', costPrice: 50, salePrice: 80, minStock: 5 },
    { sku: 'SKU-002', name: 'منتج تجريبي ب', unit: 'pcs', costPrice: 120, salePrice: 180, minStock: 3 },
    { sku: 'SRV-001', name: 'خدمة تركيب', unit: 'hr', type: 'service', costPrice: 0, salePrice: 150, minStock: 0 },
  ];

  for (const p of products) {
    const product = await prisma.erpProduct.upsert({
      where: { companyId_sku: { companyId: company.id, sku: p.sku } },
      update: { name: p.name, salePrice: p.salePrice, costPrice: p.costPrice },
      create: {
        companyId: company.id,
        sku: p.sku,
        name: p.name,
        unit: p.unit,
        type: p.type ?? 'stock',
        costPrice: p.costPrice,
        salePrice: p.salePrice,
        minStock: p.minStock,
      },
    });

    if (p.type !== 'service') {
      await prisma.erpStockLevel.upsert({
        where: { productId_warehouseId: { productId: product.id, warehouseId: warehouse.id } },
        update: {},
        create: { productId: product.id, warehouseId: warehouse.id, quantity: 20 },
      });
    }
  }

  const party = await prisma.erpParty.findFirst({
    where: { companyId: company.id, name: 'عميل تجريبي' },
  });
  if (!party) {
    await prisma.erpParty.create({
      data: { companyId: company.id, type: 'customer', name: 'عميل تجريبي', phone: '0500000000' },
    });
  }

  const accounts = [
    { code: '1000', name: 'الصندوق', type: 'asset' },
    { code: '1100', name: 'العملاء', type: 'asset' },
    { code: '2000', name: 'الموردون', type: 'liability' },
    { code: '4000', name: 'المبيعات', type: 'revenue' },
    { code: '5000', name: 'تكلفة المبيعات', type: 'expense' },
  ];
  for (const a of accounts) {
    await prisma.erpAccount.upsert({
      where: { companyId_code: { companyId: company.id, code: a.code } },
      update: { name: a.name },
      create: { companyId: company.id, code: a.code, name: a.name, type: a.type },
    });
  }

  await prisma.erpEmployee.upsert({
    where: { companyId_employeeNo: { companyId: company.id, employeeNo: 'EMP-001' } },
    update: { name: 'أحمد محمد' },
    create: {
      companyId: company.id,
      departmentId: dept?.id,
      employeeNo: 'EMP-001',
      name: 'أحمد محمد',
      email: 'ahmed@demo.local',
      jobTitle: 'محاسب',
      hireDate: new Date(),
    },
  });

  const faqCount = await prisma.erpModuleFaq.count();
  if (faqCount === 0) {
    await prisma.erpModuleFaq.createMany({
      data: FAQ.map((f, i) => ({ ...f, sortOrder: i, locale: 'ar' })),
    });
  }

  const stepCount = await prisma.erpWorkflowStep.count();
  if (stepCount === 0) {
    await prisma.erpWorkflowStep.createMany({ data: WORKFLOW_STEPS });
  }

  console.log('تم seed ERP — الشركة:', company.name);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
