export const templateMeta = {
  "templateName": "RetailOps Internal System",
  "category": "Custom Business Solutions",
  "categoryNumber": 30,
  "description": "Internal portals, operational systems, workflows, and business dashboards",
  "audience": "Custom Business Solutions buyers who need a polished, sale-ready operational interface",
  "uiPattern": "desktop app shell with toolbar, tabs, and resizable panels",
  "modules": [
    "Workflow Builder",
    "Billing",
    "Approvals",
    "Chat",
    "Files",
    "Roles",
    "Integrations",
    "API Mock"
  ],
  "accent": "emerald"
} as const;

export const records = [
  {
    "id": "30-12-1",
    "name": "RetailOps Internal System Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "5,891"
  },
  {
    "id": "30-12-2",
    "name": "RetailOps Internal System Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "6,028"
  },
  {
    "id": "30-12-3",
    "name": "RetailOps Internal System Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "6,165"
  },
  {
    "id": "30-12-4",
    "name": "RetailOps Internal System Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "6,302"
  },
  {
    "id": "30-12-5",
    "name": "RetailOps Internal System Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "6,439"
  },
  {
    "id": "30-12-6",
    "name": "RetailOps Internal System Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "6,576"
  }
] as const;
