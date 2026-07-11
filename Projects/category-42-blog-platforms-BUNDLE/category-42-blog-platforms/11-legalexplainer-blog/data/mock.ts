export const templateMeta = {
  "templateName": "LegalExplainer Blog",
  "category": "Blog Platforms",
  "categoryNumber": 42,
  "description": "Personal, tech, AI, business, finance, and lifestyle blog systems",
  "audience": "Blog Platforms buyers who need a polished, sale-ready operational interface",
  "uiPattern": "mobile-first stacked panels with bottom action bar",
  "modules": [
    "Analytics",
    "Workflow Builder",
    "Billing",
    "Approvals",
    "Chat",
    "Files",
    "Roles",
    "Integrations"
  ],
  "accent": "blue"
} as const;

export const records = [
  {
    "id": "42-11-1",
    "name": "LegalExplainer Blog Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "7,398"
  },
  {
    "id": "42-11-2",
    "name": "LegalExplainer Blog Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "7,535"
  },
  {
    "id": "42-11-3",
    "name": "LegalExplainer Blog Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "7,672"
  },
  {
    "id": "42-11-4",
    "name": "LegalExplainer Blog Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "7,809"
  },
  {
    "id": "42-11-5",
    "name": "LegalExplainer Blog Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "7,946"
  },
  {
    "id": "42-11-6",
    "name": "LegalExplainer Blog Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "8,083"
  }
] as const;
