export const site = {
  "categoryNumber": 60,
  "categoryName": "Industry-Specific Solutions",
  "templateName": "WarehouseOps Solution",
  "slug": "05-warehouseops-solution",
  "tagline": "WarehouseOps Solution is a sellable Industry-Specific Solutions template with realistic modules and backend mock routes.",
  "positioning": "Built for clients who need a credible industry-specific solutions interface, not a static landing page.",
  "visualPattern": "Timeline Ops",
  "visualDescription": "Milestone and timeline-centered interface for process-heavy clients.",
  "primary": "#3b0764",
  "accent": "#c026d3",
  "soft": "#fae8ff",
  "modules": [
    {
      "href": "/solution",
      "label": "Solution Home",
      "summary": "Solution Home workspace with mock records, states, KPIs and actions."
    },
    {
      "href": "/operations",
      "label": "Operations",
      "summary": "Operations workspace with mock records, states, KPIs and actions."
    },
    {
      "href": "/clients",
      "label": "Clients",
      "summary": "Clients workspace with mock records, states, KPIs and actions."
    },
    {
      "href": "/workflow",
      "label": "Workflow",
      "summary": "Workflow workspace with mock records, states, KPIs and actions."
    },
    {
      "href": "/reports",
      "label": "Reports",
      "summary": "Reports workspace with mock records, states, KPIs and actions."
    },
    {
      "href": "/settings",
      "label": "Settings",
      "summary": "Settings workspace with mock records, states, KPIs and actions."
    }
  ],
  "metrics": [
    {
      "label": "Active records",
      "value": "560",
      "change": "+12%"
    },
    {
      "label": "Automation rate",
      "value": "65%",
      "change": "+8%"
    },
    {
      "label": "Open alerts",
      "value": "7",
      "change": "-4%"
    },
    {
      "label": "Client value",
      "value": "8.4x",
      "change": "+18%"
    }
  ],
  "actions": [
    "Create industry workflow",
    "Assign operator",
    "Generate report",
    "Configure module"
  ],
  "records": [
    {
      "id": "R-001",
      "name": "WarehouseOps Solution record 1",
      "owner": "Operations",
      "status": "Active",
      "value": "72%"
    },
    {
      "id": "R-002",
      "name": "WarehouseOps Solution record 2",
      "owner": "Finance",
      "status": "Pending",
      "value": "84%"
    },
    {
      "id": "R-003",
      "name": "WarehouseOps Solution record 3",
      "owner": "Sales",
      "status": "At Risk",
      "value": "96%"
    },
    {
      "id": "R-004",
      "name": "WarehouseOps Solution record 4",
      "owner": "Support",
      "status": "Approved",
      "value": "108%"
    },
    {
      "id": "R-005",
      "name": "WarehouseOps Solution record 5",
      "owner": "Admin",
      "status": "Draft",
      "value": "120%"
    },
    {
      "id": "R-006",
      "name": "WarehouseOps Solution record 6",
      "owner": "QA",
      "status": "Review",
      "value": "132%"
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
