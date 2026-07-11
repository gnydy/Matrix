export const site = {
  "title": "AutoParts Inventory",
  "slug": "09-autoparts-inventory",
  "category": "Inventory Systems",
  "description": "Spare parts stock and fitment catalog. Includes frontend screens and backend mock API routes.",
  "layout": "desktop",
  "layoutDescription": "Desktop shell with window chrome and module launcher.",
  "dark": "#083344",
  "accent": "#06b6d4",
  "soft": "#cffafe",
  "modules": [
    {
      "slug": "products",
      "title": "Products",
      "description": "Products module designed for AutoParts Inventory."
    },
    {
      "slug": "warehouses",
      "title": "Warehouses",
      "description": "Warehouses module designed for AutoParts Inventory."
    },
    {
      "slug": "movements",
      "title": "Movements",
      "description": "Movements module designed for AutoParts Inventory."
    },
    {
      "slug": "suppliers",
      "title": "Suppliers",
      "description": "Suppliers module designed for AutoParts Inventory."
    },
    {
      "slug": "purchase-orders",
      "title": "Purchase Orders",
      "description": "Purchase Orders module designed for AutoParts Inventory."
    },
    {
      "slug": "alerts",
      "title": "Alerts",
      "description": "Alerts module designed for AutoParts Inventory."
    },
    {
      "slug": "counts",
      "title": "Counts",
      "description": "Counts module designed for AutoParts Inventory."
    },
    {
      "slug": "settings",
      "title": "Settings",
      "description": "Settings module designed for AutoParts Inventory."
    },
    {
      "slug": "autoparts",
      "title": "Autoparts",
      "description": "Autoparts module designed for AutoParts Inventory."
    },
    {
      "slug": "inventory",
      "title": "Inventory",
      "description": "Inventory module designed for AutoParts Inventory."
    }
  ],
  "stats": [
    {
      "label": "SKUs",
      "value": "189",
      "trend": "+10% this week"
    },
    {
      "label": "Warehouses",
      "value": "90%",
      "trend": "+2% this week"
    },
    {
      "label": "Low stock",
      "value": "315",
      "trend": "+3% this week"
    },
    {
      "label": "POs",
      "value": "378",
      "trend": "+4% this week"
    }
  ],
  "records": [
    {
      "id": "IN-09-001",
      "title": "Inventory record 1",
      "meta": "Inventory Systems workflow \u00b7 owner A",
      "status": "Approved",
      "amount": "1,125"
    },
    {
      "id": "IN-09-002",
      "title": "Products record 2",
      "meta": "Inventory Systems workflow \u00b7 owner B",
      "status": "Blocked",
      "amount": "2,250"
    },
    {
      "id": "IN-09-003",
      "title": "Warehouses record 3",
      "meta": "Inventory Systems workflow \u00b7 owner C",
      "status": "Synced",
      "amount": "3,375"
    },
    {
      "id": "IN-09-004",
      "title": "Movements record 4",
      "meta": "Inventory Systems workflow \u00b7 owner D",
      "status": "Active",
      "amount": "4,500"
    },
    {
      "id": "IN-09-005",
      "title": "Suppliers record 5",
      "meta": "Inventory Systems workflow \u00b7 owner E",
      "status": "Pending",
      "amount": "5,625"
    },
    {
      "id": "IN-09-006",
      "title": "Purchase Orders record 6",
      "meta": "Inventory Systems workflow \u00b7 owner F",
      "status": "Review",
      "amount": "6,750"
    },
    {
      "id": "IN-09-007",
      "title": "Alerts record 7",
      "meta": "Inventory Systems workflow \u00b7 owner G",
      "status": "Approved",
      "amount": "7,875"
    },
    {
      "id": "IN-09-008",
      "title": "Counts record 8",
      "meta": "Inventory Systems workflow \u00b7 owner H",
      "status": "Blocked",
      "amount": "9,000"
    }
  ]
} as const;
