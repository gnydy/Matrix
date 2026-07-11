export const site = {
  "categoryNumber": 57,
  "categoryName": "ROI Calculator Pages",
  "templateName": "InventoryROI Calculator",
  "slug": "05-inventoryroi-calculator",
  "tagline": "InventoryROI Calculator is a sellable ROI Calculator Pages template with realistic modules and backend mock routes.",
  "positioning": "Built for clients who need a credible roi calculator pages interface, not a static landing page.",
  "visualPattern": "Executive Cockpit",
  "visualDescription": "High-level KPI cards, risk indicators, revenue impact and manager actions.",
  "primary": "#0b1220",
  "accent": "#059669",
  "soft": "#d1fae5",
  "modules": [
    {
      "href": "/calculator",
      "label": "Calculator",
      "summary": "Calculator workspace with mock records, states, KPIs and actions."
    },
    {
      "href": "/inputs",
      "label": "Inputs",
      "summary": "Inputs workspace with mock records, states, KPIs and actions."
    },
    {
      "href": "/results",
      "label": "Results",
      "summary": "Results workspace with mock records, states, KPIs and actions."
    },
    {
      "href": "/charts",
      "label": "Charts",
      "summary": "Charts workspace with mock records, states, KPIs and actions."
    },
    {
      "href": "/lead",
      "label": "Lead Capture",
      "summary": "Lead Capture workspace with mock records, states, KPIs and actions."
    },
    {
      "href": "/proposal",
      "label": "Proposal",
      "summary": "Proposal workspace with mock records, states, KPIs and actions."
    }
  ],
  "metrics": [
    {
      "label": "Active records",
      "value": "548",
      "change": "+12%"
    },
    {
      "label": "Automation rate",
      "value": "82%",
      "change": "+8%"
    },
    {
      "label": "Open alerts",
      "value": "4",
      "change": "-4%"
    },
    {
      "label": "Client value",
      "value": "5.4x",
      "change": "+18%"
    }
  ],
  "actions": [
    "Calculate ROI",
    "Capture lead",
    "Generate chart",
    "Export estimate"
  ],
  "records": [
    {
      "id": "R-001",
      "name": "InventoryROI Calculator record 1",
      "owner": "Operations",
      "status": "Active",
      "value": "69%"
    },
    {
      "id": "R-002",
      "name": "InventoryROI Calculator record 2",
      "owner": "Finance",
      "status": "Pending",
      "value": "81%"
    },
    {
      "id": "R-003",
      "name": "InventoryROI Calculator record 3",
      "owner": "Sales",
      "status": "At Risk",
      "value": "93%"
    },
    {
      "id": "R-004",
      "name": "InventoryROI Calculator record 4",
      "owner": "Support",
      "status": "Approved",
      "value": "105%"
    },
    {
      "id": "R-005",
      "name": "InventoryROI Calculator record 5",
      "owner": "Admin",
      "status": "Draft",
      "value": "117%"
    },
    {
      "id": "R-006",
      "name": "InventoryROI Calculator record 6",
      "owner": "QA",
      "status": "Review",
      "value": "129%"
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
