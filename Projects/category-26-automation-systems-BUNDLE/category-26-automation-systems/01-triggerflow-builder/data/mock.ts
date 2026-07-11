export const templateMeta = {
  "templateName": "TriggerFlow Builder",
  "category": "Automation Systems",
  "categoryNumber": 26,
  "description": "Workflow automation, approvals, triggers, actions, and process orchestration",
  "audience": "Automation Systems buyers who need a polished, sale-ready operational interface",
  "uiPattern": "card-based workspace with filter bar and live status rail",
  "modules": [
    "Records Table",
    "Smart Search",
    "Kanban",
    "Calendar",
    "Reports",
    "Settings",
    "Audit Trail",
    "Notifications"
  ],
  "accent": "blue"
} as const;

export const records = [
  {
    "id": "26-1-1",
    "name": "TriggerFlow Builder Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "3,836"
  },
  {
    "id": "26-1-2",
    "name": "TriggerFlow Builder Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "3,973"
  },
  {
    "id": "26-1-3",
    "name": "TriggerFlow Builder Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "4,110"
  },
  {
    "id": "26-1-4",
    "name": "TriggerFlow Builder Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "4,247"
  },
  {
    "id": "26-1-5",
    "name": "TriggerFlow Builder Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "4,384"
  },
  {
    "id": "26-1-6",
    "name": "TriggerFlow Builder Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "4,521"
  }
] as const;
