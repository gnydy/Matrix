export const site = {
  "title": "MultiWarehouse HQ",
  "slug": "04-multiwarehouse-hq",
  "category": "Inventory Systems",
  "description": "Multi-location warehouse tracking. Includes frontend screens and backend mock API routes.",
  "layout": "kanban",
  "layoutDescription": "Board-style operational cards with stages and queues.",
  "dark": "#18181b",
  "accent": "#f59e0b",
  "soft": "#fef3c7",
  "modules": [
    {
      "slug": "products",
      "title": "Products",
      "description": "Products module designed for MultiWarehouse HQ."
    },
    {
      "slug": "warehouses",
      "title": "Warehouses",
      "description": "Warehouses module designed for MultiWarehouse HQ."
    },
    {
      "slug": "movements",
      "title": "Movements",
      "description": "Movements module designed for MultiWarehouse HQ."
    },
    {
      "slug": "suppliers",
      "title": "Suppliers",
      "description": "Suppliers module designed for MultiWarehouse HQ."
    },
    {
      "slug": "purchase-orders",
      "title": "Purchase Orders",
      "description": "Purchase Orders module designed for MultiWarehouse HQ."
    },
    {
      "slug": "alerts",
      "title": "Alerts",
      "description": "Alerts module designed for MultiWarehouse HQ."
    },
    {
      "slug": "counts",
      "title": "Counts",
      "description": "Counts module designed for MultiWarehouse HQ."
    },
    {
      "slug": "settings",
      "title": "Settings",
      "description": "Settings module designed for MultiWarehouse HQ."
    },
    {
      "slug": "multiwarehouse",
      "title": "Multiwarehouse",
      "description": "Multiwarehouse module designed for MultiWarehouse HQ."
    },
    {
      "slug": "hq",
      "title": "Hq",
      "description": "Hq module designed for MultiWarehouse HQ."
    }
  ],
  "stats": [
    {
      "label": "SKUs",
      "value": "84",
      "trend": "+5% this week"
    },
    {
      "label": "Warehouses",
      "value": "85%",
      "trend": "+6% this week"
    },
    {
      "label": "Low stock",
      "value": "140",
      "trend": "+7% this week"
    },
    {
      "label": "POs",
      "value": "168",
      "trend": "+8% this week"
    }
  ],
  "records": [
    {
      "id": "IN-04-001",
      "title": "Purchase Orders record 1",
      "meta": "Inventory Systems workflow \u00b7 owner A",
      "status": "Blocked",
      "amount": "500"
    },
    {
      "id": "IN-04-002",
      "title": "Alerts record 2",
      "meta": "Inventory Systems workflow \u00b7 owner B",
      "status": "Synced",
      "amount": "1,000"
    },
    {
      "id": "IN-04-003",
      "title": "Counts record 3",
      "meta": "Inventory Systems workflow \u00b7 owner C",
      "status": "Active",
      "amount": "1,500"
    },
    {
      "id": "IN-04-004",
      "title": "Settings record 4",
      "meta": "Inventory Systems workflow \u00b7 owner D",
      "status": "Pending",
      "amount": "2,000"
    },
    {
      "id": "IN-04-005",
      "title": "Multiwarehouse record 5",
      "meta": "Inventory Systems workflow \u00b7 owner E",
      "status": "Review",
      "amount": "2,500"
    },
    {
      "id": "IN-04-006",
      "title": "Hq record 6",
      "meta": "Inventory Systems workflow \u00b7 owner F",
      "status": "Approved",
      "amount": "3,000"
    },
    {
      "id": "IN-04-007",
      "title": "Products record 7",
      "meta": "Inventory Systems workflow \u00b7 owner G",
      "status": "Blocked",
      "amount": "3,500"
    },
    {
      "id": "IN-04-008",
      "title": "Warehouses record 8",
      "meta": "Inventory Systems workflow \u00b7 owner H",
      "status": "Synced",
      "amount": "4,000"
    }
  ]
} as const;
