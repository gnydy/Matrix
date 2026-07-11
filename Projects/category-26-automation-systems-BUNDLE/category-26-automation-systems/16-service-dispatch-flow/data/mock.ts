export const templateMeta = {
  "templateName": "Service Dispatch Flow",
  "category": "Automation Systems",
  "categoryNumber": 26,
  "description": "Workflow automation, approvals, triggers, actions, and process orchestration",
  "audience": "Automation Systems buyers who need a polished, sale-ready operational interface",
  "uiPattern": "desktop app shell with toolbar, tabs, and resizable panels",
  "modules": [
    "Files",
    "Roles",
    "Integrations",
    "API Mock",
    "Dashboard",
    "Records Table",
    "Smart Search",
    "Kanban"
  ],
  "accent": "cyan"
} as const;

export const records = [
  {
    "id": "26-16-1",
    "name": "Service Dispatch Flow Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "5,891"
  },
  {
    "id": "26-16-2",
    "name": "Service Dispatch Flow Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "6,028"
  },
  {
    "id": "26-16-3",
    "name": "Service Dispatch Flow Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "6,165"
  },
  {
    "id": "26-16-4",
    "name": "Service Dispatch Flow Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "6,302"
  },
  {
    "id": "26-16-5",
    "name": "Service Dispatch Flow Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "6,439"
  },
  {
    "id": "26-16-6",
    "name": "Service Dispatch Flow Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "6,576"
  }
] as const;
