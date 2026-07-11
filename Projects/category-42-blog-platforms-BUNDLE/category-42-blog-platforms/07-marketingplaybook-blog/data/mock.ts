export const templateMeta = {
  "templateName": "MarketingPlaybook Blog",
  "category": "Blog Platforms",
  "categoryNumber": 42,
  "description": "Personal, tech, AI, business, finance, and lifestyle blog systems",
  "audience": "Blog Platforms buyers who need a polished, sale-ready operational interface",
  "uiPattern": "dense admin console with left rail and KPI ribbon",
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
    "id": "42-7-1",
    "name": "MarketingPlaybook Blog Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "6,850"
  },
  {
    "id": "42-7-2",
    "name": "MarketingPlaybook Blog Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "6,987"
  },
  {
    "id": "42-7-3",
    "name": "MarketingPlaybook Blog Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "7,124"
  },
  {
    "id": "42-7-4",
    "name": "MarketingPlaybook Blog Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "7,261"
  },
  {
    "id": "42-7-5",
    "name": "MarketingPlaybook Blog Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "7,398"
  },
  {
    "id": "42-7-6",
    "name": "MarketingPlaybook Blog Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "7,535"
  }
] as const;
