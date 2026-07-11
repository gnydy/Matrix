export const templateMeta = {
  "templateName": "AutoParts Marketplace",
  "category": "Marketplace Platforms",
  "categoryNumber": 44,
  "description": "Vendor listings, products, services, orders, reviews, seller/buyer dashboards",
  "audience": "Marketplace Platforms buyers who need a polished, sale-ready operational interface",
  "uiPattern": "timeline-first workflow interface",
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
    "id": "44-12-1",
    "name": "AutoParts Marketplace Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "7,809"
  },
  {
    "id": "44-12-2",
    "name": "AutoParts Marketplace Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "7,946"
  },
  {
    "id": "44-12-3",
    "name": "AutoParts Marketplace Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "8,083"
  },
  {
    "id": "44-12-4",
    "name": "AutoParts Marketplace Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "8,220"
  },
  {
    "id": "44-12-5",
    "name": "AutoParts Marketplace Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "8,357"
  },
  {
    "id": "44-12-6",
    "name": "AutoParts Marketplace Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "8,494"
  }
] as const;
