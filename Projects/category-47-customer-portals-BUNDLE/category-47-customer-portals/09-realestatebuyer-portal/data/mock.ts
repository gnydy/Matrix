export const templateMeta = {
  "templateName": "RealEstateBuyer Portal",
  "category": "Customer Portals",
  "categoryNumber": 47,
  "description": "Tickets, invoices, files, orders, project status, account settings",
  "audience": "Customer Portals buyers who need a polished, sale-ready operational interface",
  "uiPattern": "timeline-first workflow interface",
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
    "id": "47-9-1",
    "name": "RealEstateBuyer Portal Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "7,809"
  },
  {
    "id": "47-9-2",
    "name": "RealEstateBuyer Portal Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "7,946"
  },
  {
    "id": "47-9-3",
    "name": "RealEstateBuyer Portal Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "8,083"
  },
  {
    "id": "47-9-4",
    "name": "RealEstateBuyer Portal Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "8,220"
  },
  {
    "id": "47-9-5",
    "name": "RealEstateBuyer Portal Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "8,357"
  },
  {
    "id": "47-9-6",
    "name": "RealEstateBuyer Portal Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "8,494"
  }
] as const;
