export const site = {
  "title": "ExpenseGuard Finance Desk",
  "slug": "02-expenseguard-finance-desk",
  "category": "Accounting Systems",
  "description": "Expense review and approval workspace. Includes frontend screens and backend mock API routes.",
  "layout": "chat",
  "layoutDescription": "Conversation-first UI with inbox and analytics panels.",
  "dark": "#111827",
  "accent": "#a78bfa",
  "soft": "#ede9fe",
  "modules": [
    {
      "slug": "invoices",
      "title": "Invoices",
      "description": "Invoices module designed for ExpenseGuard Finance Desk."
    },
    {
      "slug": "expenses",
      "title": "Expenses",
      "description": "Expenses module designed for ExpenseGuard Finance Desk."
    },
    {
      "slug": "revenue",
      "title": "Revenue",
      "description": "Revenue module designed for ExpenseGuard Finance Desk."
    },
    {
      "slug": "tax",
      "title": "Tax",
      "description": "Tax module designed for ExpenseGuard Finance Desk."
    },
    {
      "slug": "ledger",
      "title": "Ledger",
      "description": "Ledger module designed for ExpenseGuard Finance Desk."
    },
    {
      "slug": "reports",
      "title": "Reports",
      "description": "Reports module designed for ExpenseGuard Finance Desk."
    },
    {
      "slug": "vendors",
      "title": "Vendors",
      "description": "Vendors module designed for ExpenseGuard Finance Desk."
    },
    {
      "slug": "settings",
      "title": "Settings",
      "description": "Settings module designed for ExpenseGuard Finance Desk."
    },
    {
      "slug": "expenseguard",
      "title": "Expenseguard",
      "description": "Expenseguard module designed for ExpenseGuard Finance Desk."
    },
    {
      "slug": "finance",
      "title": "Finance",
      "description": "Finance module designed for ExpenseGuard Finance Desk."
    }
  ],
  "stats": [
    {
      "label": "Revenue",
      "value": "42",
      "trend": "+3% this week"
    },
    {
      "label": "Expenses",
      "value": "83%",
      "trend": "+4% this week"
    },
    {
      "label": "Tax due",
      "value": "70",
      "trend": "+5% this week"
    },
    {
      "label": "Invoices",
      "value": "84",
      "trend": "+6% this week"
    }
  ],
  "records": [
    {
      "id": "AC-02-001",
      "title": "Revenue record 1",
      "meta": "Accounting Systems workflow \u00b7 owner A",
      "status": "Review",
      "amount": "250"
    },
    {
      "id": "AC-02-002",
      "title": "Tax record 2",
      "meta": "Accounting Systems workflow \u00b7 owner B",
      "status": "Approved",
      "amount": "500"
    },
    {
      "id": "AC-02-003",
      "title": "Ledger record 3",
      "meta": "Accounting Systems workflow \u00b7 owner C",
      "status": "Blocked",
      "amount": "750"
    },
    {
      "id": "AC-02-004",
      "title": "Reports record 4",
      "meta": "Accounting Systems workflow \u00b7 owner D",
      "status": "Synced",
      "amount": "1,000"
    },
    {
      "id": "AC-02-005",
      "title": "Vendors record 5",
      "meta": "Accounting Systems workflow \u00b7 owner E",
      "status": "Active",
      "amount": "1,250"
    },
    {
      "id": "AC-02-006",
      "title": "Settings record 6",
      "meta": "Accounting Systems workflow \u00b7 owner F",
      "status": "Pending",
      "amount": "1,500"
    },
    {
      "id": "AC-02-007",
      "title": "Expenseguard record 7",
      "meta": "Accounting Systems workflow \u00b7 owner G",
      "status": "Review",
      "amount": "1,750"
    },
    {
      "id": "AC-02-008",
      "title": "Finance record 8",
      "meta": "Accounting Systems workflow \u00b7 owner H",
      "status": "Approved",
      "amount": "2,000"
    }
  ]
} as const;
