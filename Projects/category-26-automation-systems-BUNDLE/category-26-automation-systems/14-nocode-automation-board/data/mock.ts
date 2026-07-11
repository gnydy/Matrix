export const templateMeta = {
  "templateName": "NoCode Automation Board",
  "category": "Automation Systems",
  "categoryNumber": 26,
  "description": "Workflow automation, approvals, triggers, actions, and process orchestration",
  "audience": "Automation Systems buyers who need a polished, sale-ready operational interface",
  "uiPattern": "dark operations cockpit with alert stream",
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
    "id": "26-14-1",
    "name": "NoCode Automation Board Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "5,617"
  },
  {
    "id": "26-14-2",
    "name": "NoCode Automation Board Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "5,754"
  },
  {
    "id": "26-14-3",
    "name": "NoCode Automation Board Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "5,891"
  },
  {
    "id": "26-14-4",
    "name": "NoCode Automation Board Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "6,028"
  },
  {
    "id": "26-14-5",
    "name": "NoCode Automation Board Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "6,165"
  },
  {
    "id": "26-14-6",
    "name": "NoCode Automation Board Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "6,302"
  }
] as const;
