export const templateMeta = {
  "templateName": "IAM Governance Portal",
  "category": "Cybersecurity Platforms",
  "categoryNumber": 31,
  "description": "SOC dashboards, threat monitoring, compliance, and security services",
  "audience": "Cybersecurity Platforms buyers who need a polished, sale-ready operational interface",
  "uiPattern": "dark operations cockpit with alert stream",
  "modules": [
    "Profile",
    "Forms",
    "Analytics",
    "Workflow Builder",
    "Billing",
    "Approvals",
    "Chat",
    "Files"
  ],
  "accent": "teal"
} as const;

export const records = [
  {
    "id": "31-9-1",
    "name": "IAM Governance Portal Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "5,617"
  },
  {
    "id": "31-9-2",
    "name": "IAM Governance Portal Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "5,754"
  },
  {
    "id": "31-9-3",
    "name": "IAM Governance Portal Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "5,891"
  },
  {
    "id": "31-9-4",
    "name": "IAM Governance Portal Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "6,028"
  },
  {
    "id": "31-9-5",
    "name": "IAM Governance Portal Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "6,165"
  },
  {
    "id": "31-9-6",
    "name": "IAM Governance Portal Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "6,302"
  }
] as const;
