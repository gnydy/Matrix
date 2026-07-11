export const site = {
  "title": "ColdStorage Inventory",
  "slug": "06-coldstorage-inventory",
  "category": "Inventory Systems",
  "description": "Temperature-sensitive stock dashboard. Includes frontend screens and backend mock API routes.",
  "layout": "cards",
  "layoutDescription": "Executive card grid with insights and feature tiles.",
  "dark": "#052e16",
  "accent": "#22c55e",
  "soft": "#dcfce7",
  "modules": [
    {
      "slug": "products",
      "title": "Products",
      "description": "Products module designed for ColdStorage Inventory."
    },
    {
      "slug": "warehouses",
      "title": "Warehouses",
      "description": "Warehouses module designed for ColdStorage Inventory."
    },
    {
      "slug": "movements",
      "title": "Movements",
      "description": "Movements module designed for ColdStorage Inventory."
    },
    {
      "slug": "suppliers",
      "title": "Suppliers",
      "description": "Suppliers module designed for ColdStorage Inventory."
    },
    {
      "slug": "purchase-orders",
      "title": "Purchase Orders",
      "description": "Purchase Orders module designed for ColdStorage Inventory."
    },
    {
      "slug": "alerts",
      "title": "Alerts",
      "description": "Alerts module designed for ColdStorage Inventory."
    },
    {
      "slug": "counts",
      "title": "Counts",
      "description": "Counts module designed for ColdStorage Inventory."
    },
    {
      "slug": "settings",
      "title": "Settings",
      "description": "Settings module designed for ColdStorage Inventory."
    },
    {
      "slug": "coldstorage",
      "title": "Coldstorage",
      "description": "Coldstorage module designed for ColdStorage Inventory."
    },
    {
      "slug": "inventory",
      "title": "Inventory",
      "description": "Inventory module designed for ColdStorage Inventory."
    }
  ],
  "stats": [
    {
      "label": "SKUs",
      "value": "126",
      "trend": "+7% this week"
    },
    {
      "label": "Warehouses",
      "value": "87%",
      "trend": "+8% this week"
    },
    {
      "label": "Low stock",
      "value": "210",
      "trend": "+9% this week"
    },
    {
      "label": "POs",
      "value": "252",
      "trend": "+10% this week"
    }
  ],
  "records": [
    {
      "id": "IN-06-001",
      "title": "Counts record 1",
      "meta": "Inventory Systems workflow \u00b7 owner A",
      "status": "Active",
      "amount": "750"
    },
    {
      "id": "IN-06-002",
      "title": "Settings record 2",
      "meta": "Inventory Systems workflow \u00b7 owner B",
      "status": "Pending",
      "amount": "1,500"
    },
    {
      "id": "IN-06-003",
      "title": "Coldstorage record 3",
      "meta": "Inventory Systems workflow \u00b7 owner C",
      "status": "Review",
      "amount": "2,250"
    },
    {
      "id": "IN-06-004",
      "title": "Inventory record 4",
      "meta": "Inventory Systems workflow \u00b7 owner D",
      "status": "Approved",
      "amount": "3,000"
    },
    {
      "id": "IN-06-005",
      "title": "Products record 5",
      "meta": "Inventory Systems workflow \u00b7 owner E",
      "status": "Blocked",
      "amount": "3,750"
    },
    {
      "id": "IN-06-006",
      "title": "Warehouses record 6",
      "meta": "Inventory Systems workflow \u00b7 owner F",
      "status": "Synced",
      "amount": "4,500"
    },
    {
      "id": "IN-06-007",
      "title": "Movements record 7",
      "meta": "Inventory Systems workflow \u00b7 owner G",
      "status": "Active",
      "amount": "5,250"
    },
    {
      "id": "IN-06-008",
      "title": "Suppliers record 8",
      "meta": "Inventory Systems workflow \u00b7 owner H",
      "status": "Pending",
      "amount": "6,000"
    }
  ]
} as const;
