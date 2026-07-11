export const templateMeta = {
  "templateName": "Enterprise Creative HQ",
  "category": "Creative Agency Websites",
  "categoryNumber": 35,
  "description": "Branding studios, portfolios, motion work, visual case studies, and pitch pages",
  "audience": "Creative Agency Websites buyers who need a polished, sale-ready operational interface",
  "uiPattern": "dashboard marketplace grid with comparison cards",
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
    "id": "35-20-1",
    "name": "Enterprise Creative HQ Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "7,672"
  },
  {
    "id": "35-20-2",
    "name": "Enterprise Creative HQ Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "7,809"
  },
  {
    "id": "35-20-3",
    "name": "Enterprise Creative HQ Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "7,946"
  },
  {
    "id": "35-20-4",
    "name": "Enterprise Creative HQ Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "8,083"
  },
  {
    "id": "35-20-5",
    "name": "Enterprise Creative HQ Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "8,220"
  },
  {
    "id": "35-20-6",
    "name": "Enterprise Creative HQ Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "8,357"
  }
] as const;
