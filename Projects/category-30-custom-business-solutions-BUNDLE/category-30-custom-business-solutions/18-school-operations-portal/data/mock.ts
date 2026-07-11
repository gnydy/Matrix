export const templateMeta = {
  "templateName": "School Operations Portal",
  "category": "Custom Business Solutions",
  "categoryNumber": 30,
  "description": "Internal portals, operational systems, workflows, and business dashboards",
  "audience": "Custom Business Solutions buyers who need a polished, sale-ready operational interface",
  "uiPattern": "split command layout with sticky right insight panel",
  "modules": [
    "Integrations",
    "API Mock",
    "Dashboard",
    "Records Table",
    "Smart Search",
    "Kanban",
    "Calendar",
    "Reports"
  ],
  "accent": "zinc"
} as const;

export const records = [
  {
    "id": "30-18-1",
    "name": "School Operations Portal Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "6,713"
  },
  {
    "id": "30-18-2",
    "name": "School Operations Portal Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "6,850"
  },
  {
    "id": "30-18-3",
    "name": "School Operations Portal Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "6,987"
  },
  {
    "id": "30-18-4",
    "name": "School Operations Portal Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "7,124"
  },
  {
    "id": "30-18-5",
    "name": "School Operations Portal Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "7,261"
  },
  {
    "id": "30-18-6",
    "name": "School Operations Portal Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "7,398"
  }
] as const;
