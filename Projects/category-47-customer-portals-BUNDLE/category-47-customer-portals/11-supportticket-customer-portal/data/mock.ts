export const templateMeta = {
  "templateName": "SupportTicket Customer Portal",
  "category": "Customer Portals",
  "categoryNumber": 47,
  "description": "Tickets, invoices, files, orders, project status, account settings",
  "audience": "Customer Portals buyers who need a polished, sale-ready operational interface",
  "uiPattern": "data room layout with document table and activity feed",
  "modules": [
    "Analytics",
    "Workflow Builder",
    "Billing",
    "Approvals",
    "Chat",
    "Files",
    "Roles",
    "Integrations"
  ],
  "accent": "blue"
} as const;

export const records = [
  {
    "id": "47-11-1",
    "name": "SupportTicket Customer Portal Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "8,083"
  },
  {
    "id": "47-11-2",
    "name": "SupportTicket Customer Portal Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "8,220"
  },
  {
    "id": "47-11-3",
    "name": "SupportTicket Customer Portal Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "8,357"
  },
  {
    "id": "47-11-4",
    "name": "SupportTicket Customer Portal Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "8,494"
  },
  {
    "id": "47-11-5",
    "name": "SupportTicket Customer Portal Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "8,631"
  },
  {
    "id": "47-11-6",
    "name": "SupportTicket Customer Portal Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "8,768"
  }
] as const;
