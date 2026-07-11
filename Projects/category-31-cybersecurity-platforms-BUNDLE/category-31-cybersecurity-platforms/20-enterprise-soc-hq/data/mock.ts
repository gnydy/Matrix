export const templateMeta = {
  "templateName": "Enterprise SOC HQ",
  "category": "Cybersecurity Platforms",
  "categoryNumber": 31,
  "description": "SOC dashboards, threat monitoring, compliance, and security services",
  "audience": "Cybersecurity Platforms buyers who need a polished, sale-ready operational interface",
  "uiPattern": "card-based workspace with filter bar and live status rail",
  "modules": [
    "Dashboard",
    "Records Table",
    "Smart Search",
    "Kanban",
    "Calendar",
    "Reports",
    "Settings",
    "Audit Trail"
  ],
  "accent": "slate"
} as const;

export const records = [
  {
    "id": "31-20-1",
    "name": "Enterprise SOC HQ Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "7,124"
  },
  {
    "id": "31-20-2",
    "name": "Enterprise SOC HQ Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "7,261"
  },
  {
    "id": "31-20-3",
    "name": "Enterprise SOC HQ Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "7,398"
  },
  {
    "id": "31-20-4",
    "name": "Enterprise SOC HQ Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "7,535"
  },
  {
    "id": "31-20-5",
    "name": "Enterprise SOC HQ Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "7,672"
  },
  {
    "id": "31-20-6",
    "name": "Enterprise SOC HQ Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "7,809"
  }
] as const;
