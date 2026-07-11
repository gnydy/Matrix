export const site = {
  "categoryNumber": 59,
  "categoryName": "Integrations Platforms",
  "templateName": "ShopifySync Platform",
  "slug": "08-shopifysync-platform",
  "tagline": "ShopifySync Platform is a sellable Integrations Platforms template with realistic modules and backend mock routes.",
  "positioning": "Built for clients who need a credible integrations platforms interface, not a static landing page.",
  "visualPattern": "Portal Layout",
  "visualDescription": "Customer or employee portal UI with cards, quick links and personal workspace.",
  "primary": "#450a0a",
  "accent": "#dc2626",
  "soft": "#fee2e2",
  "modules": [
    {
      "href": "/connectors",
      "label": "Connectors",
      "summary": "Connectors workspace with mock records, states, KPIs and actions."
    },
    {
      "href": "/webhooks",
      "label": "Webhooks",
      "summary": "Webhooks workspace with mock records, states, KPIs and actions."
    },
    {
      "href": "/logs",
      "label": "Logs",
      "summary": "Logs workspace with mock records, states, KPIs and actions."
    },
    {
      "href": "/mapping",
      "label": "Field Mapping",
      "summary": "Field Mapping workspace with mock records, states, KPIs and actions."
    },
    {
      "href": "/auth",
      "label": "Auth Config",
      "summary": "Auth Config workspace with mock records, states, KPIs and actions."
    },
    {
      "href": "/monitoring",
      "label": "Monitoring",
      "summary": "Monitoring workspace with mock records, states, KPIs and actions."
    }
  ],
  "metrics": [
    {
      "label": "Active records",
      "value": "556",
      "change": "+12%"
    },
    {
      "label": "Automation rate",
      "value": "84%",
      "change": "+8%"
    },
    {
      "label": "Open alerts",
      "value": "6",
      "change": "-4%"
    },
    {
      "label": "Client value",
      "value": "7.4x",
      "change": "+18%"
    }
  ],
  "actions": [
    "Test connector",
    "Rotate API key",
    "Replay webhook",
    "Map fields"
  ],
  "records": [
    {
      "id": "R-001",
      "name": "ShopifySync Platform record 1",
      "owner": "Operations",
      "status": "Active",
      "value": "71%"
    },
    {
      "id": "R-002",
      "name": "ShopifySync Platform record 2",
      "owner": "Finance",
      "status": "Pending",
      "value": "83%"
    },
    {
      "id": "R-003",
      "name": "ShopifySync Platform record 3",
      "owner": "Sales",
      "status": "At Risk",
      "value": "95%"
    },
    {
      "id": "R-004",
      "name": "ShopifySync Platform record 4",
      "owner": "Support",
      "status": "Approved",
      "value": "107%"
    },
    {
      "id": "R-005",
      "name": "ShopifySync Platform record 5",
      "owner": "Admin",
      "status": "Draft",
      "value": "119%"
    },
    {
      "id": "R-006",
      "name": "ShopifySync Platform record 6",
      "owner": "QA",
      "status": "Review",
      "value": "131%"
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
