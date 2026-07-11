export const templateMeta = {
  "templateName": "IronPulse Gym",
  "category": "Fitness & Gym Platforms",
  "categoryNumber": 39,
  "description": "Memberships, trainers, classes, bookings, nutrition, and progress dashboards",
  "audience": "Fitness & Gym Platforms buyers who need a polished, sale-ready operational interface",
  "uiPattern": "dark operations cockpit with alert stream",
  "modules": [
    "Records Table",
    "Smart Search",
    "Kanban",
    "Calendar",
    "Reports",
    "Settings",
    "Audit Trail",
    "Notifications"
  ],
  "accent": "blue"
} as const;

export const records = [
  {
    "id": "39-1-1",
    "name": "IronPulse Gym Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "5,617"
  },
  {
    "id": "39-1-2",
    "name": "IronPulse Gym Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "5,754"
  },
  {
    "id": "39-1-3",
    "name": "IronPulse Gym Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "5,891"
  },
  {
    "id": "39-1-4",
    "name": "IronPulse Gym Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "6,028"
  },
  {
    "id": "39-1-5",
    "name": "IronPulse Gym Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "6,165"
  },
  {
    "id": "39-1-6",
    "name": "IronPulse Gym Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "6,302"
  }
] as const;
