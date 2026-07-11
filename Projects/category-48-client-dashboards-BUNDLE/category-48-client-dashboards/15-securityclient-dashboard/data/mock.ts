export const templateMeta = {
  "templateName": "SecurityClient Dashboard",
  "category": "Client Dashboards",
  "categoryNumber": 48,
  "description": "KPIs, reports, services, payments, progress, support, and notifications",
  "audience": "Client Dashboards buyers who need a polished, sale-ready operational interface",
  "uiPattern": "card-based workspace with filter bar and live status rail",
  "modules": [
    "Chat",
    "Files",
    "Roles",
    "Integrations",
    "API Mock",
    "Dashboard",
    "Records Table",
    "Smart Search"
  ],
  "accent": "rose"
} as const;

export const records = [
  {
    "id": "48-15-1",
    "name": "SecurityClient Dashboard Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "8,768"
  },
  {
    "id": "48-15-2",
    "name": "SecurityClient Dashboard Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "8,905"
  },
  {
    "id": "48-15-3",
    "name": "SecurityClient Dashboard Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "9,042"
  },
  {
    "id": "48-15-4",
    "name": "SecurityClient Dashboard Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "9,179"
  },
  {
    "id": "48-15-5",
    "name": "SecurityClient Dashboard Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "9,316"
  },
  {
    "id": "48-15-6",
    "name": "SecurityClient Dashboard Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "9,453"
  }
] as const;
