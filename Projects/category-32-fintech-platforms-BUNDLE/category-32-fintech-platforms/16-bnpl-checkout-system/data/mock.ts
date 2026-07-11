export const templateMeta = {
  "templateName": "BNPL Checkout System",
  "category": "Fintech Platforms",
  "categoryNumber": 32,
  "description": "Wallets, payments, banking UI, investment dashboards, and financial tools",
  "audience": "Fintech Platforms buyers who need a polished, sale-ready operational interface",
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
    "id": "32-16-1",
    "name": "BNPL Checkout System Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "6,713"
  },
  {
    "id": "32-16-2",
    "name": "BNPL Checkout System Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "6,850"
  },
  {
    "id": "32-16-3",
    "name": "BNPL Checkout System Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "6,987"
  },
  {
    "id": "32-16-4",
    "name": "BNPL Checkout System Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "7,124"
  },
  {
    "id": "32-16-5",
    "name": "BNPL Checkout System Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "7,261"
  },
  {
    "id": "32-16-6",
    "name": "BNPL Checkout System Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "7,398"
  }
] as const;
