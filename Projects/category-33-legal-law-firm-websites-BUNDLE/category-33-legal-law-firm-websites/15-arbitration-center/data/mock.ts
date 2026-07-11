export const templateMeta = {
  "templateName": "Arbitration Center",
  "category": "Legal & Law Firm Websites",
  "categoryNumber": 33,
  "description": "Law firm sites, consultation booking, legal articles, cases, and teams",
  "audience": "Legal & Law Firm Websites buyers who need a polished, sale-ready operational interface",
  "uiPattern": "split command layout with sticky right insight panel",
  "modules": [
    "Chat",
    "Files",
    "Roles",
    "Integrations",
    "API Mock",
    "Dashboard",
    "Records Table",
    "Smart Search"
  ],
  "accent": "rose"
} as const;

export const records = [
  {
    "id": "33-15-1",
    "name": "Arbitration Center Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "6,713"
  },
  {
    "id": "33-15-2",
    "name": "Arbitration Center Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "6,850"
  },
  {
    "id": "33-15-3",
    "name": "Arbitration Center Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "6,987"
  },
  {
    "id": "33-15-4",
    "name": "Arbitration Center Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "7,124"
  },
  {
    "id": "33-15-5",
    "name": "Arbitration Center Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "7,261"
  },
  {
    "id": "33-15-6",
    "name": "Arbitration Center Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "7,398"
  }
] as const;
