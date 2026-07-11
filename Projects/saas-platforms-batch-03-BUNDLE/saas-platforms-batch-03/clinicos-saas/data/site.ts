export const site = {
      name: "ClinicOS SaaS",
      slug: "clinicos-saas",
      tagline: "Clinic administration with calmer patient flow",
      description: "Patient scheduling, visit queue, billing mock, and clinic performance dashboards.",
      industry: "Healthcare SaaS",
      audience: "Clinics, doctors, small medical centers",
      useCase: "Patient scheduling, visit queue, billing mock, and clinic performance dashboards.",
      layout: "Appointment timeline hero with patient queue",
      visualTone: "medical operations dashboard",
      complexity: "Advanced",
      price: "$129-$399",
      accent: "from-teal-300 via-emerald-400 to-lime-400",
      surface: "bg-slate-950",
      features: [
  "Appointment calendar",
  "Patient queue mock",
  "Doctor schedule board",
  "Billing summary",
  "Medical notes UI",
  "Clinic analytics"
],
      metrics: [
  {
    "value": "31%",
    "label": "fewer missed appointments"
  },
  {
    "value": "210",
    "label": "patient records mock"
  },
  {
    "value": "9",
    "label": "clinic modules"
  },
  {
    "value": "24/7",
    "label": "front desk view"
  }
],
      plans: [
  "Clinic Start",
  "Practice Pro",
  "Medical Network"
],
      workflow: [
  "Book appointment",
  "Check patient in",
  "Route to doctor",
  "Close visit summary"
],
      integrations: [
  "Google Calendar",
  "SMS Gateway",
  "Payment API",
  "Odoo",
  "WhatsApp",
  "FHIR Mock"
],
      screens: [
  "Appointment board",
  "Patient queue",
  "Doctor workspace",
  "Revenue report"
],
      nav: [
        {label:'Product', href:'/#product'},
        {label:'Pricing', href:'/pricing'},
        {label:'Dashboard', href:'/dashboard'},
        {label:'Integrations', href:'/integrations'},
        {label:'Security', href:'/security'},
        {label:'Docs', href:'/docs'}
      ]
    } as const;

    export const dashboardRows = [
      { name: 'North Region', status: 'Healthy', owner: 'Operations', score: 94, trend: '+12%' },
      { name: 'Enterprise Clients', status: 'Review', owner: 'Success', score: 81, trend: '+4%' },
      { name: 'Automation Queue', status: 'Action Needed', owner: 'Product', score: 73, trend: '-3%' },
      { name: 'Executive Report', status: 'Ready', owner: 'Finance', score: 98, trend: '+18%' }
    ];

    export const activity = [
      'New workspace created for executive demo',
      'AI recommendation generated for quarterly report',
      'Security policy updated for admin roles',
      'Integration sync completed with no failed jobs'
    ];
