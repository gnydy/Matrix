export const site = {
      name: "InsightDeck BI",
      slug: "insightdeck-bi",
      tagline: "Executive dashboards that turn data into decisions",
      description: "KPI dashboards, report builder, dataset cards, anomaly notes, and executive reporting.",
      industry: "Business Intelligence",
      audience: "Executives, analysts, SaaS teams, agencies",
      useCase: "KPI dashboards, report builder, dataset cards, anomaly notes, and executive reporting.",
      layout: "BI wall hero with KPI cards and insight feed",
      visualTone: "executive analytics suite",
      complexity: "Advanced",
      price: "$129-$399",
      accent: "from-emerald-300 via-blue-400 to-indigo-500",
      surface: "bg-slate-950",
      features: [
  "KPI dashboard",
  "Report builder",
  "Dataset cards",
  "AI insight feed",
  "Anomaly markers",
  "Executive export"
],
      metrics: [
  {
    "value": "15min",
    "label": "weekly report creation"
  },
  {
    "value": "34",
    "label": "KPI widgets"
  },
  {
    "value": "9",
    "label": "data sources mock"
  },
  {
    "value": "4.6x",
    "label": "decision speed model"
  }
],
      plans: [
  "BI Starter",
  "Analytics Pro",
  "Executive Suite"
],
      workflow: [
  "Connect datasets",
  "Build KPI board",
  "Review insights",
  "Export executive brief"
],
      integrations: [
  "Postgres",
  "Google Sheets",
  "Looker",
  "BigQuery",
  "HubSpot",
  "CSV"
],
      screens: [
  "KPI wall",
  "Report builder",
  "Insight feed",
  "Dataset manager"
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
