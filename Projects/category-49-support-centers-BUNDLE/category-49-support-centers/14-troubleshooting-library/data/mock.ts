export const templateMeta = {
  "templateName": "Troubleshooting Library",
  "category": "Support Centers",
  "categoryNumber": 49,
  "description": "Knowledge bases, tickets, FAQs, chat support, contact forms, and status updates",
  "audience": "Support Centers buyers who need a polished, sale-ready operational interface",
  "uiPattern": "card-based workspace with filter bar and live status rail",
  "modules": [
    "Approvals",
    "Chat",
    "Files",
    "Roles",
    "Integrations",
    "API Mock",
    "Dashboard",
    "Records Table"
  ],
  "accent": "amber"
} as const;

export const records = [
  {
    "id": "49-14-1",
    "name": "Troubleshooting Library Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "8,768"
  },
  {
    "id": "49-14-2",
    "name": "Troubleshooting Library Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "8,905"
  },
  {
    "id": "49-14-3",
    "name": "Troubleshooting Library Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "9,042"
  },
  {
    "id": "49-14-4",
    "name": "Troubleshooting Library Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "9,179"
  },
  {
    "id": "49-14-5",
    "name": "Troubleshooting Library Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "9,316"
  },
  {
    "id": "49-14-6",
    "name": "Troubleshooting Library Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "9,453"
  }
] as const;
