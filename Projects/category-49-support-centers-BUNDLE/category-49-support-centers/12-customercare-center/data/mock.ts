export const templateMeta = {
  "templateName": "CustomerCare Center",
  "category": "Support Centers",
  "categoryNumber": 49,
  "description": "Knowledge bases, tickets, FAQs, chat support, contact forms, and status updates",
  "audience": "Support Centers buyers who need a polished, sale-ready operational interface",
  "uiPattern": "dense admin console with left rail and KPI ribbon",
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
    "id": "49-12-1",
    "name": "CustomerCare Center Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "8,494"
  },
  {
    "id": "49-12-2",
    "name": "CustomerCare Center Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "8,631"
  },
  {
    "id": "49-12-3",
    "name": "CustomerCare Center Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "8,768"
  },
  {
    "id": "49-12-4",
    "name": "CustomerCare Center Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "8,905"
  },
  {
    "id": "49-12-5",
    "name": "CustomerCare Center Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "9,042"
  },
  {
    "id": "49-12-6",
    "name": "CustomerCare Center Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "9,179"
  }
] as const;
