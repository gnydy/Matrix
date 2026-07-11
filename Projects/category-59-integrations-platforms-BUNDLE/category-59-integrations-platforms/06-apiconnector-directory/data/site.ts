export const site = {
  "categoryNumber": 59,
  "categoryName": "Integrations Platforms",
  "templateName": "APIConnector Directory",
  "slug": "06-apiconnector-directory",
  "tagline": "APIConnector Directory is a sellable Integrations Platforms template with realistic modules and backend mock routes.",
  "positioning": "Built for clients who need a credible integrations platforms interface, not a static landing page.",
  "visualPattern": "Timeline Ops",
  "visualDescription": "Milestone and timeline-centered interface for process-heavy clients.",
  "primary": "#3b0764",
  "accent": "#c026d3",
  "soft": "#fae8ff",
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
      "name": "APIConnector Directory record 1",
      "owner": "Operations",
      "status": "Active",
      "value": "71%"
    },
    {
      "id": "R-002",
      "name": "APIConnector Directory record 2",
      "owner": "Finance",
      "status": "Pending",
      "value": "83%"
    },
    {
      "id": "R-003",
      "name": "APIConnector Directory record 3",
      "owner": "Sales",
      "status": "At Risk",
      "value": "95%"
    },
    {
      "id": "R-004",
      "name": "APIConnector Directory record 4",
      "owner": "Support",
      "status": "Approved",
      "value": "107%"
    },
    {
      "id": "R-005",
      "name": "APIConnector Directory record 5",
      "owner": "Admin",
      "status": "Draft",
      "value": "119%"
    },
    {
      "id": "R-006",
      "name": "APIConnector Directory record 6",
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
