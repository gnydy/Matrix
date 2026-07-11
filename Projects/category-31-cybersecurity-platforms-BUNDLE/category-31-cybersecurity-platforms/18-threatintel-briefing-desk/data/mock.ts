export const templateMeta = {
  "templateName": "ThreatIntel Briefing Desk",
  "category": "Cybersecurity Platforms",
  "categoryNumber": 31,
  "description": "SOC dashboards, threat monitoring, compliance, and security services",
  "audience": "Cybersecurity Platforms buyers who need a polished, sale-ready operational interface",
  "uiPattern": "dense admin console with left rail and KPI ribbon",
  "modules": [
    "Integrations",
    "API Mock",
    "Dashboard",
    "Records Table",
    "Smart Search",
    "Kanban",
    "Calendar",
    "Reports"
  ],
  "accent": "zinc"
} as const;

export const records = [
  {
    "id": "31-18-1",
    "name": "ThreatIntel Briefing Desk Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "6,850"
  },
  {
    "id": "31-18-2",
    "name": "ThreatIntel Briefing Desk Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "6,987"
  },
  {
    "id": "31-18-3",
    "name": "ThreatIntel Briefing Desk Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "7,124"
  },
  {
    "id": "31-18-4",
    "name": "ThreatIntel Briefing Desk Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "7,261"
  },
  {
    "id": "31-18-5",
    "name": "ThreatIntel Briefing Desk Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "7,398"
  },
  {
    "id": "31-18-6",
    "name": "ThreatIntel Briefing Desk Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "7,535"
  }
] as const;
