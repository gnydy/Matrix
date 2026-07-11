export const templateMeta = {
  "templateName": "NonprofitMember Area",
  "category": "Membership Platforms",
  "categoryNumber": 45,
  "description": "Plans, member areas, premium content, subscriptions, and community access",
  "audience": "Membership Platforms buyers who need a polished, sale-ready operational interface",
  "uiPattern": "desktop app shell with toolbar, tabs, and resizable panels",
  "modules": [
    "Profile",
    "Forms",
    "Analytics",
    "Workflow Builder",
    "Billing",
    "Approvals",
    "Chat",
    "Files"
  ],
  "accent": "teal"
} as const;

export const records = [
  {
    "id": "45-9-1",
    "name": "NonprofitMember Area Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "7,535"
  },
  {
    "id": "45-9-2",
    "name": "NonprofitMember Area Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "7,672"
  },
  {
    "id": "45-9-3",
    "name": "NonprofitMember Area Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "7,809"
  },
  {
    "id": "45-9-4",
    "name": "NonprofitMember Area Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "7,946"
  },
  {
    "id": "45-9-5",
    "name": "NonprofitMember Area Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "8,083"
  },
  {
    "id": "45-9-6",
    "name": "NonprofitMember Area Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "8,220"
  }
] as const;
