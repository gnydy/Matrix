export const templateMeta = {
  "templateName": "InvoiceFile Portal",
  "category": "Customer Portals",
  "categoryNumber": 47,
  "description": "Tickets, invoices, files, orders, project status, account settings",
  "audience": "Customer Portals buyers who need a polished, sale-ready operational interface",
  "uiPattern": "marketing website with editorial hero and case-study grid",
  "modules": [
    "Kanban",
    "Calendar",
    "Reports",
    "Settings",
    "Audit Trail",
    "Notifications",
    "Profile",
    "Forms"
  ],
  "accent": "violet"
} as const;

export const records = [
  {
    "id": "47-3-1",
    "name": "InvoiceFile Portal Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "6,987"
  },
  {
    "id": "47-3-2",
    "name": "InvoiceFile Portal Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "7,124"
  },
  {
    "id": "47-3-3",
    "name": "InvoiceFile Portal Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "7,261"
  },
  {
    "id": "47-3-4",
    "name": "InvoiceFile Portal Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "7,398"
  },
  {
    "id": "47-3-5",
    "name": "InvoiceFile Portal Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "7,535"
  },
  {
    "id": "47-3-6",
    "name": "InvoiceFile Portal Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "7,672"
  }
] as const;
