export const templateMeta = {
  "templateName": "InteriorBooking Portal",
  "category": "Interior Design Websites",
  "categoryNumber": 38,
  "description": "Rooms, moodboards, packages, before/after, and consultation booking",
  "audience": "Interior Design Websites buyers who need a polished, sale-ready operational interface",
  "uiPattern": "minimal luxury website with oversized typography",
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
    "id": "38-19-1",
    "name": "InteriorBooking Portal Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "7,946"
  },
  {
    "id": "38-19-2",
    "name": "InteriorBooking Portal Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "8,083"
  },
  {
    "id": "38-19-3",
    "name": "InteriorBooking Portal Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "8,220"
  },
  {
    "id": "38-19-4",
    "name": "InteriorBooking Portal Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "8,357"
  },
  {
    "id": "38-19-5",
    "name": "InteriorBooking Portal Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "8,494"
  },
  {
    "id": "38-19-6",
    "name": "InteriorBooking Portal Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "8,631"
  }
] as const;
