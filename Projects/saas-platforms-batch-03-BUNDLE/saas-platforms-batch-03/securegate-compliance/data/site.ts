export const site = {
      name: "SecureGate Compliance",
      slug: "securegate-compliance",
      tagline: "Compliance visibility before audits become emergencies",
      description: "Control library, policy status, evidence collection, risk dashboard, and audit readiness UX.",
      industry: "Security / Compliance",
      audience: "Security teams, SaaS companies, compliance officers",
      useCase: "Control library, policy status, evidence collection, risk dashboard, and audit readiness UX.",
      layout: "Compliance matrix hero with risk console",
      visualTone: "security governance dashboard",
      complexity: "Advanced",
      price: "$159-$499",
      accent: "from-red-300 via-rose-500 to-purple-600",
      surface: "bg-slate-950",
      features: [
  "Control library",
  "Evidence tracker",
  "Risk scoring",
  "Policy center",
  "Audit readiness",
  "Role-based views"
],
      metrics: [
  {
    "value": "71%",
    "label": "evidence coverage"
  },
  {
    "value": "126",
    "label": "controls mock"
  },
  {
    "value": "18",
    "label": "risk alerts"
  },
  {
    "value": "SOC2",
    "label": "readiness concept"
  }
],
      plans: [
  "Policy Core",
  "Compliance Pro",
  "Security Enterprise"
],
      workflow: [
  "Map controls",
  "Collect evidence",
  "Score risks",
  "Prepare audit report"
],
      integrations: [
  "GitHub",
  "Google Drive",
  "AWS",
  "Slack",
  "Jira",
  "Okta"
],
      screens: [
  "Risk console",
  "Control matrix",
  "Evidence inbox",
  "Policy center"
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
