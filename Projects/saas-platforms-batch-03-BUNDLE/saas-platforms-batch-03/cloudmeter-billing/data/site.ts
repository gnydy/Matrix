export const site = {
      name: "CloudMeter Billing",
      slug: "cloudmeter-billing",
      tagline: "Usage-based billing for cloud and API products",
      description: "Usage metering, invoices, plan limits, API keys, and customer usage dashboards.",
      industry: "Cloud / Hosting Billing",
      audience: "Hosting providers, API startups, cloud teams",
      useCase: "Usage metering, invoices, plan limits, API keys, and customer usage dashboards.",
      layout: "Metering console hero with usage graph",
      visualTone: "developer-grade billing console",
      complexity: "Advanced",
      price: "$149-$549",
      accent: "from-blue-300 via-sky-400 to-cyan-500",
      surface: "bg-slate-950",
      features: [
  "Usage metering",
  "API key dashboard",
  "Billing rules",
  "Plan limits",
  "Customer usage portal",
  "Invoice preview"
],
      metrics: [
  {
    "value": "99.99%",
    "label": "metering design target"
  },
  {
    "value": "48m",
    "label": "API calls mock"
  },
  {
    "value": "12",
    "label": "billing rules"
  },
  {
    "value": "6",
    "label": "plan models"
  }
],
      plans: [
  "Meter Start",
  "Cloud Billing",
  "Provider Enterprise"
],
      workflow: [
  "Define meters",
  "Connect usage events",
  "Apply billing rules",
  "Generate invoices"
],
      integrations: [
  "Stripe",
  "AWS",
  "Vercel",
  "Cloudflare",
  "API Gateway",
  "Webhook API"
],
      screens: [
  "Usage console",
  "API keys",
  "Billing rules",
  "Customer usage"
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
