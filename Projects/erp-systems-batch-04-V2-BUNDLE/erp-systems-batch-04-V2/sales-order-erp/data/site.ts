export const site = {
  "name": "Sales Order ERP",
  "slug": "sales-order-erp",
  "industry": "B2B sales operations",
  "concept": "Sales orders, quotations, invoices, client accounts and margin visibility",
  "layout": "Order-to-cash pipeline",
  "port": 3065,
  "accent": "#0ea5e9"
} as const;

export const modules = [
  "Quotes",
  "Orders",
  "Invoices",
  "Margin alerts"
] as const;
export const records = [
  {
    "id": "ERP-1001",
    "name": "Quotes",
    "owner": "Operations Lead",
    "status": "Healthy",
    "value": "98%",
    "trend": "+12%"
  },
  {
    "id": "ERP-1002",
    "name": "Orders",
    "owner": "Finance Manager",
    "status": "Review",
    "value": "74%",
    "trend": "-3%"
  },
  {
    "id": "ERP-1003",
    "name": "Invoices",
    "owner": "Supply Chain",
    "status": "Delayed",
    "value": "21",
    "trend": "5 risks"
  },
  {
    "id": "ERP-1004",
    "name": "Margin alerts",
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
    "value": "18",
    "detail": "Needs manager review"
  },
  {
    "label": "Monthly volume",
    "value": "$240k",
    "detail": "Mock operational value"
  },
  {
    "label": "Automation rate",
    "value": "66%",
    "detail": "Template readiness score"
  }
] as const;

export const navItems = ['Overview', 'Modules', 'Records', 'Approvals', 'Reports', 'Settings'] as const;
