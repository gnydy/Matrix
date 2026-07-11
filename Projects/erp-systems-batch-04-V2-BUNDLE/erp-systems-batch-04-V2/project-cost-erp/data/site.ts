export const site = {
  "name": "Project Cost ERP",
  "slug": "project-cost-erp",
  "industry": "Project-based businesses",
  "concept": "Budgets, expenses, milestones, utilization and profitability tracking",
  "layout": "Project profitability board",
  "port": 3076,
  "accent": "#d946ef"
} as const;

export const modules = [
  "Budgets",
  "Milestones",
  "Timesheets",
  "Utilization"
] as const;
export const records = [
  {
    "id": "ERP-1001",
    "name": "Budgets",
    "owner": "Operations Lead",
    "status": "Healthy",
    "value": "98%",
    "trend": "+12%"
  },
  {
    "id": "ERP-1002",
    "name": "Milestones",
    "owner": "Finance Manager",
    "status": "Review",
    "value": "74%",
    "trend": "-3%"
  },
  {
    "id": "ERP-1003",
    "name": "Timesheets",
    "owner": "Supply Chain",
    "status": "Delayed",
    "value": "21",
    "trend": "5 risks"
  },
  {
    "id": "ERP-1004",
    "name": "Utilization",
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
    "value": "$264k",
    "detail": "Mock operational value"
  },
  {
    "label": "Automation rate",
    "value": "77%",
    "detail": "Template readiness score"
  }
] as const;

export const navItems = ['Overview', 'Modules', 'Records', 'Approvals', 'Reports', 'Settings'] as const;
