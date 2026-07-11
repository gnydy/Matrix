export const site = {
  "title": "WarehouseOps Executive",
  "slug": "19-warehouseops-executive",
  "category": "Inventory Systems",
  "description": "Large warehouse control room. Includes frontend screens and backend mock API routes.",
  "layout": "desktop",
  "layoutDescription": "Desktop shell with window chrome and module launcher.",
  "dark": "#1e293b",
  "accent": "#f43f5e",
  "soft": "#ffe4e6",
  "modules": [
    {
      "slug": "products",
      "title": "Products",
      "description": "Products module designed for WarehouseOps Executive."
    },
    {
      "slug": "warehouses",
      "title": "Warehouses",
      "description": "Warehouses module designed for WarehouseOps Executive."
    },
    {
      "slug": "movements",
      "title": "Movements",
      "description": "Movements module designed for WarehouseOps Executive."
    },
    {
      "slug": "suppliers",
      "title": "Suppliers",
      "description": "Suppliers module designed for WarehouseOps Executive."
    },
    {
      "slug": "purchase-orders",
      "title": "Purchase Orders",
      "description": "Purchase Orders module designed for WarehouseOps Executive."
    },
    {
      "slug": "alerts",
      "title": "Alerts",
      "description": "Alerts module designed for WarehouseOps Executive."
    },
    {
      "slug": "counts",
      "title": "Counts",
      "description": "Counts module designed for WarehouseOps Executive."
    },
    {
      "slug": "settings",
      "title": "Settings",
      "description": "Settings module designed for WarehouseOps Executive."
    },
    {
      "slug": "warehouseops",
      "title": "Warehouseops",
      "description": "Warehouseops module designed for WarehouseOps Executive."
    },
    {
      "slug": "executive",
      "title": "Executive",
      "description": "Executive module designed for WarehouseOps Executive."
    }
  ],
  "stats": [
    {
      "label": "SKUs",
      "value": "399",
      "trend": "+2% this week"
    },
    {
      "label": "Warehouses",
      "value": "85%",
      "trend": "+3% this week"
    },
    {
      "label": "Low stock",
      "value": "665",
      "trend": "+4% this week"
    },
    {
      "label": "POs",
      "value": "798",
      "trend": "+5% this week"
    }
  ],
  "records": [
    {
      "id": "IN-19-001",
      "title": "Executive record 1",
      "meta": "Inventory Systems workflow \u00b7 owner A",
      "status": "Pending",
      "amount": "2,375"
    },
    {
      "id": "IN-19-002",
      "title": "Products record 2",
      "meta": "Inventory Systems workflow \u00b7 owner B",
      "status": "Review",
      "amount": "4,750"
    },
    {
      "id": "IN-19-003",
      "title": "Warehouses record 3",
      "meta": "Inventory Systems workflow \u00b7 owner C",
      "status": "Approved",
      "amount": "7,125"
    },
    {
      "id": "IN-19-004",
      "title": "Movements record 4",
      "meta": "Inventory Systems workflow \u00b7 owner D",
      "status": "Blocked",
      "amount": "9,500"
    },
    {
      "id": "IN-19-005",
      "title": "Suppliers record 5",
      "meta": "Inventory Systems workflow \u00b7 owner E",
      "status": "Synced",
      "amount": "11,875"
    },
    {
      "id": "IN-19-006",
      "title": "Purchase Orders record 6",
      "meta": "Inventory Systems workflow \u00b7 owner F",
      "status": "Active",
      "amount": "14,250"
    },
    {
      "id": "IN-19-007",
      "title": "Alerts record 7",
      "meta": "Inventory Systems workflow \u00b7 owner G",
      "status": "Pending",
      "amount": "16,625"
    },
    {
      "id": "IN-19-008",
      "title": "Counts record 8",
      "meta": "Inventory Systems workflow \u00b7 owner H",
      "status": "Review",
      "amount": "19,000"
    }
  ]
} as const;
