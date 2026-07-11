export const templateMeta = {
  "templateName": "Enterprise Media HQ",
  "category": "News & Magazine Websites",
  "categoryNumber": 41,
  "description": "Articles, categories, authors, trending content, newsletters, and ads layouts",
  "audience": "News & Magazine Websites buyers who need a polished, sale-ready operational interface",
  "uiPattern": "dense admin console with left rail and KPI ribbon",
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
    "id": "41-20-1",
    "name": "Enterprise Media HQ Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "8,494"
  },
  {
    "id": "41-20-2",
    "name": "Enterprise Media HQ Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "8,631"
  },
  {
    "id": "41-20-3",
    "name": "Enterprise Media HQ Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "8,768"
  },
  {
    "id": "41-20-4",
    "name": "Enterprise Media HQ Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "8,905"
  },
  {
    "id": "41-20-5",
    "name": "Enterprise Media HQ Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "9,042"
  },
  {
    "id": "41-20-6",
    "name": "Enterprise Media HQ Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "9,179"
  }
] as const;
