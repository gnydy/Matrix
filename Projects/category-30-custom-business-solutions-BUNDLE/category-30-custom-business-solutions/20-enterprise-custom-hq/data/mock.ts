export const templateMeta = {
  "templateName": "Enterprise Custom HQ",
  "category": "Custom Business Solutions",
  "categoryNumber": 30,
  "description": "Internal portals, operational systems, workflows, and business dashboards",
  "audience": "Custom Business Solutions buyers who need a polished, sale-ready operational interface",
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
    "id": "30-20-1",
    "name": "Enterprise Custom HQ Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "6,987"
  },
  {
    "id": "30-20-2",
    "name": "Enterprise Custom HQ Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "7,124"
  },
  {
    "id": "30-20-3",
    "name": "Enterprise Custom HQ Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "7,261"
  },
  {
    "id": "30-20-4",
    "name": "Enterprise Custom HQ Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "7,398"
  },
  {
    "id": "30-20-5",
    "name": "Enterprise Custom HQ Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "7,535"
  },
  {
    "id": "30-20-6",
    "name": "Enterprise Custom HQ Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "7,672"
  }
] as const;
