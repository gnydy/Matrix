export const site = {
  "title": "StockPilot Warehouse",
  "slug": "01-stockpilot-warehouse",
  "category": "Inventory Systems",
  "description": "Warehouse product catalog and movement control. Includes frontend screens and backend mock API routes.",
  "layout": "chat",
  "layoutDescription": "Conversation-first UI with inbox and analytics panels.",
  "dark": "#0f172a",
  "accent": "#38bdf8",
  "soft": "#e0f2fe",
  "modules": [
    {
      "slug": "products",
      "title": "Products",
      "description": "Products module designed for StockPilot Warehouse."
    },
    {
      "slug": "warehouses",
      "title": "Warehouses",
      "description": "Warehouses module designed for StockPilot Warehouse."
    },
    {
      "slug": "movements",
      "title": "Movements",
      "description": "Movements module designed for StockPilot Warehouse."
    },
    {
      "slug": "suppliers",
      "title": "Suppliers",
      "description": "Suppliers module designed for StockPilot Warehouse."
    },
    {
      "slug": "purchase-orders",
      "title": "Purchase Orders",
      "description": "Purchase Orders module designed for StockPilot Warehouse."
    },
    {
      "slug": "alerts",
      "title": "Alerts",
      "description": "Alerts module designed for StockPilot Warehouse."
    },
    {
      "slug": "counts",
      "title": "Counts",
      "description": "Counts module designed for StockPilot Warehouse."
    },
    {
      "slug": "settings",
      "title": "Settings",
      "description": "Settings module designed for StockPilot Warehouse."
    },
    {
      "slug": "stockpilot",
      "title": "Stockpilot",
      "description": "Stockpilot module designed for StockPilot Warehouse."
    },
    {
      "slug": "warehouse",
      "title": "Warehouse",
      "description": "Warehouse module designed for StockPilot Warehouse."
    }
  ],
  "stats": [
    {
      "label": "SKUs",
      "value": "21",
      "trend": "+2% this week"
    },
    {
      "label": "Warehouses",
      "value": "82%",
      "trend": "+3% this week"
    },
    {
      "label": "Low stock",
      "value": "35",
      "trend": "+4% this week"
    },
    {
      "label": "POs",
      "value": "42",
      "trend": "+5% this week"
    }
  ],
  "records": [
    {
      "id": "IN-01-001",
      "title": "Warehouses record 1",
      "meta": "Inventory Systems workflow \u00b7 owner A",
      "status": "Pending",
      "amount": "125"
    },
    {
      "id": "IN-01-002",
      "title": "Movements record 2",
      "meta": "Inventory Systems workflow \u00b7 owner B",
      "status": "Review",
      "amount": "250"
    },
    {
      "id": "IN-01-003",
      "title": "Suppliers record 3",
      "meta": "Inventory Systems workflow \u00b7 owner C",
      "status": "Approved",
      "amount": "375"
    },
    {
      "id": "IN-01-004",
      "title": "Purchase Orders record 4",
      "meta": "Inventory Systems workflow \u00b7 owner D",
      "status": "Blocked",
      "amount": "500"
    },
    {
      "id": "IN-01-005",
      "title": "Alerts record 5",
      "meta": "Inventory Systems workflow \u00b7 owner E",
      "status": "Synced",
      "amount": "625"
    },
    {
      "id": "IN-01-006",
      "title": "Counts record 6",
      "meta": "Inventory Systems workflow \u00b7 owner F",
      "status": "Active",
      "amount": "750"
    },
    {
      "id": "IN-01-007",
      "title": "Settings record 7",
      "meta": "Inventory Systems workflow \u00b7 owner G",
      "status": "Pending",
      "amount": "875"
    },
    {
      "id": "IN-01-008",
      "title": "Stockpilot record 8",
      "meta": "Inventory Systems workflow \u00b7 owner H",
      "status": "Review",
      "amount": "1,000"
    }
  ]
} as const;
