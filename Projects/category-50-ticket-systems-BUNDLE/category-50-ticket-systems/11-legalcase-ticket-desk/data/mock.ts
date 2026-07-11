export const templateMeta = {
  "templateName": "LegalCase Ticket Desk",
  "category": "Ticket Systems",
  "categoryNumber": 50,
  "description": "Ticket lists, priorities, agents, SLA, replies, statuses, and escalation UI",
  "audience": "Ticket Systems buyers who need a polished, sale-ready operational interface",
  "uiPattern": "dense admin console with left rail and KPI ribbon",
  "modules": [
    "Analytics",
    "Workflow Builder",
    "Billing",
    "Approvals",
    "Chat",
    "Files",
    "Roles",
    "Integrations"
  ],
  "accent": "blue"
} as const;

export const records = [
  {
    "id": "50-11-1",
    "name": "LegalCase Ticket Desk Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "8,494"
  },
  {
    "id": "50-11-2",
    "name": "LegalCase Ticket Desk Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "8,631"
  },
  {
    "id": "50-11-3",
    "name": "LegalCase Ticket Desk Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "8,768"
  },
  {
    "id": "50-11-4",
    "name": "LegalCase Ticket Desk Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "8,905"
  },
  {
    "id": "50-11-5",
    "name": "LegalCase Ticket Desk Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "9,042"
  },
  {
    "id": "50-11-6",
    "name": "LegalCase Ticket Desk Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "9,179"
  }
] as const;
