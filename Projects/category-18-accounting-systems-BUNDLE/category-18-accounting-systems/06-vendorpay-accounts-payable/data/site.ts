export const site = {
  "title": "VendorPay Accounts Payable",
  "slug": "06-vendorpay-accounts-payable",
  "category": "Accounting Systems",
  "description": "Vendor bills and payment run manager. Includes frontend screens and backend mock API routes.",
  "layout": "dense",
  "layoutDescription": "Data-heavy table cockpit with filters and status chips.",
  "dark": "#052e16",
  "accent": "#22c55e",
  "soft": "#dcfce7",
  "modules": [
    {
      "slug": "invoices",
      "title": "Invoices",
      "description": "Invoices module designed for VendorPay Accounts Payable."
    },
    {
      "slug": "expenses",
      "title": "Expenses",
      "description": "Expenses module designed for VendorPay Accounts Payable."
    },
    {
      "slug": "revenue",
      "title": "Revenue",
      "description": "Revenue module designed for VendorPay Accounts Payable."
    },
    {
      "slug": "tax",
      "title": "Tax",
      "description": "Tax module designed for VendorPay Accounts Payable."
    },
    {
      "slug": "ledger",
      "title": "Ledger",
      "description": "Ledger module designed for VendorPay Accounts Payable."
    },
    {
      "slug": "reports",
      "title": "Reports",
      "description": "Reports module designed for VendorPay Accounts Payable."
    },
    {
      "slug": "vendors",
      "title": "Vendors",
      "description": "Vendors module designed for VendorPay Accounts Payable."
    },
    {
      "slug": "settings",
      "title": "Settings",
      "description": "Settings module designed for VendorPay Accounts Payable."
    },
    {
      "slug": "vendorpay",
      "title": "Vendorpay",
      "description": "Vendorpay module designed for VendorPay Accounts Payable."
    },
    {
      "slug": "accounts",
      "title": "Accounts",
      "description": "Accounts module designed for VendorPay Accounts Payable."
    }
  ],
  "stats": [
    {
      "label": "Revenue",
      "value": "126",
      "trend": "+7% this week"
    },
    {
      "label": "Expenses",
      "value": "87%",
      "trend": "+8% this week"
    },
    {
      "label": "Tax due",
      "value": "210",
      "trend": "+9% this week"
    },
    {
      "label": "Invoices",
      "value": "252",
      "trend": "+10% this week"
    }
  ],
  "records": [
    {
      "id": "AC-06-001",
      "title": "Vendors record 1",
      "meta": "Accounting Systems workflow \u00b7 owner A",
      "status": "Active",
      "amount": "750"
    },
    {
      "id": "AC-06-002",
      "title": "Settings record 2",
      "meta": "Accounting Systems workflow \u00b7 owner B",
      "status": "Pending",
      "amount": "1,500"
    },
    {
      "id": "AC-06-003",
      "title": "Vendorpay record 3",
      "meta": "Accounting Systems workflow \u00b7 owner C",
      "status": "Review",
      "amount": "2,250"
    },
    {
      "id": "AC-06-004",
      "title": "Accounts record 4",
      "meta": "Accounting Systems workflow \u00b7 owner D",
      "status": "Approved",
      "amount": "3,000"
    },
    {
      "id": "AC-06-005",
      "title": "Invoices record 5",
      "meta": "Accounting Systems workflow \u00b7 owner E",
      "status": "Blocked",
      "amount": "3,750"
    },
    {
      "id": "AC-06-006",
      "title": "Expenses record 6",
      "meta": "Accounting Systems workflow \u00b7 owner F",
      "status": "Synced",
      "amount": "4,500"
    },
    {
      "id": "AC-06-007",
      "title": "Revenue record 7",
      "meta": "Accounting Systems workflow \u00b7 owner G",
      "status": "Active",
      "amount": "5,250"
    },
    {
      "id": "AC-06-008",
      "title": "Tax record 8",
      "meta": "Accounting Systems workflow \u00b7 owner H",
      "status": "Pending",
      "amount": "6,000"
    }
  ]
} as const;
