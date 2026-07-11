export const templateMeta = {
  "templateName": "AgentWorkload Board",
  "category": "Ticket Systems",
  "categoryNumber": 50,
  "description": "Ticket lists, priorities, agents, SLA, replies, statuses, and escalation UI",
  "audience": "Ticket Systems buyers who need a polished, sale-ready operational interface",
  "uiPattern": "timeline-first workflow interface",
  "modules": [
    "Integrations",
    "API Mock",
    "Dashboard",
    "Records Table",
    "Smart Search",
    "Kanban",
    "Calendar",
    "Reports"
  ],
  "accent": "zinc"
} as const;

export const records = [
  {
    "id": "50-18-1",
    "name": "AgentWorkload Board Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "9,453"
  },
  {
    "id": "50-18-2",
    "name": "AgentWorkload Board Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "9,590"
  },
  {
    "id": "50-18-3",
    "name": "AgentWorkload Board Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "9,727"
  },
  {
    "id": "50-18-4",
    "name": "AgentWorkload Board Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "9,864"
  },
  {
    "id": "50-18-5",
    "name": "AgentWorkload Board Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "10,001"
  },
  {
    "id": "50-18-6",
    "name": "AgentWorkload Board Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "10,138"
  }
] as const;
