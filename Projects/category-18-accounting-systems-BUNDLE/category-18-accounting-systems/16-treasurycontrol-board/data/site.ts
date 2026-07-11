export const site = {
  "title": "TreasuryControl Board",
  "slug": "16-treasurycontrol-board",
  "category": "Accounting Systems",
  "description": "Bank accounts and liquidity operations. Includes frontend screens and backend mock API routes.",
  "layout": "dense",
  "layoutDescription": "Data-heavy table cockpit with filters and status chips.",
  "dark": "#1c1917",
  "accent": "#fbbf24",
  "soft": "#fef9c3",
  "modules": [
    {
      "slug": "invoices",
      "title": "Invoices",
      "description": "Invoices module designed for TreasuryControl Board."
    },
    {
      "slug": "expenses",
      "title": "Expenses",
      "description": "Expenses module designed for TreasuryControl Board."
    },
    {
      "slug": "revenue",
      "title": "Revenue",
      "description": "Revenue module designed for TreasuryControl Board."
    },
    {
      "slug": "tax",
      "title": "Tax",
      "description": "Tax module designed for TreasuryControl Board."
    },
    {
      "slug": "ledger",
      "title": "Ledger",
      "description": "Ledger module designed for TreasuryControl Board."
    },
    {
      "slug": "reports",
      "title": "Reports",
      "description": "Reports module designed for TreasuryControl Board."
    },
    {
      "slug": "vendors",
      "title": "Vendors",
      "description": "Vendors module designed for TreasuryControl Board."
    },
    {
      "slug": "settings",
      "title": "Settings",
      "description": "Settings module designed for TreasuryControl Board."
    },
    {
      "slug": "treasurycontrol",
      "title": "Treasurycontrol",
      "description": "Treasurycontrol module designed for TreasuryControl Board."
    },
    {
      "slug": "board",
      "title": "Board",
      "description": "Board module designed for TreasuryControl Board."
    }
  ],
  "stats": [
    {
      "label": "Revenue",
      "value": "336",
      "trend": "+8% this week"
    },
    {
      "label": "Expenses",
      "value": "82%",
      "trend": "+9% this week"
    },
    {
      "label": "Tax due",
      "value": "560",
      "trend": "+10% this week"
    },
    {
      "label": "Invoices",
      "value": "672",
      "trend": "+2% this week"
    }
  ],
  "records": [
    {
      "id": "AC-16-001",
      "title": "Vendors record 1",
      "meta": "Accounting Systems workflow \u00b7 owner A",
      "status": "Blocked",
      "amount": "2,000"
    },
    {
      "id": "AC-16-002",
      "title": "Settings record 2",
      "meta": "Accounting Systems workflow \u00b7 owner B",
      "status": "Synced",
      "amount": "4,000"
    },
    {
      "id": "AC-16-003",
      "title": "Treasurycontrol record 3",
      "meta": "Accounting Systems workflow \u00b7 owner C",
      "status": "Active",
      "amount": "6,000"
    },
    {
      "id": "AC-16-004",
      "title": "Board record 4",
      "meta": "Accounting Systems workflow \u00b7 owner D",
      "status": "Pending",
      "amount": "8,000"
    },
    {
      "id": "AC-16-005",
      "title": "Invoices record 5",
      "meta": "Accounting Systems workflow \u00b7 owner E",
      "status": "Review",
      "amount": "10,000"
    },
    {
      "id": "AC-16-006",
      "title": "Expenses record 6",
      "meta": "Accounting Systems workflow \u00b7 owner F",
      "status": "Approved",
      "amount": "12,000"
    },
    {
      "id": "AC-16-007",
      "title": "Revenue record 7",
      "meta": "Accounting Systems workflow \u00b7 owner G",
      "status": "Blocked",
      "amount": "14,000"
    },
    {
      "id": "AC-16-008",
      "title": "Tax record 8",
      "meta": "Accounting Systems workflow \u00b7 owner H",
      "status": "Synced",
      "amount": "16,000"
    }
  ]
} as const;
