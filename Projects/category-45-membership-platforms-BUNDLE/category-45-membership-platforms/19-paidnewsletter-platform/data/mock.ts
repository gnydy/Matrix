export const templateMeta = {
  "templateName": "PaidNewsletter Platform",
  "category": "Membership Platforms",
  "categoryNumber": 45,
  "description": "Plans, member areas, premium content, subscriptions, and community access",
  "audience": "Membership Platforms buyers who need a polished, sale-ready operational interface",
  "uiPattern": "dark operations cockpit with alert stream",
  "modules": [
    "API Mock",
    "Dashboard",
    "Records Table",
    "Smart Search",
    "Kanban",
    "Calendar",
    "Reports",
    "Settings"
  ],
  "accent": "teal"
} as const;

export const records = [
  {
    "id": "45-19-1",
    "name": "PaidNewsletter Platform Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "8,905"
  },
  {
    "id": "45-19-2",
    "name": "PaidNewsletter Platform Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "9,042"
  },
  {
    "id": "45-19-3",
    "name": "PaidNewsletter Platform Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "9,179"
  },
  {
    "id": "45-19-4",
    "name": "PaidNewsletter Platform Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "9,316"
  },
  {
    "id": "45-19-5",
    "name": "PaidNewsletter Platform Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "9,453"
  },
  {
    "id": "45-19-6",
    "name": "PaidNewsletter Platform Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "9,590"
  }
] as const;
