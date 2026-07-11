export const templateMeta = {
  "templateName": "FactoryOps Internal Board",
  "category": "Custom Business Solutions",
  "categoryNumber": 30,
  "description": "Internal portals, operational systems, workflows, and business dashboards",
  "audience": "Custom Business Solutions buyers who need a polished, sale-ready operational interface",
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
    "id": "30-9-1",
    "name": "FactoryOps Internal Board Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "5,480"
  },
  {
    "id": "30-9-2",
    "name": "FactoryOps Internal Board Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "5,617"
  },
  {
    "id": "30-9-3",
    "name": "FactoryOps Internal Board Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "5,754"
  },
  {
    "id": "30-9-4",
    "name": "FactoryOps Internal Board Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "5,891"
  },
  {
    "id": "30-9-5",
    "name": "FactoryOps Internal Board Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "6,028"
  },
  {
    "id": "30-9-6",
    "name": "FactoryOps Internal Board Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "6,165"
  }
] as const;
