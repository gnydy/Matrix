export const site = {
  "categoryNumber": 54,
  "categoryName": "Roadmap & Feature Request Platforms",
  "templateName": "ProductDiscovery Hub",
  "slug": "12-productdiscovery-hub",
  "tagline": "ProductDiscovery Hub is a sellable Roadmap & Feature Request Platforms template with realistic modules and backend mock routes.",
  "positioning": "Built for clients who need a credible roadmap & feature request platforms interface, not a static landing page.",
  "visualPattern": "Dark Control Room",
  "visualDescription": "Dark enterprise monitoring layout with alerts, logs and live indicators.",
  "primary": "#064e3b",
  "accent": "#65a30d",
  "soft": "#ecfccb",
  "modules": [
    {
      "href": "/roadmap",
      "label": "Roadmap",
      "summary": "Roadmap workspace with mock records, states, KPIs and actions."
    },
    {
      "href": "/ideas",
      "label": "Feature Requests",
      "summary": "Feature Requests workspace with mock records, states, KPIs and actions."
    },
    {
      "href": "/voting",
      "label": "Voting",
      "summary": "Voting workspace with mock records, states, KPIs and actions."
    },
    {
      "href": "/changelog",
      "label": "Changelog",
      "summary": "Changelog workspace with mock records, states, KPIs and actions."
    },
    {
      "href": "/feedback",
      "label": "Feedback Inbox",
      "summary": "Feedback Inbox workspace with mock records, states, KPIs and actions."
    },
    {
      "href": "/admin",
      "label": "Admin",
      "summary": "Admin workspace with mock records, states, KPIs and actions."
    }
  ],
  "metrics": [
    {
      "label": "Active records",
      "value": "536",
      "change": "+12%"
    },
    {
      "label": "Automation rate",
      "value": "79%",
      "change": "+8%"
    },
    {
      "label": "Open alerts",
      "value": "8",
      "change": "-4%"
    },
    {
      "label": "Client value",
      "value": "2.4x",
      "change": "+18%"
    }
  ],
  "actions": [
    "Vote feature",
    "Move roadmap card",
    "Publish changelog",
    "Merge duplicate idea"
  ],
  "records": [
    {
      "id": "R-001",
      "name": "ProductDiscovery Hub record 1",
      "owner": "Operations",
      "status": "Active",
      "value": "66%"
    },
    {
      "id": "R-002",
      "name": "ProductDiscovery Hub record 2",
      "owner": "Finance",
      "status": "Pending",
      "value": "78%"
    },
    {
      "id": "R-003",
      "name": "ProductDiscovery Hub record 3",
      "owner": "Sales",
      "status": "At Risk",
      "value": "90%"
    },
    {
      "id": "R-004",
      "name": "ProductDiscovery Hub record 4",
      "owner": "Support",
      "status": "Approved",
      "value": "102%"
    },
    {
      "id": "R-005",
      "name": "ProductDiscovery Hub record 5",
      "owner": "Admin",
      "status": "Draft",
      "value": "114%"
    },
    {
      "id": "R-006",
      "name": "ProductDiscovery Hub record 6",
      "owner": "QA",
      "status": "Review",
      "value": "126%"
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
