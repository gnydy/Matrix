export const templateMeta = {
  "templateName": "AuditTrail Security Suite",
  "category": "Cybersecurity Platforms",
  "categoryNumber": 31,
  "description": "SOC dashboards, threat monitoring, compliance, and security services",
  "audience": "Cybersecurity Platforms buyers who need a polished, sale-ready operational interface",
  "uiPattern": "mobile-first stacked panels with bottom action bar",
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
    "id": "31-10-1",
    "name": "AuditTrail Security Suite Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "5,754"
  },
  {
    "id": "31-10-2",
    "name": "AuditTrail Security Suite Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "5,891"
  },
  {
    "id": "31-10-3",
    "name": "AuditTrail Security Suite Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "6,028"
  },
  {
    "id": "31-10-4",
    "name": "AuditTrail Security Suite Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "6,165"
  },
  {
    "id": "31-10-5",
    "name": "AuditTrail Security Suite Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "6,302"
  },
  {
    "id": "31-10-6",
    "name": "AuditTrail Security Suite Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "6,439"
  }
] as const;
