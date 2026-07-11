export const templateMeta = {
  "templateName": "InternalIT Help Center",
  "category": "Support Centers",
  "categoryNumber": 49,
  "description": "Knowledge bases, tickets, FAQs, chat support, contact forms, and status updates",
  "audience": "Support Centers buyers who need a polished, sale-ready operational interface",
  "uiPattern": "timeline-first workflow interface",
  "modules": [
    "API Mock",
    "Dashboard",
    "Records Table",
    "Smart Search",
    "Kanban",
    "Calendar",
    "Reports",
    "Settings"
  ],
  "accent": "teal"
} as const;

export const records = [
  {
    "id": "49-19-1",
    "name": "InternalIT Help Center Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "9,453"
  },
  {
    "id": "49-19-2",
    "name": "InternalIT Help Center Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "9,590"
  },
  {
    "id": "49-19-3",
    "name": "InternalIT Help Center Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "9,727"
  },
  {
    "id": "49-19-4",
    "name": "InternalIT Help Center Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "9,864"
  },
  {
    "id": "49-19-5",
    "name": "InternalIT Help Center Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "10,001"
  },
  {
    "id": "49-19-6",
    "name": "InternalIT Help Center Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "10,138"
  }
] as const;
