export const templateMeta = {
  "templateName": "RoomCraft Interiors",
  "category": "Interior Design Websites",
  "categoryNumber": 38,
  "description": "Rooms, moodboards, packages, before/after, and consultation booking",
  "audience": "Interior Design Websites buyers who need a polished, sale-ready operational interface",
  "uiPattern": "card-based workspace with filter bar and live status rail",
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
    "id": "38-1-1",
    "name": "RoomCraft Interiors Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "5,480"
  },
  {
    "id": "38-1-2",
    "name": "RoomCraft Interiors Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "5,617"
  },
  {
    "id": "38-1-3",
    "name": "RoomCraft Interiors Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "5,754"
  },
  {
    "id": "38-1-4",
    "name": "RoomCraft Interiors Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "5,891"
  },
  {
    "id": "38-1-5",
    "name": "RoomCraft Interiors Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "6,028"
  },
  {
    "id": "38-1-6",
    "name": "RoomCraft Interiors Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "6,165"
  }
] as const;
