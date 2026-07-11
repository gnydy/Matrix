export const site = {
  "title": "EcommerceStock Sync",
  "slug": "13-ecommercestock-sync",
  "category": "Inventory Systems",
  "description": "Online store inventory and channel counts. Includes frontend screens and backend mock API routes.",
  "layout": "split",
  "layoutDescription": "Split-screen hero with form panel and operations cards.",
  "dark": "#312e81",
  "accent": "#f472b6",
  "soft": "#fce7f3",
  "modules": [
    {
      "slug": "products",
      "title": "Products",
      "description": "Products module designed for EcommerceStock Sync."
    },
    {
      "slug": "warehouses",
      "title": "Warehouses",
      "description": "Warehouses module designed for EcommerceStock Sync."
    },
    {
      "slug": "movements",
      "title": "Movements",
      "description": "Movements module designed for EcommerceStock Sync."
    },
    {
      "slug": "suppliers",
      "title": "Suppliers",
      "description": "Suppliers module designed for EcommerceStock Sync."
    },
    {
      "slug": "purchase-orders",
      "title": "Purchase Orders",
      "description": "Purchase Orders module designed for EcommerceStock Sync."
    },
    {
      "slug": "alerts",
      "title": "Alerts",
      "description": "Alerts module designed for EcommerceStock Sync."
    },
    {
      "slug": "counts",
      "title": "Counts",
      "description": "Counts module designed for EcommerceStock Sync."
    },
    {
      "slug": "settings",
      "title": "Settings",
      "description": "Settings module designed for EcommerceStock Sync."
    },
    {
      "slug": "ecommercestock",
      "title": "Ecommercestock",
      "description": "Ecommercestock module designed for EcommerceStock Sync."
    },
    {
      "slug": "sync",
      "title": "Sync",
      "description": "Sync module designed for EcommerceStock Sync."
    }
  ],
  "stats": [
    {
      "label": "SKUs",
      "value": "273",
      "trend": "+5% this week"
    },
    {
      "label": "Warehouses",
      "value": "94%",
      "trend": "+6% this week"
    },
    {
      "label": "Low stock",
      "value": "455",
      "trend": "+7% this week"
    },
    {
      "label": "POs",
      "value": "546",
      "trend": "+8% this week"
    }
  ],
  "records": [
    {
      "id": "IN-13-001",
      "title": "Suppliers record 1",
      "meta": "Inventory Systems workflow \u00b7 owner A",
      "status": "Pending",
      "amount": "1,625"
    },
    {
      "id": "IN-13-002",
      "title": "Purchase Orders record 2",
      "meta": "Inventory Systems workflow \u00b7 owner B",
      "status": "Review",
      "amount": "3,250"
    },
    {
      "id": "IN-13-003",
      "title": "Alerts record 3",
      "meta": "Inventory Systems workflow \u00b7 owner C",
      "status": "Approved",
      "amount": "4,875"
    },
    {
      "id": "IN-13-004",
      "title": "Counts record 4",
      "meta": "Inventory Systems workflow \u00b7 owner D",
      "status": "Blocked",
      "amount": "6,500"
    },
    {
      "id": "IN-13-005",
      "title": "Settings record 5",
      "meta": "Inventory Systems workflow \u00b7 owner E",
      "status": "Synced",
      "amount": "8,125"
    },
    {
      "id": "IN-13-006",
      "title": "Ecommercestock record 6",
      "meta": "Inventory Systems workflow \u00b7 owner F",
      "status": "Active",
      "amount": "9,750"
    },
    {
      "id": "IN-13-007",
      "title": "Sync record 7",
      "meta": "Inventory Systems workflow \u00b7 owner G",
      "status": "Pending",
      "amount": "11,375"
    },
    {
      "id": "IN-13-008",
      "title": "Products record 8",
      "meta": "Inventory Systems workflow \u00b7 owner H",
      "status": "Review",
      "amount": "13,000"
    }
  ]
} as const;
