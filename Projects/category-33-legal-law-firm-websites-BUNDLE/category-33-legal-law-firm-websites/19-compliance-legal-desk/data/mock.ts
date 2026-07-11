export const templateMeta = {
  "templateName": "Compliance Legal Desk",
  "category": "Legal & Law Firm Websites",
  "categoryNumber": 33,
  "description": "Law firm sites, consultation booking, legal articles, cases, and teams",
  "audience": "Legal & Law Firm Websites buyers who need a polished, sale-ready operational interface",
  "uiPattern": "dark operations cockpit with alert stream",
  "modules": [
    "API Mock",
    "Dashboard",
    "Records Table",
    "Smart Search",
    "Kanban",
    "Calendar",
    "Reports",
    "Settings"
  ],
  "accent": "teal"
} as const;

export const records = [
  {
    "id": "33-19-1",
    "name": "Compliance Legal Desk Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "7,261"
  },
  {
    "id": "33-19-2",
    "name": "Compliance Legal Desk Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "7,398"
  },
  {
    "id": "33-19-3",
    "name": "Compliance Legal Desk Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "7,535"
  },
  {
    "id": "33-19-4",
    "name": "Compliance Legal Desk Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "7,672"
  },
  {
    "id": "33-19-5",
    "name": "Compliance Legal Desk Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "7,809"
  },
  {
    "id": "33-19-6",
    "name": "Compliance Legal Desk Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "7,946"
  }
] as const;
