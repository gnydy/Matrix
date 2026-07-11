export const templateMeta = {
  "templateName": "VIPSupport Escalation",
  "category": "Ticket Systems",
  "categoryNumber": 50,
  "description": "Ticket lists, priorities, agents, SLA, replies, statuses, and escalation UI",
  "audience": "Ticket Systems buyers who need a polished, sale-ready operational interface",
  "uiPattern": "dashboard marketplace grid with comparison cards",
  "modules": [
    "Roles",
    "Integrations",
    "API Mock",
    "Dashboard",
    "Records Table",
    "Smart Search",
    "Kanban",
    "Calendar"
  ],
  "accent": "indigo"
} as const;

export const records = [
  {
    "id": "50-17-1",
    "name": "VIPSupport Escalation Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "9,316"
  },
  {
    "id": "50-17-2",
    "name": "VIPSupport Escalation Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "9,453"
  },
  {
    "id": "50-17-3",
    "name": "VIPSupport Escalation Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "9,590"
  },
  {
    "id": "50-17-4",
    "name": "VIPSupport Escalation Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "9,727"
  },
  {
    "id": "50-17-5",
    "name": "VIPSupport Escalation Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "9,864"
  },
  {
    "id": "50-17-6",
    "name": "VIPSupport Escalation Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "10,001"
  }
] as const;
