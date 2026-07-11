export const site = {
  "title": "AuditTrail Accounting",
  "slug": "15-audittrail-accounting",
  "category": "Accounting Systems",
  "description": "Audit logs, corrections and approvals. Includes frontend screens and backend mock API routes.",
  "layout": "kanban",
  "layoutDescription": "Board-style operational cards with stages and queues.",
  "dark": "#7f1d1d",
  "accent": "#f87171",
  "soft": "#fee2e2",
  "modules": [
    {
      "slug": "invoices",
      "title": "Invoices",
      "description": "Invoices module designed for AuditTrail Accounting."
    },
    {
      "slug": "expenses",
      "title": "Expenses",
      "description": "Expenses module designed for AuditTrail Accounting."
    },
    {
      "slug": "revenue",
      "title": "Revenue",
      "description": "Revenue module designed for AuditTrail Accounting."
    },
    {
      "slug": "tax",
      "title": "Tax",
      "description": "Tax module designed for AuditTrail Accounting."
    },
    {
      "slug": "ledger",
      "title": "Ledger",
      "description": "Ledger module designed for AuditTrail Accounting."
    },
    {
      "slug": "reports",
      "title": "Reports",
      "description": "Reports module designed for AuditTrail Accounting."
    },
    {
      "slug": "vendors",
      "title": "Vendors",
      "description": "Vendors module designed for AuditTrail Accounting."
    },
    {
      "slug": "settings",
      "title": "Settings",
      "description": "Settings module designed for AuditTrail Accounting."
    },
    {
      "slug": "audittrail",
      "title": "Audittrail",
      "description": "Audittrail module designed for AuditTrail Accounting."
    },
    {
      "slug": "accounting",
      "title": "Accounting",
      "description": "Accounting module designed for AuditTrail Accounting."
    }
  ],
  "stats": [
    {
      "label": "Revenue",
      "value": "315",
      "trend": "+7% this week"
    },
    {
      "label": "Expenses",
      "value": "96%",
      "trend": "+8% this week"
    },
    {
      "label": "Tax due",
      "value": "525",
      "trend": "+9% this week"
    },
    {
      "label": "Invoices",
      "value": "630",
      "trend": "+10% this week"
    }
  ],
  "records": [
    {
      "id": "AC-15-001",
      "title": "Reports record 1",
      "meta": "Accounting Systems workflow \u00b7 owner A",
      "status": "Approved",
      "amount": "1,875"
    },
    {
      "id": "AC-15-002",
      "title": "Vendors record 2",
      "meta": "Accounting Systems workflow \u00b7 owner B",
      "status": "Blocked",
      "amount": "3,750"
    },
    {
      "id": "AC-15-003",
      "title": "Settings record 3",
      "meta": "Accounting Systems workflow \u00b7 owner C",
      "status": "Synced",
      "amount": "5,625"
    },
    {
      "id": "AC-15-004",
      "title": "Audittrail record 4",
      "meta": "Accounting Systems workflow \u00b7 owner D",
      "status": "Active",
      "amount": "7,500"
    },
    {
      "id": "AC-15-005",
      "title": "Accounting record 5",
      "meta": "Accounting Systems workflow \u00b7 owner E",
      "status": "Pending",
      "amount": "9,375"
    },
    {
      "id": "AC-15-006",
      "title": "Invoices record 6",
      "meta": "Accounting Systems workflow \u00b7 owner F",
      "status": "Review",
      "amount": "11,250"
    },
    {
      "id": "AC-15-007",
      "title": "Expenses record 7",
      "meta": "Accounting Systems workflow \u00b7 owner G",
      "status": "Approved",
      "amount": "13,125"
    },
    {
      "id": "AC-15-008",
      "title": "Revenue record 8",
      "meta": "Accounting Systems workflow \u00b7 owner H",
      "status": "Blocked",
      "amount": "15,000"
    }
  ]
} as const;
