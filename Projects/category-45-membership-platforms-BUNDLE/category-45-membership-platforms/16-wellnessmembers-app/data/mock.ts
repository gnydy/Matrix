export const templateMeta = {
  "templateName": "WellnessMembers App",
  "category": "Membership Platforms",
  "categoryNumber": 45,
  "description": "Plans, member areas, premium content, subscriptions, and community access",
  "audience": "Membership Platforms buyers who need a polished, sale-ready operational interface",
  "uiPattern": "dense admin console with left rail and KPI ribbon",
  "modules": [
    "Files",
    "Roles",
    "Integrations",
    "API Mock",
    "Dashboard",
    "Records Table",
    "Smart Search",
    "Kanban"
  ],
  "accent": "cyan"
} as const;

export const records = [
  {
    "id": "45-16-1",
    "name": "WellnessMembers App Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "8,494"
  },
  {
    "id": "45-16-2",
    "name": "WellnessMembers App Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "8,631"
  },
  {
    "id": "45-16-3",
    "name": "WellnessMembers App Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "8,768"
  },
  {
    "id": "45-16-4",
    "name": "WellnessMembers App Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "8,905"
  },
  {
    "id": "45-16-5",
    "name": "WellnessMembers App Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "9,042"
  },
  {
    "id": "45-16-6",
    "name": "WellnessMembers App Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "9,179"
  }
] as const;
