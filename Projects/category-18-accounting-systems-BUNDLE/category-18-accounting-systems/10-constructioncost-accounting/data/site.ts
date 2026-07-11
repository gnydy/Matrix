export const site = {
  "title": "ConstructionCost Accounting",
  "slug": "10-constructioncost-accounting",
  "category": "Accounting Systems",
  "description": "Project expenses, advances and cost codes. Includes frontend screens and backend mock API routes.",
  "layout": "desktop",
  "layoutDescription": "Desktop shell with window chrome and module launcher.",
  "dark": "#3b0764",
  "accent": "#c084fc",
  "soft": "#f3e8ff",
  "modules": [
    {
      "slug": "invoices",
      "title": "Invoices",
      "description": "Invoices module designed for ConstructionCost Accounting."
    },
    {
      "slug": "expenses",
      "title": "Expenses",
      "description": "Expenses module designed for ConstructionCost Accounting."
    },
    {
      "slug": "revenue",
      "title": "Revenue",
      "description": "Revenue module designed for ConstructionCost Accounting."
    },
    {
      "slug": "tax",
      "title": "Tax",
      "description": "Tax module designed for ConstructionCost Accounting."
    },
    {
      "slug": "ledger",
      "title": "Ledger",
      "description": "Ledger module designed for ConstructionCost Accounting."
    },
    {
      "slug": "reports",
      "title": "Reports",
      "description": "Reports module designed for ConstructionCost Accounting."
    },
    {
      "slug": "vendors",
      "title": "Vendors",
      "description": "Vendors module designed for ConstructionCost Accounting."
    },
    {
      "slug": "settings",
      "title": "Settings",
      "description": "Settings module designed for ConstructionCost Accounting."
    },
    {
      "slug": "constructioncost",
      "title": "Constructioncost",
      "description": "Constructioncost module designed for ConstructionCost Accounting."
    },
    {
      "slug": "accounting",
      "title": "Accounting",
      "description": "Accounting module designed for ConstructionCost Accounting."
    }
  ],
  "stats": [
    {
      "label": "Revenue",
      "value": "210",
      "trend": "+2% this week"
    },
    {
      "label": "Expenses",
      "value": "91%",
      "trend": "+3% this week"
    },
    {
      "label": "Tax due",
      "value": "350",
      "trend": "+4% this week"
    },
    {
      "label": "Invoices",
      "value": "420",
      "trend": "+5% this week"
    }
  ],
  "records": [
    {
      "id": "AC-10-001",
      "title": "Invoices record 1",
      "meta": "Accounting Systems workflow \u00b7 owner A",
      "status": "Blocked",
      "amount": "1,250"
    },
    {
      "id": "AC-10-002",
      "title": "Expenses record 2",
      "meta": "Accounting Systems workflow \u00b7 owner B",
      "status": "Synced",
      "amount": "2,500"
    },
    {
      "id": "AC-10-003",
      "title": "Revenue record 3",
      "meta": "Accounting Systems workflow \u00b7 owner C",
      "status": "Active",
      "amount": "3,750"
    },
    {
      "id": "AC-10-004",
      "title": "Tax record 4",
      "meta": "Accounting Systems workflow \u00b7 owner D",
      "status": "Pending",
      "amount": "5,000"
    },
    {
      "id": "AC-10-005",
      "title": "Ledger record 5",
      "meta": "Accounting Systems workflow \u00b7 owner E",
      "status": "Review",
      "amount": "6,250"
    },
    {
      "id": "AC-10-006",
      "title": "Reports record 6",
      "meta": "Accounting Systems workflow \u00b7 owner F",
      "status": "Approved",
      "amount": "7,500"
    },
    {
      "id": "AC-10-007",
      "title": "Vendors record 7",
      "meta": "Accounting Systems workflow \u00b7 owner G",
      "status": "Blocked",
      "amount": "8,750"
    },
    {
      "id": "AC-10-008",
      "title": "Settings record 8",
      "meta": "Accounting Systems workflow \u00b7 owner H",
      "status": "Synced",
      "amount": "10,000"
    }
  ]
} as const;
