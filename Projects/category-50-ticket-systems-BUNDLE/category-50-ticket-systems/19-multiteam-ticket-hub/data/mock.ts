export const templateMeta = {
  "templateName": "MultiTeam Ticket Hub",
  "category": "Ticket Systems",
  "categoryNumber": 50,
  "description": "Ticket lists, priorities, agents, SLA, replies, statuses, and escalation UI",
  "audience": "Ticket Systems buyers who need a polished, sale-ready operational interface",
  "uiPattern": "minimal luxury website with oversized typography",
  "modules": [
    "API Mock",
    "Dashboard",
    "Records Table",
    "Smart Search",
    "Kanban",
    "Calendar",
    "Reports",
    "Settings"
  ],
  "accent": "teal"
} as const;

export const records = [
  {
    "id": "50-19-1",
    "name": "MultiTeam Ticket Hub Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "9,590"
  },
  {
    "id": "50-19-2",
    "name": "MultiTeam Ticket Hub Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "9,727"
  },
  {
    "id": "50-19-3",
    "name": "MultiTeam Ticket Hub Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "9,864"
  },
  {
    "id": "50-19-4",
    "name": "MultiTeam Ticket Hub Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "10,001"
  },
  {
    "id": "50-19-5",
    "name": "MultiTeam Ticket Hub Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "10,138"
  },
  {
    "id": "50-19-6",
    "name": "MultiTeam Ticket Hub Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "10,275"
  }
] as const;
