export const templateMeta = {
  "templateName": "RestaurantInterior Lab",
  "category": "Interior Design Websites",
  "categoryNumber": 38,
  "description": "Rooms, moodboards, packages, before/after, and consultation booking",
  "audience": "Interior Design Websites buyers who need a polished, sale-ready operational interface",
  "uiPattern": "dark operations cockpit with alert stream",
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
    "id": "38-14-1",
    "name": "RestaurantInterior Lab Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "7,261"
  },
  {
    "id": "38-14-2",
    "name": "RestaurantInterior Lab Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "7,398"
  },
  {
    "id": "38-14-3",
    "name": "RestaurantInterior Lab Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "7,535"
  },
  {
    "id": "38-14-4",
    "name": "RestaurantInterior Lab Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "7,672"
  },
  {
    "id": "38-14-5",
    "name": "RestaurantInterior Lab Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "7,809"
  },
  {
    "id": "38-14-6",
    "name": "RestaurantInterior Lab Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "7,946"
  }
] as const;
