export const templateMeta = {
  "templateName": "EducationClient Analytics",
  "category": "Client Dashboards",
  "categoryNumber": 48,
  "description": "KPIs, reports, services, payments, progress, support, and notifications",
  "audience": "Client Dashboards buyers who need a polished, sale-ready operational interface",
  "uiPattern": "split command layout with sticky right insight panel",
  "modules": [
    "Workflow Builder",
    "Billing",
    "Approvals",
    "Chat",
    "Files",
    "Roles",
    "Integrations",
    "API Mock"
  ],
  "accent": "emerald"
} as const;

export const records = [
  {
    "id": "48-12-1",
    "name": "EducationClient Analytics Record 1",
    "status": "Pending",
    "owner": "Admin",
    "value": "8,357"
  },
  {
    "id": "48-12-2",
    "name": "EducationClient Analytics Record 2",
    "status": "Review",
    "owner": "Manager",
    "value": "8,494"
  },
  {
    "id": "48-12-3",
    "name": "EducationClient Analytics Record 3",
    "status": "Escalated",
    "owner": "Agent",
    "value": "8,631"
  },
  {
    "id": "48-12-4",
    "name": "EducationClient Analytics Record 4",
    "status": "Complete",
    "owner": "Client",
    "value": "8,768"
  },
  {
    "id": "48-12-5",
    "name": "EducationClient Analytics Record 5",
    "status": "Draft",
    "owner": "System",
    "value": "8,905"
  },
  {
    "id": "48-12-6",
    "name": "EducationClient Analytics Record 6",
    "status": "Active",
    "owner": "Ops Lead",
    "value": "9,042"
  }
] as const;
