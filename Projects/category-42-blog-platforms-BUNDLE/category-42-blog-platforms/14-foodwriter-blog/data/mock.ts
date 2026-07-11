export const templateMeta = {
  "templateName": "FoodWriter Blog",
  "category": "Blog Platforms",
  "categoryNumber": 42,
  "description": "Personal, tech, AI, business, finance, and lifestyle blog systems",
  "audience": "Blog Platforms buyers who need a polished, sale-ready operational interface",
  "uiPattern": "timeline-first workflow interface",
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
    "id": "42-14-1",
    "name": "FoodWriter Blog Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "7,809"
  },
  {
    "id": "42-14-2",
    "name": "FoodWriter Blog Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "7,946"
  },
  {
    "id": "42-14-3",
    "name": "FoodWriter Blog Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "8,083"
  },
  {
    "id": "42-14-4",
    "name": "FoodWriter Blog Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "8,220"
  },
  {
    "id": "42-14-5",
    "name": "FoodWriter Blog Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "8,357"
  },
  {
    "id": "42-14-6",
    "name": "FoodWriter Blog Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "8,494"
  }
] as const;
