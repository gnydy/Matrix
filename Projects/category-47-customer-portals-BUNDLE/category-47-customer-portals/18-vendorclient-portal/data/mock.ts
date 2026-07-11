export const templateMeta = {
  "templateName": "VendorClient Portal",
  "category": "Customer Portals",
  "categoryNumber": 47,
  "description": "Tickets, invoices, files, orders, project status, account settings",
  "audience": "Customer Portals buyers who need a polished, sale-ready operational interface",
  "uiPattern": "mobile-first stacked panels with bottom action bar",
  "modules": [
    "Integrations",
    "API Mock",
    "Dashboard",
    "Records Table",
    "Smart Search",
    "Kanban",
    "Calendar",
    "Reports"
  ],
  "accent": "zinc"
} as const;

export const records = [
  {
    "id": "47-18-1",
    "name": "VendorClient Portal Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "9,042"
  },
  {
    "id": "47-18-2",
    "name": "VendorClient Portal Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "9,179"
  },
  {
    "id": "47-18-3",
    "name": "VendorClient Portal Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "9,316"
  },
  {
    "id": "47-18-4",
    "name": "VendorClient Portal Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "9,453"
  },
  {
    "id": "47-18-5",
    "name": "VendorClient Portal Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "9,590"
  },
  {
    "id": "47-18-6",
    "name": "VendorClient Portal Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "9,727"
  }
] as const;
