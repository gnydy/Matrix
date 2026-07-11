export const templateMeta = {
  "templateName": "RestaurantSupport Tickets",
  "category": "Ticket Systems",
  "categoryNumber": 50,
  "description": "Ticket lists, priorities, agents, SLA, replies, statuses, and escalation UI",
  "audience": "Ticket Systems buyers who need a polished, sale-ready operational interface",
  "uiPattern": "marketing website with editorial hero and case-study grid",
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
    "id": "50-12-1",
    "name": "RestaurantSupport Tickets Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "8,631"
  },
  {
    "id": "50-12-2",
    "name": "RestaurantSupport Tickets Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "8,768"
  },
  {
    "id": "50-12-3",
    "name": "RestaurantSupport Tickets Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "8,905"
  },
  {
    "id": "50-12-4",
    "name": "RestaurantSupport Tickets Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "9,042"
  },
  {
    "id": "50-12-5",
    "name": "RestaurantSupport Tickets Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "9,179"
  },
  {
    "id": "50-12-6",
    "name": "RestaurantSupport Tickets Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "9,316"
  }
] as const;
