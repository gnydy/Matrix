export const templateMeta = {
  "templateName": "HRService Tickets",
  "category": "Ticket Systems",
  "categoryNumber": 50,
  "description": "Ticket lists, priorities, agents, SLA, replies, statuses, and escalation UI",
  "audience": "Ticket Systems buyers who need a polished, sale-ready operational interface",
  "uiPattern": "AI assistant workspace with prompt panel and result board",
  "modules": [
    "Profile",
    "Forms",
    "Analytics",
    "Workflow Builder",
    "Billing",
    "Approvals",
    "Chat",
    "Files"
  ],
  "accent": "teal"
} as const;

export const records = [
  {
    "id": "50-9-1",
    "name": "HRService Tickets Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "8,220"
  },
  {
    "id": "50-9-2",
    "name": "HRService Tickets Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "8,357"
  },
  {
    "id": "50-9-3",
    "name": "HRService Tickets Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "8,494"
  },
  {
    "id": "50-9-4",
    "name": "HRService Tickets Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "8,631"
  },
  {
    "id": "50-9-5",
    "name": "HRService Tickets Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "8,768"
  },
  {
    "id": "50-9-6",
    "name": "HRService Tickets Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "8,905"
  }
] as const;
