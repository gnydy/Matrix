export const site = {
      name: "MemberCore Community SaaS",
      slug: "membercore-community-saas",
      tagline: "Membership communities with paid access and moderation",
      description: "Member plans, gated content, community posts, moderation dashboard, and subscription management.",
      industry: "Membership / Community",
      audience: "Creators, private communities, training groups",
      useCase: "Member plans, gated content, community posts, moderation dashboard, and subscription management.",
      layout: "Community feed hero with membership tiers",
      visualTone: "modern community membership UI",
      complexity: "Intermediate-Advanced",
      price: "$59-$199",
      accent: "from-cyan-300 via-teal-400 to-green-500",
      surface: "bg-slate-950",
      features: [
  "Membership tiers",
  "Community feed mock",
  "Premium content gate",
  "Moderation queue",
  "Member directory",
  "Subscription dashboard"
],
      metrics: [
  {
    "value": "2.6x",
    "label": "member retention model"
  },
  {
    "value": "9k",
    "label": "members mock"
  },
  {
    "value": "24",
    "label": "content spaces"
  },
  {
    "value": "97%",
    "label": "access control concept"
  }
],
      plans: [
  "Community Start",
  "Membership Pro",
  "Creator Network"
],
      workflow: [
  "Create plans",
  "Publish gated content",
  "Moderate discussions",
  "Track subscriptions"
],
      integrations: [
  "Stripe",
  "Discord",
  "Circle",
  "Email API",
  "Zapier",
  "Google Drive"
],
      screens: [
  "Community feed",
  "Member directory",
  "Moderation queue",
  "Subscription dashboard"
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
