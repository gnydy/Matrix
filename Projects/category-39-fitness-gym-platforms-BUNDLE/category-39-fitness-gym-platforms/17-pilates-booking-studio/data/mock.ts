export const templateMeta = {
  "templateName": "Pilates Booking Studio",
  "category": "Fitness & Gym Platforms",
  "categoryNumber": 39,
  "description": "Memberships, trainers, classes, bookings, nutrition, and progress dashboards",
  "audience": "Fitness & Gym Platforms buyers who need a polished, sale-ready operational interface",
  "uiPattern": "timeline-first workflow interface",
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
    "id": "39-17-1",
    "name": "Pilates Booking Studio Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "7,809"
  },
  {
    "id": "39-17-2",
    "name": "Pilates Booking Studio Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "7,946"
  },
  {
    "id": "39-17-3",
    "name": "Pilates Booking Studio Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "8,083"
  },
  {
    "id": "39-17-4",
    "name": "Pilates Booking Studio Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "8,220"
  },
  {
    "id": "39-17-5",
    "name": "Pilates Booking Studio Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "8,357"
  },
  {
    "id": "39-17-6",
    "name": "Pilates Booking Studio Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "8,494"
  }
] as const;
