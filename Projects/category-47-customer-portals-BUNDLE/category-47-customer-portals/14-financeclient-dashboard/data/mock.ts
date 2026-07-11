export const templateMeta = {
  "templateName": "FinanceClient Dashboard",
  "category": "Customer Portals",
  "categoryNumber": 47,
  "description": "Tickets, invoices, files, orders, project status, account settings",
  "audience": "Customer Portals buyers who need a polished, sale-ready operational interface",
  "uiPattern": "dense admin console with left rail and KPI ribbon",
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
    "id": "47-14-1",
    "name": "FinanceClient Dashboard Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "8,494"
  },
  {
    "id": "47-14-2",
    "name": "FinanceClient Dashboard Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "8,631"
  },
  {
    "id": "47-14-3",
    "name": "FinanceClient Dashboard Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "8,768"
  },
  {
    "id": "47-14-4",
    "name": "FinanceClient Dashboard Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "8,905"
  },
  {
    "id": "47-14-5",
    "name": "FinanceClient Dashboard Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "9,042"
  },
  {
    "id": "47-14-6",
    "name": "FinanceClient Dashboard Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "9,179"
  }
] as const;
