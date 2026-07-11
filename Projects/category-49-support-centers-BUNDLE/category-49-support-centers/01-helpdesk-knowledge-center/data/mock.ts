export const templateMeta = {
  "templateName": "HelpDesk Knowledge Center",
  "category": "Support Centers",
  "categoryNumber": 49,
  "description": "Knowledge bases, tickets, FAQs, chat support, contact forms, and status updates",
  "audience": "Support Centers buyers who need a polished, sale-ready operational interface",
  "uiPattern": "marketing website with editorial hero and case-study grid",
  "modules": [
    "Records Table",
    "Smart Search",
    "Kanban",
    "Calendar",
    "Reports",
    "Settings",
    "Audit Trail",
    "Notifications"
  ],
  "accent": "blue"
} as const;

export const records = [
  {
    "id": "49-1-1",
    "name": "HelpDesk Knowledge Center Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "6,987"
  },
  {
    "id": "49-1-2",
    "name": "HelpDesk Knowledge Center Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "7,124"
  },
  {
    "id": "49-1-3",
    "name": "HelpDesk Knowledge Center Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "7,261"
  },
  {
    "id": "49-1-4",
    "name": "HelpDesk Knowledge Center Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "7,398"
  },
  {
    "id": "49-1-5",
    "name": "HelpDesk Knowledge Center Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "7,535"
  },
  {
    "id": "49-1-6",
    "name": "HelpDesk Knowledge Center Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "7,672"
  }
] as const;
