export const templateMeta = {
  "templateName": "LegalArticles Journal",
  "category": "Legal & Law Firm Websites",
  "categoryNumber": 33,
  "description": "Law firm sites, consultation booking, legal articles, cases, and teams",
  "audience": "Legal & Law Firm Websites buyers who need a polished, sale-ready operational interface",
  "uiPattern": "dark operations cockpit with alert stream",
  "modules": [
    "Audit Trail",
    "Notifications",
    "Profile",
    "Forms",
    "Analytics",
    "Workflow Builder",
    "Billing",
    "Approvals"
  ],
  "accent": "indigo"
} as const;

export const records = [
  {
    "id": "33-7-1",
    "name": "LegalArticles Journal Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "5,617"
  },
  {
    "id": "33-7-2",
    "name": "LegalArticles Journal Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "5,754"
  },
  {
    "id": "33-7-3",
    "name": "LegalArticles Journal Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "5,891"
  },
  {
    "id": "33-7-4",
    "name": "LegalArticles Journal Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "6,028"
  },
  {
    "id": "33-7-5",
    "name": "LegalArticles Journal Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "6,165"
  },
  {
    "id": "33-7-6",
    "name": "LegalArticles Journal Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "6,302"
  }
] as const;
