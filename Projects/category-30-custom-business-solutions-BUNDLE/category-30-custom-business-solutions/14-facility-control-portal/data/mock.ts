export const templateMeta = {
  "templateName": "Facility Control Portal",
  "category": "Custom Business Solutions",
  "categoryNumber": 30,
  "description": "Internal portals, operational systems, workflows, and business dashboards",
  "audience": "Custom Business Solutions buyers who need a polished, sale-ready operational interface",
  "uiPattern": "timeline-first workflow interface",
  "modules": [
    "Approvals",
    "Chat",
    "Files",
    "Roles",
    "Integrations",
    "API Mock",
    "Dashboard",
    "Records Table"
  ],
  "accent": "amber"
} as const;

export const records = [
  {
    "id": "30-14-1",
    "name": "Facility Control Portal Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "6,165"
  },
  {
    "id": "30-14-2",
    "name": "Facility Control Portal Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "6,302"
  },
  {
    "id": "30-14-3",
    "name": "Facility Control Portal Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "6,439"
  },
  {
    "id": "30-14-4",
    "name": "Facility Control Portal Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "6,576"
  },
  {
    "id": "30-14-5",
    "name": "Facility Control Portal Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "6,713"
  },
  {
    "id": "30-14-6",
    "name": "Facility Control Portal Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "6,850"
  }
] as const;
