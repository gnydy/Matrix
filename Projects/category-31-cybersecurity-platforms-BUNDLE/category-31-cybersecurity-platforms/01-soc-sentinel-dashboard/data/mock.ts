export const templateMeta = {
  "templateName": "SOC Sentinel Dashboard",
  "category": "Cybersecurity Platforms",
  "categoryNumber": 31,
  "description": "SOC dashboards, threat monitoring, compliance, and security services",
  "audience": "Cybersecurity Platforms buyers who need a polished, sale-ready operational interface",
  "uiPattern": "timeline-first workflow interface",
  "modules": [
    "Records Table",
    "Smart Search",
    "Kanban",
    "Calendar",
    "Reports",
    "Settings",
    "Audit Trail",
    "Notifications"
  ],
  "accent": "blue"
} as const;

export const records = [
  {
    "id": "31-1-1",
    "name": "SOC Sentinel Dashboard Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "4,521"
  },
  {
    "id": "31-1-2",
    "name": "SOC Sentinel Dashboard Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "4,658"
  },
  {
    "id": "31-1-3",
    "name": "SOC Sentinel Dashboard Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "4,795"
  },
  {
    "id": "31-1-4",
    "name": "SOC Sentinel Dashboard Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "4,932"
  },
  {
    "id": "31-1-5",
    "name": "SOC Sentinel Dashboard Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "5,069"
  },
  {
    "id": "31-1-6",
    "name": "SOC Sentinel Dashboard Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "5,206"
  }
] as const;
