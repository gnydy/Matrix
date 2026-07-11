export const site = {
  "categoryNumber": 16,
  "categoryName": "Manufacturing Systems",
  "templateName": "AutoParts Plant",
  "slug": "17-autoparts-plant",
  "tagline": "AutoParts Plant is a sellable Manufacturing Systems template with realistic modules and backend mock routes.",
  "positioning": "Built for clients who need a credible manufacturing systems interface, not a static landing page.",
  "visualPattern": "Kanban Flow",
  "visualDescription": "Stage-based cards with priorities, owners and clear movement across workflow states.",
  "primary": "#1f2937",
  "accent": "#ea580c",
  "soft": "#ffedd5",
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
      "name": "AutoParts Plant record 1",
      "owner": "Operations",
      "status": "Active",
      "value": "28%"
    },
    {
      "id": "R-002",
      "name": "AutoParts Plant record 2",
      "owner": "Finance",
      "status": "Pending",
      "value": "40%"
    },
    {
      "id": "R-003",
      "name": "AutoParts Plant record 3",
      "owner": "Sales",
      "status": "At Risk",
      "value": "52%"
    },
    {
      "id": "R-004",
      "name": "AutoParts Plant record 4",
      "owner": "Support",
      "status": "Approved",
      "value": "64%"
    },
    {
      "id": "R-005",
      "name": "AutoParts Plant record 5",
      "owner": "Admin",
      "status": "Draft",
      "value": "76%"
    },
    {
      "id": "R-006",
      "name": "AutoParts Plant record 6",
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
