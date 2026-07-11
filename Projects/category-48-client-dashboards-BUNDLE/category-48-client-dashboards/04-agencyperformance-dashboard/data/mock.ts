export const templateMeta = {
  "templateName": "AgencyPerformance Dashboard",
  "category": "Client Dashboards",
  "categoryNumber": 48,
  "description": "KPIs, reports, services, payments, progress, support, and notifications",
  "audience": "Client Dashboards buyers who need a polished, sale-ready operational interface",
  "uiPattern": "dark operations cockpit with alert stream",
  "modules": [
    "Calendar",
    "Reports",
    "Settings",
    "Audit Trail",
    "Notifications",
    "Profile",
    "Forms",
    "Analytics"
  ],
  "accent": "amber"
} as const;

export const records = [
  {
    "id": "48-4-1",
    "name": "AgencyPerformance Dashboard Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "7,261"
  },
  {
    "id": "48-4-2",
    "name": "AgencyPerformance Dashboard Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "7,398"
  },
  {
    "id": "48-4-3",
    "name": "AgencyPerformance Dashboard Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "7,535"
  },
  {
    "id": "48-4-4",
    "name": "AgencyPerformance Dashboard Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "7,672"
  },
  {
    "id": "48-4-5",
    "name": "AgencyPerformance Dashboard Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "7,809"
  },
  {
    "id": "48-4-6",
    "name": "AgencyPerformance Dashboard Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "7,946"
  }
] as const;
