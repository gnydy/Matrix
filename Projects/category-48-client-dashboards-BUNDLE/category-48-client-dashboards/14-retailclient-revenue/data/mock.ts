export const templateMeta = {
  "templateName": "RetailClient Revenue",
  "category": "Client Dashboards",
  "categoryNumber": 48,
  "description": "KPIs, reports, services, payments, progress, support, and notifications",
  "audience": "Client Dashboards buyers who need a polished, sale-ready operational interface",
  "uiPattern": "marketing website with editorial hero and case-study grid",
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
    "id": "48-14-1",
    "name": "RetailClient Revenue Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "8,631"
  },
  {
    "id": "48-14-2",
    "name": "RetailClient Revenue Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "8,768"
  },
  {
    "id": "48-14-3",
    "name": "RetailClient Revenue Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "8,905"
  },
  {
    "id": "48-14-4",
    "name": "RetailClient Revenue Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "9,042"
  },
  {
    "id": "48-14-5",
    "name": "RetailClient Revenue Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "9,179"
  },
  {
    "id": "48-14-6",
    "name": "RetailClient Revenue Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "9,316"
  }
] as const;
