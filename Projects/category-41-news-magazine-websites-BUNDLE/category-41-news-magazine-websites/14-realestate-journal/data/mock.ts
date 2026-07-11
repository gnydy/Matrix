export const templateMeta = {
  "templateName": "RealEstate Journal",
  "category": "News & Magazine Websites",
  "categoryNumber": 41,
  "description": "Articles, categories, authors, trending content, newsletters, and ads layouts",
  "audience": "News & Magazine Websites buyers who need a polished, sale-ready operational interface",
  "uiPattern": "dashboard marketplace grid with comparison cards",
  "modules": [
    "Approvals",
    "Chat",
    "Files",
    "Roles",
    "Integrations",
    "API Mock",
    "Dashboard",
    "Records Table"
  ],
  "accent": "amber"
} as const;

export const records = [
  {
    "id": "41-14-1",
    "name": "RealEstate Journal Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "7,672"
  },
  {
    "id": "41-14-2",
    "name": "RealEstate Journal Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "7,809"
  },
  {
    "id": "41-14-3",
    "name": "RealEstate Journal Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "7,946"
  },
  {
    "id": "41-14-4",
    "name": "RealEstate Journal Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "8,083"
  },
  {
    "id": "41-14-5",
    "name": "RealEstate Journal Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "8,220"
  },
  {
    "id": "41-14-6",
    "name": "RealEstate Journal Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "8,357"
  }
] as const;
