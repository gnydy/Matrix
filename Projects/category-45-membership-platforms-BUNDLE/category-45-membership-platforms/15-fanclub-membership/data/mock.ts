export const templateMeta = {
  "templateName": "FanClub Membership",
  "category": "Membership Platforms",
  "categoryNumber": 45,
  "description": "Plans, member areas, premium content, subscriptions, and community access",
  "audience": "Membership Platforms buyers who need a polished, sale-ready operational interface",
  "uiPattern": "split command layout with sticky right insight panel",
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
    "id": "45-15-1",
    "name": "FanClub Membership Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "8,357"
  },
  {
    "id": "45-15-2",
    "name": "FanClub Membership Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "8,494"
  },
  {
    "id": "45-15-3",
    "name": "FanClub Membership Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "8,631"
  },
  {
    "id": "45-15-4",
    "name": "FanClub Membership Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "8,768"
  },
  {
    "id": "45-15-5",
    "name": "FanClub Membership Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "8,905"
  },
  {
    "id": "45-15-6",
    "name": "FanClub Membership Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "9,042"
  }
] as const;
