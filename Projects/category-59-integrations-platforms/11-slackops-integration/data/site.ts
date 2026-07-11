export const site = {
  "categoryNumber": 59,
  "categoryName": "Integrations Platforms",
  "templateName": "SlackOps Integration",
  "slug": "11-slackops-integration",
  "tagline": "SlackOps Integration is a sellable Integrations Platforms template with realistic modules and backend mock routes.",
  "positioning": "Built for clients who need a credible integrations platforms interface, not a static landing page.",
  "visualPattern": "Command Grid",
  "visualDescription": "A dense operator layout with sidebar metrics, operational queues and board cards.",
  "primary": "#0f172a",
  "accent": "#2563eb",
  "soft": "#dbeafe",
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
      "name": "SlackOps Integration record 1",
      "owner": "Operations",
      "status": "Active",
      "value": "71%"
    },
    {
      "id": "R-002",
      "name": "SlackOps Integration record 2",
      "owner": "Finance",
      "status": "Pending",
      "value": "83%"
    },
    {
      "id": "R-003",
      "name": "SlackOps Integration record 3",
      "owner": "Sales",
      "status": "At Risk",
      "value": "95%"
    },
    {
      "id": "R-004",
      "name": "SlackOps Integration record 4",
      "owner": "Support",
      "status": "Approved",
      "value": "107%"
    },
    {
      "id": "R-005",
      "name": "SlackOps Integration record 5",
      "owner": "Admin",
      "status": "Draft",
      "value": "119%"
    },
    {
      "id": "R-006",
      "name": "SlackOps Integration record 6",
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
