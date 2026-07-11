export const site = {
  "categoryNumber": 57,
  "categoryName": "ROI Calculator Pages",
  "templateName": "EnergySavings ROI",
  "slug": "17-energysavings-roi",
  "tagline": "EnergySavings ROI is a sellable ROI Calculator Pages template with realistic modules and backend mock routes.",
  "positioning": "Built for clients who need a credible roi calculator pages interface, not a static landing page.",
  "visualPattern": "Data Room",
  "visualDescription": "Table-first interface with filters, saved views, status chips and action drawer.",
  "primary": "#172554",
  "accent": "#0891b2",
  "soft": "#cffafe",
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
      "name": "EnergySavings ROI record 1",
      "owner": "Operations",
      "status": "Active",
      "value": "69%"
    },
    {
      "id": "R-002",
      "name": "EnergySavings ROI record 2",
      "owner": "Finance",
      "status": "Pending",
      "value": "81%"
    },
    {
      "id": "R-003",
      "name": "EnergySavings ROI record 3",
      "owner": "Sales",
      "status": "At Risk",
      "value": "93%"
    },
    {
      "id": "R-004",
      "name": "EnergySavings ROI record 4",
      "owner": "Support",
      "status": "Approved",
      "value": "105%"
    },
    {
      "id": "R-005",
      "name": "EnergySavings ROI record 5",
      "owner": "Admin",
      "status": "Draft",
      "value": "117%"
    },
    {
      "id": "R-006",
      "name": "EnergySavings ROI record 6",
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
