export const site = {
      name: "HireNest HR Suite",
      slug: "hirenest-hr-suite",
      tagline: "Recruit, onboard, and manage talent in one place",
      description: "Recruitment pipeline, employee records, onboarding tasks, and leave management dashboards.",
      industry: "HR / Recruitment",
      audience: "HR departments, recruiters, staffing firms",
      useCase: "Recruitment pipeline, employee records, onboarding tasks, and leave management dashboards.",
      layout: "People directory hero with hiring funnel",
      visualTone: "clean people-operations interface",
      complexity: "Advanced",
      price: "$99-$299",
      accent: "from-sky-400 via-blue-500 to-indigo-500",
      surface: "bg-slate-900",
      features: [
  "Applicant tracking",
  "Onboarding checklist",
  "Leave requests mock",
  "Employee profile cards",
  "Interview scheduling",
  "HR analytics"
],
      metrics: [
  {
    "value": "52%",
    "label": "shorter hiring cycle"
  },
  {
    "value": "340",
    "label": "candidate records"
  },
  {
    "value": "7",
    "label": "onboarding flows"
  },
  {
    "value": "96%",
    "label": "task completion"
  }
],
      plans: [
  "Recruit Core",
  "People Ops",
  "HR Enterprise"
],
      workflow: [
  "Publish roles",
  "Screen candidates",
  "Schedule interviews",
  "Launch onboarding plan"
],
      integrations: [
  "LinkedIn",
  "Google Calendar",
  "Slack",
  "BambooHR",
  "DocuSign",
  "Notion"
],
      screens: [
  "Hiring funnel",
  "Candidate profile",
  "Onboarding tracker",
  "People analytics"
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
