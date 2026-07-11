export const templateMeta = {
  "templateName": "Procurement Flow Center",
  "category": "Automation Systems",
  "categoryNumber": 26,
  "description": "Workflow automation, approvals, triggers, actions, and process orchestration",
  "audience": "Automation Systems buyers who need a polished, sale-ready operational interface",
  "uiPattern": "card-based workspace with filter bar and live status rail",
  "modules": [
    "Billing",
    "Approvals",
    "Chat",
    "Files",
    "Roles",
    "Integrations",
    "API Mock",
    "Dashboard"
  ],
  "accent": "violet"
} as const;

export const records = [
  {
    "id": "26-13-1",
    "name": "Procurement Flow Center Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "5,480"
  },
  {
    "id": "26-13-2",
    "name": "Procurement Flow Center Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "5,617"
  },
  {
    "id": "26-13-3",
    "name": "Procurement Flow Center Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "5,754"
  },
  {
    "id": "26-13-4",
    "name": "Procurement Flow Center Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "5,891"
  },
  {
    "id": "26-13-5",
    "name": "Procurement Flow Center Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "6,028"
  },
  {
    "id": "26-13-6",
    "name": "Procurement Flow Center Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "6,165"
  }
] as const;
