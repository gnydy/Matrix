export const templateMeta = {
  "templateName": "ProcessPilot Studio",
  "category": "Automation Systems",
  "categoryNumber": 26,
  "description": "Workflow automation, approvals, triggers, actions, and process orchestration",
  "audience": "Automation Systems buyers who need a polished, sale-ready operational interface",
  "uiPattern": "desktop app shell with toolbar, tabs, and resizable panels",
  "modules": [
    "Calendar",
    "Reports",
    "Settings",
    "Audit Trail",
    "Notifications",
    "Profile",
    "Forms",
    "Analytics"
  ],
  "accent": "amber"
} as const;

export const records = [
  {
    "id": "26-4-1",
    "name": "ProcessPilot Studio Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "4,247"
  },
  {
    "id": "26-4-2",
    "name": "ProcessPilot Studio Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "4,384"
  },
  {
    "id": "26-4-3",
    "name": "ProcessPilot Studio Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "4,521"
  },
  {
    "id": "26-4-4",
    "name": "ProcessPilot Studio Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "4,658"
  },
  {
    "id": "26-4-5",
    "name": "ProcessPilot Studio Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "4,795"
  },
  {
    "id": "26-4-6",
    "name": "ProcessPilot Studio Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "4,932"
  }
] as const;
