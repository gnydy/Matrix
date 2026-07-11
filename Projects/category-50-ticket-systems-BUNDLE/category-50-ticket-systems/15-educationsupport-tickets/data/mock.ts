export const templateMeta = {
  "templateName": "EducationSupport Tickets",
  "category": "Ticket Systems",
  "categoryNumber": 50,
  "description": "Ticket lists, priorities, agents, SLA, replies, statuses, and escalation UI",
  "audience": "Ticket Systems buyers who need a polished, sale-ready operational interface",
  "uiPattern": "mobile-first stacked panels with bottom action bar",
  "modules": [
    "Chat",
    "Files",
    "Roles",
    "Integrations",
    "API Mock",
    "Dashboard",
    "Records Table",
    "Smart Search"
  ],
  "accent": "rose"
} as const;

export const records = [
  {
    "id": "50-15-1",
    "name": "EducationSupport Tickets Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "9,042"
  },
  {
    "id": "50-15-2",
    "name": "EducationSupport Tickets Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "9,179"
  },
  {
    "id": "50-15-3",
    "name": "EducationSupport Tickets Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "9,316"
  },
  {
    "id": "50-15-4",
    "name": "EducationSupport Tickets Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "9,453"
  },
  {
    "id": "50-15-5",
    "name": "EducationSupport Tickets Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "9,590"
  },
  {
    "id": "50-15-6",
    "name": "EducationSupport Tickets Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "9,727"
  }
] as const;
