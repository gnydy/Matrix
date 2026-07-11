export const site = {
      name: "RouteNova Delivery SaaS",
      slug: "routenova-delivery-saas",
      tagline: "Delivery operations with route-level intelligence",
      description: "Order dispatch, driver tracking mock, route planning, and delivery performance dashboards.",
      industry: "Logistics SaaS",
      audience: "Delivery companies, restaurants, couriers",
      useCase: "Order dispatch, driver tracking mock, route planning, and delivery performance dashboards.",
      layout: "Map-inspired hero with dispatch queue",
      visualTone: "live dispatch command center",
      complexity: "Advanced",
      price: "$119-$369",
      accent: "from-orange-300 via-amber-400 to-lime-400",
      surface: "bg-slate-950",
      features: [
  "Dispatch queue",
  "Driver status cards",
  "Route optimization mock",
  "Delivery timeline",
  "Fleet analytics",
  "Customer tracking page"
],
      metrics: [
  {
    "value": "18%",
    "label": "delivery time reduction"
  },
  {
    "value": "420",
    "label": "orders/day mock"
  },
  {
    "value": "58",
    "label": "drivers mock"
  },
  {
    "value": "94%",
    "label": "on-time rate"
  }
],
      plans: [
  "Dispatch Start",
  "Fleet Pro",
  "Delivery Network"
],
      workflow: [
  "Receive order",
  "Assign driver",
  "Track route",
  "Confirm delivery"
],
      integrations: [
  "Maps API",
  "WhatsApp",
  "POS",
  "Shopify",
  "SMS Gateway",
  "Webhook API"
],
      screens: [
  "Dispatch board",
  "Driver map mock",
  "Route timeline",
  "Fleet analytics"
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
