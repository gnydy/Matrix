export const leadStatusLabels: Record<string, string> = {
  new: 'جديد',
  contacted: 'تم التواصل',
  needs_review: 'يحتاج مراجعة',
  qualified: 'مؤهل',
  proposal_sent: 'عرض مُرسل',
  won: 'فاز',
  lost: 'خسر',
  archived: 'مؤرشف',
};

export const leadSourceLabels: Record<string, string> = {
  request: 'طلب نظام',
  contact: 'تواصل',
  calculator: 'حاسبة',
  whatsapp: 'واتساب',
};

export const customerStatusLabels: Record<string, string> = {
  onboarding: 'تأهيل',
  active: 'نشط',
  suspended: 'موقوف',
  churned: 'منتهٍ',
};

export const customerDeploymentLabels: Record<string, string> = {
  saas: 'SaaS سحابي',
  dedicated: 'خادم مخصص',
  on_premise: 'على بيئة العميل',
};

export const navItems = [
  { href: '/', label: 'نظرة عامة' },
  { href: '/visitors', label: 'الزوار' },
  { href: '/leads', label: 'الطلبات' },
  { href: '/customers', label: 'العملاء' },
  { href: '/quotes', label: 'عروض الأسعار' },
  { href: '/projects', label: 'المشاريع' },
  { href: '/payments', label: 'المدفوعات' },
  { href: '/abandoned', label: 'لم يكملوا الطلب' },
  { href: '/events', label: 'الأحداث' },
  { href: '/catalog', label: 'كتالوج الخدمات' },
  { href: '/users', label: 'المستخدمون' },
  { href: '/roles', label: 'الأدوار' },
  { href: '/login-audit', label: 'سجل الدخول' },
  { href: '/logs', label: 'سجل النظام' },
  { href: '/settings', label: 'الإعدادات' },
] as const;

export const quoteStatusLabels: Record<string, string> = {
  draft: 'مسودة',
  sent: 'مُرسل',
  accepted: 'مقبول',
  rejected: 'مرفوض',
  expired: 'منتهي',
};

export const paymentStatusLabels: Record<string, string> = {
  pending: 'معلق',
  recorded: 'مسجّل',
  overdue: 'متأخر',
  cancelled: 'ملغى',
};

export const paymentMethodLabels: Record<string, string> = {
  bank_transfer: 'تحويل بنكي',
  cash: 'نقدي',
  check: 'شيك',
};

export const projectStatusLabels: Record<string, string> = {
  planning: 'تخطيط',
  in_progress: 'قيد التنفيذ',
  on_hold: 'متوقف',
  completed: 'مكتمل',
  cancelled: 'ملغى',
};

export const adminRoleLabels: Record<string, string> = {
  owner: 'المالك',
  admin: 'مسؤول',
  sales: 'مبيعات',
  project_manager: 'مدير مشاريع',
  accountant: 'محاسب',
};

export function formatDate(d: Date | string) {
  return new Intl.DateTimeFormat('ar-EG', {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(new Date(d));
}
