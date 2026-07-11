export const templateMeta = {
  "templateName": "KPIClient Dashboard",
  "category": "Client Dashboards",
  "categoryNumber": 48,
  "description": "KPIs, reports, services, payments, progress, support, and notifications",
  "audience": "Client Dashboards buyers who need a polished, sale-ready operational interface",
  "uiPattern": "dense admin console with left rail and KPI ribbon",
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
    "id": "48-1-1",
    "name": "KPIClient Dashboard Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "6,850"
  },
  {
    "id": "48-1-2",
    "name": "KPIClient Dashboard Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "6,987"
  },
  {
    "id": "48-1-3",
    "name": "KPIClient Dashboard Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "7,124"
  },
  {
    "id": "48-1-4",
    "name": "KPIClient Dashboard Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "7,261"
  },
  {
    "id": "48-1-5",
    "name": "KPIClient Dashboard Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "7,398"
  },
  {
    "id": "48-1-6",
    "name": "KPIClient Dashboard Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "7,535"
  }
] as const;
