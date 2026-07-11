export const site = {
      name: "PulseCRM Cloud",
      slug: "pulsecrm-cloud",
      tagline: "Pipeline visibility for serious sales teams",
      description: "Sales pipeline management with leads, deals, follow-ups, and account health scoring.",
      industry: "CRM / Sales",
      audience: "B2B sales teams, agencies, service companies",
      useCase: "Sales pipeline management with leads, deals, follow-ups, and account health scoring.",
      layout: "Pipeline-first hero with kanban preview",
      visualTone: "high-energy revenue command center",
      complexity: "Advanced",
      price: "$79-$219",
      accent: "from-violet-400 via-fuchsia-400 to-rose-500",
      surface: "bg-neutral-950",
      features: [
  "Visual sales pipeline",
  "Lead scoring model",
  "Follow-up reminders",
  "Account health cards",
  "Sales team leaderboard",
  "Deal forecast dashboard"
],
      metrics: [
  {
    "value": "27%",
    "label": "more qualified leads"
  },
  {
    "value": "8.2m",
    "label": "pipeline value mock"
  },
  {
    "value": "14",
    "label": "sales workflows"
  },
  {
    "value": "91%",
    "label": "follow-up compliance"
  }
],
      plans: [
  "Lead Desk",
  "Pipeline Pro",
  "Revenue HQ"
],
      workflow: [
  "Import lead sources",
  "Qualify opportunities",
  "Automate next steps",
  "Forecast monthly revenue"
],
      integrations: [
  "HubSpot",
  "Salesforce",
  "Gmail",
  "Calendly",
  "WhatsApp",
  "Zapier"
],
      screens: [
  "Kanban pipeline",
  "Lead profile",
  "Forecast analytics",
  "Follow-up center"
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
