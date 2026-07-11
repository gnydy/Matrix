export const site = {
  "title": "RetailShelf Replenishment",
  "slug": "08-retailshelf-replenishment",
  "category": "Inventory Systems",
  "description": "Retail shelf refill and branch transfer UI. Includes frontend screens and backend mock API routes.",
  "layout": "mobile",
  "layoutDescription": "Mobile-device preview and app-screen gallery.",
  "dark": "#451a03",
  "accent": "#f97316",
  "soft": "#ffedd5",
  "modules": [
    {
      "slug": "products",
      "title": "Products",
      "description": "Products module designed for RetailShelf Replenishment."
    },
    {
      "slug": "warehouses",
      "title": "Warehouses",
      "description": "Warehouses module designed for RetailShelf Replenishment."
    },
    {
      "slug": "movements",
      "title": "Movements",
      "description": "Movements module designed for RetailShelf Replenishment."
    },
    {
      "slug": "suppliers",
      "title": "Suppliers",
      "description": "Suppliers module designed for RetailShelf Replenishment."
    },
    {
      "slug": "purchase-orders",
      "title": "Purchase Orders",
      "description": "Purchase Orders module designed for RetailShelf Replenishment."
    },
    {
      "slug": "alerts",
      "title": "Alerts",
      "description": "Alerts module designed for RetailShelf Replenishment."
    },
    {
      "slug": "counts",
      "title": "Counts",
      "description": "Counts module designed for RetailShelf Replenishment."
    },
    {
      "slug": "settings",
      "title": "Settings",
      "description": "Settings module designed for RetailShelf Replenishment."
    },
    {
      "slug": "retailshelf",
      "title": "Retailshelf",
      "description": "Retailshelf module designed for RetailShelf Replenishment."
    },
    {
      "slug": "replenishment",
      "title": "Replenishment",
      "description": "Replenishment module designed for RetailShelf Replenishment."
    }
  ],
  "stats": [
    {
      "label": "SKUs",
      "value": "168",
      "trend": "+9% this week"
    },
    {
      "label": "Warehouses",
      "value": "89%",
      "trend": "+10% this week"
    },
    {
      "label": "Low stock",
      "value": "280",
      "trend": "+2% this week"
    },
    {
      "label": "POs",
      "value": "336",
      "trend": "+3% this week"
    }
  ],
  "records": [
    {
      "id": "IN-08-001",
      "title": "Retailshelf record 1",
      "meta": "Inventory Systems workflow \u00b7 owner A",
      "status": "Review",
      "amount": "1,000"
    },
    {
      "id": "IN-08-002",
      "title": "Replenishment record 2",
      "meta": "Inventory Systems workflow \u00b7 owner B",
      "status": "Approved",
      "amount": "2,000"
    },
    {
      "id": "IN-08-003",
      "title": "Products record 3",
      "meta": "Inventory Systems workflow \u00b7 owner C",
      "status": "Blocked",
      "amount": "3,000"
    },
    {
      "id": "IN-08-004",
      "title": "Warehouses record 4",
      "meta": "Inventory Systems workflow \u00b7 owner D",
      "status": "Synced",
      "amount": "4,000"
    },
    {
      "id": "IN-08-005",
      "title": "Movements record 5",
      "meta": "Inventory Systems workflow \u00b7 owner E",
      "status": "Active",
      "amount": "5,000"
    },
    {
      "id": "IN-08-006",
      "title": "Suppliers record 6",
      "meta": "Inventory Systems workflow \u00b7 owner F",
      "status": "Pending",
      "amount": "6,000"
    },
    {
      "id": "IN-08-007",
      "title": "Purchase Orders record 7",
      "meta": "Inventory Systems workflow \u00b7 owner G",
      "status": "Review",
      "amount": "7,000"
    },
    {
      "id": "IN-08-008",
      "title": "Alerts record 8",
      "meta": "Inventory Systems workflow \u00b7 owner H",
      "status": "Approved",
      "amount": "8,000"
    }
  ]
} as const;
