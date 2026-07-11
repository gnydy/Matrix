export const site = {
  "title": "AIAgent Control Center",
  "slug": "20-aiagent-control-center",
  "category": "AI Applications",
  "description": "Multi-agent orchestration dashboard. Includes frontend screens and backend mock API routes.",
  "layout": "dense",
  "layoutDescription": "Data-heavy table cockpit with filters and status chips.",
  "dark": "#0f172a",
  "accent": "#8b5cf6",
  "soft": "#ede9fe",
  "modules": [
    {
      "slug": "prompt",
      "title": "Prompt",
      "description": "Prompt module designed for AIAgent Control Center."
    },
    {
      "slug": "results",
      "title": "Results",
      "description": "Results module designed for AIAgent Control Center."
    },
    {
      "slug": "history",
      "title": "History",
      "description": "History module designed for AIAgent Control Center."
    },
    {
      "slug": "templates",
      "title": "Templates",
      "description": "Templates module designed for AIAgent Control Center."
    },
    {
      "slug": "usage",
      "title": "Usage",
      "description": "Usage module designed for AIAgent Control Center."
    },
    {
      "slug": "models",
      "title": "Models",
      "description": "Models module designed for AIAgent Control Center."
    },
    {
      "slug": "settings",
      "title": "Settings",
      "description": "Settings module designed for AIAgent Control Center."
    },
    {
      "slug": "api",
      "title": "Api",
      "description": "Api module designed for AIAgent Control Center."
    },
    {
      "slug": "aiagent",
      "title": "Aiagent",
      "description": "Aiagent module designed for AIAgent Control Center."
    },
    {
      "slug": "control",
      "title": "Control",
      "description": "Control module designed for AIAgent Control Center."
    }
  ],
  "stats": [
    {
      "label": "Prompts",
      "value": "420",
      "trend": "+3% this week"
    },
    {
      "label": "Runs",
      "value": "86%",
      "trend": "+4% this week"
    },
    {
      "label": "Tokens",
      "value": "700",
      "trend": "+5% this week"
    },
    {
      "label": "Accuracy",
      "value": "840",
      "trend": "+6% this week"
    }
  ],
  "records": [
    {
      "id": "AI-20-001",
      "title": "Prompt record 1",
      "meta": "AI Applications workflow \u00b7 owner A",
      "status": "Review",
      "amount": "2,500"
    },
    {
      "id": "AI-20-002",
      "title": "Results record 2",
      "meta": "AI Applications workflow \u00b7 owner B",
      "status": "Approved",
      "amount": "5,000"
    },
    {
      "id": "AI-20-003",
      "title": "History record 3",
      "meta": "AI Applications workflow \u00b7 owner C",
      "status": "Blocked",
      "amount": "7,500"
    },
    {
      "id": "AI-20-004",
      "title": "Templates record 4",
      "meta": "AI Applications workflow \u00b7 owner D",
      "status": "Synced",
      "amount": "10,000"
    },
    {
      "id": "AI-20-005",
      "title": "Usage record 5",
      "meta": "AI Applications workflow \u00b7 owner E",
      "status": "Active",
      "amount": "12,500"
    },
    {
      "id": "AI-20-006",
      "title": "Models record 6",
      "meta": "AI Applications workflow \u00b7 owner F",
      "status": "Pending",
      "amount": "15,000"
    },
    {
      "id": "AI-20-007",
      "title": "Settings record 7",
      "meta": "AI Applications workflow \u00b7 owner G",
      "status": "Review",
      "amount": "17,500"
    },
    {
      "id": "AI-20-008",
      "title": "Api record 8",
      "meta": "AI Applications workflow \u00b7 owner H",
      "status": "Approved",
      "amount": "20,000"
    }
  ]
} as const;
