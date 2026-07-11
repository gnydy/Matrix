export const site = {
  "title": "MaintenanceBot Dispatcher",
  "slug": "15-maintenancebot-dispatcher",
  "category": "AI Chatbots",
  "description": "Maintenance request and dispatch bot. Includes frontend screens and backend mock API routes.",
  "layout": "chat",
  "layoutDescription": "Conversation-first UI with inbox and analytics panels.",
  "dark": "#7f1d1d",
  "accent": "#f87171",
  "soft": "#fee2e2",
  "modules": [
    {
      "slug": "chat",
      "title": "Chat",
      "description": "Chat module designed for MaintenanceBot Dispatcher."
    },
    {
      "slug": "knowledge",
      "title": "Knowledge",
      "description": "Knowledge module designed for MaintenanceBot Dispatcher."
    },
    {
      "slug": "handoff",
      "title": "Handoff",
      "description": "Handoff module designed for MaintenanceBot Dispatcher."
    },
    {
      "slug": "analytics",
      "title": "Analytics",
      "description": "Analytics module designed for MaintenanceBot Dispatcher."
    },
    {
      "slug": "training",
      "title": "Training",
      "description": "Training module designed for MaintenanceBot Dispatcher."
    },
    {
      "slug": "channels",
      "title": "Channels",
      "description": "Channels module designed for MaintenanceBot Dispatcher."
    },
    {
      "slug": "settings",
      "title": "Settings",
      "description": "Settings module designed for MaintenanceBot Dispatcher."
    },
    {
      "slug": "api",
      "title": "Api",
      "description": "Api module designed for MaintenanceBot Dispatcher."
    },
    {
      "slug": "maintenancebot",
      "title": "Maintenancebot",
      "description": "Maintenancebot module designed for MaintenanceBot Dispatcher."
    },
    {
      "slug": "dispatcher",
      "title": "Dispatcher",
      "description": "Dispatcher module designed for MaintenanceBot Dispatcher."
    }
  ],
  "stats": [
    {
      "label": "Chats",
      "value": "315",
      "trend": "+7% this week"
    },
    {
      "label": "Handoffs",
      "value": "96%",
      "trend": "+8% this week"
    },
    {
      "label": "CSAT",
      "value": "525",
      "trend": "+9% this week"
    },
    {
      "label": "Knowledge",
      "value": "630",
      "trend": "+10% this week"
    }
  ],
  "records": [
    {
      "id": "AI-15-001",
      "title": "Channels record 1",
      "meta": "AI Chatbots workflow \u00b7 owner A",
      "status": "Approved",
      "amount": "1,875"
    },
    {
      "id": "AI-15-002",
      "title": "Settings record 2",
      "meta": "AI Chatbots workflow \u00b7 owner B",
      "status": "Blocked",
      "amount": "3,750"
    },
    {
      "id": "AI-15-003",
      "title": "Api record 3",
      "meta": "AI Chatbots workflow \u00b7 owner C",
      "status": "Synced",
      "amount": "5,625"
    },
    {
      "id": "AI-15-004",
      "title": "Maintenancebot record 4",
      "meta": "AI Chatbots workflow \u00b7 owner D",
      "status": "Active",
      "amount": "7,500"
    },
    {
      "id": "AI-15-005",
      "title": "Dispatcher record 5",
      "meta": "AI Chatbots workflow \u00b7 owner E",
      "status": "Pending",
      "amount": "9,375"
    },
    {
      "id": "AI-15-006",
      "title": "Chat record 6",
      "meta": "AI Chatbots workflow \u00b7 owner F",
      "status": "Review",
      "amount": "11,250"
    },
    {
      "id": "AI-15-007",
      "title": "Knowledge record 7",
      "meta": "AI Chatbots workflow \u00b7 owner G",
      "status": "Approved",
      "amount": "13,125"
    },
    {
      "id": "AI-15-008",
      "title": "Handoff record 8",
      "meta": "AI Chatbots workflow \u00b7 owner H",
      "status": "Blocked",
      "amount": "15,000"
    }
  ]
} as const;
