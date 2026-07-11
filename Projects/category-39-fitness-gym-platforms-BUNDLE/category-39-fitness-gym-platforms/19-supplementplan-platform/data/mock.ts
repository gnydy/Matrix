export const templateMeta = {
  "templateName": "SupplementPlan Platform",
  "category": "Fitness & Gym Platforms",
  "categoryNumber": 39,
  "description": "Memberships, trainers, classes, bookings, nutrition, and progress dashboards",
  "audience": "Fitness & Gym Platforms buyers who need a polished, sale-ready operational interface",
  "uiPattern": "data room layout with document table and activity feed",
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
    "id": "39-19-1",
    "name": "SupplementPlan Platform Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "8,083"
  },
  {
    "id": "39-19-2",
    "name": "SupplementPlan Platform Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "8,220"
  },
  {
    "id": "39-19-3",
    "name": "SupplementPlan Platform Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "8,357"
  },
  {
    "id": "39-19-4",
    "name": "SupplementPlan Platform Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "8,494"
  },
  {
    "id": "39-19-5",
    "name": "SupplementPlan Platform Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "8,631"
  },
  {
    "id": "39-19-6",
    "name": "SupplementPlan Platform Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "8,768"
  }
] as const;
