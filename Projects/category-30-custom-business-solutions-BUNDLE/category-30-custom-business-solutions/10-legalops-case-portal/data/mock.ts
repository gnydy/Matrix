export const templateMeta = {
  "templateName": "LegalOps Case Portal",
  "category": "Custom Business Solutions",
  "categoryNumber": 30,
  "description": "Internal portals, operational systems, workflows, and business dashboards",
  "audience": "Custom Business Solutions buyers who need a polished, sale-ready operational interface",
  "uiPattern": "dark operations cockpit with alert stream",
  "modules": [
    "Forms",
    "Analytics",
    "Workflow Builder",
    "Billing",
    "Approvals",
    "Chat",
    "Files",
    "Roles"
  ],
  "accent": "slate"
} as const;

export const records = [
  {
    "id": "30-10-1",
    "name": "LegalOps Case Portal Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "5,617"
  },
  {
    "id": "30-10-2",
    "name": "LegalOps Case Portal Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "5,754"
  },
  {
    "id": "30-10-3",
    "name": "LegalOps Case Portal Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "5,891"
  },
  {
    "id": "30-10-4",
    "name": "LegalOps Case Portal Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "6,028"
  },
  {
    "id": "30-10-5",
    "name": "LegalOps Case Portal Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "6,165"
  },
  {
    "id": "30-10-6",
    "name": "LegalOps Case Portal Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "6,302"
  }
] as const;
