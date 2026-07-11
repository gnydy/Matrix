export const site = {
  "name": "Procurement Hub ERP",
  "slug": "procurement-hub-erp",
  "industry": "Procurement departments",
  "concept": "Purchase request to vendor comparison workflow with RFQ board and approval lanes",
  "layout": "RFQ comparison lanes",
  "port": 3063,
  "accent": "#a855f7"
} as const;

export const modules = [
  "Requests",
  "Vendor quotes",
  "Approvals",
  "Savings tracker"
] as const;
export const records = [
  {
    "id": "ERP-1001",
    "name": "Requests",
    "owner": "Operations Lead",
    "status": "Healthy",
    "value": "98%",
    "trend": "+12%"
  },
  {
    "id": "ERP-1002",
    "name": "Vendor quotes",
    "owner": "Finance Manager",
    "status": "Review",
    "value": "74%",
    "trend": "-3%"
  },
  {
    "id": "ERP-1003",
    "name": "Approvals",
    "owner": "Supply Chain",
    "status": "Delayed",
    "value": "21",
    "trend": "5 risks"
  },
  {
    "id": "ERP-1004",
    "name": "Savings tracker",
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
    "value": "$216k",
    "detail": "Mock operational value"
  },
  {
    "label": "Automation rate",
    "value": "64%",
    "detail": "Template readiness score"
  }
] as const;

export const navItems = ['Overview', 'Modules', 'Records', 'Approvals', 'Reports', 'Settings'] as const;
