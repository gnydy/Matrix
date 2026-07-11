export const site = {
  "name": "Energy Asset ERP",
  "slug": "energy-asset-erp",
  "industry": "Energy operators",
  "concept": "Assets, maintenance, field readings, incidents, procurement and safety controls",
  "layout": "Asset reliability map",
  "port": 3078,
  "accent": "#eab308"
} as const;

export const modules = [
  "Assets",
  "Incidents",
  "Maintenance",
  "Safety"
] as const;
export const records = [
  {
    "id": "ERP-1001",
    "name": "Assets",
    "owner": "Operations Lead",
    "status": "Healthy",
    "value": "98%",
    "trend": "+12%"
  },
  {
    "id": "ERP-1002",
    "name": "Incidents",
    "owner": "Finance Manager",
    "status": "Review",
    "value": "74%",
    "trend": "-3%"
  },
  {
    "id": "ERP-1003",
    "name": "Maintenance",
    "owner": "Supply Chain",
    "status": "Delayed",
    "value": "21",
    "trend": "5 risks"
  },
  {
    "id": "ERP-1004",
    "name": "Safety",
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
    "value": "17",
    "detail": "Needs manager review"
  },
  {
    "label": "Monthly volume",
    "value": "$180k",
    "detail": "Mock operational value"
  },
  {
    "label": "Automation rate",
    "value": "79%",
    "detail": "Template readiness score"
  }
] as const;

export const navItems = ['Overview', 'Modules', 'Records', 'Approvals', 'Reports', 'Settings'] as const;
