export const templateMeta = {
  "templateName": "NewsPulse Magazine",
  "category": "News & Magazine Websites",
  "categoryNumber": 41,
  "description": "Articles, categories, authors, trending content, newsletters, and ads layouts",
  "audience": "News & Magazine Websites buyers who need a polished, sale-ready operational interface",
  "uiPattern": "desktop app shell with toolbar, tabs, and resizable panels",
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
    "id": "41-1-1",
    "name": "NewsPulse Magazine Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "5,891"
  },
  {
    "id": "41-1-2",
    "name": "NewsPulse Magazine Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "6,028"
  },
  {
    "id": "41-1-3",
    "name": "NewsPulse Magazine Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "6,165"
  },
  {
    "id": "41-1-4",
    "name": "NewsPulse Magazine Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "6,302"
  },
  {
    "id": "41-1-5",
    "name": "NewsPulse Magazine Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "6,439"
  },
  {
    "id": "41-1-6",
    "name": "NewsPulse Magazine Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "6,576"
  }
] as const;
