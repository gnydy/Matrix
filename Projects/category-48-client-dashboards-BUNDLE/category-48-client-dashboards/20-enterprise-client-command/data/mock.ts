export const templateMeta = {
  "templateName": "Enterprise Client Command",
  "category": "Client Dashboards",
  "categoryNumber": 48,
  "description": "KPIs, reports, services, payments, progress, support, and notifications",
  "audience": "Client Dashboards buyers who need a polished, sale-ready operational interface",
  "uiPattern": "timeline-first workflow interface",
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
    "id": "48-20-1",
    "name": "Enterprise Client Command Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "9,453"
  },
  {
    "id": "48-20-2",
    "name": "Enterprise Client Command Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "9,590"
  },
  {
    "id": "48-20-3",
    "name": "Enterprise Client Command Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "9,727"
  },
  {
    "id": "48-20-4",
    "name": "Enterprise Client Command Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "9,864"
  },
  {
    "id": "48-20-5",
    "name": "Enterprise Client Command Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "10,001"
  },
  {
    "id": "48-20-6",
    "name": "Enterprise Client Command Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "10,138"
  }
] as const;
