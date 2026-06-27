export const en = {
  site: {
    name: 'Matrix',
    tagline: 'AllInAll ERP',
    url: 'http://127.0.0.1:8080',
    phone: '01090833952',
    email: 'hello@matrixall',
    whatsapp: '201090833952',
    address: 'Cairo, Egypt',
  },
  erpModules: [
    {
      id: 'accounting',
      title: 'Accounting',
      desc: 'Chart of accounts, journal entries, balance sheet, profit & loss, and tiered financial permissions.',
      features: [
        'Flexible chart of accounts',
        'Automated entries from invoices',
        'Instant financial reports',
        'Year-end closing',
      ],
    },
    {
      id: 'inventory',
      title: 'Inventory',
      desc: 'Products, multiple warehouses, stock movements, reorder alerts, and sales integration.',
      features: [
        'Warehouses and branches',
        'Batch tracking',
        'Periodic stock counts',
        'Stock alerts',
      ],
    },
    {
      id: 'sales',
      title: 'Sales',
      desc: 'Quotes, sales orders, invoices, collections, and full customer lifecycle tracking to close.',
      features: [
        'Quotes and orders',
        'Tax invoices',
        'Partial collection',
        'Sales rep commissions',
      ],
    },
    {
      id: 'purchases',
      title: 'Purchasing',
      desc: 'Suppliers, purchase requests, orders, vendor invoices, and payables.',
      features: [
        'Purchase approvals',
        'Quote comparison',
        'Supplier payables',
        'Inventory integration',
      ],
    },
    {
      id: 'hr',
      title: 'Human Resources',
      desc: 'Employee records, attendance, leave, and organizational structure.',
      features: [
        'Attendance tracking',
        'Leave and approvals',
        'Job structure',
        'HR permissions',
      ],
    },
    {
      id: 'debts',
      title: 'Receivables & Payables',
      desc: 'Accounts receivable and payable, aging reports, and collection/payment follow-up.',
      features: ['Aging reports', 'Collection reminders', 'Account statements', 'Settlements'],
    },
    {
      id: 'crm',
      title: 'Customer Lifecycle',
      desc: 'Leads, opportunities, projects, payments — from first contact to delivery.',
      features: [
        'Sales pipeline',
        'Projects and delivery',
        'Quotes',
        'Payment tracking',
      ],
    },
    {
      id: 'ely',
      title: 'ELY',
      desc: 'An AI assistant that understands your company data — answers, reports, and approvals within defined permissions.',
      features: [
        'Semantic search',
        'RAG on your documents',
        'Secure tools',
        'Conversation history',
      ],
    },
  ],
  services: [
    {
      href: '/services/erp',
      title: 'AllInAll ERP',
      desc: 'Integrated business management — accounting, inventory, sales, purchasing, and HR.',
      badge: null,
    },
    {
      href: '/services/custom',
      title: 'Custom Systems',
      desc: 'Software solutions tailored to your operations — SaaS or dedicated deployment.',
      badge: null,
    },
    {
      href: '/services/web-mobile',
      title: 'Websites & Apps',
      desc: 'Marketing sites, customer portals, and mobile apps connected to the Matrix API.',
      badge: null,
    },
  ],
  industries: [
    { title: 'Retail', desc: 'Multiple branches, real-time inventory, and point of sale.' },
    { title: 'Manufacturing', desc: 'Raw materials, production orders, and product costing.' },
    { title: 'Services', desc: 'Projects, contracts, and hourly or milestone billing.' },
    { title: 'Distribution', desc: 'Sales reps, territories, and regional warehouses.' },
    { title: 'Construction', desc: 'Projects, estimates, and progress billing.' },
    { title: 'Clinics', desc: 'Appointments, records, and service billing.' },
  ],
  plans: [
    {
      id: 'essential',
      name: 'Essential',
      desc: 'Practical start — one branch and a small team',
      features: [
        'Two modules of your choice',
        'Limited users',
        'Basic reports',
        'Email support',
      ],
      isCustom: false,
      ctaHref: '/request?type=pricing&plan=essential',
      ctaLabel: 'Request a quote',
    },
    {
      id: 'starter',
      name: 'Starter',
      desc: 'One company — one branch — daily operations',
      features: [
        'Sales and inventory',
        'Operational reports',
        'Basic permissions',
        'Regular updates',
      ],
      isCustom: false,
      ctaHref: '/request?type=pricing&plan=starter',
      ctaLabel: 'Request a quote',
    },
    {
      id: 'growth',
      name: 'Growth',
      desc: 'Fast expansion — medium team and more modules',
      features: [
        'Up to 5 modules',
        'Additional branches',
        'Mid-tier reports',
        'Notifications and alerts',
        'Priority support',
      ],
      isCustom: false,
      ctaHref: '/request?type=pricing&plan=growth',
      ctaLabel: 'Request a quote',
    },
    {
      id: 'business',
      name: 'Business',
      desc: 'Full operations — multiple branches',
      features: [
        'Core ERP modules',
        'Advanced reports',
        'ELY assistant',
        'n8n automation',
        'Advanced permissions',
      ],
      isCustom: false,
      ctaHref: '/request?type=pricing&plan=business',
      ctaLabel: 'Request a quote',
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      desc: 'Dedicated deployment — on-premise — high security requirements',
      features: [
        'Isolated tenant',
        'Custom SLA',
        'API integrations',
        'On-site training',
        'Account manager',
      ],
      isCustom: false,
      ctaHref: '/request?type=pricing&plan=enterprise',
      ctaLabel: 'Request a quote',
    },
    {
      id: 'custom',
      name: 'Custom',
      desc: 'Design your plan — choose modules, deployment, and users',
      features: [
        'Manual module selection',
        'Flexible users and branches',
        'SaaS or on-premise',
        'Integrations and add-ons on request',
        'Quote after team review',
      ],
      isCustom: true,
      ctaHref: '/calculator',
      ctaLabel: 'Build your plan',
    },
  ],
  planComparison: [
    {
      feature: 'Module selection',
      essential: '2',
      starter: '2',
      growth: '5',
      business: 'Full',
      enterprise: 'Full',
      custom: 'Your choice',
    },
    {
      feature: 'Sales & inventory',
      essential: true,
      starter: true,
      growth: true,
      business: true,
      enterprise: true,
      custom: true,
    },
    {
      feature: 'Full accounting',
      essential: false,
      starter: false,
      growth: true,
      business: true,
      enterprise: true,
      custom: true,
    },
    {
      feature: 'Purchasing & HR',
      essential: false,
      starter: false,
      growth: true,
      business: true,
      enterprise: true,
      custom: true,
    },
    {
      feature: 'Multiple branches',
      essential: false,
      starter: false,
      growth: true,
      business: true,
      enterprise: true,
      custom: true,
    },
    {
      feature: 'ELY assistant',
      essential: false,
      starter: false,
      growth: false,
      business: true,
      enterprise: true,
      custom: true,
    },
    {
      feature: 'n8n automation',
      essential: false,
      starter: false,
      growth: false,
      business: true,
      enterprise: true,
      custom: true,
    },
    {
      feature: 'Isolated tenant',
      essential: false,
      starter: false,
      growth: false,
      business: false,
      enterprise: true,
      custom: true,
    },
    {
      feature: 'On-premise',
      essential: false,
      starter: false,
      growth: false,
      business: false,
      enterprise: true,
      custom: true,
    },
  ],
  requestTypes: [
    { value: 'erp', label: 'ERP system request' },
    { value: 'custom', label: 'Custom system' },
    { value: 'web_mobile', label: 'Website or app' },
    { value: 'demo', label: 'Demo request' },
    { value: 'pricing', label: 'Plan inquiry' },
    { value: 'support', label: 'Technical support' },
    { value: 'partnership', label: 'Partnership or agency' },
  ],
  faqItems: [
    {
      q: 'What is the difference between Matrix and AllInAll ERP?',
      a: 'Matrix is the full platform — website, admin panel, ERP, AI, and automation. AllInAll ERP is the business management system within the platform.',
    },
    {
      q: 'Does the system support multiple branches?',
      a: 'Yes. It supports multiple companies, branches, and warehouses with permissions at the branch and user level.',
    },
    {
      q: 'Are prices fixed on the website?',
      a: 'We do not publish final public prices. Every quote is built based on user count, modules, and deployment method.',
    },
    {
      q: 'What deployment options are available?',
      a: 'Cloud SaaS, dedicated deployment on your server, or on-premise within your network.',
    },
    {
      q: 'Is there a mobile app?',
      a: 'The ERP interface is fully responsive on mobile and tablet. Native apps can be added per contract.',
    },
    {
      q: 'How does ELY work?',
      a: 'An AI assistant that reads your approved company documents and answers within defined permissions — it cannot access data outside its scope.',
    },
    {
      q: 'How long does implementation take?',
      a: 'Depends on project scope. A basic ERP starts in weeks; larger projects are split into clear phases.',
    },
    {
      q: 'Can you integrate with existing systems?',
      a: 'Yes via REST API and webhooks. Integrations are defined during the technical proposal phase.',
    },
  ],
  workflowSteps: [
    { step: '01', title: 'Your request', desc: 'Fill the form and receive a tracking number instantly.' },
    { step: '02', title: 'Review', desc: 'Our sales team contacts you to understand your needs precisely.' },
    { step: '03', title: 'Custom quote', desc: 'A clear quote — modules, deployment, and timeline.' },
    { step: '04', title: 'Implementation', desc: 'Tenant setup, data, training, and handover.' },
    { step: '05', title: 'Subscription', desc: 'Ongoing support, updates, and growth as you scale.' },
  ],
  platformHighlights: ['Arabic RTL', 'SaaS · On-premise', 'Branches & warehouses', 'REST API'],
  pages: {
    home: {
      modules: {
        title: 'ERP Modules',
        subtitle:
          'Choose what you need. Each module is independent with its own permissions, reports, and audit trail.',
        linkLabel: 'Full details →',
      },
      howItWorks: {
        title: 'From request to go-live',
        subtitle: 'A clear path — no complexity at the start.',
        cta: 'Get started',
      },
      industries: {
        title: 'Industries we serve',
        subtitle: 'Ready configurations for different business models.',
        notListed: 'Your industry not listed?',
        contactLink: 'Contact us',
      },
      pricing: {
        title: 'Plans',
        subtitle:
          'Five ready-made plans or a custom plan — final pricing after reviewing your needs.',
        linkLabel: 'All plans and comparison →',
      },
      cta: {
        title: 'Ready for the next step?',
        subtitle:
          'Submit your request today. The Matrix team will review your needs and prepare a custom quote.',
        primary: 'Request your system',
        secondary: 'Contact now',
      },
    },
    about: {
      meta: {
        title: 'About',
        description: 'Matrix — an Arabic ERP platform for business management from request to operations.',
      },
      hero: {
        title: 'About',
        subtitle:
          'We build the Matrix platform to empower Arabic companies to manage their business in one system — clear, secure, and scalable.',
      },
      intro: [
        'Matrix is not just an ERP. It is an integrated platform that includes a marketing site, internal admin panel, client ERP system, AI layer (ELY), and automation via n8n — all built on a unified API with data isolation per client.',
        'Our vision: small and medium businesses in the Arabic region should have the same power as global systems — in their language and under their regulations — without implementation complexity or massive project costs.',
      ],
      values: {
        title: 'Our values',
        items: [
          {
            title: 'Arabic-first',
            desc: 'RTL interfaces, local terminology, and Arabic reports from the ground up.',
          },
          {
            title: 'Single source of truth',
            desc: 'Unified data across sales, inventory, and accounting — no separate spreadsheets.',
          },
          {
            title: 'Security and permissions',
            desc: 'RBAC at module and branch level. Audit log for every sensitive operation.',
          },
          {
            title: 'Deployment flexibility',
            desc: 'Cloud SaaS, dedicated deployment, or on-premise based on your requirements.',
          },
        ],
      },
      workflow: {
        title: 'How we work with you',
        cta: 'Start your project',
      },
    },
    services: {
      meta: {
        title: 'Services',
        description: 'ERP, custom systems, and websites & apps — integrated Matrix solutions.',
      },
      hero: {
        title: 'Services',
        subtitle: 'Three main paths — choose what fits your company stage.',
      },
      detailsLink: 'Details →',
      unsure: {
        title: 'Not sure which path?',
        subtitle: 'Use the needs calculator or send a request — we will guide you to the best fit.',
        calculator: 'Calculate your needs',
        consult: 'Request a consultation',
      },
    },
    erp: {
      meta: {
        title: 'AllInAll ERP',
        description:
          'Integrated Arabic ERP — accounting, inventory, sales, purchasing, and human resources.',
      },
      hero: {
        badge: 'AllInAll ERP',
        title: 'Business Management System',
        subtitle:
          'Independent modules working as one system — from first quote to account closing.',
      },
      modulesTitle: 'Modules',
      capabilitiesTitle: 'Platform capabilities',
      capabilities: [
        'Multiple companies and branches',
        'Warehouses and stock movements',
        'Tiered RBAC permissions',
        'Full audit trail',
        'Financial and operational reports',
        'REST API and webhooks',
        'Responsive interface on all devices',
        'Integration with ELY and n8n',
      ],
      industriesTitle: 'Industries',
      cta: {
        title: 'Ready to see ERP in action?',
        subtitle:
          'Request a demo or send your requirements — we will prepare an implementation plan and suitable modules.',
        primary: 'Request a demo',
        secondary: 'Plans',
      },
    },
    custom: {
      meta: {
        title: 'Custom Systems',
        description: 'Software solutions tailored to your operations — SaaS or dedicated deployment.',
      },
      hero: {
        title: 'Custom Systems',
        subtitle: 'When a ready template is not enough — we build around your processes, not the other way around.',
      },
      intro:
        'Some companies need standard ERP. Others need a custom layer on top of Matrix or a fully independent system. We always start by understanding the process, then choose the best architecture.',
      phases: {
        title: 'Project phases',
        items: [
          {
            title: 'Process analysis',
            desc: 'We map your current workflow and identify gaps before any code.',
          },
          {
            title: 'System design',
            desc: 'Data structure, screens, permissions, and reports based on your actual needs.',
          },
          {
            title: 'Build and integrate',
            desc: 'Development on the Matrix platform or a standalone system connected via API.',
          },
          {
            title: 'Deploy and operate',
            desc: 'SaaS, dedicated VPS, or on-premise with a support plan.',
          },
        ],
      },
      useCases: {
        title: 'Use cases',
        items: [
          'Specialized project management systems',
          'Customer and vendor portals',
          'Approval and workflow systems',
          'Integration with devices or legacy systems',
          'Executive dashboards',
          'Industry-specific systems (healthcare, education, logistics)',
        ],
      },
      cta: 'Describe your project',
    },
    webMobile: {
      meta: {
        title: 'Websites & Apps',
        description: 'Marketing sites, customer portals, and mobile apps connected to Matrix.',
      },
      hero: {
        title: 'Websites & Apps',
        subtitle:
          'Professional frontends connected to the Matrix platform — not isolated from your data.',
      },
      deliverables: [
        {
          title: 'Marketing websites',
          desc: 'Professional pages, SEO, request forms, and direct connection to the Matrix panel.',
          items: ['Responsive design', 'Full RTL', 'Lead forms', 'Netlify/VPS hosting'],
        },
        {
          title: 'Customer portals',
          desc: 'A secure space for your customers to track orders, invoices, and projects.',
          items: ['Login', 'Customer permissions', 'Notifications', 'ERP integration'],
        },
        {
          title: 'Mobile apps',
          desc: 'iOS and Android connected to Matrix API — for field reps or management.',
          items: ['PWA or Native', 'Limited offline mode', 'Push notifications', 'Barcode scanning'],
        },
      ],
      stackTitle: 'Technologies',
      stack: [
        'Next.js · React',
        'REST API · OpenAPI',
        'RTL · i18n',
        'Netlify · Docker',
        'PWA · Responsive',
      ],
      showcase: {
        title: 'Your site, right here',
        subtitle:
          'This site (web-marketing) is the first showcase — the same quality we deliver to our clients.',
        cta: 'Request your site',
      },
    },
    packages: {
      meta: {
        title: 'Plans',
        description: 'Matrix ERP plans — from essential to custom based on your needs.',
      },
      hero: {
        title: 'Plans',
        subtitle:
          'Five ready-to-run plans — or a custom plan you build yourself from modules and deployment.',
      },
      comparison: {
        title: 'Quick comparison',
        featureColumn: 'Feature',
        yes: '✓',
        no: '—',
      },
      customPlan: {
        title: 'Custom plan',
        subtitle:
          'Ready plans not a fit? Use the needs calculator to choose modules, then submit your request — we will prepare a quote tailored to your company.',
        calculator: 'Build your plan',
        request: 'Request a custom quote',
      },
      help: {
        prompt: 'Need help choosing?',
        calculator: 'Calculate your needs',
        contact: 'Talk to us',
      },
    },
    calculator: {
      meta: {
        title: 'Calculate your needs',
        description: 'A preliminary tool to estimate the right Matrix plan for your company.',
      },
      hero: {
        title: 'Calculate your needs',
        subtitle: 'Set your company size and modules — we suggest the right plan and deployment.',
      },
      companySize: {
        title: 'Company size',
        sizes: [
          { id: 'small', label: '1–10 employees' },
          { id: 'medium', label: '11–50 employees' },
          { id: 'large', label: '51–200 employees' },
          { id: 'enterprise', label: '200+ employees' },
        ],
      },
      modulesTitle: 'Modules',
      summary: {
        title: 'Recommendation summary',
        suggestedPlan: 'Suggested plan',
        approxUsers: 'Approx. users',
        branches: 'Branches',
        modules: 'Modules',
        deployment: 'Deployment',
        deployCustom: 'Your choice',
        deploySaas: 'Cloud SaaS',
        disclaimer:
          'Preliminary guidance only — the final quote is determined after review by our sales team.',
        ctaCustom: 'Submit your custom plan',
        ctaQuote: 'Get a custom quote',
      },
    },
    request: {
      meta: {
        title: 'Request your system',
        description: 'Submit your request for a custom quote for Matrix ERP.',
      },
      hero: {
        title: 'Request your system',
        subtitle: 'Fill out the form and our sales team will contact you.',
      },
    },
    requestSuccess: {
      meta: {
        title: 'Request received',
      },
      title: 'Request received',
      referenceLabel: 'Tracking number:',
      message: 'The Matrix team will contact you by phone or email as soon as possible.',
      home: 'Back to home',
      whatsapp: 'WhatsApp',
      urgent: 'Urgent inquiry?',
      contact: 'Contact us',
    },
    contact: {
      meta: {
        title: 'Contact',
        description: 'Contact the Matrix team — email, phone, and WhatsApp.',
      },
      hero: {
        title: 'Contact',
        subtitle: 'Questions, support, or partnership — we respond within one business day.',
      },
    },
    faq: {
      meta: {
        title: 'FAQ',
        description: 'Answers about Matrix ERP, plans, deployment, and integrations.',
      },
      hero: {
        title: 'Frequently asked questions',
        subtitle: 'Straight answers about the platform, implementation, and pricing.',
      },
      notFound: 'Did not find your answer?',
      contact: 'Contact us',
    },
    terms: {
      meta: {
        title: 'Terms & Conditions',
        description: 'Terms of use for the Matrix website and services.',
      },
      hero: {
        title: 'Terms & Conditions',
      },
      lastUpdated: 'Last updated: June 2026',
      sections: [
        {
          title: '1. Acceptance',
          body: 'By using the Matrix website or submitting a request, you agree to these terms. If you do not agree, please do not use the site.',
        },
        {
          title: '2. Services',
          body: 'Matrix provides an ERP platform, custom systems, and websites and apps. The scope of each project is defined in the signed quote and contract.',
        },
        {
          title: '3. Quotes and pricing',
          body: 'Prices shown on the website are estimates or not public. The binding quote is the one in the official proposal after needs review.',
        },
        {
          title: '4. Acceptable use',
          bullets: [
            'Do not misuse the site or attempt to breach systems.',
            'Provide accurate information in forms.',
            'Respect Matrix intellectual property rights.',
          ],
        },
        {
          title: '5. Intellectual property',
          body: 'Site and platform content is owned by Matrix. ERP usage license is granted under the subscription or implementation contract.',
        },
        {
          title: '6. Limitation of liability',
          body: 'The site is provided "as is" for informational purposes. Full operational liability is defined in the service contract and SLA if applicable.',
        },
        {
          title: '7. Termination',
          body: 'Either party may terminate the agreement per contract terms. Client data is delivered or deleted per agreement.',
        },
        {
          title: '8. Governing law',
          body: 'These terms are governed by the laws of the Arab Republic of Egypt unless otherwise agreed.',
        },
        {
          title: '9. Contact',
          body: null,
        },
      ],
    },
    privacy: {
      meta: {
        title: 'Privacy Policy',
        description: 'How Matrix collects, uses, and protects your data.',
      },
      hero: {
        title: 'Privacy Policy',
      },
      lastUpdated: 'Last updated: June 2026',
      sections: [
        {
          title: '1. Introduction',
          body: 'Matrix ("we") respects your privacy. This policy explains how we collect, use, and protect information when you visit our site, submit a request, or use our services.',
        },
        {
          title: '2. Data we collect',
          bullets: [
            'Contact data: name, email, phone, company name.',
            'Request data: service type, modules, project details.',
            'Technical data: IP address, browser type, pages visited (analytics).',
            'Operational data: after contract — business data inside ERP with full isolation.',
          ],
        },
        {
          title: '3. How we use data',
          bullets: [
            'Respond to your requests and prepare quotes.',
            'Operate and maintain contracted systems.',
            'Improve the site and services.',
            'Comply with legal obligations.',
          ],
        },
        {
          title: '4. Data sharing',
          body: 'We do not sell your data. We may share it with hosting or email providers under confidentiality agreements, or when legally required.',
        },
        {
          title: '5. Security',
          body: 'We apply tenant isolation, transport encryption (HTTPS), RBAC permissions, and audit logs for sensitive operations.',
        },
        {
          title: '6. Your rights',
          body: 'You may request access, correction, or deletion of your personal data via',
        },
        {
          title: '7. Cookies',
          body: 'We use essential cookies to improve the experience. You can disable them in your browser settings.',
        },
        {
          title: '8. Contact',
          body: 'For any inquiry:',
        },
      ],
    },
  },
} as const;
