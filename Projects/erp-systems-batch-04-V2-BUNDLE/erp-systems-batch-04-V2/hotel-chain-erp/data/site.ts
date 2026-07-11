export const site = {
  "name": "Hotel Chain ERP",
  "slug": "hotel-chain-erp",
  "industry": "Hotels and hospitality groups",
  "concept": "Rooms, bookings, housekeeping, guest accounts and revenue operations",
  "layout": "Guest journey dashboard",
  "port": 3071,
  "accent": "#f43f5e"
} as const;

export const modules = [
  "Bookings",
  "Housekeeping",
  "Rooms",
  "Revenue"
] as const;
export const records = [
  {
    "id": "ERP-1001",
    "name": "Bookings",
    "owner": "Operations Lead",
    "status": "Healthy",
    "value": "98%",
    "trend": "+12%"
  },
  {
    "id": "ERP-1002",
    "name": "Housekeeping",
    "owner": "Finance Manager",
    "status": "Review",
    "value": "74%",
    "trend": "-3%"
  },
  {
    "id": "ERP-1003",
    "name": "Rooms",
    "owner": "Supply Chain",
    "status": "Delayed",
    "value": "21",
    "trend": "5 risks"
  },
  {
    "id": "ERP-1004",
    "name": "Revenue",
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
    "value": "$204k",
    "detail": "Mock operational value"
  },
  {
    "label": "Automation rate",
    "value": "72%",
    "detail": "Template readiness score"
  }
] as const;

export const navItems = ['Overview', 'Modules', 'Records', 'Approvals', 'Reports', 'Settings'] as const;
