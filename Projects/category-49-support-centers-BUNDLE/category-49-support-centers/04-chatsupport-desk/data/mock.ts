export const templateMeta = {
  "templateName": "ChatSupport Desk",
  "category": "Support Centers",
  "categoryNumber": 49,
  "description": "Knowledge bases, tickets, FAQs, chat support, contact forms, and status updates",
  "audience": "Support Centers buyers who need a polished, sale-ready operational interface",
  "uiPattern": "mobile-first stacked panels with bottom action bar",
  "modules": [
    "Calendar",
    "Reports",
    "Settings",
    "Audit Trail",
    "Notifications",
    "Profile",
    "Forms",
    "Analytics"
  ],
  "accent": "amber"
} as const;

export const records = [
  {
    "id": "49-4-1",
    "name": "ChatSupport Desk Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "7,398"
  },
  {
    "id": "49-4-2",
    "name": "ChatSupport Desk Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "7,535"
  },
  {
    "id": "49-4-3",
    "name": "ChatSupport Desk Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "7,672"
  },
  {
    "id": "49-4-4",
    "name": "ChatSupport Desk Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "7,809"
  },
  {
    "id": "49-4-5",
    "name": "ChatSupport Desk Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "7,946"
  },
  {
    "id": "49-4-6",
    "name": "ChatSupport Desk Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "8,083"
  }
] as const;
