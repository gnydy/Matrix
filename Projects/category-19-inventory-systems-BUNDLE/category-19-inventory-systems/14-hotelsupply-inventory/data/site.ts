export const site = {
  "title": "HotelSupply Inventory",
  "slug": "14-hotelsupply-inventory",
  "category": "Inventory Systems",
  "description": "Hotel linens, amenities and consumables. Includes frontend screens and backend mock API routes.",
  "layout": "kanban",
  "layoutDescription": "Board-style operational cards with stages and queues.",
  "dark": "#064e3b",
  "accent": "#2dd4bf",
  "soft": "#ccfbf1",
  "modules": [
    {
      "slug": "products",
      "title": "Products",
      "description": "Products module designed for HotelSupply Inventory."
    },
    {
      "slug": "warehouses",
      "title": "Warehouses",
      "description": "Warehouses module designed for HotelSupply Inventory."
    },
    {
      "slug": "movements",
      "title": "Movements",
      "description": "Movements module designed for HotelSupply Inventory."
    },
    {
      "slug": "suppliers",
      "title": "Suppliers",
      "description": "Suppliers module designed for HotelSupply Inventory."
    },
    {
      "slug": "purchase-orders",
      "title": "Purchase Orders",
      "description": "Purchase Orders module designed for HotelSupply Inventory."
    },
    {
      "slug": "alerts",
      "title": "Alerts",
      "description": "Alerts module designed for HotelSupply Inventory."
    },
    {
      "slug": "counts",
      "title": "Counts",
      "description": "Counts module designed for HotelSupply Inventory."
    },
    {
      "slug": "settings",
      "title": "Settings",
      "description": "Settings module designed for HotelSupply Inventory."
    },
    {
      "slug": "hotelsupply",
      "title": "Hotelsupply",
      "description": "Hotelsupply module designed for HotelSupply Inventory."
    },
    {
      "slug": "inventory",
      "title": "Inventory",
      "description": "Inventory module designed for HotelSupply Inventory."
    }
  ],
  "stats": [
    {
      "label": "SKUs",
      "value": "294",
      "trend": "+6% this week"
    },
    {
      "label": "Warehouses",
      "value": "95%",
      "trend": "+7% this week"
    },
    {
      "label": "Low stock",
      "value": "490",
      "trend": "+8% this week"
    },
    {
      "label": "POs",
      "value": "588",
      "trend": "+9% this week"
    }
  ],
  "records": [
    {
      "id": "IN-14-001",
      "title": "Purchase Orders record 1",
      "meta": "Inventory Systems workflow \u00b7 owner A",
      "status": "Review",
      "amount": "1,750"
    },
    {
      "id": "IN-14-002",
      "title": "Alerts record 2",
      "meta": "Inventory Systems workflow \u00b7 owner B",
      "status": "Approved",
      "amount": "3,500"
    },
    {
      "id": "IN-14-003",
      "title": "Counts record 3",
      "meta": "Inventory Systems workflow \u00b7 owner C",
      "status": "Blocked",
      "amount": "5,250"
    },
    {
      "id": "IN-14-004",
      "title": "Settings record 4",
      "meta": "Inventory Systems workflow \u00b7 owner D",
      "status": "Synced",
      "amount": "7,000"
    },
    {
      "id": "IN-14-005",
      "title": "Hotelsupply record 5",
      "meta": "Inventory Systems workflow \u00b7 owner E",
      "status": "Active",
      "amount": "8,750"
    },
    {
      "id": "IN-14-006",
      "title": "Inventory record 6",
      "meta": "Inventory Systems workflow \u00b7 owner F",
      "status": "Pending",
      "amount": "10,500"
    },
    {
      "id": "IN-14-007",
      "title": "Products record 7",
      "meta": "Inventory Systems workflow \u00b7 owner G",
      "status": "Review",
      "amount": "12,250"
    },
    {
      "id": "IN-14-008",
      "title": "Warehouses record 8",
      "meta": "Inventory Systems workflow \u00b7 owner H",
      "status": "Approved",
      "amount": "14,000"
    }
  ]
} as const;
