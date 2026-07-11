export const site = {
  "title": "ClinicSupplies Tracker",
  "slug": "15-clinicsupplies-tracker",
  "category": "Inventory Systems",
  "description": "Medical supplies and department requests. Includes frontend screens and backend mock API routes.",
  "layout": "dense",
  "layoutDescription": "Data-heavy table cockpit with filters and status chips.",
  "dark": "#7f1d1d",
  "accent": "#f87171",
  "soft": "#fee2e2",
  "modules": [
    {
      "slug": "products",
      "title": "Products",
      "description": "Products module designed for ClinicSupplies Tracker."
    },
    {
      "slug": "warehouses",
      "title": "Warehouses",
      "description": "Warehouses module designed for ClinicSupplies Tracker."
    },
    {
      "slug": "movements",
      "title": "Movements",
      "description": "Movements module designed for ClinicSupplies Tracker."
    },
    {
      "slug": "suppliers",
      "title": "Suppliers",
      "description": "Suppliers module designed for ClinicSupplies Tracker."
    },
    {
      "slug": "purchase-orders",
      "title": "Purchase Orders",
      "description": "Purchase Orders module designed for ClinicSupplies Tracker."
    },
    {
      "slug": "alerts",
      "title": "Alerts",
      "description": "Alerts module designed for ClinicSupplies Tracker."
    },
    {
      "slug": "counts",
      "title": "Counts",
      "description": "Counts module designed for ClinicSupplies Tracker."
    },
    {
      "slug": "settings",
      "title": "Settings",
      "description": "Settings module designed for ClinicSupplies Tracker."
    },
    {
      "slug": "clinicsupplies",
      "title": "Clinicsupplies",
      "description": "Clinicsupplies module designed for ClinicSupplies Tracker."
    },
    {
      "slug": "tracker",
      "title": "Tracker",
      "description": "Tracker module designed for ClinicSupplies Tracker."
    }
  ],
  "stats": [
    {
      "label": "SKUs",
      "value": "315",
      "trend": "+7% this week"
    },
    {
      "label": "Warehouses",
      "value": "96%",
      "trend": "+8% this week"
    },
    {
      "label": "Low stock",
      "value": "525",
      "trend": "+9% this week"
    },
    {
      "label": "POs",
      "value": "630",
      "trend": "+10% this week"
    }
  ],
  "records": [
    {
      "id": "IN-15-001",
      "title": "Alerts record 1",
      "meta": "Inventory Systems workflow \u00b7 owner A",
      "status": "Approved",
      "amount": "1,875"
    },
    {
      "id": "IN-15-002",
      "title": "Counts record 2",
      "meta": "Inventory Systems workflow \u00b7 owner B",
      "status": "Blocked",
      "amount": "3,750"
    },
    {
      "id": "IN-15-003",
      "title": "Settings record 3",
      "meta": "Inventory Systems workflow \u00b7 owner C",
      "status": "Synced",
      "amount": "5,625"
    },
    {
      "id": "IN-15-004",
      "title": "Clinicsupplies record 4",
      "meta": "Inventory Systems workflow \u00b7 owner D",
      "status": "Active",
      "amount": "7,500"
    },
    {
      "id": "IN-15-005",
      "title": "Tracker record 5",
      "meta": "Inventory Systems workflow \u00b7 owner E",
      "status": "Pending",
      "amount": "9,375"
    },
    {
      "id": "IN-15-006",
      "title": "Products record 6",
      "meta": "Inventory Systems workflow \u00b7 owner F",
      "status": "Review",
      "amount": "11,250"
    },
    {
      "id": "IN-15-007",
      "title": "Warehouses record 7",
      "meta": "Inventory Systems workflow \u00b7 owner G",
      "status": "Approved",
      "amount": "13,125"
    },
    {
      "id": "IN-15-008",
      "title": "Movements record 8",
      "meta": "Inventory Systems workflow \u00b7 owner H",
      "status": "Blocked",
      "amount": "15,000"
    }
  ]
} as const;
