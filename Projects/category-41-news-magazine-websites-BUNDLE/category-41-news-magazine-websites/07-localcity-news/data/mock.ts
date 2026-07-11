export const templateMeta = {
  "templateName": "LocalCity News",
  "category": "News & Magazine Websites",
  "categoryNumber": 41,
  "description": "Articles, categories, authors, trending content, newsletters, and ads layouts",
  "audience": "News & Magazine Websites buyers who need a polished, sale-ready operational interface",
  "uiPattern": "split command layout with sticky right insight panel",
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
    "id": "41-7-1",
    "name": "LocalCity News Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "6,713"
  },
  {
    "id": "41-7-2",
    "name": "LocalCity News Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "6,850"
  },
  {
    "id": "41-7-3",
    "name": "LocalCity News Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "6,987"
  },
  {
    "id": "41-7-4",
    "name": "LocalCity News Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "7,124"
  },
  {
    "id": "41-7-5",
    "name": "LocalCity News Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "7,261"
  },
  {
    "id": "41-7-6",
    "name": "LocalCity News Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "7,398"
  }
] as const;
