export type ErpModuleKey =
  | 'core'
  | 'inventory'
  | 'sales'
  | 'purchases'
  | 'accounting'
  | 'hr'
  | 'debts'
  | 'workflow';

export type ErpModuleDef = {
  key: ErpModuleKey;
  labelAr: string;
  labelEn: string;
  descriptionAr: string;
  path: string;
  icon: string;
};

export const ERP_MODULES: ErpModuleDef[] = [
  {
    key: 'core',
    labelAr: 'الأساسيات',
    labelEn: 'Core',
    descriptionAr: 'الشركات، الفروع، الأقسام، السنوات المالية',
    path: '/core',
    icon: '◆',
  },
  {
    key: 'inventory',
    labelAr: 'المخزون',
    labelEn: 'Inventory',
    descriptionAr: 'المنتجات، المخازن، الحركات، الجرد',
    path: '/inventory',
    icon: '▣',
  },
  {
    key: 'sales',
    labelAr: 'المبيعات',
    labelEn: 'Sales',
    descriptionAr: 'عروض الأسعار، أوامر البيع، الفواتير',
    path: '/sales',
    icon: '↑',
  },
  {
    key: 'purchases',
    labelAr: 'المشتريات',
    labelEn: 'Purchases',
    descriptionAr: 'أوامر الشراء وفواتير الموردين',
    path: '/purchases',
    icon: '↓',
  },
  {
    key: 'accounting',
    labelAr: 'المحاسبة',
    labelEn: 'Accounting',
    descriptionAr: 'دليل الحسابات والقيود اليومية',
    path: '/accounting',
    icon: '◎',
  },
  {
    key: 'hr',
    labelAr: 'الموارد البشرية',
    labelEn: 'HR',
    descriptionAr: 'الموظفون، الحضور، الإجازات',
    path: '/hr',
    icon: '☺',
  },
  {
    key: 'debts',
    labelAr: 'الديون',
    labelEn: 'Debts',
    descriptionAr: 'الذمم المدينة والدائنة وجداول السداد',
    path: '/debts',
    icon: '₪',
  },
  {
    key: 'workflow',
    labelAr: 'دورة العمل',
    labelEn: 'Workflow',
    descriptionAr: 'مسار العمليات عبر المديولات',
    path: '/workflow',
    icon: '↻',
  },
];

export function getModuleByKey(key: ErpModuleKey): ErpModuleDef | undefined {
  return ERP_MODULES.find((m) => m.key === key);
}
