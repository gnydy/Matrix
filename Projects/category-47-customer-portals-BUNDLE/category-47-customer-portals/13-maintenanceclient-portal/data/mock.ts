export const templateMeta = {
  "templateName": "MaintenanceClient Portal",
  "category": "Customer Portals",
  "categoryNumber": 47,
  "description": "Tickets, invoices, files, orders, project status, account settings",
  "audience": "Customer Portals buyers who need a polished, sale-ready operational interface",
  "uiPattern": "split command layout with sticky right insight panel",
  "modules": [
    "Billing",
    "Approvals",
    "Chat",
    "Files",
    "Roles",
    "Integrations",
    "API Mock",
    "Dashboard"
  ],
  "accent": "violet"
} as const;

export const records = [
  {
    "id": "47-13-1",
    "name": "MaintenanceClient Portal Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "8,357"
  },
  {
    "id": "47-13-2",
    "name": "MaintenanceClient Portal Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "8,494"
  },
  {
    "id": "47-13-3",
    "name": "MaintenanceClient Portal Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "8,631"
  },
  {
    "id": "47-13-4",
    "name": "MaintenanceClient Portal Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "8,768"
  },
  {
    "id": "47-13-5",
    "name": "MaintenanceClient Portal Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "8,905"
  },
  {
    "id": "47-13-6",
    "name": "MaintenanceClient Portal Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "9,042"
  }
] as const;
