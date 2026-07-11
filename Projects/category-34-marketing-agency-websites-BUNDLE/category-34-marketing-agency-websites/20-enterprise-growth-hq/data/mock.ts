export const templateMeta = {
  "templateName": "Enterprise Growth HQ",
  "category": "Marketing Agency Websites",
  "categoryNumber": 34,
  "description": "Campaigns, growth services, case studies, pricing, and client success",
  "audience": "Marketing Agency Websites buyers who need a polished, sale-ready operational interface",
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
    "id": "34-20-1",
    "name": "Enterprise Growth HQ Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "7,535"
  },
  {
    "id": "34-20-2",
    "name": "Enterprise Growth HQ Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "7,672"
  },
  {
    "id": "34-20-3",
    "name": "Enterprise Growth HQ Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "7,809"
  },
  {
    "id": "34-20-4",
    "name": "Enterprise Growth HQ Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "7,946"
  },
  {
    "id": "34-20-5",
    "name": "Enterprise Growth HQ Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "8,083"
  },
  {
    "id": "34-20-6",
    "name": "Enterprise Growth HQ Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "8,220"
  }
] as const;
