export const site = {
  "categoryNumber": 56,
  "categoryName": "Demo Centers & Live Sandbox",
  "templateName": "DemoCredentials Vault",
  "slug": "18-democredentials-vault",
  "tagline": "DemoCredentials Vault is a sellable Demo Centers & Live Sandbox template with realistic modules and backend mock routes.",
  "positioning": "Built for clients who need a credible demo centers & live sandbox interface, not a static landing page.",
  "visualPattern": "Data Room",
  "visualDescription": "Table-first interface with filters, saved views, status chips and action drawer.",
  "primary": "#172554",
  "accent": "#0891b2",
  "soft": "#cffafe",
  "modules": [
    {
      "href": "/demos",
      "label": "Demo Gallery",
      "summary": "Demo Gallery workspace with mock records, states, KPIs and actions."
    },
    {
      "href": "/sandbox",
      "label": "Sandbox Login",
      "summary": "Sandbox Login workspace with mock records, states, KPIs and actions."
    },
    {
      "href": "/sessions",
      "label": "Demo Sessions",
      "summary": "Demo Sessions workspace with mock records, states, KPIs and actions."
    },
    {
      "href": "/reset",
      "label": "Reset Data",
      "summary": "Reset Data workspace with mock records, states, KPIs and actions."
    },
    {
      "href": "/analytics",
      "label": "Demo Analytics",
      "summary": "Demo Analytics workspace with mock records, states, KPIs and actions."
    },
    {
      "href": "/settings",
      "label": "Settings",
      "summary": "Settings workspace with mock records, states, KPIs and actions."
    }
  ],
  "metrics": [
    {
      "label": "Active records",
      "value": "544",
      "change": "+12%"
    },
    {
      "label": "Automation rate",
      "value": "81%",
      "change": "+8%"
    },
    {
      "label": "Open alerts",
      "value": "3",
      "change": "-4%"
    },
    {
      "label": "Client value",
      "value": "4.4x",
      "change": "+18%"
    }
  ],
  "actions": [
    "Start sandbox",
    "Reset demo data",
    "Issue credentials",
    "Track session"
  ],
  "records": [
    {
      "id": "R-001",
      "name": "DemoCredentials Vault record 1",
      "owner": "Operations",
      "status": "Active",
      "value": "68%"
    },
    {
      "id": "R-002",
      "name": "DemoCredentials Vault record 2",
      "owner": "Finance",
      "status": "Pending",
      "value": "80%"
    },
    {
      "id": "R-003",
      "name": "DemoCredentials Vault record 3",
      "owner": "Sales",
      "status": "At Risk",
      "value": "92%"
    },
    {
      "id": "R-004",
      "name": "DemoCredentials Vault record 4",
      "owner": "Support",
      "status": "Approved",
      "value": "104%"
    },
    {
      "id": "R-005",
      "name": "DemoCredentials Vault record 5",
      "owner": "Admin",
      "status": "Draft",
      "value": "116%"
    },
    {
      "id": "R-006",
      "name": "DemoCredentials Vault record 6",
      "owner": "QA",
      "status": "Review",
      "value": "128%"
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
