export const site = {
  "categoryNumber": 53,
  "categoryName": "Status Pages",
  "templateName": "MultiRegion Status",
  "slug": "13-multiregion-status",
  "tagline": "MultiRegion Status is a sellable Status Pages template with realistic modules and backend mock routes.",
  "positioning": "Built for clients who need a credible status pages interface, not a static landing page.",
  "visualPattern": "Dark Control Room",
  "visualDescription": "Dark enterprise monitoring layout with alerts, logs and live indicators.",
  "primary": "#064e3b",
  "accent": "#65a30d",
  "soft": "#ecfccb",
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
      "name": "MultiRegion Status record 1",
      "owner": "Operations",
      "status": "Active",
      "value": "65%"
    },
    {
      "id": "R-002",
      "name": "MultiRegion Status record 2",
      "owner": "Finance",
      "status": "Pending",
      "value": "77%"
    },
    {
      "id": "R-003",
      "name": "MultiRegion Status record 3",
      "owner": "Sales",
      "status": "At Risk",
      "value": "89%"
    },
    {
      "id": "R-004",
      "name": "MultiRegion Status record 4",
      "owner": "Support",
      "status": "Approved",
      "value": "101%"
    },
    {
      "id": "R-005",
      "name": "MultiRegion Status record 5",
      "owner": "Admin",
      "status": "Draft",
      "value": "113%"
    },
    {
      "id": "R-006",
      "name": "MultiRegion Status record 6",
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
