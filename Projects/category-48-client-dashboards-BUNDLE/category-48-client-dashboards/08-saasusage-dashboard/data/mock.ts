export const templateMeta = {
  "templateName": "SaaSUsage Dashboard",
  "category": "Client Dashboards",
  "categoryNumber": 48,
  "description": "KPIs, reports, services, payments, progress, support, and notifications",
  "audience": "Client Dashboards buyers who need a polished, sale-ready operational interface",
  "uiPattern": "timeline-first workflow interface",
  "modules": [
    "Notifications",
    "Profile",
    "Forms",
    "Analytics",
    "Workflow Builder",
    "Billing",
    "Approvals",
    "Chat"
  ],
  "accent": "zinc"
} as const;

export const records = [
  {
    "id": "48-8-1",
    "name": "SaaSUsage Dashboard Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "7,809"
  },
  {
    "id": "48-8-2",
    "name": "SaaSUsage Dashboard Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "7,946"
  },
  {
    "id": "48-8-3",
    "name": "SaaSUsage Dashboard Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "8,083"
  },
  {
    "id": "48-8-4",
    "name": "SaaSUsage Dashboard Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "8,220"
  },
  {
    "id": "48-8-5",
    "name": "SaaSUsage Dashboard Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "8,357"
  },
  {
    "id": "48-8-6",
    "name": "SaaSUsage Dashboard Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "8,494"
  }
] as const;
