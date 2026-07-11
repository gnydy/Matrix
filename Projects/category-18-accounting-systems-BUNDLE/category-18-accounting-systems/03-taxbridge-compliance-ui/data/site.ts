export const site = {
  "title": "TaxBridge Compliance UI",
  "slug": "03-taxbridge-compliance-ui",
  "category": "Accounting Systems",
  "description": "Tax overview, VAT mock and filing status. Includes frontend screens and backend mock API routes.",
  "layout": "command",
  "layoutDescription": "Left command sidebar, KPI rail, dense admin workspace.",
  "dark": "#1f2937",
  "accent": "#34d399",
  "soft": "#d1fae5",
  "modules": [
    {
      "slug": "invoices",
      "title": "Invoices",
      "description": "Invoices module designed for TaxBridge Compliance UI."
    },
    {
      "slug": "expenses",
      "title": "Expenses",
      "description": "Expenses module designed for TaxBridge Compliance UI."
    },
    {
      "slug": "revenue",
      "title": "Revenue",
      "description": "Revenue module designed for TaxBridge Compliance UI."
    },
    {
      "slug": "tax",
      "title": "Tax",
      "description": "Tax module designed for TaxBridge Compliance UI."
    },
    {
      "slug": "ledger",
      "title": "Ledger",
      "description": "Ledger module designed for TaxBridge Compliance UI."
    },
    {
      "slug": "reports",
      "title": "Reports",
      "description": "Reports module designed for TaxBridge Compliance UI."
    },
    {
      "slug": "vendors",
      "title": "Vendors",
      "description": "Vendors module designed for TaxBridge Compliance UI."
    },
    {
      "slug": "settings",
      "title": "Settings",
      "description": "Settings module designed for TaxBridge Compliance UI."
    },
    {
      "slug": "taxbridge",
      "title": "Taxbridge",
      "description": "Taxbridge module designed for TaxBridge Compliance UI."
    },
    {
      "slug": "compliance",
      "title": "Compliance",
      "description": "Compliance module designed for TaxBridge Compliance UI."
    }
  ],
  "stats": [
    {
      "label": "Revenue",
      "value": "63",
      "trend": "+4% this week"
    },
    {
      "label": "Expenses",
      "value": "84%",
      "trend": "+5% this week"
    },
    {
      "label": "Tax due",
      "value": "105",
      "trend": "+6% this week"
    },
    {
      "label": "Invoices",
      "value": "126",
      "trend": "+7% this week"
    }
  ],
  "records": [
    {
      "id": "AC-03-001",
      "title": "Tax record 1",
      "meta": "Accounting Systems workflow \u00b7 owner A",
      "status": "Approved",
      "amount": "375"
    },
    {
      "id": "AC-03-002",
      "title": "Ledger record 2",
      "meta": "Accounting Systems workflow \u00b7 owner B",
      "status": "Blocked",
      "amount": "750"
    },
    {
      "id": "AC-03-003",
      "title": "Reports record 3",
      "meta": "Accounting Systems workflow \u00b7 owner C",
      "status": "Synced",
      "amount": "1,125"
    },
    {
      "id": "AC-03-004",
      "title": "Vendors record 4",
      "meta": "Accounting Systems workflow \u00b7 owner D",
      "status": "Active",
      "amount": "1,500"
    },
    {
      "id": "AC-03-005",
      "title": "Settings record 5",
      "meta": "Accounting Systems workflow \u00b7 owner E",
      "status": "Pending",
      "amount": "1,875"
    },
    {
      "id": "AC-03-006",
      "title": "Taxbridge record 6",
      "meta": "Accounting Systems workflow \u00b7 owner F",
      "status": "Review",
      "amount": "2,250"
    },
    {
      "id": "AC-03-007",
      "title": "Compliance record 7",
      "meta": "Accounting Systems workflow \u00b7 owner G",
      "status": "Approved",
      "amount": "2,625"
    },
    {
      "id": "AC-03-008",
      "title": "Invoices record 8",
      "meta": "Accounting Systems workflow \u00b7 owner H",
      "status": "Blocked",
      "amount": "3,000"
    }
  ]
} as const;
