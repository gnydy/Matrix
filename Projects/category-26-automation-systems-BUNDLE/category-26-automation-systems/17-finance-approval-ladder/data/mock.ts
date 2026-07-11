export const templateMeta = {
  "templateName": "Finance Approval Ladder",
  "category": "Automation Systems",
  "categoryNumber": 26,
  "description": "Workflow automation, approvals, triggers, actions, and process orchestration",
  "audience": "Automation Systems buyers who need a polished, sale-ready operational interface",
  "uiPattern": "dashboard marketplace grid with comparison cards",
  "modules": [
    "Roles",
    "Integrations",
    "API Mock",
    "Dashboard",
    "Records Table",
    "Smart Search",
    "Kanban",
    "Calendar"
  ],
  "accent": "indigo"
} as const;

export const records = [
  {
    "id": "26-17-1",
    "name": "Finance Approval Ladder Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "6,028"
  },
  {
    "id": "26-17-2",
    "name": "Finance Approval Ladder Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "6,165"
  },
  {
    "id": "26-17-3",
    "name": "Finance Approval Ladder Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "6,302"
  },
  {
    "id": "26-17-4",
    "name": "Finance Approval Ladder Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "6,439"
  },
  {
    "id": "26-17-5",
    "name": "Finance Approval Ladder Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "6,576"
  },
  {
    "id": "26-17-6",
    "name": "Finance Approval Ladder Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "6,713"
  }
] as const;
