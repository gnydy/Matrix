export const templateMeta = {
  "templateName": "LegalNews Review",
  "category": "News & Magazine Websites",
  "categoryNumber": 41,
  "description": "Articles, categories, authors, trending content, newsletters, and ads layouts",
  "audience": "News & Magazine Websites buyers who need a polished, sale-ready operational interface",
  "uiPattern": "timeline-first workflow interface",
  "modules": [
    "Chat",
    "Files",
    "Roles",
    "Integrations",
    "API Mock",
    "Dashboard",
    "Records Table",
    "Smart Search"
  ],
  "accent": "rose"
} as const;

export const records = [
  {
    "id": "41-15-1",
    "name": "LegalNews Review Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "7,809"
  },
  {
    "id": "41-15-2",
    "name": "LegalNews Review Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "7,946"
  },
  {
    "id": "41-15-3",
    "name": "LegalNews Review Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "8,083"
  },
  {
    "id": "41-15-4",
    "name": "LegalNews Review Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "8,220"
  },
  {
    "id": "41-15-5",
    "name": "LegalNews Review Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "8,357"
  },
  {
    "id": "41-15-6",
    "name": "LegalNews Review Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "8,494"
  }
] as const;
