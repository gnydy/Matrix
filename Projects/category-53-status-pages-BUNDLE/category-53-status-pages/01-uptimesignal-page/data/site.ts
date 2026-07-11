export const site = {
  "categoryNumber": 53,
  "categoryName": "Status Pages",
  "templateName": "UptimeSignal Page",
  "slug": "01-uptimesignal-page",
  "tagline": "UptimeSignal Page is a sellable Status Pages template with realistic modules and backend mock routes.",
  "positioning": "Built for clients who need a credible status pages interface, not a static landing page.",
  "visualPattern": "Data Room",
  "visualDescription": "Table-first interface with filters, saved views, status chips and action drawer.",
  "primary": "#172554",
  "accent": "#0891b2",
  "soft": "#cffafe",
  "modules": [
    {
      "href": "/status",
      "label": "Status",
      "summary": "Status workspace with mock records, states, KPIs and actions."
    },
    {
      "href": "/incidents",
      "label": "Incidents",
      "summary": "Incidents workspace with mock records, states, KPIs and actions."
    },
    {
      "href": "/maintenance",
      "label": "Maintenance",
      "summary": "Maintenance workspace with mock records, states, KPIs and actions."
    },
    {
      "href": "/components",
      "label": "Components",
      "summary": "Components workspace with mock records, states, KPIs and actions."
    },
    {
      "href": "/history",
      "label": "History",
      "summary": "History workspace with mock records, states, KPIs and actions."
    },
    {
      "href": "/subscribers",
      "label": "Subscribers",
      "summary": "Subscribers workspace with mock records, states, KPIs and actions."
    }
  ],
  "metrics": [
    {
      "label": "Active records",
      "value": "532",
      "change": "+12%"
    },
    {
      "label": "Automation rate",
      "value": "78%",
      "change": "+8%"
    },
    {
      "label": "Open alerts",
      "value": "7",
      "change": "-4%"
    },
    {
      "label": "Client value",
      "value": "10.4x",
      "change": "+18%"
    }
  ],
  "actions": [
    "Create incident",
    "Update component",
    "Schedule maintenance",
    "Notify subscribers"
  ],
  "records": [
    {
      "id": "R-001",
      "name": "UptimeSignal Page record 1",
      "owner": "Operations",
      "status": "Active",
      "value": "65%"
    },
    {
      "id": "R-002",
      "name": "UptimeSignal Page record 2",
      "owner": "Finance",
      "status": "Pending",
      "value": "77%"
    },
    {
      "id": "R-003",
      "name": "UptimeSignal Page record 3",
      "owner": "Sales",
      "status": "At Risk",
      "value": "89%"
    },
    {
      "id": "R-004",
      "name": "UptimeSignal Page record 4",
      "owner": "Support",
      "status": "Approved",
      "value": "101%"
    },
    {
      "id": "R-005",
      "name": "UptimeSignal Page record 5",
      "owner": "Admin",
      "status": "Draft",
      "value": "113%"
    },
    {
      "id": "R-006",
      "name": "UptimeSignal Page record 6",
      "owner": "QA",
      "status": "Review",
      "value": "125%"
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
