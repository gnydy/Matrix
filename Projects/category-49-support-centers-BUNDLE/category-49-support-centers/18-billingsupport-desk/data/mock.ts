export const templateMeta = {
  "templateName": "BillingSupport Desk",
  "category": "Support Centers",
  "categoryNumber": 49,
  "description": "Knowledge bases, tickets, FAQs, chat support, contact forms, and status updates",
  "audience": "Support Centers buyers who need a polished, sale-ready operational interface",
  "uiPattern": "dashboard marketplace grid with comparison cards",
  "modules": [
    "Integrations",
    "API Mock",
    "Dashboard",
    "Records Table",
    "Smart Search",
    "Kanban",
    "Calendar",
    "Reports"
  ],
  "accent": "zinc"
} as const;

export const records = [
  {
    "id": "49-18-1",
    "name": "BillingSupport Desk Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "9,316"
  },
  {
    "id": "49-18-2",
    "name": "BillingSupport Desk Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "9,453"
  },
  {
    "id": "49-18-3",
    "name": "BillingSupport Desk Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "9,590"
  },
  {
    "id": "49-18-4",
    "name": "BillingSupport Desk Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "9,727"
  },
  {
    "id": "49-18-5",
    "name": "BillingSupport Desk Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "9,864"
  },
  {
    "id": "49-18-6",
    "name": "BillingSupport Desk Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "10,001"
  }
] as const;
