export const templateMeta = {
  "templateName": "CardControl App",
  "category": "Fintech Platforms",
  "categoryNumber": 32,
  "description": "Wallets, payments, banking UI, investment dashboards, and financial tools",
  "audience": "Fintech Platforms buyers who need a polished, sale-ready operational interface",
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
    "id": "32-17-1",
    "name": "CardControl App Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "6,850"
  },
  {
    "id": "32-17-2",
    "name": "CardControl App Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "6,987"
  },
  {
    "id": "32-17-3",
    "name": "CardControl App Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "7,124"
  },
  {
    "id": "32-17-4",
    "name": "CardControl App Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "7,261"
  },
  {
    "id": "32-17-5",
    "name": "CardControl App Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "7,398"
  },
  {
    "id": "32-17-6",
    "name": "CardControl App Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "7,535"
  }
] as const;
