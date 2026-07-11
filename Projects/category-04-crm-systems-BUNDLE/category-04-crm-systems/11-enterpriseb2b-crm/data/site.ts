export const site = {
  "categoryNumber": 4,
  "categoryName": "CRM Systems",
  "templateName": "EnterpriseB2B CRM",
  "slug": "11-enterpriseb2b-crm",
  "tagline": "EnterpriseB2B CRM is a sellable CRM Systems template with realistic modules and backend mock routes.",
  "positioning": "Built for clients who need a credible crm systems interface, not a static landing page.",
  "visualPattern": "Timeline Ops",
  "visualDescription": "Milestone and timeline-centered interface for process-heavy clients.",
  "primary": "#3b0764",
  "accent": "#c026d3",
  "soft": "#fae8ff",
  "modules": [
    {
      "href": "/pipeline",
      "label": "Pipeline",
      "summary": "Pipeline workspace with mock records, states, KPIs and actions."
    },
    {
      "href": "/leads",
      "label": "Leads",
      "summary": "Leads workspace with mock records, states, KPIs and actions."
    },
    {
      "href": "/accounts",
      "label": "Accounts",
      "summary": "Accounts workspace with mock records, states, KPIs and actions."
    },
    {
      "href": "/followups",
      "label": "Follow-ups",
      "summary": "Follow-ups workspace with mock records, states, KPIs and actions."
    },
    {
      "href": "/reports",
      "label": "Reports",
      "summary": "Reports workspace with mock records, states, KPIs and actions."
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
      "value": "336",
      "change": "+12%"
    },
    {
      "label": "Automation rate",
      "value": "69%",
      "change": "+8%"
    },
    {
      "label": "Open alerts",
      "value": "7",
      "change": "-4%"
    },
    {
      "label": "Client value",
      "value": "6.4x",
      "change": "+18%"
    }
  ],
  "actions": [
    "Create follow-up",
    "Move deal stage",
    "Score lead",
    "Send proposal"
  ],
  "records": [
    {
      "id": "R-001",
      "name": "EnterpriseB2B CRM record 1",
      "owner": "Operations",
      "status": "Active",
      "value": "16%"
    },
    {
      "id": "R-002",
      "name": "EnterpriseB2B CRM record 2",
      "owner": "Finance",
      "status": "Pending",
      "value": "28%"
    },
    {
      "id": "R-003",
      "name": "EnterpriseB2B CRM record 3",
      "owner": "Sales",
      "status": "At Risk",
      "value": "40%"
    },
    {
      "id": "R-004",
      "name": "EnterpriseB2B CRM record 4",
      "owner": "Support",
      "status": "Approved",
      "value": "52%"
    },
    {
      "id": "R-005",
      "name": "EnterpriseB2B CRM record 5",
      "owner": "Admin",
      "status": "Draft",
      "value": "64%"
    },
    {
      "id": "R-006",
      "name": "EnterpriseB2B CRM record 6",
      "owner": "QA",
      "status": "Review",
      "value": "76%"
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
