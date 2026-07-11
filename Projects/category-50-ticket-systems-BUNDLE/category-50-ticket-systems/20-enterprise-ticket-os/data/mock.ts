export const templateMeta = {
  "templateName": "Enterprise Ticket OS",
  "category": "Ticket Systems",
  "categoryNumber": 50,
  "description": "Ticket lists, priorities, agents, SLA, replies, statuses, and escalation UI",
  "audience": "Ticket Systems buyers who need a polished, sale-ready operational interface",
  "uiPattern": "data room layout with document table and activity feed",
  "modules": [
    "Dashboard",
    "Records Table",
    "Smart Search",
    "Kanban",
    "Calendar",
    "Reports",
    "Settings",
    "Audit Trail"
  ],
  "accent": "slate"
} as const;

export const records = [
  {
    "id": "50-20-1",
    "name": "Enterprise Ticket OS Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "9,727"
  },
  {
    "id": "50-20-2",
    "name": "Enterprise Ticket OS Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "9,864"
  },
  {
    "id": "50-20-3",
    "name": "Enterprise Ticket OS Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "10,001"
  },
  {
    "id": "50-20-4",
    "name": "Enterprise Ticket OS Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "10,138"
  },
  {
    "id": "50-20-5",
    "name": "Enterprise Ticket OS Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "10,275"
  },
  {
    "id": "50-20-6",
    "name": "Enterprise Ticket OS Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "10,412"
  }
] as const;
