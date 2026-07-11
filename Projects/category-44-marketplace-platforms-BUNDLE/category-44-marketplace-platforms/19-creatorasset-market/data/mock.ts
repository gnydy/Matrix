export const templateMeta = {
  "templateName": "CreatorAsset Market",
  "category": "Marketplace Platforms",
  "categoryNumber": 44,
  "description": "Vendor listings, products, services, orders, reviews, seller/buyer dashboards",
  "audience": "Marketplace Platforms buyers who need a polished, sale-ready operational interface",
  "uiPattern": "card-based workspace with filter bar and live status rail",
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
    "id": "44-19-1",
    "name": "CreatorAsset Market Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "8,768"
  },
  {
    "id": "44-19-2",
    "name": "CreatorAsset Market Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "8,905"
  },
  {
    "id": "44-19-3",
    "name": "CreatorAsset Market Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "9,042"
  },
  {
    "id": "44-19-4",
    "name": "CreatorAsset Market Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "9,179"
  },
  {
    "id": "44-19-5",
    "name": "CreatorAsset Market Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "9,316"
  },
  {
    "id": "44-19-6",
    "name": "CreatorAsset Market Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "9,453"
  }
] as const;
