export const templateMeta = {
  "templateName": "CloudSecurity Command",
  "category": "Cybersecurity Platforms",
  "categoryNumber": 31,
  "description": "SOC dashboards, threat monitoring, compliance, and security services",
  "audience": "Cybersecurity Platforms buyers who need a polished, sale-ready operational interface",
  "uiPattern": "card-based workspace with filter bar and live status rail",
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
    "id": "31-8-1",
    "name": "CloudSecurity Command Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "5,480"
  },
  {
    "id": "31-8-2",
    "name": "CloudSecurity Command Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "5,617"
  },
  {
    "id": "31-8-3",
    "name": "CloudSecurity Command Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "5,754"
  },
  {
    "id": "31-8-4",
    "name": "CloudSecurity Command Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "5,891"
  },
  {
    "id": "31-8-5",
    "name": "CloudSecurity Command Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "6,028"
  },
  {
    "id": "31-8-6",
    "name": "CloudSecurity Command Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "6,165"
  }
] as const;
