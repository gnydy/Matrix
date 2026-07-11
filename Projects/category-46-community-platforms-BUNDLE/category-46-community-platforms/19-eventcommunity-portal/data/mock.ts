export const templateMeta = {
  "templateName": "EventCommunity Portal",
  "category": "Community Platforms",
  "categoryNumber": 46,
  "description": "Forums, groups, posts, members, moderation, and community dashboards",
  "audience": "Community Platforms buyers who need a polished, sale-ready operational interface",
  "uiPattern": "mobile-first stacked panels with bottom action bar",
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
    "id": "46-19-1",
    "name": "EventCommunity Portal Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "9,042"
  },
  {
    "id": "46-19-2",
    "name": "EventCommunity Portal Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "9,179"
  },
  {
    "id": "46-19-3",
    "name": "EventCommunity Portal Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "9,316"
  },
  {
    "id": "46-19-4",
    "name": "EventCommunity Portal Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "9,453"
  },
  {
    "id": "46-19-5",
    "name": "EventCommunity Portal Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "9,590"
  },
  {
    "id": "46-19-6",
    "name": "EventCommunity Portal Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "9,727"
  }
] as const;
