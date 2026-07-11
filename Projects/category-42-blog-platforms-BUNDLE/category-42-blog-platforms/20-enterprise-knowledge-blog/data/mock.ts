export const templateMeta = {
  "templateName": "Enterprise Knowledge Blog",
  "category": "Blog Platforms",
  "categoryNumber": 42,
  "description": "Personal, tech, AI, business, finance, and lifestyle blog systems",
  "audience": "Blog Platforms buyers who need a polished, sale-ready operational interface",
  "uiPattern": "marketing website with editorial hero and case-study grid",
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
    "id": "42-20-1",
    "name": "Enterprise Knowledge Blog Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "8,631"
  },
  {
    "id": "42-20-2",
    "name": "Enterprise Knowledge Blog Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "8,768"
  },
  {
    "id": "42-20-3",
    "name": "Enterprise Knowledge Blog Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "8,905"
  },
  {
    "id": "42-20-4",
    "name": "Enterprise Knowledge Blog Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "9,042"
  },
  {
    "id": "42-20-5",
    "name": "Enterprise Knowledge Blog Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "9,179"
  },
  {
    "id": "42-20-6",
    "name": "Enterprise Knowledge Blog Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "9,316"
  }
] as const;
