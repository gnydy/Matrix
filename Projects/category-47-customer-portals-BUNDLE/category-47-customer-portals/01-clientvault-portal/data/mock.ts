export const templateMeta = {
  "templateName": "ClientVault Portal",
  "category": "Customer Portals",
  "categoryNumber": 47,
  "description": "Tickets, invoices, files, orders, project status, account settings",
  "audience": "Customer Portals buyers who need a polished, sale-ready operational interface",
  "uiPattern": "split command layout with sticky right insight panel",
  "modules": [
    "Records Table",
    "Smart Search",
    "Kanban",
    "Calendar",
    "Reports",
    "Settings",
    "Audit Trail",
    "Notifications"
  ],
  "accent": "blue"
} as const;

export const records = [
  {
    "id": "47-1-1",
    "name": "ClientVault Portal Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "6,713"
  },
  {
    "id": "47-1-2",
    "name": "ClientVault Portal Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "6,850"
  },
  {
    "id": "47-1-3",
    "name": "ClientVault Portal Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "6,987"
  },
  {
    "id": "47-1-4",
    "name": "ClientVault Portal Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "7,124"
  },
  {
    "id": "47-1-5",
    "name": "ClientVault Portal Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "7,261"
  },
  {
    "id": "47-1-6",
    "name": "ClientVault Portal Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "7,398"
  }
] as const;
