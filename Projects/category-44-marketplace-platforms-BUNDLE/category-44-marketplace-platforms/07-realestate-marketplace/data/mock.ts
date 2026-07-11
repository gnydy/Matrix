export const templateMeta = {
  "templateName": "RealEstate Marketplace",
  "category": "Marketplace Platforms",
  "categoryNumber": 44,
  "description": "Vendor listings, products, services, orders, reviews, seller/buyer dashboards",
  "audience": "Marketplace Platforms buyers who need a polished, sale-ready operational interface",
  "uiPattern": "card-based workspace with filter bar and live status rail",
  "modules": [
    "Audit Trail",
    "Notifications",
    "Profile",
    "Forms",
    "Analytics",
    "Workflow Builder",
    "Billing",
    "Approvals"
  ],
  "accent": "indigo"
} as const;

export const records = [
  {
    "id": "44-7-1",
    "name": "RealEstate Marketplace Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "7,124"
  },
  {
    "id": "44-7-2",
    "name": "RealEstate Marketplace Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "7,261"
  },
  {
    "id": "44-7-3",
    "name": "RealEstate Marketplace Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "7,398"
  },
  {
    "id": "44-7-4",
    "name": "RealEstate Marketplace Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "7,535"
  },
  {
    "id": "44-7-5",
    "name": "RealEstate Marketplace Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "7,672"
  },
  {
    "id": "44-7-6",
    "name": "RealEstate Marketplace Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "7,809"
  }
] as const;
