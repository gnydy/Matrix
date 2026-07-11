export const templateMeta = {
  "templateName": "SubscriptionClient Metrics",
  "category": "Client Dashboards",
  "categoryNumber": 48,
  "description": "KPIs, reports, services, payments, progress, support, and notifications",
  "audience": "Client Dashboards buyers who need a polished, sale-ready operational interface",
  "uiPattern": "dashboard marketplace grid with comparison cards",
  "modules": [
    "API Mock",
    "Dashboard",
    "Records Table",
    "Smart Search",
    "Kanban",
    "Calendar",
    "Reports",
    "Settings"
  ],
  "accent": "teal"
} as const;

export const records = [
  {
    "id": "48-19-1",
    "name": "SubscriptionClient Metrics Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "9,316"
  },
  {
    "id": "48-19-2",
    "name": "SubscriptionClient Metrics Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "9,453"
  },
  {
    "id": "48-19-3",
    "name": "SubscriptionClient Metrics Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "9,590"
  },
  {
    "id": "48-19-4",
    "name": "SubscriptionClient Metrics Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "9,727"
  },
  {
    "id": "48-19-5",
    "name": "SubscriptionClient Metrics Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "9,864"
  },
  {
    "id": "48-19-6",
    "name": "SubscriptionClient Metrics Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "10,001"
  }
] as const;
