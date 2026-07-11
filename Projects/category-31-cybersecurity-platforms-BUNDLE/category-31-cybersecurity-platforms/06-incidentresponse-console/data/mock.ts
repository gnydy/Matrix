export const templateMeta = {
  "templateName": "IncidentResponse Console",
  "category": "Cybersecurity Platforms",
  "categoryNumber": 31,
  "description": "SOC dashboards, threat monitoring, compliance, and security services",
  "audience": "Cybersecurity Platforms buyers who need a polished, sale-ready operational interface",
  "uiPattern": "dense admin console with left rail and KPI ribbon",
  "modules": [
    "Settings",
    "Audit Trail",
    "Notifications",
    "Profile",
    "Forms",
    "Analytics",
    "Workflow Builder",
    "Billing"
  ],
  "accent": "cyan"
} as const;

export const records = [
  {
    "id": "31-6-1",
    "name": "IncidentResponse Console Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "5,206"
  },
  {
    "id": "31-6-2",
    "name": "IncidentResponse Console Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "5,343"
  },
  {
    "id": "31-6-3",
    "name": "IncidentResponse Console Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "5,480"
  },
  {
    "id": "31-6-4",
    "name": "IncidentResponse Console Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "5,617"
  },
  {
    "id": "31-6-5",
    "name": "IncidentResponse Console Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "5,754"
  },
  {
    "id": "31-6-6",
    "name": "IncidentResponse Console Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "5,891"
  }
] as const;
