export const templateMeta = {
  "templateName": "VendorMarket Pro",
  "category": "Marketplace Platforms",
  "categoryNumber": 44,
  "description": "Vendor listings, products, services, orders, reviews, seller/buyer dashboards",
  "audience": "Marketplace Platforms buyers who need a polished, sale-ready operational interface",
  "uiPattern": "minimal luxury website with oversized typography",
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
    "id": "44-1-1",
    "name": "VendorMarket Pro Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "6,302"
  },
  {
    "id": "44-1-2",
    "name": "VendorMarket Pro Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "6,439"
  },
  {
    "id": "44-1-3",
    "name": "VendorMarket Pro Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "6,576"
  },
  {
    "id": "44-1-4",
    "name": "VendorMarket Pro Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "6,713"
  },
  {
    "id": "44-1-5",
    "name": "VendorMarket Pro Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "6,850"
  },
  {
    "id": "44-1-6",
    "name": "VendorMarket Pro Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "6,987"
  }
] as const;
