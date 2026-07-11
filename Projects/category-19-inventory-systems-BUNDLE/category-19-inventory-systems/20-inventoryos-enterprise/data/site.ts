export const site = {
  "title": "InventoryOS Enterprise",
  "slug": "20-inventoryos-enterprise",
  "category": "Inventory Systems",
  "description": "Enterprise inventory operations platform. Includes frontend screens and backend mock API routes.",
  "layout": "ai",
  "layoutDescription": "Prompt/result workspace with usage and model cards.",
  "dark": "#0f172a",
  "accent": "#8b5cf6",
  "soft": "#ede9fe",
  "modules": [
    {
      "slug": "products",
      "title": "Products",
      "description": "Products module designed for InventoryOS Enterprise."
    },
    {
      "slug": "warehouses",
      "title": "Warehouses",
      "description": "Warehouses module designed for InventoryOS Enterprise."
    },
    {
      "slug": "movements",
      "title": "Movements",
      "description": "Movements module designed for InventoryOS Enterprise."
    },
    {
      "slug": "suppliers",
      "title": "Suppliers",
      "description": "Suppliers module designed for InventoryOS Enterprise."
    },
    {
      "slug": "purchase-orders",
      "title": "Purchase Orders",
      "description": "Purchase Orders module designed for InventoryOS Enterprise."
    },
    {
      "slug": "alerts",
      "title": "Alerts",
      "description": "Alerts module designed for InventoryOS Enterprise."
    },
    {
      "slug": "counts",
      "title": "Counts",
      "description": "Counts module designed for InventoryOS Enterprise."
    },
    {
      "slug": "settings",
      "title": "Settings",
      "description": "Settings module designed for InventoryOS Enterprise."
    },
    {
      "slug": "inventoryos",
      "title": "Inventoryos",
      "description": "Inventoryos module designed for InventoryOS Enterprise."
    },
    {
      "slug": "enterprise",
      "title": "Enterprise",
      "description": "Enterprise module designed for InventoryOS Enterprise."
    }
  ],
  "stats": [
    {
      "label": "SKUs",
      "value": "420",
      "trend": "+3% this week"
    },
    {
      "label": "Warehouses",
      "value": "86%",
      "trend": "+4% this week"
    },
    {
      "label": "Low stock",
      "value": "700",
      "trend": "+5% this week"
    },
    {
      "label": "POs",
      "value": "840",
      "trend": "+6% this week"
    }
  ],
  "records": [
    {
      "id": "IN-20-001",
      "title": "Products record 1",
      "meta": "Inventory Systems workflow \u00b7 owner A",
      "status": "Review",
      "amount": "2,500"
    },
    {
      "id": "IN-20-002",
      "title": "Warehouses record 2",
      "meta": "Inventory Systems workflow \u00b7 owner B",
      "status": "Approved",
      "amount": "5,000"
    },
    {
      "id": "IN-20-003",
      "title": "Movements record 3",
      "meta": "Inventory Systems workflow \u00b7 owner C",
      "status": "Blocked",
      "amount": "7,500"
    },
    {
      "id": "IN-20-004",
      "title": "Suppliers record 4",
      "meta": "Inventory Systems workflow \u00b7 owner D",
      "status": "Synced",
      "amount": "10,000"
    },
    {
      "id": "IN-20-005",
      "title": "Purchase Orders record 5",
      "meta": "Inventory Systems workflow \u00b7 owner E",
      "status": "Active",
      "amount": "12,500"
    },
    {
      "id": "IN-20-006",
      "title": "Alerts record 6",
      "meta": "Inventory Systems workflow \u00b7 owner F",
      "status": "Pending",
      "amount": "15,000"
    },
    {
      "id": "IN-20-007",
      "title": "Counts record 7",
      "meta": "Inventory Systems workflow \u00b7 owner G",
      "status": "Review",
      "amount": "17,500"
    },
    {
      "id": "IN-20-008",
      "title": "Settings record 8",
      "meta": "Inventory Systems workflow \u00b7 owner H",
      "status": "Approved",
      "amount": "20,000"
    }
  ]
} as const;
