export const templateMeta = {
  "templateName": "FurniturePackage Studio",
  "category": "Interior Design Websites",
  "categoryNumber": 38,
  "description": "Rooms, moodboards, packages, before/after, and consultation booking",
  "audience": "Interior Design Websites buyers who need a polished, sale-ready operational interface",
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
    "id": "38-17-1",
    "name": "FurniturePackage Studio Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "7,672"
  },
  {
    "id": "38-17-2",
    "name": "FurniturePackage Studio Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "7,809"
  },
  {
    "id": "38-17-3",
    "name": "FurniturePackage Studio Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "7,946"
  },
  {
    "id": "38-17-4",
    "name": "FurniturePackage Studio Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "8,083"
  },
  {
    "id": "38-17-5",
    "name": "FurniturePackage Studio Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "8,220"
  },
  {
    "id": "38-17-6",
    "name": "FurniturePackage Studio Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "8,357"
  }
] as const;
