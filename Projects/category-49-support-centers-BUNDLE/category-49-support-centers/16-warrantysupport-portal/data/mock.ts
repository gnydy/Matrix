export const templateMeta = {
  "templateName": "WarrantySupport Portal",
  "category": "Support Centers",
  "categoryNumber": 49,
  "description": "Knowledge bases, tickets, FAQs, chat support, contact forms, and status updates",
  "audience": "Support Centers buyers who need a polished, sale-ready operational interface",
  "uiPattern": "mobile-first stacked panels with bottom action bar",
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
    "id": "49-16-1",
    "name": "WarrantySupport Portal Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "9,042"
  },
  {
    "id": "49-16-2",
    "name": "WarrantySupport Portal Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "9,179"
  },
  {
    "id": "49-16-3",
    "name": "WarrantySupport Portal Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "9,316"
  },
  {
    "id": "49-16-4",
    "name": "WarrantySupport Portal Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "9,453"
  },
  {
    "id": "49-16-5",
    "name": "WarrantySupport Portal Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "9,590"
  },
  {
    "id": "49-16-6",
    "name": "WarrantySupport Portal Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "9,727"
  }
] as const;
