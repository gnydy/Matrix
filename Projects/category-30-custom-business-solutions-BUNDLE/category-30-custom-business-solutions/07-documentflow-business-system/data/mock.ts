export const templateMeta = {
  "templateName": "DocumentFlow Business System",
  "category": "Custom Business Solutions",
  "categoryNumber": 30,
  "description": "Internal portals, operational systems, workflows, and business dashboards",
  "audience": "Custom Business Solutions buyers who need a polished, sale-ready operational interface",
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
    "id": "30-7-1",
    "name": "DocumentFlow Business System Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "5,206"
  },
  {
    "id": "30-7-2",
    "name": "DocumentFlow Business System Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "5,343"
  },
  {
    "id": "30-7-3",
    "name": "DocumentFlow Business System Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "5,480"
  },
  {
    "id": "30-7-4",
    "name": "DocumentFlow Business System Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "5,617"
  },
  {
    "id": "30-7-5",
    "name": "DocumentFlow Business System Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "5,754"
  },
  {
    "id": "30-7-6",
    "name": "DocumentFlow Business System Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "5,891"
  }
] as const;
