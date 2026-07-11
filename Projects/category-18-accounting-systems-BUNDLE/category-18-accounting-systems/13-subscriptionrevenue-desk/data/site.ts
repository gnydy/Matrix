export const site = {
  "title": "SubscriptionRevenue Desk",
  "slug": "13-subscriptionrevenue-desk",
  "category": "Accounting Systems",
  "description": "MRR, billing cycles and failed payments. Includes frontend screens and backend mock API routes.",
  "layout": "command",
  "layoutDescription": "Left command sidebar, KPI rail, dense admin workspace.",
  "dark": "#312e81",
  "accent": "#f472b6",
  "soft": "#fce7f3",
  "modules": [
    {
      "slug": "invoices",
      "title": "Invoices",
      "description": "Invoices module designed for SubscriptionRevenue Desk."
    },
    {
      "slug": "expenses",
      "title": "Expenses",
      "description": "Expenses module designed for SubscriptionRevenue Desk."
    },
    {
      "slug": "revenue",
      "title": "Revenue",
      "description": "Revenue module designed for SubscriptionRevenue Desk."
    },
    {
      "slug": "tax",
      "title": "Tax",
      "description": "Tax module designed for SubscriptionRevenue Desk."
    },
    {
      "slug": "ledger",
      "title": "Ledger",
      "description": "Ledger module designed for SubscriptionRevenue Desk."
    },
    {
      "slug": "reports",
      "title": "Reports",
      "description": "Reports module designed for SubscriptionRevenue Desk."
    },
    {
      "slug": "vendors",
      "title": "Vendors",
      "description": "Vendors module designed for SubscriptionRevenue Desk."
    },
    {
      "slug": "settings",
      "title": "Settings",
      "description": "Settings module designed for SubscriptionRevenue Desk."
    },
    {
      "slug": "subscriptionrevenue",
      "title": "Subscriptionrevenue",
      "description": "Subscriptionrevenue module designed for SubscriptionRevenue Desk."
    },
    {
      "slug": "desk",
      "title": "Desk",
      "description": "Desk module designed for SubscriptionRevenue Desk."
    }
  ],
  "stats": [
    {
      "label": "Revenue",
      "value": "273",
      "trend": "+5% this week"
    },
    {
      "label": "Expenses",
      "value": "94%",
      "trend": "+6% this week"
    },
    {
      "label": "Tax due",
      "value": "455",
      "trend": "+7% this week"
    },
    {
      "label": "Invoices",
      "value": "546",
      "trend": "+8% this week"
    }
  ],
  "records": [
    {
      "id": "AC-13-001",
      "title": "Tax record 1",
      "meta": "Accounting Systems workflow \u00b7 owner A",
      "status": "Pending",
      "amount": "1,625"
    },
    {
      "id": "AC-13-002",
      "title": "Ledger record 2",
      "meta": "Accounting Systems workflow \u00b7 owner B",
      "status": "Review",
      "amount": "3,250"
    },
    {
      "id": "AC-13-003",
      "title": "Reports record 3",
      "meta": "Accounting Systems workflow \u00b7 owner C",
      "status": "Approved",
      "amount": "4,875"
    },
    {
      "id": "AC-13-004",
      "title": "Vendors record 4",
      "meta": "Accounting Systems workflow \u00b7 owner D",
      "status": "Blocked",
      "amount": "6,500"
    },
    {
      "id": "AC-13-005",
      "title": "Settings record 5",
      "meta": "Accounting Systems workflow \u00b7 owner E",
      "status": "Synced",
      "amount": "8,125"
    },
    {
      "id": "AC-13-006",
      "title": "Subscriptionrevenue record 6",
      "meta": "Accounting Systems workflow \u00b7 owner F",
      "status": "Active",
      "amount": "9,750"
    },
    {
      "id": "AC-13-007",
      "title": "Desk record 7",
      "meta": "Accounting Systems workflow \u00b7 owner G",
      "status": "Pending",
      "amount": "11,375"
    },
    {
      "id": "AC-13-008",
      "title": "Invoices record 8",
      "meta": "Accounting Systems workflow \u00b7 owner H",
      "status": "Review",
      "amount": "13,000"
    }
  ]
} as const;
