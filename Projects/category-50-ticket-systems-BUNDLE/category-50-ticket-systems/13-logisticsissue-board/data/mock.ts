export const templateMeta = {
  "templateName": "LogisticsIssue Board",
  "category": "Ticket Systems",
  "categoryNumber": 50,
  "description": "Ticket lists, priorities, agents, SLA, replies, statuses, and escalation UI",
  "audience": "Ticket Systems buyers who need a polished, sale-ready operational interface",
  "uiPattern": "card-based workspace with filter bar and live status rail",
  "modules": [
    "Billing",
    "Approvals",
    "Chat",
    "Files",
    "Roles",
    "Integrations",
    "API Mock",
    "Dashboard"
  ],
  "accent": "violet"
} as const;

export const records = [
  {
    "id": "50-13-1",
    "name": "LogisticsIssue Board Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "8,768"
  },
  {
    "id": "50-13-2",
    "name": "LogisticsIssue Board Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "8,905"
  },
  {
    "id": "50-13-3",
    "name": "LogisticsIssue Board Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "9,042"
  },
  {
    "id": "50-13-4",
    "name": "LogisticsIssue Board Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "9,179"
  },
  {
    "id": "50-13-5",
    "name": "LogisticsIssue Board Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "9,316"
  },
  {
    "id": "50-13-6",
    "name": "LogisticsIssue Board Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "9,453"
  }
] as const;
