export const templateMeta = {
  "templateName": "ITHelp Ticket System",
  "category": "Ticket Systems",
  "categoryNumber": 50,
  "description": "Ticket lists, priorities, agents, SLA, replies, statuses, and escalation UI",
  "audience": "Ticket Systems buyers who need a polished, sale-ready operational interface",
  "uiPattern": "mobile-first stacked panels with bottom action bar",
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
    "id": "50-3-1",
    "name": "ITHelp Ticket System Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "7,398"
  },
  {
    "id": "50-3-2",
    "name": "ITHelp Ticket System Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "7,535"
  },
  {
    "id": "50-3-3",
    "name": "ITHelp Ticket System Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "7,672"
  },
  {
    "id": "50-3-4",
    "name": "ITHelp Ticket System Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "7,809"
  },
  {
    "id": "50-3-5",
    "name": "ITHelp Ticket System Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "7,946"
  },
  {
    "id": "50-3-6",
    "name": "ITHelp Ticket System Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "8,083"
  }
] as const;
