export const templateMeta = {
  "templateName": "AutoOps Command",
  "category": "Automation Systems",
  "categoryNumber": 26,
  "description": "Workflow automation, approvals, triggers, actions, and process orchestration",
  "audience": "Automation Systems buyers who need a polished, sale-ready operational interface",
  "uiPattern": "mobile-first stacked panels with bottom action bar",
  "modules": [
    "Kanban",
    "Calendar",
    "Reports",
    "Settings",
    "Audit Trail",
    "Notifications",
    "Profile",
    "Forms"
  ],
  "accent": "violet"
} as const;

export const records = [
  {
    "id": "26-3-1",
    "name": "AutoOps Command Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "4,110"
  },
  {
    "id": "26-3-2",
    "name": "AutoOps Command Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "4,247"
  },
  {
    "id": "26-3-3",
    "name": "AutoOps Command Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "4,384"
  },
  {
    "id": "26-3-4",
    "name": "AutoOps Command Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "4,521"
  },
  {
    "id": "26-3-5",
    "name": "AutoOps Command Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "4,658"
  },
  {
    "id": "26-3-6",
    "name": "AutoOps Command Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "4,795"
  }
] as const;
