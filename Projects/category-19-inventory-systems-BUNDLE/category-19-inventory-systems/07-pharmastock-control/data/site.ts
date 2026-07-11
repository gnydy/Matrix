export const site = {
  "title": "PharmaStock Control",
  "slug": "07-pharmastock-control",
  "category": "Inventory Systems",
  "description": "Pharmacy inventory with expiry alerts. Includes frontend screens and backend mock API routes.",
  "layout": "timeline",
  "layoutDescription": "Timeline and milestone driven workflow.",
  "dark": "#1e1b4b",
  "accent": "#818cf8",
  "soft": "#e0e7ff",
  "modules": [
    {
      "slug": "products",
      "title": "Products",
      "description": "Products module designed for PharmaStock Control."
    },
    {
      "slug": "warehouses",
      "title": "Warehouses",
      "description": "Warehouses module designed for PharmaStock Control."
    },
    {
      "slug": "movements",
      "title": "Movements",
      "description": "Movements module designed for PharmaStock Control."
    },
    {
      "slug": "suppliers",
      "title": "Suppliers",
      "description": "Suppliers module designed for PharmaStock Control."
    },
    {
      "slug": "purchase-orders",
      "title": "Purchase Orders",
      "description": "Purchase Orders module designed for PharmaStock Control."
    },
    {
      "slug": "alerts",
      "title": "Alerts",
      "description": "Alerts module designed for PharmaStock Control."
    },
    {
      "slug": "counts",
      "title": "Counts",
      "description": "Counts module designed for PharmaStock Control."
    },
    {
      "slug": "settings",
      "title": "Settings",
      "description": "Settings module designed for PharmaStock Control."
    },
    {
      "slug": "pharmastock",
      "title": "Pharmastock",
      "description": "Pharmastock module designed for PharmaStock Control."
    },
    {
      "slug": "control",
      "title": "Control",
      "description": "Control module designed for PharmaStock Control."
    }
  ],
  "stats": [
    {
      "label": "SKUs",
      "value": "147",
      "trend": "+8% this week"
    },
    {
      "label": "Warehouses",
      "value": "88%",
      "trend": "+9% this week"
    },
    {
      "label": "Low stock",
      "value": "245",
      "trend": "+10% this week"
    },
    {
      "label": "POs",
      "value": "294",
      "trend": "+2% this week"
    }
  ],
  "records": [
    {
      "id": "IN-07-001",
      "title": "Settings record 1",
      "meta": "Inventory Systems workflow \u00b7 owner A",
      "status": "Pending",
      "amount": "875"
    },
    {
      "id": "IN-07-002",
      "title": "Pharmastock record 2",
      "meta": "Inventory Systems workflow \u00b7 owner B",
      "status": "Review",
      "amount": "1,750"
    },
    {
      "id": "IN-07-003",
      "title": "Control record 3",
      "meta": "Inventory Systems workflow \u00b7 owner C",
      "status": "Approved",
      "amount": "2,625"
    },
    {
      "id": "IN-07-004",
      "title": "Products record 4",
      "meta": "Inventory Systems workflow \u00b7 owner D",
      "status": "Blocked",
      "amount": "3,500"
    },
    {
      "id": "IN-07-005",
      "title": "Warehouses record 5",
      "meta": "Inventory Systems workflow \u00b7 owner E",
      "status": "Synced",
      "amount": "4,375"
    },
    {
      "id": "IN-07-006",
      "title": "Movements record 6",
      "meta": "Inventory Systems workflow \u00b7 owner F",
      "status": "Active",
      "amount": "5,250"
    },
    {
      "id": "IN-07-007",
      "title": "Suppliers record 7",
      "meta": "Inventory Systems workflow \u00b7 owner G",
      "status": "Pending",
      "amount": "6,125"
    },
    {
      "id": "IN-07-008",
      "title": "Purchase Orders record 8",
      "meta": "Inventory Systems workflow \u00b7 owner H",
      "status": "Review",
      "amount": "7,000"
    }
  ]
} as const;
