export const site = {
      name: "SupportIQ Helpdesk",
      slug: "supportiq-helpdesk",
      tagline: "Support operations with SLA discipline",
      description: "Ticket inbox, knowledge base, agent workload, SLA tracking, and customer satisfaction dashboard.",
      industry: "Support / Tickets",
      audience: "SaaS companies, agencies, service teams",
      useCase: "Ticket inbox, knowledge base, agent workload, SLA tracking, and customer satisfaction dashboard.",
      layout: "Ticket inbox hero with SLA heatmap",
      visualTone: "support-center operating UI",
      complexity: "Advanced",
      price: "$79-$229",
      accent: "from-blue-300 via-cyan-400 to-teal-500",
      surface: "bg-slate-950",
      features: [
  "Ticket inbox",
  "SLA status board",
  "Agent workload",
  "Knowledge base mock",
  "CSAT analytics",
  "Escalation rules"
],
      metrics: [
  {
    "value": "44%",
    "label": "faster first response"
  },
  {
    "value": "1.2k",
    "label": "tickets/month mock"
  },
  {
    "value": "98%",
    "label": "SLA visibility"
  },
  {
    "value": "4.7",
    "label": "CSAT score"
  }
],
      plans: [
  "Support Desk",
  "Service Pro",
  "Support Enterprise"
],
      workflow: [
  "Receive tickets",
  "Assign by priority",
  "Resolve with knowledge base",
  "Measure satisfaction"
],
      integrations: [
  "Intercom",
  "Zendesk",
  "Slack",
  "Email API",
  "Status Page",
  "CRM"
],
      screens: [
  "Ticket inbox",
  "SLA board",
  "Agent analytics",
  "Knowledge base"
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
