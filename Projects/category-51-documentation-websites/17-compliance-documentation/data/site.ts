export const site = {
  "categoryNumber": 51,
  "categoryName": "Documentation Websites",
  "templateName": "Compliance Documentation",
  "slug": "17-compliance-documentation",
  "tagline": "Compliance Documentation is a sellable Documentation Websites template with realistic modules and backend mock routes.",
  "positioning": "Built for clients who need a credible documentation websites interface, not a static landing page.",
  "visualPattern": "Marketplace Shelf",
  "visualDescription": "Listing-first UI with filters, cards, details and conversion actions.",
  "primary": "#0c4a6e",
  "accent": "#0284c7",
  "soft": "#e0f2fe",
  "modules": [
    {
      "href": "/docs",
      "label": "Docs Home",
      "summary": "Docs Home workspace with mock records, states, KPIs and actions."
    },
    {
      "href": "/guides",
      "label": "Guides",
      "summary": "Guides workspace with mock records, states, KPIs and actions."
    },
    {
      "href": "/api-reference",
      "label": "API Reference",
      "summary": "API Reference workspace with mock records, states, KPIs and actions."
    },
    {
      "href": "/versions",
      "label": "Versions",
      "summary": "Versions workspace with mock records, states, KPIs and actions."
    },
    {
      "href": "/changelog",
      "label": "Changelog",
      "summary": "Changelog workspace with mock records, states, KPIs and actions."
    },
    {
      "href": "/search",
      "label": "Search",
      "summary": "Search workspace with mock records, states, KPIs and actions."
    }
  ],
  "metrics": [
    {
      "label": "Active records",
      "value": "524",
      "change": "+12%"
    },
    {
      "label": "Automation rate",
      "value": "76%",
      "change": "+8%"
    },
    {
      "label": "Open alerts",
      "value": "5",
      "change": "-4%"
    },
    {
      "label": "Client value",
      "value": "8.4x",
      "change": "+18%"
    }
  ],
  "actions": [
    "Publish guide",
    "Version docs",
    "Review API reference",
    "Index search"
  ],
  "records": [
    {
      "id": "R-001",
      "name": "Compliance Documentation record 1",
      "owner": "Operations",
      "status": "Active",
      "value": "63%"
    },
    {
      "id": "R-002",
      "name": "Compliance Documentation record 2",
      "owner": "Finance",
      "status": "Pending",
      "value": "75%"
    },
    {
      "id": "R-003",
      "name": "Compliance Documentation record 3",
      "owner": "Sales",
      "status": "At Risk",
      "value": "87%"
    },
    {
      "id": "R-004",
      "name": "Compliance Documentation record 4",
      "owner": "Support",
      "status": "Approved",
      "value": "99%"
    },
    {
      "id": "R-005",
      "name": "Compliance Documentation record 5",
      "owner": "Admin",
      "status": "Draft",
      "value": "111%"
    },
    {
      "id": "R-006",
      "name": "Compliance Documentation record 6",
      "owner": "QA",
      "status": "Review",
      "value": "123%"
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
