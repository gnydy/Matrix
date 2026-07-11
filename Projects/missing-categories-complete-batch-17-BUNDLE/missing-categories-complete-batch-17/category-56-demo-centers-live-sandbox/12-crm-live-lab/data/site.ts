export const site = {
  "categoryNumber": 56,
  "categoryName": "Demo Centers & Live Sandbox",
  "templateName": "CRM Live Lab",
  "slug": "12-crm-live-lab",
  "tagline": "CRM Live Lab is a sellable Demo Centers & Live Sandbox template with realistic modules and backend mock routes.",
  "positioning": "Built for clients who need a credible demo centers & live sandbox interface, not a static landing page.",
  "visualPattern": "Marketplace Shelf",
  "visualDescription": "Listing-first UI with filters, cards, details and conversion actions.",
  "primary": "#0c4a6e",
  "accent": "#0284c7",
  "soft": "#e0f2fe",
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
      "name": "CRM Live Lab record 1",
      "owner": "Operations",
      "status": "Active",
      "value": "68%"
    },
    {
      "id": "R-002",
      "name": "CRM Live Lab record 2",
      "owner": "Finance",
      "status": "Pending",
      "value": "80%"
    },
    {
      "id": "R-003",
      "name": "CRM Live Lab record 3",
      "owner": "Sales",
      "status": "At Risk",
      "value": "92%"
    },
    {
      "id": "R-004",
      "name": "CRM Live Lab record 4",
      "owner": "Support",
      "status": "Approved",
      "value": "104%"
    },
    {
      "id": "R-005",
      "name": "CRM Live Lab record 5",
      "owner": "Admin",
      "status": "Draft",
      "value": "116%"
    },
    {
      "id": "R-006",
      "name": "CRM Live Lab record 6",
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
