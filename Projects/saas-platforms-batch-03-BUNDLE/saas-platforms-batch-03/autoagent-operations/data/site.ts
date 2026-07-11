export const site = {
      name: "AutoAgent Operations",
      slug: "autoagent-operations",
      tagline: "AI agents for repetitive business operations",
      description: "AI agents dashboard, task queues, prompt templates, run history, and automation monitoring.",
      industry: "AI Automation SaaS",
      audience: "Operations teams, founders, agencies",
      useCase: "AI agents dashboard, task queues, prompt templates, run history, and automation monitoring.",
      layout: "Agent swarm hero with task execution console",
      visualTone: "AI operations control center",
      complexity: "Advanced",
      price: "$119-$399",
      accent: "from-violet-300 via-blue-400 to-cyan-400",
      surface: "bg-black",
      features: [
  "AI agent cards",
  "Task queue",
  "Prompt templates",
  "Run history",
  "Human approval step",
  "Usage and cost stats"
],
      metrics: [
  {
    "value": "62%",
    "label": "ops tasks automated"
  },
  {
    "value": "480",
    "label": "agent runs mock"
  },
  {
    "value": "15",
    "label": "agent templates"
  },
  {
    "value": "7.4h",
    "label": "weekly hours saved"
  }
],
      plans: [
  "Agent Starter",
  "Ops AI Pro",
  "Automation Enterprise"
],
      workflow: [
  "Choose agent template",
  "Define task context",
  "Approve output",
  "Monitor recurring runs"
],
      integrations: [
  "OpenAI",
  "Slack",
  "Gmail",
  "Google Sheets",
  "CRM",
  "Webhook API"
],
      screens: [
  "Agent dashboard",
  "Task queue",
  "Prompt templates",
  "Run history"
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
