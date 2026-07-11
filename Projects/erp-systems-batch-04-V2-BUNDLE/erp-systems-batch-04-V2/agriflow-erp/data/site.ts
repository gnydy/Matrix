export const site = {
  "name": "AgriFlow ERP",
  "slug": "agriflow-erp",
  "industry": "Agriculture operations",
  "concept": "Crops, irrigation, harvest batches, sensors, equipment and farm inventory",
  "layout": "Farm sensor grid",
  "port": 3075,
  "accent": "#65a30d"
} as const;

export const modules = [
  "Crops",
  "Irrigation",
  "Harvests",
  "Equipment"
] as const;
export const records = [
  {
    "id": "ERP-1001",
    "name": "Crops",
    "owner": "Operations Lead",
    "status": "Healthy",
    "value": "98%",
    "trend": "+12%"
  },
  {
    "id": "ERP-1002",
    "name": "Irrigation",
    "owner": "Finance Manager",
    "status": "Review",
    "value": "74%",
    "trend": "-3%"
  },
  {
    "id": "ERP-1003",
    "name": "Harvests",
    "owner": "Supply Chain",
    "status": "Delayed",
    "value": "21",
    "trend": "5 risks"
  },
  {
    "id": "ERP-1004",
    "name": "Equipment",
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
    "value": "14",
    "detail": "Needs manager review"
  },
  {
    "label": "Monthly volume",
    "value": "$252k",
    "detail": "Mock operational value"
  },
  {
    "label": "Automation rate",
    "value": "76%",
    "detail": "Template readiness score"
  }
] as const;

export const navItems = ['Overview', 'Modules', 'Records', 'Approvals', 'Reports', 'Settings'] as const;
