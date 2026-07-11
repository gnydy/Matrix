export const ourWorkAr = {
  meta: {
    title: 'أعمالنا | Matrix',
    description:
      'نماذج من أعمال Matrix في المواقع، الأنظمة، ERP، المتاجر الإلكترونية، ولوحات التحكم.',
  },

  hero: {
    eyebrow: 'Portfolio / أعمالنا',
    title: 'أعمال رقمية مصممة لتعرض الثقة وتحوّل الزائر إلى عميل.',
    description:
      'نماذج من المواقع، الأنظمة، لوحات التحكم، ERP، والحلول الرقمية المخصصة التي يمكن تنفيذها لعملاء Matrix.',
  },

  stats: {
    projects: 'مشروع منشور',
    featured: 'مشروع مميز',
    technologies: 'تقنية مستخدمة',
  },

  actions: {
    viewDetails: 'عرض التفاصيل',
    backToWork: 'العودة إلى أعمالنا',
    openProject: 'فتح المشروع',
    watchDemo: 'مشاهدة Demo',
    downloadCaseStudy: 'تحميل Case Study',
  },

  labels: {
    client: 'العميل',
    category: 'التصنيف',
    deliveredAt: 'تاريخ التنفيذ',
    services: 'الخدمات',
    technologies: 'التقنيات',
    problem: 'المشكلة',
    solution: 'الحل',
    results: 'النتائج',
    projectDescription: 'وصف المشروع',
  },

  projects: [
    {
      slug: 'time-zone-watches',
      title: 'Time Zone Watches',
      client: 'Time Zone',
      category: 'متجر ساعات فاخر',
      shortDescription:
        'تجربة متجر ساعات فاخرة بواجهة راقية، عرض منتجات احترافي، وربط مباشر بطلبات العملاء.',
      fullDescription:
        'مشروع متجر ساعات فاخر يركز على إبراز المنتجات بصورة عالية الجودة، تقليل التشتيت، وتسهيل انتقال العميل من مشاهدة المنتج إلى التواصل والطلب.',
      problem:
        'البراند يمتلك صور منتجات جيدة، لكن لا توجد تجربة موقع منظمة تعرض الثقة والفخامة وتحوّل الزائر إلى عميل محتمل.',
      solution:
        'بناء واجهة احترافية، صفحة أعمال ومنتجات، تفاصيل منتج، زر طلب عبر واتساب، وتجهيز البنية للتسويق والتحليلات.',
      results: [
        'تجربة عرض أكثر احترافية للمنتجات.',
        'مسار أوضح لتحويل الزائر إلى طلب.',
        'واجهة مناسبة لإعلانات Meta وحملات Google.',
      ],
      technologies: ['Next.js', 'React', 'SEO', 'WhatsApp', 'Analytics'],
      services: ['تصميم موقع', 'واجهة متجر', 'عرض براند'],
      deliveredAt: '2026-07-01',
    },
    {
      slug: 'aia-erp-platform',
      title: 'AIA ERP Platform',
      client: 'AllInAll',
      category: 'نظام ERP',
      shortDescription:
        'منصة ERP لإدارة الشركات والطلبات والعملاء والمخزون والمبيعات والمشتريات.',
      fullDescription:
        'منصة ERP متعددة الشركات والفروع، تبدأ من استقبال الطلبات والعملاء ثم تتوسع إلى إدارة مالية وتشغيلية كاملة.',
      problem:
        'الشركات الصغيرة والمتوسطة تحتاج نظامًا ينظم البيانات والطلبات والعملاء بدل الاعتماد على ملفات متفرقة وواتساب فقط.',
      solution:
        'بناء منصة منظمة قابلة للتوسع، تدعم إدارة الطلبات والعملاء والصلاحيات والتقارير والتكاملات المستقبلية.',
      results: [
        'توحيد بيانات العملاء والطلبات.',
        'تأسيس بنية قابلة للتوسع التجاري.',
        'تجهيز النظام للتكامل مع الموقع والتسويق.',
      ],
      technologies: ['Next.js', 'NestJS', 'Prisma', 'PostgreSQL', 'Docker'],
      services: ['ERP', 'لوحة تحكم', 'Backend', 'أنظمة أعمال'],
      deliveredAt: '2026-07-01',
    },
  ],
} as const;