export const site = {
      name: "SalesForge AI",
      slug: "salesforge-ai",
      tagline: "AI-assisted sales enablement without chaos",
      description: "AI pitch generation, objection handling, proposal drafts, and sales playbooks.",
      industry: "AI Sales",
      audience: "Sales teams, founders, B2B agencies",
      useCase: "AI pitch generation, objection handling, proposal drafts, and sales playbooks.",
      layout: "AI prompt studio hero with revenue assistant",
      visualTone: "AI assistant workspace",
      complexity: "Advanced",
      price: "$69-$199",
      accent: "from-cyan-300 via-blue-400 to-purple-500",
      surface: "bg-slate-950",
      features: [
  "AI pitch assistant",
  "Objection library",
  "Proposal generator mock",
  "Playbook templates",
  "Conversation history",
  "Usage analytics"
],
      metrics: [
  {
    "value": "3.4x",
    "label": "faster proposal drafts"
  },
  {
    "value": "620",
    "label": "sales prompts"
  },
  {
    "value": "18",
    "label": "playbook templates"
  },
  {
    "value": "87%",
    "label": "rep adoption"
  }
],
      plans: [
  "AI Starter",
  "Sales Studio",
  "Revenue AI"
],
      workflow: [
  "Choose sales scenario",
  "Write prompt context",
  "Review AI output",
  "Save to playbook"
],
      integrations: [
  "OpenAI",
  "Gmail",
  "CRM API",
  "Slack",
  "Google Docs",
  "HubSpot"
],
      screens: [
  "Prompt studio",
  "AI result panel",
  "Playbook library",
  "Usage dashboard"
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
