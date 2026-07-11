export const templateMeta = {
  "templateName": "LocalDeals Marketplace",
  "category": "Marketplace Platforms",
  "categoryNumber": 44,
  "description": "Vendor listings, products, services, orders, reviews, seller/buyer dashboards",
  "audience": "Marketplace Platforms buyers who need a polished, sale-ready operational interface",
  "uiPattern": "split command layout with sticky right insight panel",
  "modules": [
    "Files",
    "Roles",
    "Integrations",
    "API Mock",
    "Dashboard",
    "Records Table",
    "Smart Search",
    "Kanban"
  ],
  "accent": "cyan"
} as const;

export const records = [
  {
    "id": "44-16-1",
    "name": "LocalDeals Marketplace Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "8,357"
  },
  {
    "id": "44-16-2",
    "name": "LocalDeals Marketplace Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "8,494"
  },
  {
    "id": "44-16-3",
    "name": "LocalDeals Marketplace Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "8,631"
  },
  {
    "id": "44-16-4",
    "name": "LocalDeals Marketplace Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "8,768"
  },
  {
    "id": "44-16-5",
    "name": "LocalDeals Marketplace Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "8,905"
  },
  {
    "id": "44-16-6",
    "name": "LocalDeals Marketplace Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "9,042"
  }
] as const;
