export const templateMeta = {
  "templateName": "RemoteWork Listings",
  "category": "Job Boards & Recruitment Platforms",
  "categoryNumber": 43,
  "description": "Job listings, applications, candidate profiles, company pages, and recruiter dashboards",
  "audience": "Job Boards & Recruitment Platforms buyers who need a polished, sale-ready operational interface",
  "uiPattern": "data room layout with document table and activity feed",
  "modules": [
    "Kanban",
    "Calendar",
    "Reports",
    "Settings",
    "Audit Trail",
    "Notifications",
    "Profile",
    "Forms"
  ],
  "accent": "violet"
} as const;

export const records = [
  {
    "id": "43-3-1",
    "name": "RemoteWork Listings Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "6,439"
  },
  {
    "id": "43-3-2",
    "name": "RemoteWork Listings Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "6,576"
  },
  {
    "id": "43-3-3",
    "name": "RemoteWork Listings Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "6,713"
  },
  {
    "id": "43-3-4",
    "name": "RemoteWork Listings Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "6,850"
  },
  {
    "id": "43-3-5",
    "name": "RemoteWork Listings Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "6,987"
  },
  {
    "id": "43-3-6",
    "name": "RemoteWork Listings Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "7,124"
  }
] as const;
