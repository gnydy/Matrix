export const site = {
  "title": "AssetInventory Register",
  "slug": "16-assetinventory-register",
  "category": "Inventory Systems",
  "description": "Company assets and custody tracking. Includes frontend screens and backend mock API routes.",
  "layout": "cards",
  "layoutDescription": "Executive card grid with insights and feature tiles.",
  "dark": "#1c1917",
  "accent": "#fbbf24",
  "soft": "#fef9c3",
  "modules": [
    {
      "slug": "products",
      "title": "Products",
      "description": "Products module designed for AssetInventory Register."
    },
    {
      "slug": "warehouses",
      "title": "Warehouses",
      "description": "Warehouses module designed for AssetInventory Register."
    },
    {
      "slug": "movements",
      "title": "Movements",
      "description": "Movements module designed for AssetInventory Register."
    },
    {
      "slug": "suppliers",
      "title": "Suppliers",
      "description": "Suppliers module designed for AssetInventory Register."
    },
    {
      "slug": "purchase-orders",
      "title": "Purchase Orders",
      "description": "Purchase Orders module designed for AssetInventory Register."
    },
    {
      "slug": "alerts",
      "title": "Alerts",
      "description": "Alerts module designed for AssetInventory Register."
    },
    {
      "slug": "counts",
      "title": "Counts",
      "description": "Counts module designed for AssetInventory Register."
    },
    {
      "slug": "settings",
      "title": "Settings",
      "description": "Settings module designed for AssetInventory Register."
    },
    {
      "slug": "assetinventory",
      "title": "Assetinventory",
      "description": "Assetinventory module designed for AssetInventory Register."
    },
    {
      "slug": "register",
      "title": "Register",
      "description": "Register module designed for AssetInventory Register."
    }
  ],
  "stats": [
    {
      "label": "SKUs",
      "value": "336",
      "trend": "+8% this week"
    },
    {
      "label": "Warehouses",
      "value": "82%",
      "trend": "+9% this week"
    },
    {
      "label": "Low stock",
      "value": "560",
      "trend": "+10% this week"
    },
    {
      "label": "POs",
      "value": "672",
      "trend": "+2% this week"
    }
  ],
  "records": [
    {
      "id": "IN-16-001",
      "title": "Counts record 1",
      "meta": "Inventory Systems workflow \u00b7 owner A",
      "status": "Blocked",
      "amount": "2,000"
    },
    {
      "id": "IN-16-002",
      "title": "Settings record 2",
      "meta": "Inventory Systems workflow \u00b7 owner B",
      "status": "Synced",
      "amount": "4,000"
    },
    {
      "id": "IN-16-003",
      "title": "Assetinventory record 3",
      "meta": "Inventory Systems workflow \u00b7 owner C",
      "status": "Active",
      "amount": "6,000"
    },
    {
      "id": "IN-16-004",
      "title": "Register record 4",
      "meta": "Inventory Systems workflow \u00b7 owner D",
      "status": "Pending",
      "amount": "8,000"
    },
    {
      "id": "IN-16-005",
      "title": "Products record 5",
      "meta": "Inventory Systems workflow \u00b7 owner E",
      "status": "Review",
      "amount": "10,000"
    },
    {
      "id": "IN-16-006",
      "title": "Warehouses record 6",
      "meta": "Inventory Systems workflow \u00b7 owner F",
      "status": "Approved",
      "amount": "12,000"
    },
    {
      "id": "IN-16-007",
      "title": "Movements record 7",
      "meta": "Inventory Systems workflow \u00b7 owner G",
      "status": "Blocked",
      "amount": "14,000"
    },
    {
      "id": "IN-16-008",
      "title": "Suppliers record 8",
      "meta": "Inventory Systems workflow \u00b7 owner H",
      "status": "Synced",
      "amount": "16,000"
    }
  ]
} as const;
