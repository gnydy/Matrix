export const ourWorkAr = {
  lang: 'ar',
  dir: 'rtl',

  eyebrow: 'Portfolio / أعمالنا',
  title: 'أعمال رقمية مصممة لتعرض الثقة وتحوّل الزائر إلى عميل.',
  description:
    'نماذج من المواقع، الأنظمة، لوحات التحكم، ERP، والحلول الرقمية المخصصة التي يمكن تنفيذها لعملاء Matrix.',

  stats: {
    projects: 'مشروع منشور',
    featured: 'مشروع مميز',
    technologies: 'تقنية مستخدمة',
  },

  actions: {
    viewDetails: 'عرض التفاصيل',
  },

  projects: [
    {
      slug: 'time-zone-watches',
      title: 'Time Zone Watches',
      category: 'متجر فاخر',
      client: 'Time Zone',
      description:
        'تجربة متجر ساعات فاخرة بواجهة راقية، عرض منتجات احترافي، وربط مباشر بطلبات العملاء.',
      technologies: ['Next.js', 'React', 'SEO', 'WhatsApp', 'Analytics'],
    },
    {
      slug: 'aia-erp-platform',
      title: 'AIA ERP Platform',
      category: 'نظام ERP',
      client: 'AllInAll',
      description:
        'منصة ERP لإدارة الشركات والطلبات والعملاء والمخزون والمبيعات والمشتريات.',
      technologies: ['Next.js', 'NestJS', 'Prisma', 'PostgreSQL', 'Docker'],
    },
  ],
} as const;