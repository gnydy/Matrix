export type ErpNavItem = {
  href: string;
  label: string;
  labelEn: string;
  key: string;
  group: string;
  description: string;
};

export const erpNav: ErpNavItem[] = [
  {
    href: '/cashier',
    label: 'الكاشير',
    labelEn: 'POS Cashier',
    key: 'cashier',
    group: 'العمليات اليومية',
    description: 'بيع سريع بدون كتابة اسم العميل، خصم مخزون، وإجمالي نقدي مباشر.',
  },
  {
    href: '/sales',
    label: 'المبيعات وخدمة العملاء',
    labelEn: 'Sales & CRM',
    key: 'sales',
    group: 'المبيعات',
    description: 'عروض أسعار، أوامر بيع، فواتير، عملاء، متابعة ما بعد البيع.',
  },
  {
    href: '/purchases',
    label: 'المشتريات والموردين',
    labelEn: 'Procurement',
    key: 'purchases',
    group: 'التوريد',
    description: 'طلبات شراء، أوامر توريد، فواتير موردين، وتقييم الموردين.',
  },
  {
    href: '/inventory',
    label: 'سلسلة الإمداد والمخزون',
    labelEn: 'Supply Chain',
    key: 'inventory',
    group: 'التوريد',
    description: 'مخازن، أرصدة، حركات، جرد، تتبع البضائع ومراقبة الجودة.',
  },
  {
    href: '/accounting',
    label: 'الحسابات والمالية',
    labelEn: 'Financial Accounting',
    key: 'accounting',
    group: 'المالية',
    description: 'دفتر أستاذ، أصول ثابتة، حسابات مدينة ودائنة، وقيود مالية.',
  },
  {
    href: '/debts',
    label: 'المديونيات والتحصيل',
    labelEn: 'Receivables & Payables',
    key: 'debts',
    group: 'المالية',
    description: 'متابعة مديونيات العملاء والموردين وجدولة التحصيل والسداد.',
  },
  {
    href: '/hr',
    label: 'الموارد البشرية والرواتب',
    labelEn: 'HR & Payroll',
    key: 'hr',
    group: 'الإدارة',
    description: 'موظفون، حضور وانصراف، كشوف رواتب، وتقييم أداء.',
  },
  {
    href: '/manufacturing',
    label: 'التصنيع والإنتاج',
    labelEn: 'Manufacturing',
    key: 'manufacturing',
    group: 'الإنتاج',
    description: 'خطوط إنتاج، أوامر تشغيل، مراحل تصنيع، وتكاليف الإنتاج.',
  },
  {
    href: '/projects',
    label: 'إدارة المشاريع',
    labelEn: 'Projects',
    key: 'projects',
    group: 'الإدارة',
    description: 'مهام، موارد، جداول زمنية، تكاليف ومتابعة تقدم التنفيذ.',
  },
  {
    href: '/reports',
    label: 'التقارير والتحليلات',
    labelEn: 'Reports',
    key: 'reports',
    group: 'التحليل',
    description: 'لوحات مؤشرات للإدارة ومراجعة الأداء المالي والتشغيلي.',
  },
];

export const navGroups = Array.from(new Set(erpNav.map((item) => item.group))).map((group) => ({
  group,
  items: erpNav.filter((item) => item.group === group),
}));

export function findModule(key: string) {
  return erpNav.find((item) => item.key === key);
}
