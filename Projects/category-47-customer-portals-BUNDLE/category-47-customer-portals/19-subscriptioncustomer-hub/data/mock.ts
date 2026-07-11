export const templateMeta = {
  "templateName": "SubscriptionCustomer Hub",
  "category": "Customer Portals",
  "categoryNumber": 47,
  "description": "Tickets, invoices, files, orders, project status, account settings",
  "audience": "Customer Portals buyers who need a polished, sale-ready operational interface",
  "uiPattern": "desktop app shell with toolbar, tabs, and resizable panels",
  "modules": [
    "API Mock",
    "Dashboard",
    "Records Table",
    "Smart Search",
    "Kanban",
    "Calendar",
    "Reports",
    "Settings"
  ],
  "accent": "teal"
} as const;

export const records = [
  {
    "id": "47-19-1",
    "name": "SubscriptionCustomer Hub Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "9,179"
  },
  {
    "id": "47-19-2",
    "name": "SubscriptionCustomer Hub Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "9,316"
  },
  {
    "id": "47-19-3",
    "name": "SubscriptionCustomer Hub Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "9,453"
  },
  {
    "id": "47-19-4",
    "name": "SubscriptionCustomer Hub Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "9,590"
  },
  {
    "id": "47-19-5",
    "name": "SubscriptionCustomer Hub Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "9,727"
  },
  {
    "id": "47-19-6",
    "name": "SubscriptionCustomer Hub Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "9,864"
  }
] as const;
