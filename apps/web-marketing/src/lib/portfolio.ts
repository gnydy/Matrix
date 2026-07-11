export type PortfolioProject = {
  id: string;
  slug: string;

  title: string;
  titleEn: string;

  clientName: string;
  clientNameEn?: string;

  category: string;
  categoryEn: string;

  shortDescription: string;
  shortDescriptionEn: string;

  fullDescription: string;
  fullDescriptionEn: string;

  problem: string;
  problemEn: string;

  solution: string;
  solutionEn: string;

  results: string[];
  resultsEn: string[];

  coverImage?: string;
  logoImage?: string;
  liveUrl?: string;
  demoUrl?: string;
  caseStudyUrl?: string;

  technologies: string[];
  services: string[];
  servicesEn: string[];

  featured: boolean;
  published: boolean;
  visible: boolean;
  deliveredAt: string;
};

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 'portfolio-time-zone-watches',
    slug: 'time-zone-watches',

    title: 'Time Zone Watches',
    titleEn: 'Time Zone Watches',

    clientName: 'Time Zone',
    clientNameEn: 'Time Zone',

    category: 'متجر فاخر',
    categoryEn: 'Luxury E-commerce',

    shortDescription:
      'تجربة متجر ساعات فاخرة بواجهة راقية، عرض منتجات احترافي، وربط مباشر بطلبات العملاء.',
    shortDescriptionEn:
      'A luxury watch store experience with refined presentation, focused product storytelling, and direct customer request flow.',

    fullDescription:
      'مشروع متجر ساعات فاخر يركز على إبراز المنتجات بصورة عالية الجودة، تقليل التشتيت، وتسهيل انتقال العميل من مشاهدة المنتج إلى التواصل والطلب.',
    fullDescriptionEn:
      'A premium watch-store concept designed to highlight products with strong visuals, reduce friction, and move visitors from browsing to requesting.',

    problem:
      'البراند يمتلك صور منتجات جيدة، لكن لا توجد تجربة موقع منظمة تعرض الثقة والفخامة وتحوّل الزائر إلى عميل محتمل.',
    problemEn:
      'The brand had strong product visuals but lacked a structured website experience that communicated trust and luxury.',

    solution:
      'بناء واجهة داكنة وفاتحة، صفحة أعمال ومنتجات، تفاصيل منتج، زر طلب عبر واتساب، وتجهيز البنية للتسويق والتحليلات.',
    solutionEn:
      'Design a polished light/dark interface, product-focused pages, direct WhatsApp ordering, and a structure ready for marketing analytics.',

    results: [
      'تجربة عرض أكثر احترافية للمنتجات.',
      'مسار أوضح لتحويل الزائر إلى طلب.',
      'واجهة مناسبة لإعلانات Meta وحملات Google.',
    ],
    resultsEn: [
      'More professional product presentation.',
      'Clearer path from visitor to request.',
      'Interface suitable for Meta and Google campaigns.',
    ],

    coverImage: '',
    logoImage: '',
    liveUrl: '',
    demoUrl: '',
    caseStudyUrl: '',

    technologies: ['Next.js', 'React', 'SEO', 'WhatsApp Integration', 'Analytics'],
    services: ['تصميم موقع', 'واجهة متجر', 'عرض براند'],
    servicesEn: ['Website Design', 'E-commerce UI', 'Brand Presentation'],

    featured: true,
    published: true,
    visible: true,
    deliveredAt: '2026-07-01',
  },
  {
    id: 'portfolio-aia-erp',
    slug: 'aia-erp-platform',

    title: 'AIA ERP Platform',
    titleEn: 'AIA ERP Platform',

    clientName: 'AllInAll',
    clientNameEn: 'AllInAll',

    category: 'نظام ERP',
    categoryEn: 'ERP System',

    shortDescription:
      'نظام ERP لإدارة الشركات، الطلبات، العملاء، المخزون، المبيعات، والمشتريات.',
    shortDescriptionEn:
      'An ERP platform for managing companies, leads, customers, inventory, sales, and purchasing.',

    fullDescription:
      'منصة ERP متعددة الشركات والفروع، تبدأ من استقبال الطلبات والعملاء ثم تتوسع إلى إدارة مالية وتشغيلية كاملة.',
    fullDescriptionEn:
      'A multi-company ERP platform starting with lead and customer handling, then expanding into financial and operational management.',

    problem:
      'الشركات الصغيرة والمتوسطة تحتاج نظامًا ينظم البيانات والطلبات والعملاء بدل الاعتماد على ملفات متفرقة وواتساب فقط.',
    problemEn:
      'Small and mid-sized companies need structured systems instead of scattered files and WhatsApp-only operations.',

    solution:
      'بناء منصة منظمة قابلة للتوسع، تدعم إدارة الطلبات والعملاء والصلاحيات والتقارير والتكاملات المستقبلية.',
    solutionEn:
      'Build a scalable platform for leads, customers, permissions, reports, and future integrations.',

    results: [
      'توحيد بيانات العملاء والطلبات.',
      'تأسيس بنية قابلة للتوسع التجاري.',
      'تجهيز النظام للتكامل مع الموقع والتسويق.',
    ],
    resultsEn: [
      'Unified customer and lead data.',
      'Commercially scalable architecture.',
      'Ready for website and marketing integration.',
    ],

    coverImage: '',
    logoImage: '',
    liveUrl: '',
    demoUrl: '',
    caseStudyUrl: '',

    technologies: ['Next.js', 'NestJS', 'Prisma', 'PostgreSQL', 'Redis', 'Docker'],
    services: ['ERP', 'لوحة تحكم', 'Backend', 'أنظمة أعمال'],
    servicesEn: ['ERP', 'Dashboard', 'Backend', 'Business Systems'],

    featured: true,
    published: true,
    visible: true,
    deliveredAt: '2026-07-01',
  },
];

export function getVisiblePortfolioProjects() {
  return portfolioProjects
    .filter((project) => project.published && project.visible)
    .sort((a, b) => Number(b.featured) - Number(a.featured));
}

export function getPortfolioProjectBySlug(slug: string) {
  return getVisiblePortfolioProjects().find((project) => project.slug === slug);
}

export function getProjectInitials(name: string) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join('');
}