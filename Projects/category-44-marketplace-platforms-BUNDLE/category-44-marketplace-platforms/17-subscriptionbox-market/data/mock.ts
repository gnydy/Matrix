export const templateMeta = {
  "templateName": "SubscriptionBox Market",
  "category": "Marketplace Platforms",
  "categoryNumber": 44,
  "description": "Vendor listings, products, services, orders, reviews, seller/buyer dashboards",
  "audience": "Marketplace Platforms buyers who need a polished, sale-ready operational interface",
  "uiPattern": "dense admin console with left rail and KPI ribbon",
  "modules": [
    "Roles",
    "Integrations",
    "API Mock",
    "Dashboard",
    "Records Table",
    "Smart Search",
    "Kanban",
    "Calendar"
  ],
  "accent": "indigo"
} as const;

export const records = [
  {
    "id": "44-17-1",
    "name": "SubscriptionBox Market Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "8,494"
  },
  {
    "id": "44-17-2",
    "name": "SubscriptionBox Market Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "8,631"
  },
  {
    "id": "44-17-3",
    "name": "SubscriptionBox Market Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "8,768"
  },
  {
    "id": "44-17-4",
    "name": "SubscriptionBox Market Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "8,905"
  },
  {
    "id": "44-17-5",
    "name": "SubscriptionBox Market Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "9,042"
  },
  {
    "id": "44-17-6",
    "name": "SubscriptionBox Market Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "9,179"
  }
] as const;
