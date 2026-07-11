export const site = {
  "name": "Construct Cost ERP",
  "slug": "construct-cost-erp",
  "industry": "Contractors and project offices",
  "concept": "Project costs, BOQ, site progress, equipment and subcontractor dashboard",
  "layout": "Site progress grid",
  "port": 3066,
  "accent": "#f59e0b"
} as const;

export const modules = [
  "BOQ budget",
  "Subcontractors",
  "Equipment",
  "Safety notes"
] as const;
export const records = [
  {
    "id": "ERP-1001",
    "name": "BOQ budget",
    "owner": "Operations Lead",
    "status": "Healthy",
    "value": "98%",
    "trend": "+12%"
  },
  {
    "id": "ERP-1002",
    "name": "Subcontractors",
    "owner": "Finance Manager",
    "status": "Review",
    "value": "74%",
    "trend": "-3%"
  },
  {
    "id": "ERP-1003",
    "name": "Equipment",
    "owner": "Supply Chain",
    "status": "Delayed",
    "value": "21",
    "trend": "5 risks"
  },
  {
    "id": "ERP-1004",
    "name": "Safety notes",
    "owner": "Admin",
    "status": "Approved",
    "value": "$248k",
    "trend": "+8%"
  }
] as const;
export const phases = [
  "Request",
  "Review",
  "Approval",
  "Execution",
  "Audit"
] as const;
export const stats = [
  {
    "label": "Active modules",
    "value": "12",
    "detail": "Role-based screens"
  },
  {
    "label": "Open approvals",
    "value": "12",
    "detail": "Needs manager review"
  },
  {
    "label": "Monthly volume",
    "value": "$252k",
    "detail": "Mock operational value"
  },
  {
    "label": "Automation rate",
    "value": "67%",
    "detail": "Template readiness score"
  }
] as const;

export const navItems = ['Overview', 'Modules', 'Records', 'Approvals', 'Reports', 'Settings'] as const;
