export const site = {
  "title": "BarcodeStock Counter",
  "slug": "05-barcodestock-counter",
  "category": "Inventory Systems",
  "description": "Barcode-first stock control UI. Includes frontend screens and backend mock API routes.",
  "layout": "dense",
  "layoutDescription": "Data-heavy table cockpit with filters and status chips.",
  "dark": "#0c0a09",
  "accent": "#fb7185",
  "soft": "#ffe4e6",
  "modules": [
    {
      "slug": "products",
      "title": "Products",
      "description": "Products module designed for BarcodeStock Counter."
    },
    {
      "slug": "warehouses",
      "title": "Warehouses",
      "description": "Warehouses module designed for BarcodeStock Counter."
    },
    {
      "slug": "movements",
      "title": "Movements",
      "description": "Movements module designed for BarcodeStock Counter."
    },
    {
      "slug": "suppliers",
      "title": "Suppliers",
      "description": "Suppliers module designed for BarcodeStock Counter."
    },
    {
      "slug": "purchase-orders",
      "title": "Purchase Orders",
      "description": "Purchase Orders module designed for BarcodeStock Counter."
    },
    {
      "slug": "alerts",
      "title": "Alerts",
      "description": "Alerts module designed for BarcodeStock Counter."
    },
    {
      "slug": "counts",
      "title": "Counts",
      "description": "Counts module designed for BarcodeStock Counter."
    },
    {
      "slug": "settings",
      "title": "Settings",
      "description": "Settings module designed for BarcodeStock Counter."
    },
    {
      "slug": "barcodestock",
      "title": "Barcodestock",
      "description": "Barcodestock module designed for BarcodeStock Counter."
    },
    {
      "slug": "counter",
      "title": "Counter",
      "description": "Counter module designed for BarcodeStock Counter."
    }
  ],
  "stats": [
    {
      "label": "SKUs",
      "value": "105",
      "trend": "+6% this week"
    },
    {
      "label": "Warehouses",
      "value": "86%",
      "trend": "+7% this week"
    },
    {
      "label": "Low stock",
      "value": "175",
      "trend": "+8% this week"
    },
    {
      "label": "POs",
      "value": "210",
      "trend": "+9% this week"
    }
  ],
  "records": [
    {
      "id": "IN-05-001",
      "title": "Alerts record 1",
      "meta": "Inventory Systems workflow \u00b7 owner A",
      "status": "Synced",
      "amount": "625"
    },
    {
      "id": "IN-05-002",
      "title": "Counts record 2",
      "meta": "Inventory Systems workflow \u00b7 owner B",
      "status": "Active",
      "amount": "1,250"
    },
    {
      "id": "IN-05-003",
      "title": "Settings record 3",
      "meta": "Inventory Systems workflow \u00b7 owner C",
      "status": "Pending",
      "amount": "1,875"
    },
    {
      "id": "IN-05-004",
      "title": "Barcodestock record 4",
      "meta": "Inventory Systems workflow \u00b7 owner D",
      "status": "Review",
      "amount": "2,500"
    },
    {
      "id": "IN-05-005",
      "title": "Counter record 5",
      "meta": "Inventory Systems workflow \u00b7 owner E",
      "status": "Approved",
      "amount": "3,125"
    },
    {
      "id": "IN-05-006",
      "title": "Products record 6",
      "meta": "Inventory Systems workflow \u00b7 owner F",
      "status": "Blocked",
      "amount": "3,750"
    },
    {
      "id": "IN-05-007",
      "title": "Warehouses record 7",
      "meta": "Inventory Systems workflow \u00b7 owner G",
      "status": "Synced",
      "amount": "4,375"
    },
    {
      "id": "IN-05-008",
      "title": "Movements record 8",
      "meta": "Inventory Systems workflow \u00b7 owner H",
      "status": "Active",
      "amount": "5,000"
    }
  ]
} as const;
