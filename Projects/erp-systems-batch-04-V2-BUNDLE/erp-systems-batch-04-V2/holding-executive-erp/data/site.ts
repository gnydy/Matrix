export const site = {
  "name": "Holding Executive ERP",
  "slug": "holding-executive-erp",
  "industry": "Holding companies",
  "concept": "Multi-company executive ERP with KPIs, subsidiaries, financials and risk signals",
  "layout": "Multi-company command",
  "port": 3079,
  "accent": "#38bdf8"
} as const;

export const modules = [
  "Subsidiaries",
  "Consolidated revenue",
  "Risk",
  "Board actions"
] as const;
export const records = [
  {
    "id": "ERP-1001",
    "name": "Subsidiaries",
    "owner": "Operations Lead",
    "status": "Healthy",
    "value": "98%",
    "trend": "+12%"
  },
  {
    "id": "ERP-1002",
    "name": "Consolidated revenue",
    "owner": "Finance Manager",
    "status": "Review",
    "value": "74%",
    "trend": "-3%"
  },
  {
    "id": "ERP-1003",
    "name": "Risk",
    "owner": "Supply Chain",
    "status": "Delayed",
    "value": "21",
    "trend": "5 risks"
  },
  {
    "id": "ERP-1004",
    "name": "Board actions",
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
    "value": "$192k",
    "detail": "Mock operational value"
  },
  {
    "label": "Automation rate",
    "value": "80%",
    "detail": "Template readiness score"
  }
] as const;

export const navItems = ['Overview', 'Modules', 'Records', 'Approvals', 'Reports', 'Settings'] as const;
