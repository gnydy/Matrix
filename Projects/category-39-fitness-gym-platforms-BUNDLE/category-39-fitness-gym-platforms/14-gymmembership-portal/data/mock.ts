export const templateMeta = {
  "templateName": "GymMembership Portal",
  "category": "Fitness & Gym Platforms",
  "categoryNumber": 39,
  "description": "Memberships, trainers, classes, bookings, nutrition, and progress dashboards",
  "audience": "Fitness & Gym Platforms buyers who need a polished, sale-ready operational interface",
  "uiPattern": "mobile-first stacked panels with bottom action bar",
  "modules": [
    "Approvals",
    "Chat",
    "Files",
    "Roles",
    "Integrations",
    "API Mock",
    "Dashboard",
    "Records Table"
  ],
  "accent": "amber"
} as const;

export const records = [
  {
    "id": "39-14-1",
    "name": "GymMembership Portal Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "7,398"
  },
  {
    "id": "39-14-2",
    "name": "GymMembership Portal Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "7,535"
  },
  {
    "id": "39-14-3",
    "name": "GymMembership Portal Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "7,672"
  },
  {
    "id": "39-14-4",
    "name": "GymMembership Portal Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "7,809"
  },
  {
    "id": "39-14-5",
    "name": "GymMembership Portal Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "7,946"
  },
  {
    "id": "39-14-6",
    "name": "GymMembership Portal Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "8,083"
  }
] as const;
