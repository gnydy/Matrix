export const templateMeta = {
  "templateName": "Enterprise Community HQ",
  "category": "Community Platforms",
  "categoryNumber": 46,
  "description": "Forums, groups, posts, members, moderation, and community dashboards",
  "audience": "Community Platforms buyers who need a polished, sale-ready operational interface",
  "uiPattern": "desktop app shell with toolbar, tabs, and resizable panels",
  "modules": [
    "Dashboard",
    "Records Table",
    "Smart Search",
    "Kanban",
    "Calendar",
    "Reports",
    "Settings",
    "Audit Trail"
  ],
  "accent": "slate"
} as const;

export const records = [
  {
    "id": "46-20-1",
    "name": "Enterprise Community HQ Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "9,179"
  },
  {
    "id": "46-20-2",
    "name": "Enterprise Community HQ Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "9,316"
  },
  {
    "id": "46-20-3",
    "name": "Enterprise Community HQ Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "9,453"
  },
  {
    "id": "46-20-4",
    "name": "Enterprise Community HQ Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "9,590"
  },
  {
    "id": "46-20-5",
    "name": "Enterprise Community HQ Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "9,727"
  },
  {
    "id": "46-20-6",
    "name": "Enterprise Community HQ Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "9,864"
  }
] as const;
