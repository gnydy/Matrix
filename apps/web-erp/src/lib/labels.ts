export const ERP_NAME = 'AllInAll ERP';
export const ERP_TAGLINE = 'إدارة الشركات والفروع والعمليات';

export const erpNavItems = [
  { href: '/', label: 'لوحة ERP', icon: '📊' },
  { href: '/inventory', label: 'المخزون', icon: '📦' },
  { href: '/sales', label: 'المبيعات', icon: '🛒' },
  { href: '/purchases', label: 'المشتريات', icon: '🏭' },
  { href: '/accounting', label: 'المحاسبة', icon: '📒' },
  { href: '/hr', label: 'الموارد البشرية', icon: '👥' },
  { href: '/debts', label: 'المديونيات', icon: '💳' },
  { href: '/subscriptions', label: 'الاشتراكات', icon: '🔁' },
] as const;

export const modulePhaseLabels: Record<string, string> = {
  inventory: 'المرحلة D1',
  sales: 'المرحلة D2',
  purchases: 'المرحلة D3',
  accounting: 'المرحلة D4',
  hr: 'المرحلة D5',
  debts: 'المرحلة D6',
  subscriptions: 'المرحلة D7',
};
