export const templateMeta = {
  "templateName": "B2B Supply Marketplace",
  "category": "Marketplace Platforms",
  "categoryNumber": 44,
  "description": "Vendor listings, products, services, orders, reviews, seller/buyer dashboards",
  "audience": "Marketplace Platforms buyers who need a polished, sale-ready operational interface",
  "uiPattern": "dense admin console with left rail and KPI ribbon",
  "modules": [
    "Reports",
    "Settings",
    "Audit Trail",
    "Notifications",
    "Profile",
    "Forms",
    "Analytics",
    "Workflow Builder"
  ],
  "accent": "rose"
} as const;

export const records = [
  {
    "id": "44-5-1",
    "name": "B2B Supply Marketplace Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "6,850"
  },
  {
    "id": "44-5-2",
    "name": "B2B Supply Marketplace Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "6,987"
  },
  {
    "id": "44-5-3",
    "name": "B2B Supply Marketplace Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "7,124"
  },
  {
    "id": "44-5-4",
    "name": "B2B Supply Marketplace Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "7,261"
  },
  {
    "id": "44-5-5",
    "name": "B2B Supply Marketplace Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "7,398"
  },
  {
    "id": "44-5-6",
    "name": "B2B Supply Marketplace Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "7,535"
  }
] as const;
