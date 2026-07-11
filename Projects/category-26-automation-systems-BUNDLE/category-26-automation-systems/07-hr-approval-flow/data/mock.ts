export const templateMeta = {
  "templateName": "HR Approval Flow",
  "category": "Automation Systems",
  "categoryNumber": 26,
  "description": "Workflow automation, approvals, triggers, actions, and process orchestration",
  "audience": "Automation Systems buyers who need a polished, sale-ready operational interface",
  "uiPattern": "minimal luxury website with oversized typography",
  "modules": [
    "Audit Trail",
    "Notifications",
    "Profile",
    "Forms",
    "Analytics",
    "Workflow Builder",
    "Billing",
    "Approvals"
  ],
  "accent": "indigo"
} as const;

export const records = [
  {
    "id": "26-7-1",
    "name": "HR Approval Flow Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "4,658"
  },
  {
    "id": "26-7-2",
    "name": "HR Approval Flow Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "4,795"
  },
  {
    "id": "26-7-3",
    "name": "HR Approval Flow Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "4,932"
  },
  {
    "id": "26-7-4",
    "name": "HR Approval Flow Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "5,069"
  },
  {
    "id": "26-7-5",
    "name": "HR Approval Flow Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "5,206"
  },
  {
    "id": "26-7-6",
    "name": "HR Approval Flow Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "5,343"
  }
] as const;
