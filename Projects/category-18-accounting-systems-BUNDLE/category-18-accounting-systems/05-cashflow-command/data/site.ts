export const site = {
  "title": "CashFlow Command",
  "slug": "05-cashflow-command",
  "category": "Accounting Systems",
  "description": "Cash inflow/outflow and runway tracking. Includes frontend screens and backend mock API routes.",
  "layout": "kanban",
  "layoutDescription": "Board-style operational cards with stages and queues.",
  "dark": "#0c0a09",
  "accent": "#fb7185",
  "soft": "#ffe4e6",
  "modules": [
    {
      "slug": "invoices",
      "title": "Invoices",
      "description": "Invoices module designed for CashFlow Command."
    },
    {
      "slug": "expenses",
      "title": "Expenses",
      "description": "Expenses module designed for CashFlow Command."
    },
    {
      "slug": "revenue",
      "title": "Revenue",
      "description": "Revenue module designed for CashFlow Command."
    },
    {
      "slug": "tax",
      "title": "Tax",
      "description": "Tax module designed for CashFlow Command."
    },
    {
      "slug": "ledger",
      "title": "Ledger",
      "description": "Ledger module designed for CashFlow Command."
    },
    {
      "slug": "reports",
      "title": "Reports",
      "description": "Reports module designed for CashFlow Command."
    },
    {
      "slug": "vendors",
      "title": "Vendors",
      "description": "Vendors module designed for CashFlow Command."
    },
    {
      "slug": "settings",
      "title": "Settings",
      "description": "Settings module designed for CashFlow Command."
    },
    {
      "slug": "cashflow",
      "title": "Cashflow",
      "description": "Cashflow module designed for CashFlow Command."
    },
    {
      "slug": "command",
      "title": "Command",
      "description": "Command module designed for CashFlow Command."
    }
  ],
  "stats": [
    {
      "label": "Revenue",
      "value": "105",
      "trend": "+6% this week"
    },
    {
      "label": "Expenses",
      "value": "86%",
      "trend": "+7% this week"
    },
    {
      "label": "Tax due",
      "value": "175",
      "trend": "+8% this week"
    },
    {
      "label": "Invoices",
      "value": "210",
      "trend": "+9% this week"
    }
  ],
  "records": [
    {
      "id": "AC-05-001",
      "title": "Reports record 1",
      "meta": "Accounting Systems workflow \u00b7 owner A",
      "status": "Synced",
      "amount": "625"
    },
    {
      "id": "AC-05-002",
      "title": "Vendors record 2",
      "meta": "Accounting Systems workflow \u00b7 owner B",
      "status": "Active",
      "amount": "1,250"
    },
    {
      "id": "AC-05-003",
      "title": "Settings record 3",
      "meta": "Accounting Systems workflow \u00b7 owner C",
      "status": "Pending",
      "amount": "1,875"
    },
    {
      "id": "AC-05-004",
      "title": "Cashflow record 4",
      "meta": "Accounting Systems workflow \u00b7 owner D",
      "status": "Review",
      "amount": "2,500"
    },
    {
      "id": "AC-05-005",
      "title": "Command record 5",
      "meta": "Accounting Systems workflow \u00b7 owner E",
      "status": "Approved",
      "amount": "3,125"
    },
    {
      "id": "AC-05-006",
      "title": "Invoices record 6",
      "meta": "Accounting Systems workflow \u00b7 owner F",
      "status": "Blocked",
      "amount": "3,750"
    },
    {
      "id": "AC-05-007",
      "title": "Expenses record 7",
      "meta": "Accounting Systems workflow \u00b7 owner G",
      "status": "Synced",
      "amount": "4,375"
    },
    {
      "id": "AC-05-008",
      "title": "Revenue record 8",
      "meta": "Accounting Systems workflow \u00b7 owner H",
      "status": "Active",
      "amount": "5,000"
    }
  ]
} as const;
