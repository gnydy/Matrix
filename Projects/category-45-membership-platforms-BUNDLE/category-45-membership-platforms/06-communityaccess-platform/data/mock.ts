export const templateMeta = {
  "templateName": "CommunityAccess Platform",
  "category": "Membership Platforms",
  "categoryNumber": 45,
  "description": "Plans, member areas, premium content, subscriptions, and community access",
  "audience": "Membership Platforms buyers who need a polished, sale-ready operational interface",
  "uiPattern": "card-based workspace with filter bar and live status rail",
  "modules": [
    "Settings",
    "Audit Trail",
    "Notifications",
    "Profile",
    "Forms",
    "Analytics",
    "Workflow Builder",
    "Billing"
  ],
  "accent": "cyan"
} as const;

export const records = [
  {
    "id": "45-6-1",
    "name": "CommunityAccess Platform Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "7,124"
  },
  {
    "id": "45-6-2",
    "name": "CommunityAccess Platform Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "7,261"
  },
  {
    "id": "45-6-3",
    "name": "CommunityAccess Platform Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "7,398"
  },
  {
    "id": "45-6-4",
    "name": "CommunityAccess Platform Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "7,535"
  },
  {
    "id": "45-6-5",
    "name": "CommunityAccess Platform Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "7,672"
  },
  {
    "id": "45-6-6",
    "name": "CommunityAccess Platform Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "7,809"
  }
] as const;
