export const templateMeta = {
  "templateName": "Executive Request Portal",
  "category": "Custom Business Solutions",
  "categoryNumber": 30,
  "description": "Internal portals, operational systems, workflows, and business dashboards",
  "audience": "Custom Business Solutions buyers who need a polished, sale-ready operational interface",
  "uiPattern": "split command layout with sticky right insight panel",
  "modules": [
    "Settings",
    "Audit Trail",
    "Notifications",
    "Profile",
    "Forms",
    "Analytics",
    "Workflow Builder",
    "Billing"
  ],
  "accent": "cyan"
} as const;

export const records = [
  {
    "id": "30-6-1",
    "name": "Executive Request Portal Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "5,069"
  },
  {
    "id": "30-6-2",
    "name": "Executive Request Portal Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "5,206"
  },
  {
    "id": "30-6-3",
    "name": "Executive Request Portal Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "5,343"
  },
  {
    "id": "30-6-4",
    "name": "Executive Request Portal Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "5,480"
  },
  {
    "id": "30-6-5",
    "name": "Executive Request Portal Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "5,617"
  },
  {
    "id": "30-6-6",
    "name": "Executive Request Portal Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "5,754"
  }
] as const;
