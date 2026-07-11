export const templateMeta = {
  "templateName": "LogisticsClient Metrics",
  "category": "Client Dashboards",
  "categoryNumber": 48,
  "description": "KPIs, reports, services, payments, progress, support, and notifications",
  "audience": "Client Dashboards buyers who need a polished, sale-ready operational interface",
  "uiPattern": "dashboard marketplace grid with comparison cards",
  "modules": [
    "Audit Trail",
    "Notifications",
    "Profile",
    "Forms",
    "Analytics",
    "Workflow Builder",
    "Billing",
    "Approvals"
  ],
  "accent": "indigo"
} as const;

export const records = [
  {
    "id": "48-7-1",
    "name": "LogisticsClient Metrics Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "7,672"
  },
  {
    "id": "48-7-2",
    "name": "LogisticsClient Metrics Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "7,809"
  },
  {
    "id": "48-7-3",
    "name": "LogisticsClient Metrics Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "7,946"
  },
  {
    "id": "48-7-4",
    "name": "LogisticsClient Metrics Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "8,083"
  },
  {
    "id": "48-7-5",
    "name": "LogisticsClient Metrics Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "8,220"
  },
  {
    "id": "48-7-6",
    "name": "LogisticsClient Metrics Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "8,357"
  }
] as const;
