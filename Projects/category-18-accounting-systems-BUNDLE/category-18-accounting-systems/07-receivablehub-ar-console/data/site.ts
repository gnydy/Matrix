export const site = {
  "title": "ReceivableHub AR Console",
  "slug": "07-receivablehub-ar-console",
  "category": "Accounting Systems",
  "description": "A/R aging, collections and client balances. Includes frontend screens and backend mock API routes.",
  "layout": "cards",
  "layoutDescription": "Executive card grid with insights and feature tiles.",
  "dark": "#1e1b4b",
  "accent": "#818cf8",
  "soft": "#e0e7ff",
  "modules": [
    {
      "slug": "invoices",
      "title": "Invoices",
      "description": "Invoices module designed for ReceivableHub AR Console."
    },
    {
      "slug": "expenses",
      "title": "Expenses",
      "description": "Expenses module designed for ReceivableHub AR Console."
    },
    {
      "slug": "revenue",
      "title": "Revenue",
      "description": "Revenue module designed for ReceivableHub AR Console."
    },
    {
      "slug": "tax",
      "title": "Tax",
      "description": "Tax module designed for ReceivableHub AR Console."
    },
    {
      "slug": "ledger",
      "title": "Ledger",
      "description": "Ledger module designed for ReceivableHub AR Console."
    },
    {
      "slug": "reports",
      "title": "Reports",
      "description": "Reports module designed for ReceivableHub AR Console."
    },
    {
      "slug": "vendors",
      "title": "Vendors",
      "description": "Vendors module designed for ReceivableHub AR Console."
    },
    {
      "slug": "settings",
      "title": "Settings",
      "description": "Settings module designed for ReceivableHub AR Console."
    },
    {
      "slug": "receivablehub",
      "title": "Receivablehub",
      "description": "Receivablehub module designed for ReceivableHub AR Console."
    },
    {
      "slug": "ar",
      "title": "Ar",
      "description": "Ar module designed for ReceivableHub AR Console."
    }
  ],
  "stats": [
    {
      "label": "Revenue",
      "value": "147",
      "trend": "+8% this week"
    },
    {
      "label": "Expenses",
      "value": "88%",
      "trend": "+9% this week"
    },
    {
      "label": "Tax due",
      "value": "245",
      "trend": "+10% this week"
    },
    {
      "label": "Invoices",
      "value": "294",
      "trend": "+2% this week"
    }
  ],
  "records": [
    {
      "id": "AC-07-001",
      "title": "Settings record 1",
      "meta": "Accounting Systems workflow \u00b7 owner A",
      "status": "Pending",
      "amount": "875"
    },
    {
      "id": "AC-07-002",
      "title": "Receivablehub record 2",
      "meta": "Accounting Systems workflow \u00b7 owner B",
      "status": "Review",
      "amount": "1,750"
    },
    {
      "id": "AC-07-003",
      "title": "Ar record 3",
      "meta": "Accounting Systems workflow \u00b7 owner C",
      "status": "Approved",
      "amount": "2,625"
    },
    {
      "id": "AC-07-004",
      "title": "Invoices record 4",
      "meta": "Accounting Systems workflow \u00b7 owner D",
      "status": "Blocked",
      "amount": "3,500"
    },
    {
      "id": "AC-07-005",
      "title": "Expenses record 5",
      "meta": "Accounting Systems workflow \u00b7 owner E",
      "status": "Synced",
      "amount": "4,375"
    },
    {
      "id": "AC-07-006",
      "title": "Revenue record 6",
      "meta": "Accounting Systems workflow \u00b7 owner F",
      "status": "Active",
      "amount": "5,250"
    },
    {
      "id": "AC-07-007",
      "title": "Tax record 7",
      "meta": "Accounting Systems workflow \u00b7 owner G",
      "status": "Pending",
      "amount": "6,125"
    },
    {
      "id": "AC-07-008",
      "title": "Ledger record 8",
      "meta": "Accounting Systems workflow \u00b7 owner H",
      "status": "Review",
      "amount": "7,000"
    }
  ]
} as const;
