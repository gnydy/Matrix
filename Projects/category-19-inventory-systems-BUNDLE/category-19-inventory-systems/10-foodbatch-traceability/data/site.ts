export const site = {
  "title": "FoodBatch Traceability",
  "slug": "10-foodbatch-traceability",
  "category": "Inventory Systems",
  "description": "Batch, expiry and supplier trace mock. Includes frontend screens and backend mock API routes.",
  "layout": "ai",
  "layoutDescription": "Prompt/result workspace with usage and model cards.",
  "dark": "#3b0764",
  "accent": "#c084fc",
  "soft": "#f3e8ff",
  "modules": [
    {
      "slug": "products",
      "title": "Products",
      "description": "Products module designed for FoodBatch Traceability."
    },
    {
      "slug": "warehouses",
      "title": "Warehouses",
      "description": "Warehouses module designed for FoodBatch Traceability."
    },
    {
      "slug": "movements",
      "title": "Movements",
      "description": "Movements module designed for FoodBatch Traceability."
    },
    {
      "slug": "suppliers",
      "title": "Suppliers",
      "description": "Suppliers module designed for FoodBatch Traceability."
    },
    {
      "slug": "purchase-orders",
      "title": "Purchase Orders",
      "description": "Purchase Orders module designed for FoodBatch Traceability."
    },
    {
      "slug": "alerts",
      "title": "Alerts",
      "description": "Alerts module designed for FoodBatch Traceability."
    },
    {
      "slug": "counts",
      "title": "Counts",
      "description": "Counts module designed for FoodBatch Traceability."
    },
    {
      "slug": "settings",
      "title": "Settings",
      "description": "Settings module designed for FoodBatch Traceability."
    },
    {
      "slug": "foodbatch",
      "title": "Foodbatch",
      "description": "Foodbatch module designed for FoodBatch Traceability."
    },
    {
      "slug": "traceability",
      "title": "Traceability",
      "description": "Traceability module designed for FoodBatch Traceability."
    }
  ],
  "stats": [
    {
      "label": "SKUs",
      "value": "210",
      "trend": "+2% this week"
    },
    {
      "label": "Warehouses",
      "value": "91%",
      "trend": "+3% this week"
    },
    {
      "label": "Low stock",
      "value": "350",
      "trend": "+4% this week"
    },
    {
      "label": "POs",
      "value": "420",
      "trend": "+5% this week"
    }
  ],
  "records": [
    {
      "id": "IN-10-001",
      "title": "Products record 1",
      "meta": "Inventory Systems workflow \u00b7 owner A",
      "status": "Blocked",
      "amount": "1,250"
    },
    {
      "id": "IN-10-002",
      "title": "Warehouses record 2",
      "meta": "Inventory Systems workflow \u00b7 owner B",
      "status": "Synced",
      "amount": "2,500"
    },
    {
      "id": "IN-10-003",
      "title": "Movements record 3",
      "meta": "Inventory Systems workflow \u00b7 owner C",
      "status": "Active",
      "amount": "3,750"
    },
    {
      "id": "IN-10-004",
      "title": "Suppliers record 4",
      "meta": "Inventory Systems workflow \u00b7 owner D",
      "status": "Pending",
      "amount": "5,000"
    },
    {
      "id": "IN-10-005",
      "title": "Purchase Orders record 5",
      "meta": "Inventory Systems workflow \u00b7 owner E",
      "status": "Review",
      "amount": "6,250"
    },
    {
      "id": "IN-10-006",
      "title": "Alerts record 6",
      "meta": "Inventory Systems workflow \u00b7 owner F",
      "status": "Approved",
      "amount": "7,500"
    },
    {
      "id": "IN-10-007",
      "title": "Counts record 7",
      "meta": "Inventory Systems workflow \u00b7 owner G",
      "status": "Blocked",
      "amount": "8,750"
    },
    {
      "id": "IN-10-008",
      "title": "Settings record 8",
      "meta": "Inventory Systems workflow \u00b7 owner H",
      "status": "Synced",
      "amount": "10,000"
    }
  ]
} as const;
