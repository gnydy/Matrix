export const site = {
  "categoryNumber": 52,
  "categoryName": "Knowledge Base Platforms",
  "templateName": "ITSelfService KB",
  "slug": "10-itselfservice-kb",
  "tagline": "ITSelfService KB is a sellable Knowledge Base Platforms template with realistic modules and backend mock routes.",
  "positioning": "Built for clients who need a credible knowledge base platforms interface, not a static landing page.",
  "visualPattern": "Executive Cockpit",
  "visualDescription": "High-level KPI cards, risk indicators, revenue impact and manager actions.",
  "primary": "#0b1220",
  "accent": "#059669",
  "soft": "#d1fae5",
  "modules": [
    {
      "href": "/articles",
      "label": "Articles",
      "summary": "Articles workspace with mock records, states, KPIs and actions."
    },
    {
      "href": "/categories",
      "label": "Categories",
      "summary": "Categories workspace with mock records, states, KPIs and actions."
    },
    {
      "href": "/feedback",
      "label": "Feedback",
      "summary": "Feedback workspace with mock records, states, KPIs and actions."
    },
    {
      "href": "/tickets",
      "label": "Tickets",
      "summary": "Tickets workspace with mock records, states, KPIs and actions."
    },
    {
      "href": "/internal",
      "label": "Internal Knowledge",
      "summary": "Internal Knowledge workspace with mock records, states, KPIs and actions."
    },
    {
      "href": "/analytics",
      "label": "Analytics",
      "summary": "Analytics workspace with mock records, states, KPIs and actions."
    }
  ],
  "metrics": [
    {
      "label": "Active records",
      "value": "528",
      "change": "+12%"
    },
    {
      "label": "Automation rate",
      "value": "77%",
      "change": "+8%"
    },
    {
      "label": "Open alerts",
      "value": "6",
      "change": "-4%"
    },
    {
      "label": "Client value",
      "value": "9.4x",
      "change": "+18%"
    }
  ],
  "actions": [
    "Publish article",
    "Mark helpful",
    "Escalate unresolved",
    "Archive outdated answer"
  ],
  "records": [
    {
      "id": "R-001",
      "name": "ITSelfService KB record 1",
      "owner": "Operations",
      "status": "Active",
      "value": "64%"
    },
    {
      "id": "R-002",
      "name": "ITSelfService KB record 2",
      "owner": "Finance",
      "status": "Pending",
      "value": "76%"
    },
    {
      "id": "R-003",
      "name": "ITSelfService KB record 3",
      "owner": "Sales",
      "status": "At Risk",
      "value": "88%"
    },
    {
      "id": "R-004",
      "name": "ITSelfService KB record 4",
      "owner": "Support",
      "status": "Approved",
      "value": "100%"
    },
    {
      "id": "R-005",
      "name": "ITSelfService KB record 5",
      "owner": "Admin",
      "status": "Draft",
      "value": "112%"
    },
    {
      "id": "R-006",
      "name": "ITSelfService KB record 6",
      "owner": "QA",
      "status": "Review",
      "value": "124%"
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
