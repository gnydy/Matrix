export const templateMeta = {
  "templateName": "FinanceMind Blog",
  "category": "Blog Platforms",
  "categoryNumber": 42,
  "description": "Personal, tech, AI, business, finance, and lifestyle blog systems",
  "audience": "Blog Platforms buyers who need a polished, sale-ready operational interface",
  "uiPattern": "data room layout with document table and activity feed",
  "modules": [
    "Calendar",
    "Reports",
    "Settings",
    "Audit Trail",
    "Notifications",
    "Profile",
    "Forms",
    "Analytics"
  ],
  "accent": "amber"
} as const;

export const records = [
  {
    "id": "42-4-1",
    "name": "FinanceMind Blog Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "6,439"
  },
  {
    "id": "42-4-2",
    "name": "FinanceMind Blog Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "6,576"
  },
  {
    "id": "42-4-3",
    "name": "FinanceMind Blog Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "6,713"
  },
  {
    "id": "42-4-4",
    "name": "FinanceMind Blog Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "6,850"
  },
  {
    "id": "42-4-5",
    "name": "FinanceMind Blog Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "6,987"
  },
  {
    "id": "42-4-6",
    "name": "FinanceMind Blog Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "7,124"
  }
] as const;
