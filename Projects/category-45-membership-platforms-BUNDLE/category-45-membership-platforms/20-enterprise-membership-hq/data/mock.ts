export const templateMeta = {
  "templateName": "Enterprise Membership HQ",
  "category": "Membership Platforms",
  "categoryNumber": 45,
  "description": "Plans, member areas, premium content, subscriptions, and community access",
  "audience": "Membership Platforms buyers who need a polished, sale-ready operational interface",
  "uiPattern": "mobile-first stacked panels with bottom action bar",
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
    "id": "45-20-1",
    "name": "Enterprise Membership HQ Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "9,042"
  },
  {
    "id": "45-20-2",
    "name": "Enterprise Membership HQ Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "9,179"
  },
  {
    "id": "45-20-3",
    "name": "Enterprise Membership HQ Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "9,316"
  },
  {
    "id": "45-20-4",
    "name": "Enterprise Membership HQ Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "9,453"
  },
  {
    "id": "45-20-5",
    "name": "Enterprise Membership HQ Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "9,590"
  },
  {
    "id": "45-20-6",
    "name": "Enterprise Membership HQ Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "9,727"
  }
] as const;
