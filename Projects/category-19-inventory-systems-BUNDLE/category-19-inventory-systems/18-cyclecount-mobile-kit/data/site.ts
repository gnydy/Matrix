export const site = {
  "title": "CycleCount Mobile Kit",
  "slug": "18-cyclecount-mobile-kit",
  "category": "Inventory Systems",
  "description": "Stocktaking screens and variance reports. Includes frontend screens and backend mock API routes.",
  "layout": "mobile",
  "layoutDescription": "Mobile-device preview and app-screen gallery.",
  "dark": "#022c22",
  "accent": "#84cc16",
  "soft": "#ecfccb",
  "modules": [
    {
      "slug": "products",
      "title": "Products",
      "description": "Products module designed for CycleCount Mobile Kit."
    },
    {
      "slug": "warehouses",
      "title": "Warehouses",
      "description": "Warehouses module designed for CycleCount Mobile Kit."
    },
    {
      "slug": "movements",
      "title": "Movements",
      "description": "Movements module designed for CycleCount Mobile Kit."
    },
    {
      "slug": "suppliers",
      "title": "Suppliers",
      "description": "Suppliers module designed for CycleCount Mobile Kit."
    },
    {
      "slug": "purchase-orders",
      "title": "Purchase Orders",
      "description": "Purchase Orders module designed for CycleCount Mobile Kit."
    },
    {
      "slug": "alerts",
      "title": "Alerts",
      "description": "Alerts module designed for CycleCount Mobile Kit."
    },
    {
      "slug": "counts",
      "title": "Counts",
      "description": "Counts module designed for CycleCount Mobile Kit."
    },
    {
      "slug": "settings",
      "title": "Settings",
      "description": "Settings module designed for CycleCount Mobile Kit."
    },
    {
      "slug": "cyclecount",
      "title": "Cyclecount",
      "description": "Cyclecount module designed for CycleCount Mobile Kit."
    },
    {
      "slug": "mobile",
      "title": "Mobile",
      "description": "Mobile module designed for CycleCount Mobile Kit."
    }
  ],
  "stats": [
    {
      "label": "SKUs",
      "value": "378",
      "trend": "+10% this week"
    },
    {
      "label": "Warehouses",
      "value": "84%",
      "trend": "+2% this week"
    },
    {
      "label": "Low stock",
      "value": "630",
      "trend": "+3% this week"
    },
    {
      "label": "POs",
      "value": "756",
      "trend": "+4% this week"
    }
  ],
  "records": [
    {
      "id": "IN-18-001",
      "title": "Cyclecount record 1",
      "meta": "Inventory Systems workflow \u00b7 owner A",
      "status": "Active",
      "amount": "2,250"
    },
    {
      "id": "IN-18-002",
      "title": "Mobile record 2",
      "meta": "Inventory Systems workflow \u00b7 owner B",
      "status": "Pending",
      "amount": "4,500"
    },
    {
      "id": "IN-18-003",
      "title": "Products record 3",
      "meta": "Inventory Systems workflow \u00b7 owner C",
      "status": "Review",
      "amount": "6,750"
    },
    {
      "id": "IN-18-004",
      "title": "Warehouses record 4",
      "meta": "Inventory Systems workflow \u00b7 owner D",
      "status": "Approved",
      "amount": "9,000"
    },
    {
      "id": "IN-18-005",
      "title": "Movements record 5",
      "meta": "Inventory Systems workflow \u00b7 owner E",
      "status": "Blocked",
      "amount": "11,250"
    },
    {
      "id": "IN-18-006",
      "title": "Suppliers record 6",
      "meta": "Inventory Systems workflow \u00b7 owner F",
      "status": "Synced",
      "amount": "13,500"
    },
    {
      "id": "IN-18-007",
      "title": "Purchase Orders record 7",
      "meta": "Inventory Systems workflow \u00b7 owner G",
      "status": "Active",
      "amount": "15,750"
    },
    {
      "id": "IN-18-008",
      "title": "Alerts record 8",
      "meta": "Inventory Systems workflow \u00b7 owner H",
      "status": "Pending",
      "amount": "18,000"
    }
  ]
} as const;
