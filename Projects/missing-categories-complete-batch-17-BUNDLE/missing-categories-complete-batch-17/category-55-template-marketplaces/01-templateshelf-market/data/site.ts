export const site = {
  "categoryNumber": 55,
  "categoryName": "Template Marketplaces",
  "templateName": "TemplateShelf Market",
  "slug": "01-templateshelf-market",
  "tagline": "TemplateShelf Market is a sellable Template Marketplaces template with realistic modules and backend mock routes.",
  "positioning": "Built for clients who need a credible template marketplaces interface, not a static landing page.",
  "visualPattern": "Dark Control Room",
  "visualDescription": "Dark enterprise monitoring layout with alerts, logs and live indicators.",
  "primary": "#064e3b",
  "accent": "#65a30d",
  "soft": "#ecfccb",
  "modules": [
    {
      "href": "/market",
      "label": "Marketplace",
      "summary": "Marketplace workspace with mock records, states, KPIs and actions."
    },
    {
      "href": "/details",
      "label": "Template Details",
      "summary": "Template Details workspace with mock records, states, KPIs and actions."
    },
    {
      "href": "/downloads",
      "label": "Downloads",
      "summary": "Downloads workspace with mock records, states, KPIs and actions."
    },
    {
      "href": "/licenses",
      "label": "Licenses",
      "summary": "Licenses workspace with mock records, states, KPIs and actions."
    },
    {
      "href": "/seller",
      "label": "Seller Dashboard",
      "summary": "Seller Dashboard workspace with mock records, states, KPIs and actions."
    },
    {
      "href": "/checkout",
      "label": "Checkout Mock",
      "summary": "Checkout Mock workspace with mock records, states, KPIs and actions."
    }
  ],
  "metrics": [
    {
      "label": "Active records",
      "value": "540",
      "change": "+12%"
    },
    {
      "label": "Automation rate",
      "value": "80%",
      "change": "+8%"
    },
    {
      "label": "Open alerts",
      "value": "9",
      "change": "-4%"
    },
    {
      "label": "Client value",
      "value": "3.4x",
      "change": "+18%"
    }
  ],
  "actions": [
    "Approve template",
    "Generate license",
    "Publish listing",
    "Process download"
  ],
  "records": [
    {
      "id": "R-001",
      "name": "TemplateShelf Market record 1",
      "owner": "Operations",
      "status": "Active",
      "value": "67%"
    },
    {
      "id": "R-002",
      "name": "TemplateShelf Market record 2",
      "owner": "Finance",
      "status": "Pending",
      "value": "79%"
    },
    {
      "id": "R-003",
      "name": "TemplateShelf Market record 3",
      "owner": "Sales",
      "status": "At Risk",
      "value": "91%"
    },
    {
      "id": "R-004",
      "name": "TemplateShelf Market record 4",
      "owner": "Support",
      "status": "Approved",
      "value": "103%"
    },
    {
      "id": "R-005",
      "name": "TemplateShelf Market record 5",
      "owner": "Admin",
      "status": "Draft",
      "value": "115%"
    },
    {
      "id": "R-006",
      "name": "TemplateShelf Market record 6",
      "owner": "QA",
      "status": "Review",
      "value": "127%"
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
