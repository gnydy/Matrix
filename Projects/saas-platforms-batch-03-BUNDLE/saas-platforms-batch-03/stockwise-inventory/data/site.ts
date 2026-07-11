export const site = {
      name: "StockWise Inventory",
      slug: "stockwise-inventory",
      tagline: "Inventory decisions before stock becomes a problem",
      description: "Stock movement, warehouse views, low-stock alerts, purchase orders, and supplier management.",
      industry: "Inventory SaaS",
      audience: "Retailers, warehouses, distributors",
      useCase: "Stock movement, warehouse views, low-stock alerts, purchase orders, and supplier management.",
      layout: "Warehouse grid hero with stock alerts",
      visualTone: "warehouse command dashboard",
      complexity: "Advanced",
      price: "$89-$259",
      accent: "from-lime-300 via-green-400 to-emerald-500",
      surface: "bg-stone-950",
      features: [
  "Warehouse overview",
  "Low-stock alerts",
  "Supplier cards",
  "Purchase orders mock",
  "Stock movement table",
  "Inventory forecasting"
],
      metrics: [
  {
    "value": "22%",
    "label": "less dead stock"
  },
  {
    "value": "18k",
    "label": "SKUs mock"
  },
  {
    "value": "6",
    "label": "warehouse views"
  },
  {
    "value": "97%",
    "label": "stock accuracy"
  }
],
      plans: [
  "Stock Start",
  "Warehouse Pro",
  "Supply Enterprise"
],
      workflow: [
  "Import products",
  "Set reorder rules",
  "Track stock movement",
  "Generate purchase orders"
],
      integrations: [
  "Shopify",
  "Odoo",
  "WooCommerce",
  "Barcode API",
  "Excel",
  "ERP Connector"
],
      screens: [
  "Stock dashboard",
  "Warehouse map",
  "Purchase order flow",
  "Supplier portal"
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
