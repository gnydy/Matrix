export const site = {
  "categoryNumber": 58,
  "categoryName": "Project Estimator Tools",
  "templateName": "FeatureCost Builder",
  "slug": "07-featurecost-builder",
  "tagline": "FeatureCost Builder is a sellable Project Estimator Tools template with realistic modules and backend mock routes.",
  "positioning": "Built for clients who need a credible project estimator tools interface, not a static landing page.",
  "visualPattern": "Timeline Ops",
  "visualDescription": "Milestone and timeline-centered interface for process-heavy clients.",
  "primary": "#3b0764",
  "accent": "#c026d3",
  "soft": "#fae8ff",
  "modules": [
    {
      "href": "/estimator",
      "label": "Estimator",
      "summary": "Estimator workspace with mock records, states, KPIs and actions."
    },
    {
      "href": "/features",
      "label": "Feature Picker",
      "summary": "Feature Picker workspace with mock records, states, KPIs and actions."
    },
    {
      "href": "/timeline",
      "label": "Timeline",
      "summary": "Timeline workspace with mock records, states, KPIs and actions."
    },
    {
      "href": "/pricing",
      "label": "Pricing",
      "summary": "Pricing workspace with mock records, states, KPIs and actions."
    },
    {
      "href": "/proposal",
      "label": "Proposal",
      "summary": "Proposal workspace with mock records, states, KPIs and actions."
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
      "value": "552",
      "change": "+12%"
    },
    {
      "label": "Automation rate",
      "value": "83%",
      "change": "+8%"
    },
    {
      "label": "Open alerts",
      "value": "5",
      "change": "-4%"
    },
    {
      "label": "Client value",
      "value": "6.4x",
      "change": "+18%"
    }
  ],
  "actions": [
    "Add feature",
    "Estimate price",
    "Generate proposal",
    "Set delivery phase"
  ],
  "records": [
    {
      "id": "R-001",
      "name": "FeatureCost Builder record 1",
      "owner": "Operations",
      "status": "Active",
      "value": "70%"
    },
    {
      "id": "R-002",
      "name": "FeatureCost Builder record 2",
      "owner": "Finance",
      "status": "Pending",
      "value": "82%"
    },
    {
      "id": "R-003",
      "name": "FeatureCost Builder record 3",
      "owner": "Sales",
      "status": "At Risk",
      "value": "94%"
    },
    {
      "id": "R-004",
      "name": "FeatureCost Builder record 4",
      "owner": "Support",
      "status": "Approved",
      "value": "106%"
    },
    {
      "id": "R-005",
      "name": "FeatureCost Builder record 5",
      "owner": "Admin",
      "status": "Draft",
      "value": "118%"
    },
    {
      "id": "R-006",
      "name": "FeatureCost Builder record 6",
      "owner": "QA",
      "status": "Review",
      "value": "130%"
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
