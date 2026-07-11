export const templateMeta = {
  "templateName": "FieldService Help Center",
  "category": "Support Centers",
  "categoryNumber": 49,
  "description": "Knowledge bases, tickets, FAQs, chat support, contact forms, and status updates",
  "audience": "Support Centers buyers who need a polished, sale-ready operational interface",
  "uiPattern": "desktop app shell with toolbar, tabs, and resizable panels",
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
    "id": "49-17-1",
    "name": "FieldService Help Center Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "9,179"
  },
  {
    "id": "49-17-2",
    "name": "FieldService Help Center Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "9,316"
  },
  {
    "id": "49-17-3",
    "name": "FieldService Help Center Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "9,453"
  },
  {
    "id": "49-17-4",
    "name": "FieldService Help Center Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "9,590"
  },
  {
    "id": "49-17-5",
    "name": "FieldService Help Center Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "9,727"
  },
  {
    "id": "49-17-6",
    "name": "FieldService Help Center Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "9,864"
  }
] as const;
