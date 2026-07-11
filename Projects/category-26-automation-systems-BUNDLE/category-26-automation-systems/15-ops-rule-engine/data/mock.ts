export const templateMeta = {
  "templateName": "Ops Rule Engine",
  "category": "Automation Systems",
  "categoryNumber": 26,
  "description": "Workflow automation, approvals, triggers, actions, and process orchestration",
  "audience": "Automation Systems buyers who need a polished, sale-ready operational interface",
  "uiPattern": "mobile-first stacked panels with bottom action bar",
  "modules": [
    "Chat",
    "Files",
    "Roles",
    "Integrations",
    "API Mock",
    "Dashboard",
    "Records Table",
    "Smart Search"
  ],
  "accent": "rose"
} as const;

export const records = [
  {
    "id": "26-15-1",
    "name": "Ops Rule Engine Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "5,754"
  },
  {
    "id": "26-15-2",
    "name": "Ops Rule Engine Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "5,891"
  },
  {
    "id": "26-15-3",
    "name": "Ops Rule Engine Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "6,028"
  },
  {
    "id": "26-15-4",
    "name": "Ops Rule Engine Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "6,165"
  },
  {
    "id": "26-15-5",
    "name": "Ops Rule Engine Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "6,302"
  },
  {
    "id": "26-15-6",
    "name": "Ops Rule Engine Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "6,439"
  }
] as const;
