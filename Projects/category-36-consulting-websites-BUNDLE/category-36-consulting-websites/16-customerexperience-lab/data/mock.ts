export const templateMeta = {
  "templateName": "CustomerExperience Lab",
  "category": "Consulting Websites",
  "categoryNumber": 36,
  "description": "Business strategy, finance, HR, operations, and transformation consulting",
  "audience": "Consulting Websites buyers who need a polished, sale-ready operational interface",
  "uiPattern": "dark operations cockpit with alert stream",
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
    "id": "36-16-1",
    "name": "CustomerExperience Lab Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "7,261"
  },
  {
    "id": "36-16-2",
    "name": "CustomerExperience Lab Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "7,398"
  },
  {
    "id": "36-16-3",
    "name": "CustomerExperience Lab Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "7,535"
  },
  {
    "id": "36-16-4",
    "name": "CustomerExperience Lab Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "7,672"
  },
  {
    "id": "36-16-5",
    "name": "CustomerExperience Lab Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "7,809"
  },
  {
    "id": "36-16-6",
    "name": "CustomerExperience Lab Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "7,946"
  }
] as const;
