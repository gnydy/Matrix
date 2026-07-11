export const templateMeta = {
  "templateName": "Compliance Workflow Grid",
  "category": "Automation Systems",
  "categoryNumber": 26,
  "description": "Workflow automation, approvals, triggers, actions, and process orchestration",
  "audience": "Automation Systems buyers who need a polished, sale-ready operational interface",
  "uiPattern": "data room layout with document table and activity feed",
  "modules": [
    "Notifications",
    "Profile",
    "Forms",
    "Analytics",
    "Workflow Builder",
    "Billing",
    "Approvals",
    "Chat"
  ],
  "accent": "zinc"
} as const;

export const records = [
  {
    "id": "26-8-1",
    "name": "Compliance Workflow Grid Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "4,795"
  },
  {
    "id": "26-8-2",
    "name": "Compliance Workflow Grid Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "4,932"
  },
  {
    "id": "26-8-3",
    "name": "Compliance Workflow Grid Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "5,069"
  },
  {
    "id": "26-8-4",
    "name": "Compliance Workflow Grid Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "5,206"
  },
  {
    "id": "26-8-5",
    "name": "Compliance Workflow Grid Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "5,343"
  },
  {
    "id": "26-8-6",
    "name": "Compliance Workflow Grid Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "5,480"
  }
] as const;
