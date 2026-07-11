export const site = {
      name: "ContractVault Legal SaaS",
      slug: "contractvault-legal-saas",
      tagline: "Contracts, matters, and approvals in one legal workspace",
      description: "Contract lifecycle UI, matter records, approval status, and legal document vault.",
      industry: "LegalTech",
      audience: "Law firms, legal departments, contract managers",
      useCase: "Contract lifecycle UI, matter records, approval status, and legal document vault.",
      layout: "Document vault hero with matter timeline",
      visualTone: "confidential legal workspace",
      complexity: "Advanced",
      price: "$149-$449",
      accent: "from-yellow-200 via-amber-300 to-orange-500",
      surface: "bg-zinc-950",
      features: [
  "Contract vault",
  "Matter timeline",
  "Approval workflow",
  "Clause library mock",
  "Legal request intake",
  "Risk classification"
],
      metrics: [
  {
    "value": "36%",
    "label": "faster contract review"
  },
  {
    "value": "850",
    "label": "documents mock"
  },
  {
    "value": "12",
    "label": "matter types"
  },
  {
    "value": "100%",
    "label": "audit trail concept"
  }
],
      plans: [
  "Legal Desk",
  "Contract Pro",
  "Counsel Enterprise"
],
      workflow: [
  "Upload contract",
  "Classify risk",
  "Route approval",
  "Archive with audit trail"
],
      integrations: [
  "DocuSign",
  "Google Drive",
  "Microsoft 365",
  "Slack",
  "CRM",
  "Storage API"
],
      screens: [
  "Vault dashboard",
  "Matter timeline",
  "Approval status",
  "Clause library"
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
