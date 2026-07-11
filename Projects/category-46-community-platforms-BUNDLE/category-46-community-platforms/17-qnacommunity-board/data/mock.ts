export const templateMeta = {
  "templateName": "QnACommunity Board",
  "category": "Community Platforms",
  "categoryNumber": 46,
  "description": "Forums, groups, posts, members, moderation, and community dashboards",
  "audience": "Community Platforms buyers who need a polished, sale-ready operational interface",
  "uiPattern": "card-based workspace with filter bar and live status rail",
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
    "id": "46-17-1",
    "name": "QnACommunity Board Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "8,768"
  },
  {
    "id": "46-17-2",
    "name": "QnACommunity Board Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "8,905"
  },
  {
    "id": "46-17-3",
    "name": "QnACommunity Board Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "9,042"
  },
  {
    "id": "46-17-4",
    "name": "QnACommunity Board Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "9,179"
  },
  {
    "id": "46-17-5",
    "name": "QnACommunity Board Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "9,316"
  },
  {
    "id": "46-17-6",
    "name": "QnACommunity Board Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "9,453"
  }
] as const;
