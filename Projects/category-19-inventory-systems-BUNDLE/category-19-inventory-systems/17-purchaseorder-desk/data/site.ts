export const site = {
  "title": "PurchaseOrder Desk",
  "slug": "17-purchaseorder-desk",
  "category": "Inventory Systems",
  "description": "PO creation and approval dashboard. Includes frontend screens and backend mock API routes.",
  "layout": "timeline",
  "layoutDescription": "Timeline and milestone driven workflow.",
  "dark": "#0f172a",
  "accent": "#14b8a6",
  "soft": "#ccfbf1",
  "modules": [
    {
      "slug": "products",
      "title": "Products",
      "description": "Products module designed for PurchaseOrder Desk."
    },
    {
      "slug": "warehouses",
      "title": "Warehouses",
      "description": "Warehouses module designed for PurchaseOrder Desk."
    },
    {
      "slug": "movements",
      "title": "Movements",
      "description": "Movements module designed for PurchaseOrder Desk."
    },
    {
      "slug": "suppliers",
      "title": "Suppliers",
      "description": "Suppliers module designed for PurchaseOrder Desk."
    },
    {
      "slug": "purchase-orders",
      "title": "Purchase Orders",
      "description": "Purchase Orders module designed for PurchaseOrder Desk."
    },
    {
      "slug": "alerts",
      "title": "Alerts",
      "description": "Alerts module designed for PurchaseOrder Desk."
    },
    {
      "slug": "counts",
      "title": "Counts",
      "description": "Counts module designed for PurchaseOrder Desk."
    },
    {
      "slug": "settings",
      "title": "Settings",
      "description": "Settings module designed for PurchaseOrder Desk."
    },
    {
      "slug": "purchaseorder",
      "title": "Purchaseorder",
      "description": "Purchaseorder module designed for PurchaseOrder Desk."
    },
    {
      "slug": "desk",
      "title": "Desk",
      "description": "Desk module designed for PurchaseOrder Desk."
    }
  ],
  "stats": [
    {
      "label": "SKUs",
      "value": "357",
      "trend": "+9% this week"
    },
    {
      "label": "Warehouses",
      "value": "83%",
      "trend": "+10% this week"
    },
    {
      "label": "Low stock",
      "value": "595",
      "trend": "+2% this week"
    },
    {
      "label": "POs",
      "value": "714",
      "trend": "+3% this week"
    }
  ],
  "records": [
    {
      "id": "IN-17-001",
      "title": "Settings record 1",
      "meta": "Inventory Systems workflow \u00b7 owner A",
      "status": "Synced",
      "amount": "2,125"
    },
    {
      "id": "IN-17-002",
      "title": "Purchaseorder record 2",
      "meta": "Inventory Systems workflow \u00b7 owner B",
      "status": "Active",
      "amount": "4,250"
    },
    {
      "id": "IN-17-003",
      "title": "Desk record 3",
      "meta": "Inventory Systems workflow \u00b7 owner C",
      "status": "Pending",
      "amount": "6,375"
    },
    {
      "id": "IN-17-004",
      "title": "Products record 4",
      "meta": "Inventory Systems workflow \u00b7 owner D",
      "status": "Review",
      "amount": "8,500"
    },
    {
      "id": "IN-17-005",
      "title": "Warehouses record 5",
      "meta": "Inventory Systems workflow \u00b7 owner E",
      "status": "Approved",
      "amount": "10,625"
    },
    {
      "id": "IN-17-006",
      "title": "Movements record 6",
      "meta": "Inventory Systems workflow \u00b7 owner F",
      "status": "Blocked",
      "amount": "12,750"
    },
    {
      "id": "IN-17-007",
      "title": "Suppliers record 7",
      "meta": "Inventory Systems workflow \u00b7 owner G",
      "status": "Synced",
      "amount": "14,875"
    },
    {
      "id": "IN-17-008",
      "title": "Purchase Orders record 8",
      "meta": "Inventory Systems workflow \u00b7 owner H",
      "status": "Active",
      "amount": "17,000"
    }
  ]
} as const;
