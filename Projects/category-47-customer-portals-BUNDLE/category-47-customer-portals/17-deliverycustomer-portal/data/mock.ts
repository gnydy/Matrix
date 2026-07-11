export const templateMeta = {
  "templateName": "DeliveryCustomer Portal",
  "category": "Customer Portals",
  "categoryNumber": 47,
  "description": "Tickets, invoices, files, orders, project status, account settings",
  "audience": "Customer Portals buyers who need a polished, sale-ready operational interface",
  "uiPattern": "dark operations cockpit with alert stream",
  "modules": [
    "Roles",
    "Integrations",
    "API Mock",
    "Dashboard",
    "Records Table",
    "Smart Search",
    "Kanban",
    "Calendar"
  ],
  "accent": "indigo"
} as const;

export const records = [
  {
    "id": "47-17-1",
    "name": "DeliveryCustomer Portal Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "8,905"
  },
  {
    "id": "47-17-2",
    "name": "DeliveryCustomer Portal Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "9,042"
  },
  {
    "id": "47-17-3",
    "name": "DeliveryCustomer Portal Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "9,179"
  },
  {
    "id": "47-17-4",
    "name": "DeliveryCustomer Portal Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "9,316"
  },
  {
    "id": "47-17-5",
    "name": "DeliveryCustomer Portal Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "9,453"
  },
  {
    "id": "47-17-6",
    "name": "DeliveryCustomer Portal Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "9,590"
  }
] as const;
