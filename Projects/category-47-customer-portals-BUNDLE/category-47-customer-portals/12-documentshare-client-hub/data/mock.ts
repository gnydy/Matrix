export const templateMeta = {
  "templateName": "DocumentShare Client Hub",
  "category": "Customer Portals",
  "categoryNumber": 47,
  "description": "Tickets, invoices, files, orders, project status, account settings",
  "audience": "Customer Portals buyers who need a polished, sale-ready operational interface",
  "uiPattern": "AI assistant workspace with prompt panel and result board",
  "modules": [
    "Workflow Builder",
    "Billing",
    "Approvals",
    "Chat",
    "Files",
    "Roles",
    "Integrations",
    "API Mock"
  ],
  "accent": "emerald"
} as const;

export const records = [
  {
    "id": "47-12-1",
    "name": "DocumentShare Client Hub Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "8,220"
  },
  {
    "id": "47-12-2",
    "name": "DocumentShare Client Hub Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "8,357"
  },
  {
    "id": "47-12-3",
    "name": "DocumentShare Client Hub Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "8,494"
  },
  {
    "id": "47-12-4",
    "name": "DocumentShare Client Hub Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "8,631"
  },
  {
    "id": "47-12-5",
    "name": "DocumentShare Client Hub Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "8,768"
  },
  {
    "id": "47-12-6",
    "name": "DocumentShare Client Hub Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "8,905"
  }
] as const;
