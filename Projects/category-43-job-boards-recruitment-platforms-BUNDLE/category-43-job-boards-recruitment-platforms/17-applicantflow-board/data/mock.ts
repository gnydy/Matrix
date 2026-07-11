export const templateMeta = {
  "templateName": "ApplicantFlow Board",
  "category": "Job Boards & Recruitment Platforms",
  "categoryNumber": 43,
  "description": "Job listings, applications, candidate profiles, company pages, and recruiter dashboards",
  "audience": "Job Boards & Recruitment Platforms buyers who need a polished, sale-ready operational interface",
  "uiPattern": "split command layout with sticky right insight panel",
  "modules": [
    "Roles",
    "Integrations",
    "API Mock",
    "Dashboard",
    "Records Table",
    "Smart Search",
    "Kanban",
    "Calendar"
  ],
  "accent": "indigo"
} as const;

export const records = [
  {
    "id": "43-17-1",
    "name": "ApplicantFlow Board Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "8,357"
  },
  {
    "id": "43-17-2",
    "name": "ApplicantFlow Board Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "8,494"
  },
  {
    "id": "43-17-3",
    "name": "ApplicantFlow Board Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "8,631"
  },
  {
    "id": "43-17-4",
    "name": "ApplicantFlow Board Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "8,768"
  },
  {
    "id": "43-17-5",
    "name": "ApplicantFlow Board Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "8,905"
  },
  {
    "id": "43-17-6",
    "name": "ApplicantFlow Board Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "9,042"
  }
] as const;
