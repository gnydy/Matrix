export const templateMeta = {
  "templateName": "Enterprise Fintech OS",
  "category": "Fintech Platforms",
  "categoryNumber": 32,
  "description": "Wallets, payments, banking UI, investment dashboards, and financial tools",
  "audience": "Fintech Platforms buyers who need a polished, sale-ready operational interface",
  "uiPattern": "dark operations cockpit with alert stream",
  "modules": [
    "Dashboard",
    "Records Table",
    "Smart Search",
    "Kanban",
    "Calendar",
    "Reports",
    "Settings",
    "Audit Trail"
  ],
  "accent": "slate"
} as const;

export const records = [
  {
    "id": "32-20-1",
    "name": "Enterprise Fintech OS Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "7,261"
  },
  {
    "id": "32-20-2",
    "name": "Enterprise Fintech OS Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "7,398"
  },
  {
    "id": "32-20-3",
    "name": "Enterprise Fintech OS Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "7,535"
  },
  {
    "id": "32-20-4",
    "name": "Enterprise Fintech OS Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "7,672"
  },
  {
    "id": "32-20-5",
    "name": "Enterprise Fintech OS Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "7,809"
  },
  {
    "id": "32-20-6",
    "name": "Enterprise Fintech OS Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "7,946"
  }
] as const;
