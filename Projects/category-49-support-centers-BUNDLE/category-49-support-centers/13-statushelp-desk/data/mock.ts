export const templateMeta = {
  "templateName": "StatusHelp Desk",
  "category": "Support Centers",
  "categoryNumber": 49,
  "description": "Knowledge bases, tickets, FAQs, chat support, contact forms, and status updates",
  "audience": "Support Centers buyers who need a polished, sale-ready operational interface",
  "uiPattern": "marketing website with editorial hero and case-study grid",
  "modules": [
    "Billing",
    "Approvals",
    "Chat",
    "Files",
    "Roles",
    "Integrations",
    "API Mock",
    "Dashboard"
  ],
  "accent": "violet"
} as const;

export const records = [
  {
    "id": "49-13-1",
    "name": "StatusHelp Desk Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "8,631"
  },
  {
    "id": "49-13-2",
    "name": "StatusHelp Desk Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "8,768"
  },
  {
    "id": "49-13-3",
    "name": "StatusHelp Desk Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "8,905"
  },
  {
    "id": "49-13-4",
    "name": "StatusHelp Desk Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "9,042"
  },
  {
    "id": "49-13-5",
    "name": "StatusHelp Desk Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "9,179"
  },
  {
    "id": "49-13-6",
    "name": "StatusHelp Desk Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "9,316"
  }
] as const;
