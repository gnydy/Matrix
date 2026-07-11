export const templateMeta = {
  "templateName": "TaxTrack Finance Portal",
  "category": "Fintech Platforms",
  "categoryNumber": 32,
  "description": "Wallets, payments, banking UI, investment dashboards, and financial tools",
  "audience": "Fintech Platforms buyers who need a polished, sale-ready operational interface",
  "uiPattern": "data room layout with document table and activity feed",
  "modules": [
    "Approvals",
    "Chat",
    "Files",
    "Roles",
    "Integrations",
    "API Mock",
    "Dashboard",
    "Records Table"
  ],
  "accent": "amber"
} as const;

export const records = [
  {
    "id": "32-14-1",
    "name": "TaxTrack Finance Portal Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "6,439"
  },
  {
    "id": "32-14-2",
    "name": "TaxTrack Finance Portal Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "6,576"
  },
  {
    "id": "32-14-3",
    "name": "TaxTrack Finance Portal Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "6,713"
  },
  {
    "id": "32-14-4",
    "name": "TaxTrack Finance Portal Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "6,850"
  },
  {
    "id": "32-14-5",
    "name": "TaxTrack Finance Portal Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "6,987"
  },
  {
    "id": "32-14-6",
    "name": "TaxTrack Finance Portal Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "7,124"
  }
] as const;
