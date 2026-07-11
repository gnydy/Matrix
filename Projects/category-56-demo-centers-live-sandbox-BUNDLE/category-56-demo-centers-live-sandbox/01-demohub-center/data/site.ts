export const site = {
  "categoryNumber": 56,
  "categoryName": "Demo Centers & Live Sandbox",
  "templateName": "DemoHub Center",
  "slug": "01-demohub-center",
  "tagline": "DemoHub Center is a sellable Demo Centers & Live Sandbox template with realistic modules and backend mock routes.",
  "positioning": "Built for clients who need a credible demo centers & live sandbox interface, not a static landing page.",
  "visualPattern": "Portal Layout",
  "visualDescription": "Customer or employee portal UI with cards, quick links and personal workspace.",
  "primary": "#450a0a",
  "accent": "#dc2626",
  "soft": "#fee2e2",
  "modules": [
    {
      "href": "/demos",
      "label": "Demo Gallery",
      "summary": "Demo Gallery workspace with mock records, states, KPIs and actions."
    },
    {
      "href": "/sandbox",
      "label": "Sandbox Login",
      "summary": "Sandbox Login workspace with mock records, states, KPIs and actions."
    },
    {
      "href": "/sessions",
      "label": "Demo Sessions",
      "summary": "Demo Sessions workspace with mock records, states, KPIs and actions."
    },
    {
      "href": "/reset",
      "label": "Reset Data",
      "summary": "Reset Data workspace with mock records, states, KPIs and actions."
    },
    {
      "href": "/analytics",
      "label": "Demo Analytics",
      "summary": "Demo Analytics workspace with mock records, states, KPIs and actions."
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
      "value": "544",
      "change": "+12%"
    },
    {
      "label": "Automation rate",
      "value": "81%",
      "change": "+8%"
    },
    {
      "label": "Open alerts",
      "value": "3",
      "change": "-4%"
    },
    {
      "label": "Client value",
      "value": "4.4x",
      "change": "+18%"
    }
  ],
  "actions": [
    "Start sandbox",
    "Reset demo data",
    "Issue credentials",
    "Track session"
  ],
  "records": [
    {
      "id": "R-001",
      "name": "DemoHub Center record 1",
      "owner": "Operations",
      "status": "Active",
      "value": "68%"
    },
    {
      "id": "R-002",
      "name": "DemoHub Center record 2",
      "owner": "Finance",
      "status": "Pending",
      "value": "80%"
    },
    {
      "id": "R-003",
      "name": "DemoHub Center record 3",
      "owner": "Sales",
      "status": "At Risk",
      "value": "92%"
    },
    {
      "id": "R-004",
      "name": "DemoHub Center record 4",
      "owner": "Support",
      "status": "Approved",
      "value": "104%"
    },
    {
      "id": "R-005",
      "name": "DemoHub Center record 5",
      "owner": "Admin",
      "status": "Draft",
      "value": "116%"
    },
    {
      "id": "R-006",
      "name": "DemoHub Center record 6",
      "owner": "QA",
      "status": "Review",
      "value": "128%"
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
