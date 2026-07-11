export const templateMeta = {
  "templateName": "FinanceApproval Tickets",
  "category": "Ticket Systems",
  "categoryNumber": 50,
  "description": "Ticket lists, priorities, agents, SLA, replies, statuses, and escalation UI",
  "audience": "Ticket Systems buyers who need a polished, sale-ready operational interface",
  "uiPattern": "split command layout with sticky right insight panel",
  "modules": [
    "Forms",
    "Analytics",
    "Workflow Builder",
    "Billing",
    "Approvals",
    "Chat",
    "Files",
    "Roles"
  ],
  "accent": "slate"
} as const;

export const records = [
  {
    "id": "50-10-1",
    "name": "FinanceApproval Tickets Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "8,357"
  },
  {
    "id": "50-10-2",
    "name": "FinanceApproval Tickets Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "8,494"
  },
  {
    "id": "50-10-3",
    "name": "FinanceApproval Tickets Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "8,631"
  },
  {
    "id": "50-10-4",
    "name": "FinanceApproval Tickets Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "8,768"
  },
  {
    "id": "50-10-5",
    "name": "FinanceApproval Tickets Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "8,905"
  },
  {
    "id": "50-10-6",
    "name": "FinanceApproval Tickets Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "9,042"
  }
] as const;
