export const templateMeta = {
  "templateName": "CustomerIssue Tracker",
  "category": "Ticket Systems",
  "categoryNumber": 50,
  "description": "Ticket lists, priorities, agents, SLA, replies, statuses, and escalation UI",
  "audience": "Ticket Systems buyers who need a polished, sale-ready operational interface",
  "uiPattern": "desktop app shell with toolbar, tabs, and resizable panels",
  "modules": [
    "Calendar",
    "Reports",
    "Settings",
    "Audit Trail",
    "Notifications",
    "Profile",
    "Forms",
    "Analytics"
  ],
  "accent": "amber"
} as const;

export const records = [
  {
    "id": "50-4-1",
    "name": "CustomerIssue Tracker Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "7,535"
  },
  {
    "id": "50-4-2",
    "name": "CustomerIssue Tracker Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "7,672"
  },
  {
    "id": "50-4-3",
    "name": "CustomerIssue Tracker Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "7,809"
  },
  {
    "id": "50-4-4",
    "name": "CustomerIssue Tracker Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "7,946"
  },
  {
    "id": "50-4-5",
    "name": "CustomerIssue Tracker Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "8,083"
  },
  {
    "id": "50-4-6",
    "name": "CustomerIssue Tracker Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "8,220"
  }
] as const;
