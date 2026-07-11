export const site = {
  "categoryNumber": 52,
  "categoryName": "Knowledge Base Platforms",
  "templateName": "Troubleshooting Library",
  "slug": "07-troubleshooting-library",
  "tagline": "Troubleshooting Library is a sellable Knowledge Base Platforms template with realistic modules and backend mock routes.",
  "positioning": "Built for clients who need a credible knowledge base platforms interface, not a static landing page.",
  "visualPattern": "Calculator Studio",
  "visualDescription": "Input/result layout optimized for lead capture and calculated business value.",
  "primary": "#312e81",
  "accent": "#4f46e5",
  "soft": "#e0e7ff",
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
      "name": "Troubleshooting Library record 1",
      "owner": "Operations",
      "status": "Active",
      "value": "64%"
    },
    {
      "id": "R-002",
      "name": "Troubleshooting Library record 2",
      "owner": "Finance",
      "status": "Pending",
      "value": "76%"
    },
    {
      "id": "R-003",
      "name": "Troubleshooting Library record 3",
      "owner": "Sales",
      "status": "At Risk",
      "value": "88%"
    },
    {
      "id": "R-004",
      "name": "Troubleshooting Library record 4",
      "owner": "Support",
      "status": "Approved",
      "value": "100%"
    },
    {
      "id": "R-005",
      "name": "Troubleshooting Library record 5",
      "owner": "Admin",
      "status": "Draft",
      "value": "112%"
    },
    {
      "id": "R-006",
      "name": "Troubleshooting Library record 6",
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
