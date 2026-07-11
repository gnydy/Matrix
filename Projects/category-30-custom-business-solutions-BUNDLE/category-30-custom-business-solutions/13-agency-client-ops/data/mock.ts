export const templateMeta = {
  "templateName": "Agency Client Ops",
  "category": "Custom Business Solutions",
  "categoryNumber": 30,
  "description": "Internal portals, operational systems, workflows, and business dashboards",
  "audience": "Custom Business Solutions buyers who need a polished, sale-ready operational interface",
  "uiPattern": "dashboard marketplace grid with comparison cards",
  "modules": [
    "Billing",
    "Approvals",
    "Chat",
    "Files",
    "Roles",
    "Integrations",
    "API Mock",
    "Dashboard"
  ],
  "accent": "violet"
} as const;

export const records = [
  {
    "id": "30-13-1",
    "name": "Agency Client Ops Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "6,028"
  },
  {
    "id": "30-13-2",
    "name": "Agency Client Ops Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "6,165"
  },
  {
    "id": "30-13-3",
    "name": "Agency Client Ops Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "6,302"
  },
  {
    "id": "30-13-4",
    "name": "Agency Client Ops Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "6,439"
  },
  {
    "id": "30-13-5",
    "name": "Agency Client Ops Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "6,576"
  },
  {
    "id": "30-13-6",
    "name": "Agency Client Ops Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "6,713"
  }
] as const;
