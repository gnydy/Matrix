export const templateMeta = {
  "templateName": "Enterprise Support HQ",
  "category": "Support Centers",
  "categoryNumber": 49,
  "description": "Knowledge bases, tickets, FAQs, chat support, contact forms, and status updates",
  "audience": "Support Centers buyers who need a polished, sale-ready operational interface",
  "uiPattern": "minimal luxury website with oversized typography",
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
    "id": "49-20-1",
    "name": "Enterprise Support HQ Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "9,590"
  },
  {
    "id": "49-20-2",
    "name": "Enterprise Support HQ Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "9,727"
  },
  {
    "id": "49-20-3",
    "name": "Enterprise Support HQ Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "9,864"
  },
  {
    "id": "49-20-4",
    "name": "Enterprise Support HQ Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "10,001"
  },
  {
    "id": "49-20-5",
    "name": "Enterprise Support HQ Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "10,138"
  },
  {
    "id": "49-20-6",
    "name": "Enterprise Support HQ Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "10,275"
  }
] as const;
