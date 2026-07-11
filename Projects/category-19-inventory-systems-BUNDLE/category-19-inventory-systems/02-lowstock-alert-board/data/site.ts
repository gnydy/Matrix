export const site = {
  "title": "LowStock Alert Board",
  "slug": "02-lowstock-alert-board",
  "category": "Inventory Systems",
  "description": "Low stock monitoring for fast-moving items. Includes frontend screens and backend mock API routes.",
  "layout": "command",
  "layoutDescription": "Left command sidebar, KPI rail, dense admin workspace.",
  "dark": "#111827",
  "accent": "#a78bfa",
  "soft": "#ede9fe",
  "modules": [
    {
      "slug": "products",
      "title": "Products",
      "description": "Products module designed for LowStock Alert Board."
    },
    {
      "slug": "warehouses",
      "title": "Warehouses",
      "description": "Warehouses module designed for LowStock Alert Board."
    },
    {
      "slug": "movements",
      "title": "Movements",
      "description": "Movements module designed for LowStock Alert Board."
    },
    {
      "slug": "suppliers",
      "title": "Suppliers",
      "description": "Suppliers module designed for LowStock Alert Board."
    },
    {
      "slug": "purchase-orders",
      "title": "Purchase Orders",
      "description": "Purchase Orders module designed for LowStock Alert Board."
    },
    {
      "slug": "alerts",
      "title": "Alerts",
      "description": "Alerts module designed for LowStock Alert Board."
    },
    {
      "slug": "counts",
      "title": "Counts",
      "description": "Counts module designed for LowStock Alert Board."
    },
    {
      "slug": "settings",
      "title": "Settings",
      "description": "Settings module designed for LowStock Alert Board."
    },
    {
      "slug": "lowstock",
      "title": "Lowstock",
      "description": "Lowstock module designed for LowStock Alert Board."
    },
    {
      "slug": "alert",
      "title": "Alert",
      "description": "Alert module designed for LowStock Alert Board."
    }
  ],
  "stats": [
    {
      "label": "SKUs",
      "value": "42",
      "trend": "+3% this week"
    },
    {
      "label": "Warehouses",
      "value": "83%",
      "trend": "+4% this week"
    },
    {
      "label": "Low stock",
      "value": "70",
      "trend": "+5% this week"
    },
    {
      "label": "POs",
      "value": "84",
      "trend": "+6% this week"
    }
  ],
  "records": [
    {
      "id": "IN-02-001",
      "title": "Movements record 1",
      "meta": "Inventory Systems workflow \u00b7 owner A",
      "status": "Review",
      "amount": "250"
    },
    {
      "id": "IN-02-002",
      "title": "Suppliers record 2",
      "meta": "Inventory Systems workflow \u00b7 owner B",
      "status": "Approved",
      "amount": "500"
    },
    {
      "id": "IN-02-003",
      "title": "Purchase Orders record 3",
      "meta": "Inventory Systems workflow \u00b7 owner C",
      "status": "Blocked",
      "amount": "750"
    },
    {
      "id": "IN-02-004",
      "title": "Alerts record 4",
      "meta": "Inventory Systems workflow \u00b7 owner D",
      "status": "Synced",
      "amount": "1,000"
    },
    {
      "id": "IN-02-005",
      "title": "Counts record 5",
      "meta": "Inventory Systems workflow \u00b7 owner E",
      "status": "Active",
      "amount": "1,250"
    },
    {
      "id": "IN-02-006",
      "title": "Settings record 6",
      "meta": "Inventory Systems workflow \u00b7 owner F",
      "status": "Pending",
      "amount": "1,500"
    },
    {
      "id": "IN-02-007",
      "title": "Lowstock record 7",
      "meta": "Inventory Systems workflow \u00b7 owner G",
      "status": "Review",
      "amount": "1,750"
    },
    {
      "id": "IN-02-008",
      "title": "Alert record 8",
      "meta": "Inventory Systems workflow \u00b7 owner H",
      "status": "Approved",
      "amount": "2,000"
    }
  ]
} as const;
