export const ourWorkEn = {
  lang: 'en',
  dir: 'ltr',

  eyebrow: 'Portfolio / Our Work',
  title: 'Digital work designed to build trust and convert visitors into leads.',
  description:
    'Selected examples across websites, systems, dashboards, ERP, and custom digital solutions that Matrix can deliver for clients.',

  stats: {
    projects: 'Published Projects',
    featured: 'Featured Projects',
    technologies: 'Technologies Used',
  },

  actions: {
    viewDetails: 'View Details',
  },

  projects: [
    {
      slug: 'time-zone-watches',
      title: 'Time Zone Watches',
      category: 'Luxury E-commerce',
      client: 'Time Zone',
      description:
        'A premium luxury-watch store experience with refined product presentation and a direct customer request flow.',
      technologies: ['Next.js', 'React', 'SEO', 'WhatsApp', 'Analytics'],
    },
    {
      slug: 'aia-erp-platform',
      title: 'AIA ERP Platform',
      category: 'ERP System',
      client: 'AllInAll',
      description:
        'An ERP platform for managing companies, leads, customers, inventory, sales, and purchasing.',
      technologies: ['Next.js', 'NestJS', 'Prisma', 'PostgreSQL', 'Docker'],
    },
  ],
} as const;