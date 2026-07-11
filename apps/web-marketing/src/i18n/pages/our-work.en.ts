export const ourWorkEn = {
  meta: {
    title: 'Our Work | Matrix',
    description:
      'Selected Matrix work across websites, systems, ERP, e-commerce, and dashboards.',
  },

  hero: {
    eyebrow: 'Portfolio / Our Work',
    title: 'Digital work designed to build trust and convert visitors into leads.',
    description:
      'Selected examples across websites, systems, dashboards, ERP, and custom digital solutions that Matrix can deliver for clients.',
  },

  stats: {
    projects: 'Published Projects',
    featured: 'Featured Projects',
    technologies: 'Technologies Used',
  },

  actions: {
    viewDetails: 'View Details',
    backToWork: 'Back to Our Work',
    openProject: 'Open Project',
    watchDemo: 'Watch Demo',
    downloadCaseStudy: 'Download Case Study',
  },

  labels: {
    client: 'Client',
    category: 'Category',
    deliveredAt: 'Delivered At',
    services: 'Services',
    technologies: 'Technologies',
    problem: 'Problem',
    solution: 'Solution',
    results: 'Results',
    projectDescription: 'Project Description',
  },

  projects: [
    {
      slug: 'time-zone-watches',
      title: 'Time Zone Watches',
      client: 'Time Zone',
      category: 'Luxury Watch Store',
      shortDescription:
        'A premium luxury-watch store experience with refined product presentation and a direct customer request flow.',
      fullDescription:
        'A premium watch-store concept designed to highlight products with strong visuals, reduce friction, and move visitors from browsing to requesting.',
      problem:
        'The brand had strong product visuals but lacked a structured website experience that communicated trust and luxury.',
      solution:
        'Build a polished interface, project and product pages, product details, direct WhatsApp ordering, and a structure ready for marketing analytics.',
      results: [
        'More professional product presentation.',
        'Clearer path from visitor to request.',
        'Interface suitable for Meta and Google campaigns.',
      ],
      technologies: ['Next.js', 'React', 'SEO', 'WhatsApp', 'Analytics'],
      services: ['Website Design', 'E-commerce UI', 'Brand Presentation'],
      deliveredAt: '2026-07-01',
    },
    {
      slug: 'aia-erp-platform',
      title: 'AIA ERP Platform',
      client: 'AllInAll',
      category: 'ERP System',
      shortDescription:
        'An ERP platform for managing companies, leads, customers, inventory, sales, and purchasing.',
      fullDescription:
        'A multi-company ERP platform starting with lead and customer handling, then expanding into financial and operational management.',
      problem:
        'Small and mid-sized companies need structured systems instead of scattered files and WhatsApp-only operations.',
      solution:
        'Build a scalable platform for leads, customers, permissions, reports, and future integrations.',
      results: [
        'Unified customer and lead data.',
        'Commercially scalable architecture.',
        'Ready for website and marketing integration.',
      ],
      technologies: ['Next.js', 'NestJS', 'Prisma', 'PostgreSQL', 'Docker'],
      services: ['ERP', 'Dashboard', 'Backend', 'Business Systems'],
      deliveredAt: '2026-07-01',
    },
  ],
} as const;