export const templateMeta = {
  "templateName": "FAQFlow Center",
  "category": "Support Centers",
  "categoryNumber": 49,
  "description": "Knowledge bases, tickets, FAQs, chat support, contact forms, and status updates",
  "audience": "Support Centers buyers who need a polished, sale-ready operational interface",
  "uiPattern": "dark operations cockpit with alert stream",
  "modules": [
    "Kanban",
    "Calendar",
    "Reports",
    "Settings",
    "Audit Trail",
    "Notifications",
    "Profile",
    "Forms"
  ],
  "accent": "violet"
} as const;

export const records = [
  {
    "id": "49-3-1",
    "name": "FAQFlow Center Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "7,261"
  },
  {
    "id": "49-3-2",
    "name": "FAQFlow Center Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "7,398"
  },
  {
    "id": "49-3-3",
    "name": "FAQFlow Center Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "7,535"
  },
  {
    "id": "49-3-4",
    "name": "FAQFlow Center Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "7,672"
  },
  {
    "id": "49-3-5",
    "name": "FAQFlow Center Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "7,809"
  },
  {
    "id": "49-3-6",
    "name": "FAQFlow Center Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "7,946"
  }
] as const;
