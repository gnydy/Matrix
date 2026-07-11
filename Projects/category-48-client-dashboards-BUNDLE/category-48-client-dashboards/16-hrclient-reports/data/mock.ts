export const templateMeta = {
  "templateName": "HRClient Reports",
  "category": "Client Dashboards",
  "categoryNumber": 48,
  "description": "KPIs, reports, services, payments, progress, support, and notifications",
  "audience": "Client Dashboards buyers who need a polished, sale-ready operational interface",
  "uiPattern": "dark operations cockpit with alert stream",
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
    "id": "48-16-1",
    "name": "HRClient Reports Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "8,905"
  },
  {
    "id": "48-16-2",
    "name": "HRClient Reports Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "9,042"
  },
  {
    "id": "48-16-3",
    "name": "HRClient Reports Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "9,179"
  },
  {
    "id": "48-16-4",
    "name": "HRClient Reports Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "9,316"
  },
  {
    "id": "48-16-5",
    "name": "HRClient Reports Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "9,453"
  },
  {
    "id": "48-16-6",
    "name": "HRClient Reports Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "9,590"
  }
] as const;
