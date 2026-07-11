export const site = {
      name: "DesignBoard Approval",
      slug: "designboard-approval",
      tagline: "Creative approvals without scattered comments",
      description: "Asset review boards, client approvals, version comments, and campaign delivery status.",
      industry: "Creative Operations",
      audience: "Design studios, agencies, marketing teams",
      useCase: "Asset review boards, client approvals, version comments, and campaign delivery status.",
      layout: "Gallery board hero with comment pins",
      visualTone: "creative review workspace",
      complexity: "Intermediate-Advanced",
      price: "$79-$239",
      accent: "from-fuchsia-300 via-pink-400 to-rose-500",
      surface: "bg-neutral-950",
      features: [
  "Asset boards",
  "Comment pins mock",
  "Version history",
  "Client approval portal",
  "Campaign status",
  "Brand asset library"
],
      metrics: [
  {
    "value": "46%",
    "label": "fewer revision loops"
  },
  {
    "value": "320",
    "label": "assets mock"
  },
  {
    "value": "19",
    "label": "client boards"
  },
  {
    "value": "92%",
    "label": "approval clarity"
  }
],
      plans: [
  "Studio Board",
  "Agency Review",
  "Creative Enterprise"
],
      workflow: [
  "Upload assets",
  "Collect comments",
  "Route approvals",
  "Deliver final files"
],
      integrations: [
  "Figma",
  "Canva",
  "Google Drive",
  "Slack",
  "Adobe",
  "Notion"
],
      screens: [
  "Asset board",
  "Comment overlay",
  "Client approval",
  "Version history"
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
