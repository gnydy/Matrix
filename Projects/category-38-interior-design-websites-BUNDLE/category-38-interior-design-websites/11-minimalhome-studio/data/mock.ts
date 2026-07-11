export const templateMeta = {
  "templateName": "MinimalHome Studio",
  "category": "Interior Design Websites",
  "categoryNumber": 38,
  "description": "Rooms, moodboards, packages, before/after, and consultation booking",
  "audience": "Interior Design Websites buyers who need a polished, sale-ready operational interface",
  "uiPattern": "dense admin console with left rail and KPI ribbon",
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
    "id": "38-11-1",
    "name": "MinimalHome Studio Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "6,850"
  },
  {
    "id": "38-11-2",
    "name": "MinimalHome Studio Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "6,987"
  },
  {
    "id": "38-11-3",
    "name": "MinimalHome Studio Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "7,124"
  },
  {
    "id": "38-11-4",
    "name": "MinimalHome Studio Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "7,261"
  },
  {
    "id": "38-11-5",
    "name": "MinimalHome Studio Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "7,398"
  },
  {
    "id": "38-11-6",
    "name": "MinimalHome Studio Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "7,535"
  }
] as const;
