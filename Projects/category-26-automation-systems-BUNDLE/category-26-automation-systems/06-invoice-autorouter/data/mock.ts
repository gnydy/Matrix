export const templateMeta = {
  "templateName": "Invoice AutoRouter",
  "category": "Automation Systems",
  "categoryNumber": 26,
  "description": "Workflow automation, approvals, triggers, actions, and process orchestration",
  "audience": "Automation Systems buyers who need a polished, sale-ready operational interface",
  "uiPattern": "timeline-first workflow interface",
  "modules": [
    "Settings",
    "Audit Trail",
    "Notifications",
    "Profile",
    "Forms",
    "Analytics",
    "Workflow Builder",
    "Billing"
  ],
  "accent": "cyan"
} as const;

export const records = [
  {
    "id": "26-6-1",
    "name": "Invoice AutoRouter Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "4,521"
  },
  {
    "id": "26-6-2",
    "name": "Invoice AutoRouter Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "4,658"
  },
  {
    "id": "26-6-3",
    "name": "Invoice AutoRouter Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "4,795"
  },
  {
    "id": "26-6-4",
    "name": "Invoice AutoRouter Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "4,932"
  },
  {
    "id": "26-6-5",
    "name": "Invoice AutoRouter Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "5,069"
  },
  {
    "id": "26-6-6",
    "name": "Invoice AutoRouter Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "5,206"
  }
] as const;
