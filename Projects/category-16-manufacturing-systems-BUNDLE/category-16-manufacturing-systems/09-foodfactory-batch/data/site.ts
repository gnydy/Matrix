export const site = {
  "categoryNumber": 16,
  "categoryName": "Manufacturing Systems",
  "templateName": "FoodFactory Batch",
  "slug": "09-foodfactory-batch",
  "tagline": "FoodFactory Batch is a sellable Manufacturing Systems template with realistic modules and backend mock routes.",
  "positioning": "Built for clients who need a credible manufacturing systems interface, not a static landing page.",
  "visualPattern": "Timeline Ops",
  "visualDescription": "Milestone and timeline-centered interface for process-heavy clients.",
  "primary": "#3b0764",
  "accent": "#c026d3",
  "soft": "#fae8ff",
  "modules": [
    {
      "href": "/floor",
      "label": "Factory Floor",
      "summary": "Factory Floor workspace with mock records, states, KPIs and actions."
    },
    {
      "href": "/orders",
      "label": "Work Orders",
      "summary": "Work Orders workspace with mock records, states, KPIs and actions."
    },
    {
      "href": "/machines",
      "label": "Machines",
      "summary": "Machines workspace with mock records, states, KPIs and actions."
    },
    {
      "href": "/materials",
      "label": "Materials",
      "summary": "Materials workspace with mock records, states, KPIs and actions."
    },
    {
      "href": "/quality",
      "label": "Quality",
      "summary": "Quality workspace with mock records, states, KPIs and actions."
    },
    {
      "href": "/maintenance",
      "label": "Maintenance",
      "summary": "Maintenance workspace with mock records, states, KPIs and actions."
    }
  ],
  "metrics": [
    {
      "label": "Active records",
      "value": "384",
      "change": "+12%"
    },
    {
      "label": "Automation rate",
      "value": "81%",
      "change": "+8%"
    },
    {
      "label": "Open alerts",
      "value": "5",
      "change": "-4%"
    },
    {
      "label": "Client value",
      "value": "9.4x",
      "change": "+18%"
    }
  ],
  "actions": [
    "Start work order",
    "Log quality check",
    "Schedule maintenance",
    "Reserve materials"
  ],
  "records": [
    {
      "id": "R-001",
      "name": "FoodFactory Batch record 1",
      "owner": "Operations",
      "status": "Active",
      "value": "28%"
    },
    {
      "id": "R-002",
      "name": "FoodFactory Batch record 2",
      "owner": "Finance",
      "status": "Pending",
      "value": "40%"
    },
    {
      "id": "R-003",
      "name": "FoodFactory Batch record 3",
      "owner": "Sales",
      "status": "At Risk",
      "value": "52%"
    },
    {
      "id": "R-004",
      "name": "FoodFactory Batch record 4",
      "owner": "Support",
      "status": "Approved",
      "value": "64%"
    },
    {
      "id": "R-005",
      "name": "FoodFactory Batch record 5",
      "owner": "Admin",
      "status": "Draft",
      "value": "76%"
    },
    {
      "id": "R-006",
      "name": "FoodFactory Batch record 6",
      "owner": "QA",
      "status": "Review",
      "value": "88%"
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
