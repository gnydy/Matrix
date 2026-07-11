export const templateMeta = {
  "templateName": "CyberIncident Tickets",
  "category": "Ticket Systems",
  "categoryNumber": 50,
  "description": "Ticket lists, priorities, agents, SLA, replies, statuses, and escalation UI",
  "audience": "Ticket Systems buyers who need a polished, sale-ready operational interface",
  "uiPattern": "desktop app shell with toolbar, tabs, and resizable panels",
  "modules": [
    "Files",
    "Roles",
    "Integrations",
    "API Mock",
    "Dashboard",
    "Records Table",
    "Smart Search",
    "Kanban"
  ],
  "accent": "cyan"
} as const;

export const records = [
  {
    "id": "50-16-1",
    "name": "CyberIncident Tickets Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "9,179"
  },
  {
    "id": "50-16-2",
    "name": "CyberIncident Tickets Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "9,316"
  },
  {
    "id": "50-16-3",
    "name": "CyberIncident Tickets Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "9,453"
  },
  {
    "id": "50-16-4",
    "name": "CyberIncident Tickets Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "9,590"
  },
  {
    "id": "50-16-5",
    "name": "CyberIncident Tickets Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "9,727"
  },
  {
    "id": "50-16-6",
    "name": "CyberIncident Tickets Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "9,864"
  }
] as const;
