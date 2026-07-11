export const templateMeta = {
  "templateName": "SupportHub Portal",
  "category": "Support Centers",
  "categoryNumber": 49,
  "description": "Knowledge bases, tickets, FAQs, chat support, contact forms, and status updates",
  "audience": "Support Centers buyers who need a polished, sale-ready operational interface",
  "uiPattern": "card-based workspace with filter bar and live status rail",
  "modules": [
    "Smart Search",
    "Kanban",
    "Calendar",
    "Reports",
    "Settings",
    "Audit Trail",
    "Notifications",
    "Profile"
  ],
  "accent": "emerald"
} as const;

export const records = [
  {
    "id": "49-2-1",
    "name": "SupportHub Portal Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "7,124"
  },
  {
    "id": "49-2-2",
    "name": "SupportHub Portal Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "7,261"
  },
  {
    "id": "49-2-3",
    "name": "SupportHub Portal Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "7,398"
  },
  {
    "id": "49-2-4",
    "name": "SupportHub Portal Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "7,535"
  },
  {
    "id": "49-2-5",
    "name": "SupportHub Portal Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "7,672"
  },
  {
    "id": "49-2-6",
    "name": "SupportHub Portal Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "7,809"
  }
] as const;
