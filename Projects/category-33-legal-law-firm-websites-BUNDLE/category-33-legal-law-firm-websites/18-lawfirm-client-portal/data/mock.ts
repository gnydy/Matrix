export const templateMeta = {
  "templateName": "LawFirm Client Portal",
  "category": "Legal & Law Firm Websites",
  "categoryNumber": 33,
  "description": "Law firm sites, consultation booking, legal articles, cases, and teams",
  "audience": "Legal & Law Firm Websites buyers who need a polished, sale-ready operational interface",
  "uiPattern": "card-based workspace with filter bar and live status rail",
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
    "id": "33-18-1",
    "name": "LawFirm Client Portal Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "7,124"
  },
  {
    "id": "33-18-2",
    "name": "LawFirm Client Portal Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "7,261"
  },
  {
    "id": "33-18-3",
    "name": "LawFirm Client Portal Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "7,398"
  },
  {
    "id": "33-18-4",
    "name": "LawFirm Client Portal Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "7,535"
  },
  {
    "id": "33-18-5",
    "name": "LawFirm Client Portal Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "7,672"
  },
  {
    "id": "33-18-6",
    "name": "LawFirm Client Portal Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "7,809"
  }
] as const;
