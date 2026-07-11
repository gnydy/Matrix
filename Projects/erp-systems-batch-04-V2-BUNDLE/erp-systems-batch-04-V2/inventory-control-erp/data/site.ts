export const site = {
  "name": "Inventory Control ERP",
  "slug": "inventory-control-erp",
  "industry": "Warehouses and distributors",
  "concept": "Inventory movement cockpit with bins, stock alerts, suppliers and transfer requests",
  "layout": "Warehouse bin map",
  "port": 3062,
  "accent": "#22c55e"
} as const;

export const modules = [
  "Low stock",
  "Transfers",
  "Supplier lead time",
  "Stock movement"
] as const;
export const records = [
  {
    "id": "ERP-1001",
    "name": "Low stock",
    "owner": "Operations Lead",
    "status": "Healthy",
    "value": "98%",
    "trend": "+12%"
  },
  {
    "id": "ERP-1002",
    "name": "Transfers",
    "owner": "Finance Manager",
    "status": "Review",
    "value": "74%",
    "trend": "-3%"
  },
  {
    "id": "ERP-1003",
    "name": "Supplier lead time",
    "owner": "Supply Chain",
    "status": "Delayed",
    "value": "21",
    "trend": "5 risks"
  },
  {
    "id": "ERP-1004",
    "name": "Stock movement",
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
    "value": "15",
    "detail": "Needs manager review"
  },
  {
    "label": "Monthly volume",
    "value": "$204k",
    "detail": "Mock operational value"
  },
  {
    "label": "Automation rate",
    "value": "63%",
    "detail": "Template readiness score"
  }
] as const;

export const navItems = ['Overview', 'Modules', 'Records', 'Approvals', 'Reports', 'Settings'] as const;
