export const templateMeta = {
  "templateName": "FoodVendor Market",
  "category": "Marketplace Platforms",
  "categoryNumber": 44,
  "description": "Vendor listings, products, services, orders, reviews, seller/buyer dashboards",
  "audience": "Marketplace Platforms buyers who need a polished, sale-ready operational interface",
  "uiPattern": "dashboard marketplace grid with comparison cards",
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
    "id": "44-11-1",
    "name": "FoodVendor Market Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "7,672"
  },
  {
    "id": "44-11-2",
    "name": "FoodVendor Market Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "7,809"
  },
  {
    "id": "44-11-3",
    "name": "FoodVendor Market Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "7,946"
  },
  {
    "id": "44-11-4",
    "name": "FoodVendor Market Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "8,083"
  },
  {
    "id": "44-11-5",
    "name": "FoodVendor Market Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "8,220"
  },
  {
    "id": "44-11-6",
    "name": "FoodVendor Market Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "8,357"
  }
] as const;
