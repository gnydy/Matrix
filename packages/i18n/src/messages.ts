export type Locale = 'ar' | 'en';

const ar = {
  nav: {
    services: 'الخدمات',
    erp: 'ERP',
    packages: 'الباقات',
    about: 'من نحن',
    contact: 'تواصل',
    requestQuote: 'اطلب عرضًا',
    requestSystem: 'اطلب نظامك',
    openMenu: 'فتح القائمة',
    mainNav: 'القائمة الرئيسية',
    mobileNav: 'قائمة الجوال',
  },
  hero: {
    badge: 'منصة ERP عربية متكاملة',
    title1: 'كل أعمال شركتك',
    title2: 'في نظام واحد',
    subtitle:
      'محاسبة، مخزون، مبيعات، مشتريات، موارد بشرية، ودورة عميل كاملة — عربي أولًا، متعدد الفروع، جاهز للسحابة أو النشر المخصص.',
    ctaPrimary: 'اطلب نظامك',
    ctaSecondary: 'استكشف ERP',
    highlights: [
      'محاسبة ومالية',
      'مخزون ومستودعات',
      'مبيعات ومشتريات',
      'موارد بشرية',
      'تقارير لحظية',
      'SaaS أو On-premise',
    ],
  },
  footer: {
    tagline:
      'منصة AllInAll ERP — إدارة أعمال متكاملة للشركات العربية. SaaS · On-premise · فروع متعددة.',
    product: 'المنتج',
    company: 'الشركة',
    legal: 'قانوني',
    follow: 'تابعنا',
    rights: 'جميع الحقوق محفوظة',
  },
  lang: {
    switchToEn: 'English',
    switchToAr: 'العربية',
  },
} as const;

const en = {
  nav: {
    services: 'Services',
    erp: 'ERP',
    packages: 'Plans',
    about: 'About',
    contact: 'Contact',
    requestQuote: 'Get a quote',
    requestSystem: 'Request your system',
    openMenu: 'Open menu',
    mainNav: 'Main navigation',
    mobileNav: 'Mobile menu',
  },
  hero: {
    badge: 'Integrated Arabic ERP platform',
    title1: 'Your entire business',
    title2: 'in one system',
    subtitle:
      'Accounting, inventory, sales, purchasing, HR, and full customer lifecycle — Arabic-first, multi-branch, cloud or dedicated deployment.',
    ctaPrimary: 'Request your system',
    ctaSecondary: 'Explore ERP',
    highlights: [
      'Finance & accounting',
      'Inventory & warehouses',
      'Sales & purchasing',
      'Human resources',
      'Real-time reports',
      'SaaS or on-premise',
    ],
  },
  footer: {
    tagline:
      'AllInAll ERP — integrated business management for Arabic-speaking companies. SaaS · On-premise · Multi-branch.',
    product: 'Product',
    company: 'Company',
    legal: 'Legal',
    follow: 'Follow us',
    rights: 'All rights reserved',
  },
  lang: {
    switchToEn: 'English',
    switchToAr: 'العربية',
  },
} as const;

export const messages = { ar, en } as const;

export type Messages = (typeof messages)[Locale];

export function getMessages(locale: Locale): Messages {
  return messages[locale];
}
