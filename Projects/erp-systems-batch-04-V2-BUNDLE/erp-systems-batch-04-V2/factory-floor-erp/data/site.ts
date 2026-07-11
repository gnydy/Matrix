export const site = {
  "name": "Factory Floor ERP",
  "slug": "factory-floor-erp",
  "industry": "Manufacturing plants",
  "concept": "Production floor control with machines, work orders, materials and quality gates",
  "layout": "Factory floor board",
  "port": 3061,
  "accent": "#f97316"
} as const;

export const modules = [
  "Machine utilization",
  "Work orders",
  "Material shortages",
  "Quality checks"
] as const;
export const records = [
  {
    "id": "ERP-1001",
    "name": "Machine utilization",
    "owner": "Operations Lead",
    "status": "Healthy",
    "value": "98%",
    "trend": "+12%"
  },
  {
    "id": "ERP-1002",
    "name": "Work orders",
    "owner": "Finance Manager",
    "status": "Review",
    "value": "74%",
    "trend": "-3%"
  },
  {
    "id": "ERP-1003",
    "name": "Material shortages",
    "owner": "Supply Chain",
    "status": "Delayed",
    "value": "21",
    "trend": "5 risks"
  },
  {
    "id": "ERP-1004",
    "name": "Quality checks",
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
    "value": "$192k",
    "detail": "Mock operational value"
  },
  {
    "label": "Automation rate",
    "value": "62%",
    "detail": "Template readiness score"
  }
] as const;

export const navItems = ['Overview', 'Modules', 'Records', 'Approvals', 'Reports', 'Settings'] as const;
