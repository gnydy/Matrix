export const templateMeta = {
  "templateName": "Enterprise Customer Portal",
  "category": "Customer Portals",
  "categoryNumber": 47,
  "description": "Tickets, invoices, files, orders, project status, account settings",
  "audience": "Customer Portals buyers who need a polished, sale-ready operational interface",
  "uiPattern": "dashboard marketplace grid with comparison cards",
  "modules": [
    "Dashboard",
    "Records Table",
    "Smart Search",
    "Kanban",
    "Calendar",
    "Reports",
    "Settings",
    "Audit Trail"
  ],
  "accent": "slate"
} as const;

export const records = [
  {
    "id": "47-20-1",
    "name": "Enterprise Customer Portal Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "9,316"
  },
  {
    "id": "47-20-2",
    "name": "Enterprise Customer Portal Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "9,453"
  },
  {
    "id": "47-20-3",
    "name": "Enterprise Customer Portal Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "9,590"
  },
  {
    "id": "47-20-4",
    "name": "Enterprise Customer Portal Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "9,727"
  },
  {
    "id": "47-20-5",
    "name": "Enterprise Customer Portal Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "9,864"
  },
  {
    "id": "47-20-6",
    "name": "Enterprise Customer Portal Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "10,001"
  }
] as const;
