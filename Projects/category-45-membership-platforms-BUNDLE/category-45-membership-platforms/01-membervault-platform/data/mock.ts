export const templateMeta = {
  "templateName": "MemberVault Platform",
  "category": "Membership Platforms",
  "categoryNumber": 45,
  "description": "Plans, member areas, premium content, subscriptions, and community access",
  "audience": "Membership Platforms buyers who need a polished, sale-ready operational interface",
  "uiPattern": "data room layout with document table and activity feed",
  "modules": [
    "Records Table",
    "Smart Search",
    "Kanban",
    "Calendar",
    "Reports",
    "Settings",
    "Audit Trail",
    "Notifications"
  ],
  "accent": "blue"
} as const;

export const records = [
  {
    "id": "45-1-1",
    "name": "MemberVault Platform Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "6,439"
  },
  {
    "id": "45-1-2",
    "name": "MemberVault Platform Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "6,576"
  },
  {
    "id": "45-1-3",
    "name": "MemberVault Platform Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "6,713"
  },
  {
    "id": "45-1-4",
    "name": "MemberVault Platform Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "6,850"
  },
  {
    "id": "45-1-5",
    "name": "MemberVault Platform Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "6,987"
  },
  {
    "id": "45-1-6",
    "name": "MemberVault Platform Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "7,124"
  }
] as const;
