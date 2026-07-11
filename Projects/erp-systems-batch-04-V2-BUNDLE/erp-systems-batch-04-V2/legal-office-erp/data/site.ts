export const site = {
  "name": "Legal Office ERP",
  "slug": "legal-office-erp",
  "industry": "Law firms and legal departments",
  "concept": "Matters, clients, billing, documents, hearings and compliance timeline",
  "layout": "Matter workflow desk",
  "port": 3077,
  "accent": "#c084fc"
} as const;

export const modules = [
  "Cases",
  "Hearings",
  "Billing",
  "Documents"
] as const;
export const records = [
  {
    "id": "ERP-1001",
    "name": "Cases",
    "owner": "Operations Lead",
    "status": "Healthy",
    "value": "98%",
    "trend": "+12%"
  },
  {
    "id": "ERP-1002",
    "name": "Hearings",
    "owner": "Finance Manager",
    "status": "Review",
    "value": "74%",
    "trend": "-3%"
  },
  {
    "id": "ERP-1003",
    "name": "Billing",
    "owner": "Supply Chain",
    "status": "Delayed",
    "value": "21",
    "trend": "5 risks"
  },
  {
    "id": "ERP-1004",
    "name": "Documents",
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
    "value": "$276k",
    "detail": "Mock operational value"
  },
  {
    "label": "Automation rate",
    "value": "78%",
    "detail": "Template readiness score"
  }
] as const;

export const navItems = ['Overview', 'Modules', 'Records', 'Approvals', 'Reports', 'Settings'] as const;
