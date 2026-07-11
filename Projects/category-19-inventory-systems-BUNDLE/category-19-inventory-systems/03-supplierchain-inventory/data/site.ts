export const site = {
  "title": "SupplierChain Inventory",
  "slug": "03-supplierchain-inventory",
  "category": "Inventory Systems",
  "description": "Supplier orders and restock management. Includes frontend screens and backend mock API routes.",
  "layout": "split",
  "layoutDescription": "Split-screen hero with form panel and operations cards.",
  "dark": "#1f2937",
  "accent": "#34d399",
  "soft": "#d1fae5",
  "modules": [
    {
      "slug": "products",
      "title": "Products",
      "description": "Products module designed for SupplierChain Inventory."
    },
    {
      "slug": "warehouses",
      "title": "Warehouses",
      "description": "Warehouses module designed for SupplierChain Inventory."
    },
    {
      "slug": "movements",
      "title": "Movements",
      "description": "Movements module designed for SupplierChain Inventory."
    },
    {
      "slug": "suppliers",
      "title": "Suppliers",
      "description": "Suppliers module designed for SupplierChain Inventory."
    },
    {
      "slug": "purchase-orders",
      "title": "Purchase Orders",
      "description": "Purchase Orders module designed for SupplierChain Inventory."
    },
    {
      "slug": "alerts",
      "title": "Alerts",
      "description": "Alerts module designed for SupplierChain Inventory."
    },
    {
      "slug": "counts",
      "title": "Counts",
      "description": "Counts module designed for SupplierChain Inventory."
    },
    {
      "slug": "settings",
      "title": "Settings",
      "description": "Settings module designed for SupplierChain Inventory."
    },
    {
      "slug": "supplierchain",
      "title": "Supplierchain",
      "description": "Supplierchain module designed for SupplierChain Inventory."
    },
    {
      "slug": "inventory",
      "title": "Inventory",
      "description": "Inventory module designed for SupplierChain Inventory."
    }
  ],
  "stats": [
    {
      "label": "SKUs",
      "value": "63",
      "trend": "+4% this week"
    },
    {
      "label": "Warehouses",
      "value": "84%",
      "trend": "+5% this week"
    },
    {
      "label": "Low stock",
      "value": "105",
      "trend": "+6% this week"
    },
    {
      "label": "POs",
      "value": "126",
      "trend": "+7% this week"
    }
  ],
  "records": [
    {
      "id": "IN-03-001",
      "title": "Suppliers record 1",
      "meta": "Inventory Systems workflow \u00b7 owner A",
      "status": "Approved",
      "amount": "375"
    },
    {
      "id": "IN-03-002",
      "title": "Purchase Orders record 2",
      "meta": "Inventory Systems workflow \u00b7 owner B",
      "status": "Blocked",
      "amount": "750"
    },
    {
      "id": "IN-03-003",
      "title": "Alerts record 3",
      "meta": "Inventory Systems workflow \u00b7 owner C",
      "status": "Synced",
      "amount": "1,125"
    },
    {
      "id": "IN-03-004",
      "title": "Counts record 4",
      "meta": "Inventory Systems workflow \u00b7 owner D",
      "status": "Active",
      "amount": "1,500"
    },
    {
      "id": "IN-03-005",
      "title": "Settings record 5",
      "meta": "Inventory Systems workflow \u00b7 owner E",
      "status": "Pending",
      "amount": "1,875"
    },
    {
      "id": "IN-03-006",
      "title": "Supplierchain record 6",
      "meta": "Inventory Systems workflow \u00b7 owner F",
      "status": "Review",
      "amount": "2,250"
    },
    {
      "id": "IN-03-007",
      "title": "Inventory record 7",
      "meta": "Inventory Systems workflow \u00b7 owner G",
      "status": "Approved",
      "amount": "2,625"
    },
    {
      "id": "IN-03-008",
      "title": "Products record 8",
      "meta": "Inventory Systems workflow \u00b7 owner H",
      "status": "Blocked",
      "amount": "3,000"
    }
  ]
} as const;
