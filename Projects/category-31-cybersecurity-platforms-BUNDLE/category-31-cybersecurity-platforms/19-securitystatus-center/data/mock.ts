export const templateMeta = {
  "templateName": "SecurityStatus Center",
  "category": "Cybersecurity Platforms",
  "categoryNumber": 31,
  "description": "SOC dashboards, threat monitoring, compliance, and security services",
  "audience": "Cybersecurity Platforms buyers who need a polished, sale-ready operational interface",
  "uiPattern": "marketing website with editorial hero and case-study grid",
  "modules": [
    "API Mock",
    "Dashboard",
    "Records Table",
    "Smart Search",
    "Kanban",
    "Calendar",
    "Reports",
    "Settings"
  ],
  "accent": "teal"
} as const;

export const records = [
  {
    "id": "31-19-1",
    "name": "SecurityStatus Center Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "6,987"
  },
  {
    "id": "31-19-2",
    "name": "SecurityStatus Center Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "7,124"
  },
  {
    "id": "31-19-3",
    "name": "SecurityStatus Center Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "7,261"
  },
  {
    "id": "31-19-4",
    "name": "SecurityStatus Center Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "7,398"
  },
  {
    "id": "31-19-5",
    "name": "SecurityStatus Center Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "7,535"
  },
  {
    "id": "31-19-6",
    "name": "SecurityStatus Center Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "7,672"
  }
] as const;
