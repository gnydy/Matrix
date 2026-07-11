export const templateMeta = {
  "templateName": "HR Service Desk Portal",
  "category": "Custom Business Solutions",
  "categoryNumber": 30,
  "description": "Internal portals, operational systems, workflows, and business dashboards",
  "audience": "Custom Business Solutions buyers who need a polished, sale-ready operational interface",
  "uiPattern": "data room layout with document table and activity feed",
  "modules": [
    "Files",
    "Roles",
    "Integrations",
    "API Mock",
    "Dashboard",
    "Records Table",
    "Smart Search",
    "Kanban"
  ],
  "accent": "cyan"
} as const;

export const records = [
  {
    "id": "30-16-1",
    "name": "HR Service Desk Portal Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "6,439"
  },
  {
    "id": "30-16-2",
    "name": "HR Service Desk Portal Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "6,576"
  },
  {
    "id": "30-16-3",
    "name": "HR Service Desk Portal Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "6,713"
  },
  {
    "id": "30-16-4",
    "name": "HR Service Desk Portal Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "6,850"
  },
  {
    "id": "30-16-5",
    "name": "HR Service Desk Portal Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "6,987"
  },
  {
    "id": "30-16-6",
    "name": "HR Service Desk Portal Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "7,124"
  }
] as const;
