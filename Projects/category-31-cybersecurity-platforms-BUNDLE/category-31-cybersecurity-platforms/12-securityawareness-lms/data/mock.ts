export const templateMeta = {
  "templateName": "SecurityAwareness LMS",
  "category": "Cybersecurity Platforms",
  "categoryNumber": 31,
  "description": "SOC dashboards, threat monitoring, compliance, and security services",
  "audience": "Cybersecurity Platforms buyers who need a polished, sale-ready operational interface",
  "uiPattern": "dashboard marketplace grid with comparison cards",
  "modules": [
    "Workflow Builder",
    "Billing",
    "Approvals",
    "Chat",
    "Files",
    "Roles",
    "Integrations",
    "API Mock"
  ],
  "accent": "emerald"
} as const;

export const records = [
  {
    "id": "31-12-1",
    "name": "SecurityAwareness LMS Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "6,028"
  },
  {
    "id": "31-12-2",
    "name": "SecurityAwareness LMS Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "6,165"
  },
  {
    "id": "31-12-3",
    "name": "SecurityAwareness LMS Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "6,302"
  },
  {
    "id": "31-12-4",
    "name": "SecurityAwareness LMS Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "6,439"
  },
  {
    "id": "31-12-5",
    "name": "SecurityAwareness LMS Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "6,576"
  },
  {
    "id": "31-12-6",
    "name": "SecurityAwareness LMS Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "6,713"
  }
] as const;
