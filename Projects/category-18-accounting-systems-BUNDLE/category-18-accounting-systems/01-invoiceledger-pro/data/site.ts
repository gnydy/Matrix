export const site = {
  "title": "InvoiceLedger Pro",
  "slug": "01-invoiceledger-pro",
  "category": "Accounting Systems",
  "description": "Invoice issuing and receivable control. Includes frontend screens and backend mock API routes.",
  "layout": "ai",
  "layoutDescription": "Prompt/result workspace with usage and model cards.",
  "dark": "#0f172a",
  "accent": "#38bdf8",
  "soft": "#e0f2fe",
  "modules": [
    {
      "slug": "invoices",
      "title": "Invoices",
      "description": "Invoices module designed for InvoiceLedger Pro."
    },
    {
      "slug": "expenses",
      "title": "Expenses",
      "description": "Expenses module designed for InvoiceLedger Pro."
    },
    {
      "slug": "revenue",
      "title": "Revenue",
      "description": "Revenue module designed for InvoiceLedger Pro."
    },
    {
      "slug": "tax",
      "title": "Tax",
      "description": "Tax module designed for InvoiceLedger Pro."
    },
    {
      "slug": "ledger",
      "title": "Ledger",
      "description": "Ledger module designed for InvoiceLedger Pro."
    },
    {
      "slug": "reports",
      "title": "Reports",
      "description": "Reports module designed for InvoiceLedger Pro."
    },
    {
      "slug": "vendors",
      "title": "Vendors",
      "description": "Vendors module designed for InvoiceLedger Pro."
    },
    {
      "slug": "settings",
      "title": "Settings",
      "description": "Settings module designed for InvoiceLedger Pro."
    },
    {
      "slug": "invoiceledger",
      "title": "Invoiceledger",
      "description": "Invoiceledger module designed for InvoiceLedger Pro."
    },
    {
      "slug": "pro",
      "title": "Pro",
      "description": "Pro module designed for InvoiceLedger Pro."
    }
  ],
  "stats": [
    {
      "label": "Revenue",
      "value": "21",
      "trend": "+2% this week"
    },
    {
      "label": "Expenses",
      "value": "82%",
      "trend": "+3% this week"
    },
    {
      "label": "Tax due",
      "value": "35",
      "trend": "+4% this week"
    },
    {
      "label": "Invoices",
      "value": "42",
      "trend": "+5% this week"
    }
  ],
  "records": [
    {
      "id": "AC-01-001",
      "title": "Expenses record 1",
      "meta": "Accounting Systems workflow \u00b7 owner A",
      "status": "Pending",
      "amount": "125"
    },
    {
      "id": "AC-01-002",
      "title": "Revenue record 2",
      "meta": "Accounting Systems workflow \u00b7 owner B",
      "status": "Review",
      "amount": "250"
    },
    {
      "id": "AC-01-003",
      "title": "Tax record 3",
      "meta": "Accounting Systems workflow \u00b7 owner C",
      "status": "Approved",
      "amount": "375"
    },
    {
      "id": "AC-01-004",
      "title": "Ledger record 4",
      "meta": "Accounting Systems workflow \u00b7 owner D",
      "status": "Blocked",
      "amount": "500"
    },
    {
      "id": "AC-01-005",
      "title": "Reports record 5",
      "meta": "Accounting Systems workflow \u00b7 owner E",
      "status": "Synced",
      "amount": "625"
    },
    {
      "id": "AC-01-006",
      "title": "Vendors record 6",
      "meta": "Accounting Systems workflow \u00b7 owner F",
      "status": "Active",
      "amount": "750"
    },
    {
      "id": "AC-01-007",
      "title": "Settings record 7",
      "meta": "Accounting Systems workflow \u00b7 owner G",
      "status": "Pending",
      "amount": "875"
    },
    {
      "id": "AC-01-008",
      "title": "Invoiceledger record 8",
      "meta": "Accounting Systems workflow \u00b7 owner H",
      "status": "Review",
      "amount": "1,000"
    }
  ]
} as const;
