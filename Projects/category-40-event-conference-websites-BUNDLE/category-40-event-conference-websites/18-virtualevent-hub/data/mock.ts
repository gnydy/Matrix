export const templateMeta = {
  "templateName": "VirtualEvent Hub",
  "category": "Event & Conference Websites",
  "categoryNumber": 40,
  "description": "Speakers, agenda, tickets, sponsors, venues, and registration",
  "audience": "Event & Conference Websites buyers who need a polished, sale-ready operational interface",
  "uiPattern": "data room layout with document table and activity feed",
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
    "id": "40-18-1",
    "name": "VirtualEvent Hub Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "8,083"
  },
  {
    "id": "40-18-2",
    "name": "VirtualEvent Hub Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "8,220"
  },
  {
    "id": "40-18-3",
    "name": "VirtualEvent Hub Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "8,357"
  },
  {
    "id": "40-18-4",
    "name": "VirtualEvent Hub Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "8,494"
  },
  {
    "id": "40-18-5",
    "name": "VirtualEvent Hub Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "8,631"
  },
  {
    "id": "40-18-6",
    "name": "VirtualEvent Hub Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "8,768"
  }
] as const;
