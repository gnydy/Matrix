export const site = {
  "categoryNumber": 3,
  "categoryName": "ERP Systems",
  "templateName": "HoldingExecutive ERP",
  "slug": "16-holdingexecutive-erp",
  "tagline": "HoldingExecutive ERP is a sellable ERP Systems template with realistic modules and backend mock routes.",
  "positioning": "Built for clients who need a credible erp systems interface, not a static landing page.",
  "visualPattern": "Calculator Studio",
  "visualDescription": "Input/result layout optimized for lead capture and calculated business value.",
  "primary": "#312e81",
  "accent": "#4f46e5",
  "soft": "#e0e7ff",
  "modules": [
    {
      "href": "/overview",
      "label": "Executive Overview",
      "summary": "Executive Overview workspace with mock records, states, KPIs and actions."
    },
    {
      "href": "/finance",
      "label": "Finance",
      "summary": "Finance workspace with mock records, states, KPIs and actions."
    },
    {
      "href": "/procurement",
      "label": "Procurement",
      "summary": "Procurement workspace with mock records, states, KPIs and actions."
    },
    {
      "href": "/inventory",
      "label": "Inventory",
      "summary": "Inventory workspace with mock records, states, KPIs and actions."
    },
    {
      "href": "/hr",
      "label": "HR",
      "summary": "HR workspace with mock records, states, KPIs and actions."
    },
    {
      "href": "/reports",
      "label": "Reports",
      "summary": "Reports workspace with mock records, states, KPIs and actions."
    }
  ],
  "metrics": [
    {
      "label": "Active records",
      "value": "332",
      "change": "+12%"
    },
    {
      "label": "Automation rate",
      "value": "68%",
      "change": "+8%"
    },
    {
      "label": "Open alerts",
      "value": "6",
      "change": "-4%"
    },
    {
      "label": "Client value",
      "value": "5.4x",
      "change": "+18%"
    }
  ],
  "actions": [
    "Approve purchase order",
    "Reconcile invoice",
    "Sync inventory",
    "Run payroll batch"
  ],
  "records": [
    {
      "id": "R-001",
      "name": "HoldingExecutive ERP record 1",
      "owner": "Operations",
      "status": "Active",
      "value": "15%"
    },
    {
      "id": "R-002",
      "name": "HoldingExecutive ERP record 2",
      "owner": "Finance",
      "status": "Pending",
      "value": "27%"
    },
    {
      "id": "R-003",
      "name": "HoldingExecutive ERP record 3",
      "owner": "Sales",
      "status": "At Risk",
      "value": "39%"
    },
    {
      "id": "R-004",
      "name": "HoldingExecutive ERP record 4",
      "owner": "Support",
      "status": "Approved",
      "value": "51%"
    },
    {
      "id": "R-005",
      "name": "HoldingExecutive ERP record 5",
      "owner": "Admin",
      "status": "Draft",
      "value": "63%"
    },
    {
      "id": "R-006",
      "name": "HoldingExecutive ERP record 6",
      "owner": "QA",
      "status": "Review",
      "value": "75%"
    }
  ],
  "roles": [
    "Admin",
    "Manager",
    "Operator",
    "Client Viewer"
  ],
  "states": [
    "Empty state",
    "Loading state",
    "Error state",
    "Success state",
    "Permission state"
  ]
} as const;

export type SiteRecord = typeof site.records[number];
