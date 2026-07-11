export const site = {
  "name": "Service Maintenance ERP",
  "slug": "service-maintenance-erp",
  "industry": "Maintenance and field service",
  "concept": "Work orders, technicians, spare parts, contracts and SLA escalation",
  "layout": "Field service command",
  "port": 3074,
  "accent": "#64748b"
} as const;

export const modules = [
  "Work orders",
  "Technicians",
  "Spare parts",
  "SLA risk"
] as const;
export const records = [
  {
    "id": "ERP-1001",
    "name": "Work orders",
    "owner": "Operations Lead",
    "status": "Healthy",
    "value": "98%",
    "trend": "+12%"
  },
  {
    "id": "ERP-1002",
    "name": "Technicians",
    "owner": "Finance Manager",
    "status": "Review",
    "value": "74%",
    "trend": "-3%"
  },
  {
    "id": "ERP-1003",
    "name": "Spare parts",
    "owner": "Supply Chain",
    "status": "Delayed",
    "value": "21",
    "trend": "5 risks"
  },
  {
    "id": "ERP-1004",
    "name": "SLA risk",
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
    "value": "13",
    "detail": "Needs manager review"
  },
  {
    "label": "Monthly volume",
    "value": "$240k",
    "detail": "Mock operational value"
  },
  {
    "label": "Automation rate",
    "value": "75%",
    "detail": "Template readiness score"
  }
] as const;

export const navItems = ['Overview', 'Modules', 'Records', 'Approvals', 'Reports', 'Settings'] as const;
