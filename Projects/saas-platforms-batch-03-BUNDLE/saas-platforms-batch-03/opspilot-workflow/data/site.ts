export const site = {
      name: "OpsPilot Workflow",
      slug: "opspilot-workflow",
      tagline: "Turn operations into controlled workflows",
      description: "Workflow builder with triggers, approvals, automations, and SLA monitoring.",
      industry: "Operations / Automation",
      audience: "Operations managers, agencies, internal teams",
      useCase: "Workflow builder with triggers, approvals, automations, and SLA monitoring.",
      layout: "Automation canvas hero with trigger/action cards",
      visualTone: "workflow-builder command UI",
      complexity: "Advanced",
      price: "$119-$349",
      accent: "from-amber-300 via-orange-400 to-red-500",
      surface: "bg-zinc-950",
      features: [
  "Workflow builder UI",
  "Trigger/action blocks",
  "Approval routing",
  "SLA timers",
  "Automation history",
  "Exception queue"
],
      metrics: [
  {
    "value": "41%",
    "label": "manual work reduced"
  },
  {
    "value": "128",
    "label": "workflow runs/day"
  },
  {
    "value": "22",
    "label": "automation templates"
  },
  {
    "value": "99.9%",
    "label": "process visibility"
  }
],
      plans: [
  "Flow Starter",
  "Ops Automation",
  "Enterprise Workflow"
],
      workflow: [
  "Map process stages",
  "Create triggers",
  "Assign approvals",
  "Monitor exceptions"
],
      integrations: [
  "Zapier",
  "Make",
  "Slack",
  "Airtable",
  "Google Sheets",
  "Webhook API"
],
      screens: [
  "Workflow canvas",
  "Approval inbox",
  "Automation logs",
  "SLA monitor"
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
