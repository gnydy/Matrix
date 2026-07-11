export const templateMeta = {
  "templateName": "Enterprise Interior HQ",
  "category": "Interior Design Websites",
  "categoryNumber": 38,
  "description": "Rooms, moodboards, packages, before/after, and consultation booking",
  "audience": "Interior Design Websites buyers who need a polished, sale-ready operational interface",
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
    "id": "38-20-1",
    "name": "Enterprise Interior HQ Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "8,083"
  },
  {
    "id": "38-20-2",
    "name": "Enterprise Interior HQ Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "8,220"
  },
  {
    "id": "38-20-3",
    "name": "Enterprise Interior HQ Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "8,357"
  },
  {
    "id": "38-20-4",
    "name": "Enterprise Interior HQ Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "8,494"
  },
  {
    "id": "38-20-5",
    "name": "Enterprise Interior HQ Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "8,631"
  },
  {
    "id": "38-20-6",
    "name": "Enterprise Interior HQ Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "8,768"
  }
] as const;
