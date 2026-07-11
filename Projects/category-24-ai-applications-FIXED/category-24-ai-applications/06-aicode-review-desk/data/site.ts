export const site = {
  "title": "AICode Review Desk",
  "slug": "06-aicode-review-desk",
  "category": "AI Applications",
  "description": "Code review findings and risk notes. Includes frontend screens and backend mock API routes.",
  "layout": "chat",
  "layoutDescription": "Conversation-first UI with inbox and analytics panels.",
  "dark": "#052e16",
  "accent": "#22c55e",
  "soft": "#dcfce7",
  "modules": [
    {
      "slug": "prompt",
      "title": "Prompt",
      "description": "Prompt module designed for AICode Review Desk."
    },
    {
      "slug": "results",
      "title": "Results",
      "description": "Results module designed for AICode Review Desk."
    },
    {
      "slug": "history",
      "title": "History",
      "description": "History module designed for AICode Review Desk."
    },
    {
      "slug": "templates",
      "title": "Templates",
      "description": "Templates module designed for AICode Review Desk."
    },
    {
      "slug": "usage",
      "title": "Usage",
      "description": "Usage module designed for AICode Review Desk."
    },
    {
      "slug": "models",
      "title": "Models",
      "description": "Models module designed for AICode Review Desk."
    },
    {
      "slug": "settings",
      "title": "Settings",
      "description": "Settings module designed for AICode Review Desk."
    },
    {
      "slug": "api",
      "title": "Api",
      "description": "Api module designed for AICode Review Desk."
    },
    {
      "slug": "aicode",
      "title": "Aicode",
      "description": "Aicode module designed for AICode Review Desk."
    },
    {
      "slug": "review",
      "title": "Review",
      "description": "Review module designed for AICode Review Desk."
    }
  ],
  "stats": [
    {
      "label": "Prompts",
      "value": "126",
      "trend": "+7% this week"
    },
    {
      "label": "Runs",
      "value": "87%",
      "trend": "+8% this week"
    },
    {
      "label": "Tokens",
      "value": "210",
      "trend": "+9% this week"
    },
    {
      "label": "Accuracy",
      "value": "252",
      "trend": "+10% this week"
    }
  ],
  "records": [
    {
      "id": "AI-06-001",
      "title": "Settings record 1",
      "meta": "AI Applications workflow \u00b7 owner A",
      "status": "Active",
      "amount": "750"
    },
    {
      "id": "AI-06-002",
      "title": "Api record 2",
      "meta": "AI Applications workflow \u00b7 owner B",
      "status": "Pending",
      "amount": "1,500"
    },
    {
      "id": "AI-06-003",
      "title": "Aicode record 3",
      "meta": "AI Applications workflow \u00b7 owner C",
      "status": "Review",
      "amount": "2,250"
    },
    {
      "id": "AI-06-004",
      "title": "Review record 4",
      "meta": "AI Applications workflow \u00b7 owner D",
      "status": "Approved",
      "amount": "3,000"
    },
    {
      "id": "AI-06-005",
      "title": "Prompt record 5",
      "meta": "AI Applications workflow \u00b7 owner E",
      "status": "Blocked",
      "amount": "3,750"
    },
    {
      "id": "AI-06-006",
      "title": "Results record 6",
      "meta": "AI Applications workflow \u00b7 owner F",
      "status": "Synced",
      "amount": "4,500"
    },
    {
      "id": "AI-06-007",
      "title": "History record 7",
      "meta": "AI Applications workflow \u00b7 owner G",
      "status": "Active",
      "amount": "5,250"
    },
    {
      "id": "AI-06-008",
      "title": "Templates record 8",
      "meta": "AI Applications workflow \u00b7 owner H",
      "status": "Pending",
      "amount": "6,000"
    }
  ]
} as const;
