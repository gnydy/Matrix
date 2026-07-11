export const site = {
  "title": "BalanceSheet Executive",
  "slug": "04-balancesheet-executive",
  "category": "Accounting Systems",
  "description": "Executive balance sheet and cash flow board. Includes frontend screens and backend mock API routes.",
  "layout": "split",
  "layoutDescription": "Split-screen hero with form panel and operations cards.",
  "dark": "#18181b",
  "accent": "#f59e0b",
  "soft": "#fef3c7",
  "modules": [
    {
      "slug": "invoices",
      "title": "Invoices",
      "description": "Invoices module designed for BalanceSheet Executive."
    },
    {
      "slug": "expenses",
      "title": "Expenses",
      "description": "Expenses module designed for BalanceSheet Executive."
    },
    {
      "slug": "revenue",
      "title": "Revenue",
      "description": "Revenue module designed for BalanceSheet Executive."
    },
    {
      "slug": "tax",
      "title": "Tax",
      "description": "Tax module designed for BalanceSheet Executive."
    },
    {
      "slug": "ledger",
      "title": "Ledger",
      "description": "Ledger module designed for BalanceSheet Executive."
    },
    {
      "slug": "reports",
      "title": "Reports",
      "description": "Reports module designed for BalanceSheet Executive."
    },
    {
      "slug": "vendors",
      "title": "Vendors",
      "description": "Vendors module designed for BalanceSheet Executive."
    },
    {
      "slug": "settings",
      "title": "Settings",
      "description": "Settings module designed for BalanceSheet Executive."
    },
    {
      "slug": "balancesheet",
      "title": "Balancesheet",
      "description": "Balancesheet module designed for BalanceSheet Executive."
    },
    {
      "slug": "executive",
      "title": "Executive",
      "description": "Executive module designed for BalanceSheet Executive."
    }
  ],
  "stats": [
    {
      "label": "Revenue",
      "value": "84",
      "trend": "+5% this week"
    },
    {
      "label": "Expenses",
      "value": "85%",
      "trend": "+6% this week"
    },
    {
      "label": "Tax due",
      "value": "140",
      "trend": "+7% this week"
    },
    {
      "label": "Invoices",
      "value": "168",
      "trend": "+8% this week"
    }
  ],
  "records": [
    {
      "id": "AC-04-001",
      "title": "Ledger record 1",
      "meta": "Accounting Systems workflow \u00b7 owner A",
      "status": "Blocked",
      "amount": "500"
    },
    {
      "id": "AC-04-002",
      "title": "Reports record 2",
      "meta": "Accounting Systems workflow \u00b7 owner B",
      "status": "Synced",
      "amount": "1,000"
    },
    {
      "id": "AC-04-003",
      "title": "Vendors record 3",
      "meta": "Accounting Systems workflow \u00b7 owner C",
      "status": "Active",
      "amount": "1,500"
    },
    {
      "id": "AC-04-004",
      "title": "Settings record 4",
      "meta": "Accounting Systems workflow \u00b7 owner D",
      "status": "Pending",
      "amount": "2,000"
    },
    {
      "id": "AC-04-005",
      "title": "Balancesheet record 5",
      "meta": "Accounting Systems workflow \u00b7 owner E",
      "status": "Review",
      "amount": "2,500"
    },
    {
      "id": "AC-04-006",
      "title": "Executive record 6",
      "meta": "Accounting Systems workflow \u00b7 owner F",
      "status": "Approved",
      "amount": "3,000"
    },
    {
      "id": "AC-04-007",
      "title": "Invoices record 7",
      "meta": "Accounting Systems workflow \u00b7 owner G",
      "status": "Blocked",
      "amount": "3,500"
    },
    {
      "id": "AC-04-008",
      "title": "Expenses record 8",
      "meta": "Accounting Systems workflow \u00b7 owner H",
      "status": "Synced",
      "amount": "4,000"
    }
  ]
} as const;
