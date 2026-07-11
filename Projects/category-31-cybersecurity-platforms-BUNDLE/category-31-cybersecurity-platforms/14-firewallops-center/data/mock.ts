export const templateMeta = {
  "templateName": "FirewallOps Center",
  "category": "Cybersecurity Platforms",
  "categoryNumber": 31,
  "description": "SOC dashboards, threat monitoring, compliance, and security services",
  "audience": "Cybersecurity Platforms buyers who need a polished, sale-ready operational interface",
  "uiPattern": "minimal luxury website with oversized typography",
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
    "id": "31-14-1",
    "name": "FirewallOps Center Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "6,302"
  },
  {
    "id": "31-14-2",
    "name": "FirewallOps Center Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "6,439"
  },
  {
    "id": "31-14-3",
    "name": "FirewallOps Center Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "6,576"
  },
  {
    "id": "31-14-4",
    "name": "FirewallOps Center Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "6,713"
  },
  {
    "id": "31-14-5",
    "name": "FirewallOps Center Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "6,850"
  },
  {
    "id": "31-14-6",
    "name": "FirewallOps Center Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "6,987"
  }
] as const;
