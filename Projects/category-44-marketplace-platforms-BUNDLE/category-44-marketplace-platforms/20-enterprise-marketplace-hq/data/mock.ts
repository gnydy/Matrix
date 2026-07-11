export const templateMeta = {
  "templateName": "Enterprise Marketplace HQ",
  "category": "Marketplace Platforms",
  "categoryNumber": 44,
  "description": "Vendor listings, products, services, orders, reviews, seller/buyer dashboards",
  "audience": "Marketplace Platforms buyers who need a polished, sale-ready operational interface",
  "uiPattern": "dark operations cockpit with alert stream",
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
    "id": "44-20-1",
    "name": "Enterprise Marketplace HQ Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "8,905"
  },
  {
    "id": "44-20-2",
    "name": "Enterprise Marketplace HQ Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "9,042"
  },
  {
    "id": "44-20-3",
    "name": "Enterprise Marketplace HQ Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "9,179"
  },
  {
    "id": "44-20-4",
    "name": "Enterprise Marketplace HQ Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "9,316"
  },
  {
    "id": "44-20-5",
    "name": "Enterprise Marketplace HQ Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "9,453"
  },
  {
    "id": "44-20-6",
    "name": "Enterprise Marketplace HQ Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "9,590"
  }
] as const;
