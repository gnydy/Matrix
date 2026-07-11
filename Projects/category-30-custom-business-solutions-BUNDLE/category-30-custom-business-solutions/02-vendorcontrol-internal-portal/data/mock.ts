export const templateMeta = {
  "templateName": "VendorControl Internal Portal",
  "category": "Custom Business Solutions",
  "categoryNumber": 30,
  "description": "Internal portals, operational systems, workflows, and business dashboards",
  "audience": "Custom Business Solutions buyers who need a polished, sale-ready operational interface",
  "uiPattern": "timeline-first workflow interface",
  "modules": [
    "Smart Search",
    "Kanban",
    "Calendar",
    "Reports",
    "Settings",
    "Audit Trail",
    "Notifications",
    "Profile"
  ],
  "accent": "emerald"
} as const;

export const records = [
  {
    "id": "30-2-1",
    "name": "VendorControl Internal Portal Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "4,521"
  },
  {
    "id": "30-2-2",
    "name": "VendorControl Internal Portal Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "4,658"
  },
  {
    "id": "30-2-3",
    "name": "VendorControl Internal Portal Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "4,795"
  },
  {
    "id": "30-2-4",
    "name": "VendorControl Internal Portal Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "4,932"
  },
  {
    "id": "30-2-5",
    "name": "VendorControl Internal Portal Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "5,069"
  },
  {
    "id": "30-2-6",
    "name": "VendorControl Internal Portal Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "5,206"
  }
] as const;
