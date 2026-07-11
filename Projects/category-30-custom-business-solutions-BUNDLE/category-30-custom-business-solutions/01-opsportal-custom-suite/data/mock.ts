export const templateMeta = {
  "templateName": "OpsPortal Custom Suite",
  "category": "Custom Business Solutions",
  "categoryNumber": 30,
  "description": "Internal portals, operational systems, workflows, and business dashboards",
  "audience": "Custom Business Solutions buyers who need a polished, sale-ready operational interface",
  "uiPattern": "dashboard marketplace grid with comparison cards",
  "modules": [
    "Records Table",
    "Smart Search",
    "Kanban",
    "Calendar",
    "Reports",
    "Settings",
    "Audit Trail",
    "Notifications"
  ],
  "accent": "blue"
} as const;

export const records = [
  {
    "id": "30-1-1",
    "name": "OpsPortal Custom Suite Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "4,384"
  },
  {
    "id": "30-1-2",
    "name": "OpsPortal Custom Suite Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "4,521"
  },
  {
    "id": "30-1-3",
    "name": "OpsPortal Custom Suite Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "4,658"
  },
  {
    "id": "30-1-4",
    "name": "OpsPortal Custom Suite Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "4,795"
  },
  {
    "id": "30-1-5",
    "name": "OpsPortal Custom Suite Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "4,932"
  },
  {
    "id": "30-1-6",
    "name": "OpsPortal Custom Suite Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "5,069"
  }
] as const;
