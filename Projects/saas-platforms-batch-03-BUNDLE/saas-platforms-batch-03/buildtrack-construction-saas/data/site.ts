export const site = {
      name: "BuildTrack Construction SaaS",
      slug: "buildtrack-construction-saas",
      tagline: "Site progress, budgets, and tasks in one construction cockpit",
      description: "Project milestones, site reports, issue tracking, material status, and budget snapshots.",
      industry: "Construction SaaS",
      audience: "Contractors, project managers, engineering offices",
      useCase: "Project milestones, site reports, issue tracking, material status, and budget snapshots.",
      layout: "Project timeline hero with site health cards",
      visualTone: "engineering project control UI",
      complexity: "Advanced",
      price: "$139-$429",
      accent: "from-stone-300 via-yellow-400 to-orange-500",
      surface: "bg-zinc-950",
      features: [
  "Project timeline",
  "Site issue log",
  "Budget snapshot",
  "Material tracker",
  "Team assignments",
  "Progress reporting"
],
      metrics: [
  {
    "value": "24%",
    "label": "fewer project delays"
  },
  {
    "value": "36",
    "label": "sites mock"
  },
  {
    "value": "580",
    "label": "tasks mock"
  },
  {
    "value": "89%",
    "label": "milestone clarity"
  }
],
      plans: [
  "Site Basic",
  "Project Pro",
  "Contractor Enterprise"
],
      workflow: [
  "Create project",
  "Assign site tasks",
  "Track issues",
  "Report progress"
],
      integrations: [
  "AutoCAD Files",
  "Google Drive",
  "ERP",
  "WhatsApp",
  "Excel",
  "Maps"
],
      screens: [
  "Project cockpit",
  "Site issue log",
  "Material tracker",
  "Budget report"
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
