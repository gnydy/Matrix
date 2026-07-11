export const templateMeta = {
  "templateName": "TicketGate Events",
  "category": "Event & Conference Websites",
  "categoryNumber": 40,
  "description": "Speakers, agenda, tickets, sponsors, venues, and registration",
  "audience": "Event & Conference Websites buyers who need a polished, sale-ready operational interface",
  "uiPattern": "desktop app shell with toolbar, tabs, and resizable panels",
  "modules": [
    "Smart Search",
    "Kanban",
    "Calendar",
    "Reports",
    "Settings",
    "Audit Trail",
    "Notifications",
    "Profile"
  ],
  "accent": "emerald"
} as const;

export const records = [
  {
    "id": "40-2-1",
    "name": "TicketGate Events Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "5,891"
  },
  {
    "id": "40-2-2",
    "name": "TicketGate Events Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "6,028"
  },
  {
    "id": "40-2-3",
    "name": "TicketGate Events Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "6,165"
  },
  {
    "id": "40-2-4",
    "name": "TicketGate Events Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "6,302"
  },
  {
    "id": "40-2-5",
    "name": "TicketGate Events Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "6,439"
  },
  {
    "id": "40-2-6",
    "name": "TicketGate Events Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "6,576"
  }
] as const;
