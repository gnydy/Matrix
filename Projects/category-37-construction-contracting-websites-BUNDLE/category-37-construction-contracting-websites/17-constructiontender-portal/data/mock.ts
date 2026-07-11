export const templateMeta = {
  "templateName": "ConstructionTender Portal",
  "category": "Construction & Contracting Websites",
  "categoryNumber": 37,
  "description": "Projects, equipment, safety, services, galleries, and contracting portfolios",
  "audience": "Construction & Contracting Websites buyers who need a polished, sale-ready operational interface",
  "uiPattern": "desktop app shell with toolbar, tabs, and resizable panels",
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
    "id": "37-17-1",
    "name": "ConstructionTender Portal Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "7,535"
  },
  {
    "id": "37-17-2",
    "name": "ConstructionTender Portal Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "7,672"
  },
  {
    "id": "37-17-3",
    "name": "ConstructionTender Portal Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "7,809"
  },
  {
    "id": "37-17-4",
    "name": "ConstructionTender Portal Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "7,946"
  },
  {
    "id": "37-17-5",
    "name": "ConstructionTender Portal Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "8,083"
  },
  {
    "id": "37-17-6",
    "name": "ConstructionTender Portal Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "8,220"
  }
] as const;
