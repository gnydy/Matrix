export const templateMeta = {
  "templateName": "Enterprise Legal HQ",
  "category": "Legal & Law Firm Websites",
  "categoryNumber": 33,
  "description": "Law firm sites, consultation booking, legal articles, cases, and teams",
  "audience": "Legal & Law Firm Websites buyers who need a polished, sale-ready operational interface",
  "uiPattern": "mobile-first stacked panels with bottom action bar",
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
    "id": "33-20-1",
    "name": "Enterprise Legal HQ Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "7,398"
  },
  {
    "id": "33-20-2",
    "name": "Enterprise Legal HQ Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "7,535"
  },
  {
    "id": "33-20-3",
    "name": "Enterprise Legal HQ Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "7,672"
  },
  {
    "id": "33-20-4",
    "name": "Enterprise Legal HQ Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "7,809"
  },
  {
    "id": "33-20-5",
    "name": "Enterprise Legal HQ Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "7,946"
  },
  {
    "id": "33-20-6",
    "name": "Enterprise Legal HQ Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "8,083"
  }
] as const;
