export const templateMeta = {
  "templateName": "WomenFit Club",
  "category": "Fitness & Gym Platforms",
  "categoryNumber": 39,
  "description": "Memberships, trainers, classes, bookings, nutrition, and progress dashboards",
  "audience": "Fitness & Gym Platforms buyers who need a polished, sale-ready operational interface",
  "uiPattern": "data room layout with document table and activity feed",
  "modules": [
    "Audit Trail",
    "Notifications",
    "Profile",
    "Forms",
    "Analytics",
    "Workflow Builder",
    "Billing",
    "Approvals"
  ],
  "accent": "indigo"
} as const;

export const records = [
  {
    "id": "39-7-1",
    "name": "WomenFit Club Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "6,439"
  },
  {
    "id": "39-7-2",
    "name": "WomenFit Club Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "6,576"
  },
  {
    "id": "39-7-3",
    "name": "WomenFit Club Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "6,713"
  },
  {
    "id": "39-7-4",
    "name": "WomenFit Club Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "6,850"
  },
  {
    "id": "39-7-5",
    "name": "WomenFit Club Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "6,987"
  },
  {
    "id": "39-7-6",
    "name": "WomenFit Club Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "7,124"
  }
] as const;
