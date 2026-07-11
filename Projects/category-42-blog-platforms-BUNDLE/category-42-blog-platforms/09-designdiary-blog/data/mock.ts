export const templateMeta = {
  "templateName": "DesignDiary Blog",
  "category": "Blog Platforms",
  "categoryNumber": 42,
  "description": "Personal, tech, AI, business, finance, and lifestyle blog systems",
  "audience": "Blog Platforms buyers who need a polished, sale-ready operational interface",
  "uiPattern": "card-based workspace with filter bar and live status rail",
  "modules": [
    "Profile",
    "Forms",
    "Analytics",
    "Workflow Builder",
    "Billing",
    "Approvals",
    "Chat",
    "Files"
  ],
  "accent": "teal"
} as const;

export const records = [
  {
    "id": "42-9-1",
    "name": "DesignDiary Blog Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "7,124"
  },
  {
    "id": "42-9-2",
    "name": "DesignDiary Blog Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "7,261"
  },
  {
    "id": "42-9-3",
    "name": "DesignDiary Blog Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "7,398"
  },
  {
    "id": "42-9-4",
    "name": "DesignDiary Blog Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "7,535"
  },
  {
    "id": "42-9-5",
    "name": "DesignDiary Blog Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "7,672"
  },
  {
    "id": "42-9-6",
    "name": "DesignDiary Blog Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "7,809"
  }
] as const;
