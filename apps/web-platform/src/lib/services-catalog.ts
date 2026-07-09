/** كتالوج الخدمات — مرآة لمحتوى الموقع التسويقي */
export const servicesCatalog = [
  {
    id: 'erp',
    title: 'AllInAll ERP',
    desc: 'محاسبة، مخزون، مبيعات، مشتريات، موارد بشرية — SaaS أو نشر مخصص.',
    modules: ['المحاسبة', 'المخزون', 'المبيعات', 'المشتريات', 'HR', 'المديونيات'],
  },
  {
    id: 'custom',
    title: 'أنظمة مخصصة',
    desc: 'حلول برمجية حسب عمليات الشركة — تكامل مع Matrix API.',
    modules: ['تحليل متطلبات', 'تطوير', 'تسليم', 'دعم'],
  },
  {
    id: 'web-mobile',
    title: 'مواقع وتطبيقات',
    desc: 'مواقع تسويقية، بوابات عملاء، تطبيقات موبايل.',
    modules: ['Next.js', 'تطبيقات موبايل', 'بوابات عملاء'],
  },
] as const;

export const erpModulesCatalog = [
  { id: 'accounting', title: 'المحاسبة' },
  { id: 'inventory', title: 'المخزون' },
  { id: 'sales', title: 'المبيعات' },
  { id: 'purchases', title: 'المشتريات' },
  { id: 'hr', title: 'الموارد البشرية' },
  { id: 'debts', title: 'المديونيات' },
  { id: 'crm', title: 'دورة العميل' },
  { id: 'ely', title: 'ELY (قادم)', comingSoon: true },
] as const;

export const roleDefinitions = [
  {
    id: 'owner',
    label: 'Owner',
    labelAr: 'المالك',
    access: 'كل شيء',
  },
  {
    id: 'admin',
    label: 'Admin',
    labelAr: 'مسؤول',
    access: 'مستخدمون · طلبات · عملاء · إعدادات',
  },
  {
    id: 'sales',
    label: 'Sales',
    labelAr: 'مبيعات',
    access: 'Leads · Quotes',
  },
  {
    id: 'project_manager',
    label: 'Project Manager',
    labelAr: 'مدير مشاريع',
    access: 'Projects · Tasks',
  },
  {
    id: 'accountant',
    label: 'Accountant',
    labelAr: 'محاسب',
    access: 'Payments · فواتير (لاحقاً)',
  },
] as const;
