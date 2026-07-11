export const site = {
  "name": "Restaurant Ops ERP",
  "slug": "restaurant-ops-erp",
  "industry": "Restaurant groups",
  "concept": "Kitchen orders, ingredients, purchases, table revenue and delivery operations",
  "layout": "Kitchen and supply desk",
  "port": 3073,
  "accent": "#ef4444"
} as const;

export const modules = [
  "Kitchen tickets",
  "Ingredients",
  "Delivery",
  "Purchases"
] as const;
export const records = [
  {
    "id": "ERP-1001",
    "name": "Kitchen tickets",
    "owner": "Operations Lead",
    "status": "Healthy",
    "value": "98%",
    "trend": "+12%"
  },
  {
    "id": "ERP-1002",
    "name": "Ingredients",
    "owner": "Finance Manager",
    "status": "Review",
    "value": "74%",
    "trend": "-3%"
  },
  {
    "id": "ERP-1003",
    "name": "Delivery",
    "owner": "Supply Chain",
    "status": "Delayed",
    "value": "21",
    "trend": "5 risks"
  },
  {
    "id": "ERP-1004",
    "name": "Purchases",
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
    "value": "12",
    "detail": "Needs manager review"
  },
  {
    "label": "Monthly volume",
    "value": "$228k",
    "detail": "Mock operational value"
  },
  {
    "label": "Automation rate",
    "value": "74%",
    "detail": "Template readiness score"
  }
] as const;

export const navItems = ['Overview', 'Modules', 'Records', 'Approvals', 'Reports', 'Settings'] as const;
