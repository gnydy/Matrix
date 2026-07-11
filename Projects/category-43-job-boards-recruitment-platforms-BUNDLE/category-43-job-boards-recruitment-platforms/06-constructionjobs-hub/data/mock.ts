export const templateMeta = {
  "templateName": "ConstructionJobs Hub",
  "category": "Job Boards & Recruitment Platforms",
  "categoryNumber": 43,
  "description": "Job listings, applications, candidate profiles, company pages, and recruiter dashboards",
  "audience": "Job Boards & Recruitment Platforms buyers who need a polished, sale-ready operational interface",
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
    "id": "43-6-1",
    "name": "ConstructionJobs Hub Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "6,850"
  },
  {
    "id": "43-6-2",
    "name": "ConstructionJobs Hub Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "6,987"
  },
  {
    "id": "43-6-3",
    "name": "ConstructionJobs Hub Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "7,124"
  },
  {
    "id": "43-6-4",
    "name": "ConstructionJobs Hub Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "7,261"
  },
  {
    "id": "43-6-5",
    "name": "ConstructionJobs Hub Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "7,398"
  },
  {
    "id": "43-6-6",
    "name": "ConstructionJobs Hub Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "7,535"
  }
] as const;
