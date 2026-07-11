export const site = {
      name: "FlowLedger SaaS",
      slug: "flowledger-saas",
      tagline: "Finance operations that close faster",
      description: "Recurring billing, invoice workflows, approvals, and finance analytics for subscription businesses.",
      industry: "Finance Ops",
      audience: "CFOs, finance teams, accounting firms",
      useCase: "Recurring billing, invoice workflows, approvals, and finance analytics for subscription businesses.",
      layout: "Split hero with finance cockpit and approval rail",
      visualTone: "dark operating-room finance UI",
      complexity: "Advanced",
      price: "$89-$249",
      accent: "from-emerald-400 via-teal-400 to-cyan-500",
      surface: "bg-slate-950",
      features: [
  "Recurring invoice automation",
  "Approval chains by role",
  "Revenue leakage alerts",
  "Cashflow forecasting",
  "Tax-ready reports",
  "Client billing portal"
],
      metrics: [
  {
    "value": "38%",
    "label": "faster monthly close"
  },
  {
    "value": "12k",
    "label": "invoices simulated"
  },
  {
    "value": "4.8x",
    "label": "ROI model"
  },
  {
    "value": "99.95%",
    "label": "finance uptime"
  }
],
      plans: [
  "Starter Billing",
  "Growth Finance",
  "Enterprise Control"
],
      workflow: [
  "Connect billing data",
  "Configure approval rules",
  "Review AI risk notes",
  "Export board-ready reports"
],
      integrations: [
  "Stripe",
  "QuickBooks",
  "Xero",
  "Odoo",
  "Slack",
  "Google Drive"
],
      screens: [
  "Invoice command center",
  "Approval queue",
  "Cashflow prediction",
  "Client billing portal"
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
