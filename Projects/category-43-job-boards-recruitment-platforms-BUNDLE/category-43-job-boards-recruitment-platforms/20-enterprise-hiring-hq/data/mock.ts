export const templateMeta = {
  "templateName": "Enterprise Hiring HQ",
  "category": "Job Boards & Recruitment Platforms",
  "categoryNumber": 43,
  "description": "Job listings, applications, candidate profiles, company pages, and recruiter dashboards",
  "audience": "Job Boards & Recruitment Platforms buyers who need a polished, sale-ready operational interface",
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
    "id": "43-20-1",
    "name": "Enterprise Hiring HQ Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "8,768"
  },
  {
    "id": "43-20-2",
    "name": "Enterprise Hiring HQ Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "8,905"
  },
  {
    "id": "43-20-3",
    "name": "Enterprise Hiring HQ Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "9,042"
  },
  {
    "id": "43-20-4",
    "name": "Enterprise Hiring HQ Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "9,179"
  },
  {
    "id": "43-20-5",
    "name": "Enterprise Hiring HQ Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "9,316"
  },
  {
    "id": "43-20-6",
    "name": "Enterprise Hiring HQ Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "9,453"
  }
] as const;
