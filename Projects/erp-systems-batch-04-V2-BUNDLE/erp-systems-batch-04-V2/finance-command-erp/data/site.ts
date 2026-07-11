export const site = {
  "name": "Finance Command ERP",
  "slug": "finance-command-erp",
  "industry": "Enterprise finance teams",
  "concept": "CFO command center with ledger, cashflow, tax, approvals and executive risk signals",
  "layout": "Split CFO desk",
  "port": 3060,
  "accent": "#38bdf8"
} as const;

export const modules = [
  "Cashflow runway",
  "Ledger exceptions",
  "Approval queue",
  "Tax exposure"
] as const;
export const records = [
  {
    "id": "ERP-1001",
    "name": "Cashflow runway",
    "owner": "Operations Lead",
    "status": "Healthy",
    "value": "98%",
    "trend": "+12%"
  },
  {
    "id": "ERP-1002",
    "name": "Ledger exceptions",
    "owner": "Finance Manager",
    "status": "Review",
    "value": "74%",
    "trend": "-3%"
  },
  {
    "id": "ERP-1003",
    "name": "Approval queue",
    "owner": "Supply Chain",
    "status": "Delayed",
    "value": "21",
    "trend": "5 risks"
  },
  {
    "id": "ERP-1004",
    "name": "Tax exposure",
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
    "value": "$180k",
    "detail": "Mock operational value"
  },
  {
    "label": "Automation rate",
    "value": "61%",
    "detail": "Template readiness score"
  }
] as const;

export const navItems = ['Overview', 'Modules', 'Records', 'Approvals', 'Reports', 'Settings'] as const;
