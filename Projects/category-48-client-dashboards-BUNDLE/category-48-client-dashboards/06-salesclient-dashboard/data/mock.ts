export const templateMeta = {
  "templateName": "SalesClient Dashboard",
  "category": "Client Dashboards",
  "categoryNumber": 48,
  "description": "KPIs, reports, services, payments, progress, support, and notifications",
  "audience": "Client Dashboards buyers who need a polished, sale-ready operational interface",
  "uiPattern": "desktop app shell with toolbar, tabs, and resizable panels",
  "modules": [
    "Settings",
    "Audit Trail",
    "Notifications",
    "Profile",
    "Forms",
    "Analytics",
    "Workflow Builder",
    "Billing"
  ],
  "accent": "cyan"
} as const;

export const records = [
  {
    "id": "48-6-1",
    "name": "SalesClient Dashboard Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "7,535"
  },
  {
    "id": "48-6-2",
    "name": "SalesClient Dashboard Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "7,672"
  },
  {
    "id": "48-6-3",
    "name": "SalesClient Dashboard Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "7,809"
  },
  {
    "id": "48-6-4",
    "name": "SalesClient Dashboard Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "7,946"
  },
  {
    "id": "48-6-5",
    "name": "SalesClient Dashboard Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "8,083"
  },
  {
    "id": "48-6-6",
    "name": "SalesClient Dashboard Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "8,220"
  }
] as const;
