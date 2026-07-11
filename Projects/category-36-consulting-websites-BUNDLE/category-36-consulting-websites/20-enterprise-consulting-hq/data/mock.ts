export const templateMeta = {
  "templateName": "Enterprise Consulting HQ",
  "category": "Consulting Websites",
  "categoryNumber": 36,
  "description": "Business strategy, finance, HR, operations, and transformation consulting",
  "audience": "Consulting Websites buyers who need a polished, sale-ready operational interface",
  "uiPattern": "timeline-first workflow interface",
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
    "id": "36-20-1",
    "name": "Enterprise Consulting HQ Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "7,809"
  },
  {
    "id": "36-20-2",
    "name": "Enterprise Consulting HQ Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "7,946"
  },
  {
    "id": "36-20-3",
    "name": "Enterprise Consulting HQ Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "8,083"
  },
  {
    "id": "36-20-4",
    "name": "Enterprise Consulting HQ Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "8,220"
  },
  {
    "id": "36-20-5",
    "name": "Enterprise Consulting HQ Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "8,357"
  },
  {
    "id": "36-20-6",
    "name": "Enterprise Consulting HQ Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "8,494"
  }
] as const;
