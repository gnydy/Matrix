export const site = {
  "title": "ClinicFinance Billing",
  "slug": "11-clinicfinance-billing",
  "category": "Accounting Systems",
  "description": "Medical billing and claim mock dashboards. Includes frontend screens and backend mock API routes.",
  "layout": "ai",
  "layoutDescription": "Prompt/result workspace with usage and model cards.",
  "dark": "#4a044e",
  "accent": "#e879f9",
  "soft": "#fae8ff",
  "modules": [
    {
      "slug": "invoices",
      "title": "Invoices",
      "description": "Invoices module designed for ClinicFinance Billing."
    },
    {
      "slug": "expenses",
      "title": "Expenses",
      "description": "Expenses module designed for ClinicFinance Billing."
    },
    {
      "slug": "revenue",
      "title": "Revenue",
      "description": "Revenue module designed for ClinicFinance Billing."
    },
    {
      "slug": "tax",
      "title": "Tax",
      "description": "Tax module designed for ClinicFinance Billing."
    },
    {
      "slug": "ledger",
      "title": "Ledger",
      "description": "Ledger module designed for ClinicFinance Billing."
    },
    {
      "slug": "reports",
      "title": "Reports",
      "description": "Reports module designed for ClinicFinance Billing."
    },
    {
      "slug": "vendors",
      "title": "Vendors",
      "description": "Vendors module designed for ClinicFinance Billing."
    },
    {
      "slug": "settings",
      "title": "Settings",
      "description": "Settings module designed for ClinicFinance Billing."
    },
    {
      "slug": "clinicfinance",
      "title": "Clinicfinance",
      "description": "Clinicfinance module designed for ClinicFinance Billing."
    },
    {
      "slug": "billing",
      "title": "Billing",
      "description": "Billing module designed for ClinicFinance Billing."
    }
  ],
  "stats": [
    {
      "label": "Revenue",
      "value": "231",
      "trend": "+3% this week"
    },
    {
      "label": "Expenses",
      "value": "92%",
      "trend": "+4% this week"
    },
    {
      "label": "Tax due",
      "value": "385",
      "trend": "+5% this week"
    },
    {
      "label": "Invoices",
      "value": "462",
      "trend": "+6% this week"
    }
  ],
  "records": [
    {
      "id": "AC-11-001",
      "title": "Expenses record 1",
      "meta": "Accounting Systems workflow \u00b7 owner A",
      "status": "Synced",
      "amount": "1,375"
    },
    {
      "id": "AC-11-002",
      "title": "Revenue record 2",
      "meta": "Accounting Systems workflow \u00b7 owner B",
      "status": "Active",
      "amount": "2,750"
    },
    {
      "id": "AC-11-003",
      "title": "Tax record 3",
      "meta": "Accounting Systems workflow \u00b7 owner C",
      "status": "Pending",
      "amount": "4,125"
    },
    {
      "id": "AC-11-004",
      "title": "Ledger record 4",
      "meta": "Accounting Systems workflow \u00b7 owner D",
      "status": "Review",
      "amount": "5,500"
    },
    {
      "id": "AC-11-005",
      "title": "Reports record 5",
      "meta": "Accounting Systems workflow \u00b7 owner E",
      "status": "Approved",
      "amount": "6,875"
    },
    {
      "id": "AC-11-006",
      "title": "Vendors record 6",
      "meta": "Accounting Systems workflow \u00b7 owner F",
      "status": "Blocked",
      "amount": "8,250"
    },
    {
      "id": "AC-11-007",
      "title": "Settings record 7",
      "meta": "Accounting Systems workflow \u00b7 owner G",
      "status": "Synced",
      "amount": "9,625"
    },
    {
      "id": "AC-11-008",
      "title": "Clinicfinance record 8",
      "meta": "Accounting Systems workflow \u00b7 owner H",
      "status": "Active",
      "amount": "11,000"
    }
  ]
} as const;
