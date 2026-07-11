export const site = {
  "name": "People Payroll ERP",
  "slug": "people-payroll-erp",
  "industry": "HR and payroll operations",
  "concept": "Employee records, attendance, payroll cycle, leaves and performance control desk",
  "layout": "People operations timeline",
  "port": 3064,
  "accent": "#ec4899"
} as const;

export const modules = [
  "Attendance",
  "Payroll",
  "Leave balance",
  "Performance flags"
] as const;
export const records = [
  {
    "id": "ERP-1001",
    "name": "Attendance",
    "owner": "Operations Lead",
    "status": "Healthy",
    "value": "98%",
    "trend": "+12%"
  },
  {
    "id": "ERP-1002",
    "name": "Payroll",
    "owner": "Finance Manager",
    "status": "Review",
    "value": "74%",
    "trend": "-3%"
  },
  {
    "id": "ERP-1003",
    "name": "Leave balance",
    "owner": "Supply Chain",
    "status": "Delayed",
    "value": "21",
    "trend": "5 risks"
  },
  {
    "id": "ERP-1004",
    "name": "Performance flags",
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
    "value": "$228k",
    "detail": "Mock operational value"
  },
  {
    "label": "Automation rate",
    "value": "65%",
    "detail": "Template readiness score"
  }
] as const;

export const navItems = ['Overview', 'Modules', 'Records', 'Approvals', 'Reports', 'Settings'] as const;
