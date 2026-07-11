export const site = {
  "name": "Fleet Route ERP",
  "slug": "fleet-route-erp",
  "industry": "Logistics and delivery companies",
  "concept": "Fleet dispatch, route planning, shipments, driver status and delivery SLA control",
  "layout": "Dispatch route tower",
  "port": 3067,
  "accent": "#06b6d4"
} as const;

export const modules = [
  "Vehicles",
  "Routes",
  "SLA",
  "Driver queue"
] as const;
export const records = [
  {
    "id": "ERP-1001",
    "name": "Vehicles",
    "owner": "Operations Lead",
    "status": "Healthy",
    "value": "98%",
    "trend": "+12%"
  },
  {
    "id": "ERP-1002",
    "name": "Routes",
    "owner": "Finance Manager",
    "status": "Review",
    "value": "74%",
    "trend": "-3%"
  },
  {
    "id": "ERP-1003",
    "name": "SLA",
    "owner": "Supply Chain",
    "status": "Delayed",
    "value": "21",
    "trend": "5 risks"
  },
  {
    "id": "ERP-1004",
    "name": "Driver queue",
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
    "value": "$264k",
    "detail": "Mock operational value"
  },
  {
    "label": "Automation rate",
    "value": "68%",
    "detail": "Template readiness score"
  }
] as const;

export const navItems = ['Overview', 'Modules', 'Records', 'Approvals', 'Reports', 'Settings'] as const;
