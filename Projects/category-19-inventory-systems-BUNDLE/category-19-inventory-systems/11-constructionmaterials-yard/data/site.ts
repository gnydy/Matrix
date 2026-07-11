export const site = {
  "title": "ConstructionMaterials Yard",
  "slug": "11-constructionmaterials-yard",
  "category": "Inventory Systems",
  "description": "Materials, tools, and site transfers. Includes frontend screens and backend mock API routes.",
  "layout": "chat",
  "layoutDescription": "Conversation-first UI with inbox and analytics panels.",
  "dark": "#4a044e",
  "accent": "#e879f9",
  "soft": "#fae8ff",
  "modules": [
    {
      "slug": "products",
      "title": "Products",
      "description": "Products module designed for ConstructionMaterials Yard."
    },
    {
      "slug": "warehouses",
      "title": "Warehouses",
      "description": "Warehouses module designed for ConstructionMaterials Yard."
    },
    {
      "slug": "movements",
      "title": "Movements",
      "description": "Movements module designed for ConstructionMaterials Yard."
    },
    {
      "slug": "suppliers",
      "title": "Suppliers",
      "description": "Suppliers module designed for ConstructionMaterials Yard."
    },
    {
      "slug": "purchase-orders",
      "title": "Purchase Orders",
      "description": "Purchase Orders module designed for ConstructionMaterials Yard."
    },
    {
      "slug": "alerts",
      "title": "Alerts",
      "description": "Alerts module designed for ConstructionMaterials Yard."
    },
    {
      "slug": "counts",
      "title": "Counts",
      "description": "Counts module designed for ConstructionMaterials Yard."
    },
    {
      "slug": "settings",
      "title": "Settings",
      "description": "Settings module designed for ConstructionMaterials Yard."
    },
    {
      "slug": "constructionmaterials",
      "title": "Constructionmaterials",
      "description": "Constructionmaterials module designed for ConstructionMaterials Yard."
    },
    {
      "slug": "yard",
      "title": "Yard",
      "description": "Yard module designed for ConstructionMaterials Yard."
    }
  ],
  "stats": [
    {
      "label": "SKUs",
      "value": "231",
      "trend": "+3% this week"
    },
    {
      "label": "Warehouses",
      "value": "92%",
      "trend": "+4% this week"
    },
    {
      "label": "Low stock",
      "value": "385",
      "trend": "+5% this week"
    },
    {
      "label": "POs",
      "value": "462",
      "trend": "+6% this week"
    }
  ],
  "records": [
    {
      "id": "IN-11-001",
      "title": "Warehouses record 1",
      "meta": "Inventory Systems workflow \u00b7 owner A",
      "status": "Synced",
      "amount": "1,375"
    },
    {
      "id": "IN-11-002",
      "title": "Movements record 2",
      "meta": "Inventory Systems workflow \u00b7 owner B",
      "status": "Active",
      "amount": "2,750"
    },
    {
      "id": "IN-11-003",
      "title": "Suppliers record 3",
      "meta": "Inventory Systems workflow \u00b7 owner C",
      "status": "Pending",
      "amount": "4,125"
    },
    {
      "id": "IN-11-004",
      "title": "Purchase Orders record 4",
      "meta": "Inventory Systems workflow \u00b7 owner D",
      "status": "Review",
      "amount": "5,500"
    },
    {
      "id": "IN-11-005",
      "title": "Alerts record 5",
      "meta": "Inventory Systems workflow \u00b7 owner E",
      "status": "Approved",
      "amount": "6,875"
    },
    {
      "id": "IN-11-006",
      "title": "Counts record 6",
      "meta": "Inventory Systems workflow \u00b7 owner F",
      "status": "Blocked",
      "amount": "8,250"
    },
    {
      "id": "IN-11-007",
      "title": "Settings record 7",
      "meta": "Inventory Systems workflow \u00b7 owner G",
      "status": "Synced",
      "amount": "9,625"
    },
    {
      "id": "IN-11-008",
      "title": "Constructionmaterials record 8",
      "meta": "Inventory Systems workflow \u00b7 owner H",
      "status": "Active",
      "amount": "11,000"
    }
  ]
} as const;
