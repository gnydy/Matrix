export const site = {
      name: "MarketPulse Analytics",
      slug: "marketpulse-analytics",
      tagline: "Marketing metrics that executives can read",
      description: "Campaign analytics, acquisition channels, attribution mock, and client reporting dashboards.",
      industry: "Marketing Analytics",
      audience: "Marketing agencies, CMOs, growth teams",
      useCase: "Campaign analytics, acquisition channels, attribution mock, and client reporting dashboards.",
      layout: "Analytics chart hero with channel cards",
      visualTone: "growth analytics dashboard",
      complexity: "Advanced",
      price: "$109-$329",
      accent: "from-pink-300 via-rose-400 to-orange-400",
      surface: "bg-neutral-950",
      features: [
  "Campaign dashboard",
  "Attribution mock",
  "Client report builder",
  "Channel ROI cards",
  "Funnel analytics",
  "AI insight notes"
],
      metrics: [
  {
    "value": "29%",
    "label": "budget waste reduction"
  },
  {
    "value": "14",
    "label": "channel models"
  },
  {
    "value": "76",
    "label": "campaigns mock"
  },
  {
    "value": "5min",
    "label": "report export"
  }
],
      plans: [
  "Growth View",
  "Agency Analytics",
  "CMO Suite"
],
      workflow: [
  "Connect channels",
  "Review funnel data",
  "Generate insights",
  "Export client report"
],
      integrations: [
  "Meta Ads",
  "Google Ads",
  "GA4",
  "LinkedIn Ads",
  "HubSpot",
  "Looker"
],
      screens: [
  "Campaign cockpit",
  "Funnel board",
  "Client report",
  "AI insight panel"
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
