export const site = {
  "name": "Hospital Ops ERP",
  "slug": "hospital-ops-erp",
  "industry": "Clinics and hospital networks",
  "concept": "Patient flow, departments, billing, stock, claims and resource allocation",
  "layout": "Patient flow command",
  "port": 3068,
  "accent": "#14b8a6"
} as const;

export const modules = [
  "Departments",
  "Billing claims",
  "Pharmacy stock",
  "Bed allocation"
] as const;
export const records = [
  {
    "id": "ERP-1001",
    "name": "Departments",
    "owner": "Operations Lead",
    "status": "Healthy",
    "value": "98%",
    "trend": "+12%"
  },
  {
    "id": "ERP-1002",
    "name": "Billing claims",
    "owner": "Finance Manager",
    "status": "Review",
    "value": "74%",
    "trend": "-3%"
  },
  {
    "id": "ERP-1003",
    "name": "Pharmacy stock",
    "owner": "Supply Chain",
    "status": "Delayed",
    "value": "21",
    "trend": "5 risks"
  },
  {
    "id": "ERP-1004",
    "name": "Bed allocation",
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
    "value": "14",
    "detail": "Needs manager review"
  },
  {
    "label": "Monthly volume",
    "value": "$276k",
    "detail": "Mock operational value"
  },
  {
    "label": "Automation rate",
    "value": "69%",
    "detail": "Template readiness score"
  }
] as const;

export const navItems = ['Overview', 'Modules', 'Records', 'Approvals', 'Reports', 'Settings'] as const;
