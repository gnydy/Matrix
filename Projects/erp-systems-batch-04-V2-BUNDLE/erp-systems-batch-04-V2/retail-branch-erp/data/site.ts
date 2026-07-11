export const site = {
  "name": "Retail Branch ERP",
  "slug": "retail-branch-erp",
  "industry": "Retail chains",
  "concept": "Branches, POS summaries, products, stock transfers and cashier performance",
  "layout": "Branch performance grid",
  "port": 3072,
  "accent": "#8b5cf6"
} as const;

export const modules = [
  "Branches",
  "POS summary",
  "Transfers",
  "Cashiers"
] as const;
export const records = [
  {
    "id": "ERP-1001",
    "name": "Branches",
    "owner": "Operations Lead",
    "status": "Healthy",
    "value": "98%",
    "trend": "+12%"
  },
  {
    "id": "ERP-1002",
    "name": "POS summary",
    "owner": "Finance Manager",
    "status": "Review",
    "value": "74%",
    "trend": "-3%"
  },
  {
    "id": "ERP-1003",
    "name": "Transfers",
    "owner": "Supply Chain",
    "status": "Delayed",
    "value": "21",
    "trend": "5 risks"
  },
  {
    "id": "ERP-1004",
    "name": "Cashiers",
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
    "value": "$216k",
    "detail": "Mock operational value"
  },
  {
    "label": "Automation rate",
    "value": "73%",
    "detail": "Template readiness score"
  }
] as const;

export const navItems = ['Overview', 'Modules', 'Records', 'Approvals', 'Reports', 'Settings'] as const;
