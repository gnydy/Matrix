export const site = {
  "title": "FactoryMaterials MRP",
  "slug": "12-factorymaterials-mrp",
  "category": "Inventory Systems",
  "description": "Production materials and reservation board. Includes frontend screens and backend mock API routes.",
  "layout": "command",
  "layoutDescription": "Left command sidebar, KPI rail, dense admin workspace.",
  "dark": "#172554",
  "accent": "#60a5fa",
  "soft": "#dbeafe",
  "modules": [
    {
      "slug": "products",
      "title": "Products",
      "description": "Products module designed for FactoryMaterials MRP."
    },
    {
      "slug": "warehouses",
      "title": "Warehouses",
      "description": "Warehouses module designed for FactoryMaterials MRP."
    },
    {
      "slug": "movements",
      "title": "Movements",
      "description": "Movements module designed for FactoryMaterials MRP."
    },
    {
      "slug": "suppliers",
      "title": "Suppliers",
      "description": "Suppliers module designed for FactoryMaterials MRP."
    },
    {
      "slug": "purchase-orders",
      "title": "Purchase Orders",
      "description": "Purchase Orders module designed for FactoryMaterials MRP."
    },
    {
      "slug": "alerts",
      "title": "Alerts",
      "description": "Alerts module designed for FactoryMaterials MRP."
    },
    {
      "slug": "counts",
      "title": "Counts",
      "description": "Counts module designed for FactoryMaterials MRP."
    },
    {
      "slug": "settings",
      "title": "Settings",
      "description": "Settings module designed for FactoryMaterials MRP."
    },
    {
      "slug": "factorymaterials",
      "title": "Factorymaterials",
      "description": "Factorymaterials module designed for FactoryMaterials MRP."
    },
    {
      "slug": "mrp",
      "title": "Mrp",
      "description": "Mrp module designed for FactoryMaterials MRP."
    }
  ],
  "stats": [
    {
      "label": "SKUs",
      "value": "252",
      "trend": "+4% this week"
    },
    {
      "label": "Warehouses",
      "value": "93%",
      "trend": "+5% this week"
    },
    {
      "label": "Low stock",
      "value": "420",
      "trend": "+6% this week"
    },
    {
      "label": "POs",
      "value": "504",
      "trend": "+7% this week"
    }
  ],
  "records": [
    {
      "id": "IN-12-001",
      "title": "Movements record 1",
      "meta": "Inventory Systems workflow \u00b7 owner A",
      "status": "Active",
      "amount": "1,500"
    },
    {
      "id": "IN-12-002",
      "title": "Suppliers record 2",
      "meta": "Inventory Systems workflow \u00b7 owner B",
      "status": "Pending",
      "amount": "3,000"
    },
    {
      "id": "IN-12-003",
      "title": "Purchase Orders record 3",
      "meta": "Inventory Systems workflow \u00b7 owner C",
      "status": "Review",
      "amount": "4,500"
    },
    {
      "id": "IN-12-004",
      "title": "Alerts record 4",
      "meta": "Inventory Systems workflow \u00b7 owner D",
      "status": "Approved",
      "amount": "6,000"
    },
    {
      "id": "IN-12-005",
      "title": "Counts record 5",
      "meta": "Inventory Systems workflow \u00b7 owner E",
      "status": "Blocked",
      "amount": "7,500"
    },
    {
      "id": "IN-12-006",
      "title": "Settings record 6",
      "meta": "Inventory Systems workflow \u00b7 owner F",
      "status": "Synced",
      "amount": "9,000"
    },
    {
      "id": "IN-12-007",
      "title": "Factorymaterials record 7",
      "meta": "Inventory Systems workflow \u00b7 owner G",
      "status": "Active",
      "amount": "10,500"
    },
    {
      "id": "IN-12-008",
      "title": "Mrp record 8",
      "meta": "Inventory Systems workflow \u00b7 owner H",
      "status": "Pending",
      "amount": "12,000"
    }
  ]
} as const;
