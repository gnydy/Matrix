export const templateMeta = {
  "templateName": "InvoicePay Suite",
  "category": "Fintech Platforms",
  "categoryNumber": 32,
  "description": "Wallets, payments, banking UI, investment dashboards, and financial tools",
  "audience": "Fintech Platforms buyers who need a polished, sale-ready operational interface",
  "uiPattern": "dense admin console with left rail and KPI ribbon",
  "modules": [
    "Reports",
    "Settings",
    "Audit Trail",
    "Notifications",
    "Profile",
    "Forms",
    "Analytics",
    "Workflow Builder"
  ],
  "accent": "rose"
} as const;

export const records = [
  {
    "id": "32-5-1",
    "name": "InvoicePay Suite Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "5,206"
  },
  {
    "id": "32-5-2",
    "name": "InvoicePay Suite Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "5,343"
  },
  {
    "id": "32-5-3",
    "name": "InvoicePay Suite Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "5,480"
  },
  {
    "id": "32-5-4",
    "name": "InvoicePay Suite Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "5,617"
  },
  {
    "id": "32-5-5",
    "name": "InvoicePay Suite Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "5,754"
  },
  {
    "id": "32-5-6",
    "name": "InvoicePay Suite Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "5,891"
  }
] as const;
