export const templateMeta = {
  "templateName": "ConsultingClient Board",
  "category": "Client Dashboards",
  "categoryNumber": 48,
  "description": "KPIs, reports, services, payments, progress, support, and notifications",
  "audience": "Client Dashboards buyers who need a polished, sale-ready operational interface",
  "uiPattern": "desktop app shell with toolbar, tabs, and resizable panels",
  "modules": [
    "Integrations",
    "API Mock",
    "Dashboard",
    "Records Table",
    "Smart Search",
    "Kanban",
    "Calendar",
    "Reports"
  ],
  "accent": "zinc"
} as const;

export const records = [
  {
    "id": "48-18-1",
    "name": "ConsultingClient Board Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "9,179"
  },
  {
    "id": "48-18-2",
    "name": "ConsultingClient Board Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "9,316"
  },
  {
    "id": "48-18-3",
    "name": "ConsultingClient Board Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "9,453"
  },
  {
    "id": "48-18-4",
    "name": "ConsultingClient Board Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "9,590"
  },
  {
    "id": "48-18-5",
    "name": "ConsultingClient Board Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "9,727"
  },
  {
    "id": "48-18-6",
    "name": "ConsultingClient Board Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "9,864"
  }
] as const;
