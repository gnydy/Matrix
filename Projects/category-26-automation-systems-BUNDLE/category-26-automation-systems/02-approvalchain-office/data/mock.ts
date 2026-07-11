export const templateMeta = {
  "templateName": "ApprovalChain Office",
  "category": "Automation Systems",
  "categoryNumber": 26,
  "description": "Workflow automation, approvals, triggers, actions, and process orchestration",
  "audience": "Automation Systems buyers who need a polished, sale-ready operational interface",
  "uiPattern": "dark operations cockpit with alert stream",
  "modules": [
    "Smart Search",
    "Kanban",
    "Calendar",
    "Reports",
    "Settings",
    "Audit Trail",
    "Notifications",
    "Profile"
  ],
  "accent": "emerald"
} as const;

export const records = [
  {
    "id": "26-2-1",
    "name": "ApprovalChain Office Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "3,973"
  },
  {
    "id": "26-2-2",
    "name": "ApprovalChain Office Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "4,110"
  },
  {
    "id": "26-2-3",
    "name": "ApprovalChain Office Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "4,247"
  },
  {
    "id": "26-2-4",
    "name": "ApprovalChain Office Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "4,384"
  },
  {
    "id": "26-2-5",
    "name": "ApprovalChain Office Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "4,521"
  },
  {
    "id": "26-2-6",
    "name": "ApprovalChain Office Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "4,658"
  }
] as const;
