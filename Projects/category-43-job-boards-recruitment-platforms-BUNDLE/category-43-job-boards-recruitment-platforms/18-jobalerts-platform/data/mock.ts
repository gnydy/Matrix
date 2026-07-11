export const templateMeta = {
  "templateName": "JobAlerts Platform",
  "category": "Job Boards & Recruitment Platforms",
  "categoryNumber": 43,
  "description": "Job listings, applications, candidate profiles, company pages, and recruiter dashboards",
  "audience": "Job Boards & Recruitment Platforms buyers who need a polished, sale-ready operational interface",
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
    "id": "43-18-1",
    "name": "JobAlerts Platform Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "8,494"
  },
  {
    "id": "43-18-2",
    "name": "JobAlerts Platform Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "8,631"
  },
  {
    "id": "43-18-3",
    "name": "JobAlerts Platform Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "8,768"
  },
  {
    "id": "43-18-4",
    "name": "JobAlerts Platform Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "8,905"
  },
  {
    "id": "43-18-5",
    "name": "JobAlerts Platform Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "9,042"
  },
  {
    "id": "43-18-6",
    "name": "JobAlerts Platform Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "9,179"
  }
] as const;
