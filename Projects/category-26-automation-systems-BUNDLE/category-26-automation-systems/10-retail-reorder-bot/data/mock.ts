export const templateMeta = {
  "templateName": "Retail Reorder Bot",
  "category": "Automation Systems",
  "categoryNumber": 26,
  "description": "Workflow automation, approvals, triggers, actions, and process orchestration",
  "audience": "Automation Systems buyers who need a polished, sale-ready operational interface",
  "uiPattern": "split command layout with sticky right insight panel",
  "modules": [
    "Forms",
    "Analytics",
    "Workflow Builder",
    "Billing",
    "Approvals",
    "Chat",
    "Files",
    "Roles"
  ],
  "accent": "slate"
} as const;

export const records = [
  {
    "id": "26-10-1",
    "name": "Retail Reorder Bot Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "5,069"
  },
  {
    "id": "26-10-2",
    "name": "Retail Reorder Bot Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "5,206"
  },
  {
    "id": "26-10-3",
    "name": "Retail Reorder Bot Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "5,343"
  },
  {
    "id": "26-10-4",
    "name": "Retail Reorder Bot Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "5,480"
  },
  {
    "id": "26-10-5",
    "name": "Retail Reorder Bot Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "5,617"
  },
  {
    "id": "26-10-6",
    "name": "Retail Reorder Bot Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "5,754"
  }
] as const;
