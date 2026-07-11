export const templateMeta = {
  "templateName": "InvestorClub Portal",
  "category": "Membership Platforms",
  "categoryNumber": 45,
  "description": "Plans, member areas, premium content, subscriptions, and community access",
  "audience": "Membership Platforms buyers who need a polished, sale-ready operational interface",
  "uiPattern": "data room layout with document table and activity feed",
  "modules": [
    "Billing",
    "Approvals",
    "Chat",
    "Files",
    "Roles",
    "Integrations",
    "API Mock",
    "Dashboard"
  ],
  "accent": "violet"
} as const;

export const records = [
  {
    "id": "45-13-1",
    "name": "InvestorClub Portal Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "8,083"
  },
  {
    "id": "45-13-2",
    "name": "InvestorClub Portal Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "8,220"
  },
  {
    "id": "45-13-3",
    "name": "InvestorClub Portal Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "8,357"
  },
  {
    "id": "45-13-4",
    "name": "InvestorClub Portal Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "8,494"
  },
  {
    "id": "45-13-5",
    "name": "InvestorClub Portal Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "8,631"
  },
  {
    "id": "45-13-6",
    "name": "InvestorClub Portal Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "8,768"
  }
] as const;
