export const templateMeta = {
  "templateName": "FounderNotes Blog",
  "category": "Blog Platforms",
  "categoryNumber": 42,
  "description": "Personal, tech, AI, business, finance, and lifestyle blog systems",
  "audience": "Blog Platforms buyers who need a polished, sale-ready operational interface",
  "uiPattern": "dashboard marketplace grid with comparison cards",
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
    "id": "42-1-1",
    "name": "FounderNotes Blog Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "6,028"
  },
  {
    "id": "42-1-2",
    "name": "FounderNotes Blog Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "6,165"
  },
  {
    "id": "42-1-3",
    "name": "FounderNotes Blog Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "6,302"
  },
  {
    "id": "42-1-4",
    "name": "FounderNotes Blog Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "6,439"
  },
  {
    "id": "42-1-5",
    "name": "FounderNotes Blog Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "6,576"
  },
  {
    "id": "42-1-6",
    "name": "FounderNotes Blog Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "6,713"
  }
] as const;
