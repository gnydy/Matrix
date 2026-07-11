export const site = {
  "name": "Property Asset ERP",
  "slug": "property-asset-erp",
  "industry": "Real estate operators",
  "concept": "Property portfolio, tenants, maintenance, leases and occupancy analytics",
  "layout": "Portfolio occupancy map",
  "port": 3070,
  "accent": "#84cc16"
} as const;

export const modules = [
  "Units",
  "Leases",
  "Maintenance",
  "Tenant invoices"
] as const;
export const records = [
  {
    "id": "ERP-1001",
    "name": "Units",
    "owner": "Operations Lead",
    "status": "Healthy",
    "value": "98%",
    "trend": "+12%"
  },
  {
    "id": "ERP-1002",
    "name": "Leases",
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
    "name": "Tenant invoices",
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
    "value": "16",
    "detail": "Needs manager review"
  },
  {
    "label": "Monthly volume",
    "value": "$192k",
    "detail": "Mock operational value"
  },
  {
    "label": "Automation rate",
    "value": "71%",
    "detail": "Template readiness score"
  }
] as const;

export const navItems = ['Overview', 'Modules', 'Records', 'Approvals', 'Reports', 'Settings'] as const;
