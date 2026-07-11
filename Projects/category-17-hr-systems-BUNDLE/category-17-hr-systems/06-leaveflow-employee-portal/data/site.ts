export const site = {
  "title": "LeaveFlow Employee Portal",
  "slug": "06-leaveflow-employee-portal",
  "category": "HR Systems",
  "description": "Leave requests, balances, and approval queue. Includes frontend screens and backend mock API routes.",
  "layout": "kanban",
  "layoutDescription": "Board-style operational cards with stages and queues.",
  "dark": "#052e16",
  "accent": "#22c55e",
  "soft": "#dcfce7",
  "modules": [
    {
      "slug": "employees",
      "title": "Employees",
      "description": "Employees module designed for LeaveFlow Employee Portal."
    },
    {
      "slug": "attendance",
      "title": "Attendance",
      "description": "Attendance module designed for LeaveFlow Employee Portal."
    },
    {
      "slug": "payroll",
      "title": "Payroll",
      "description": "Payroll module designed for LeaveFlow Employee Portal."
    },
    {
      "slug": "recruitment",
      "title": "Recruitment",
      "description": "Recruitment module designed for LeaveFlow Employee Portal."
    },
    {
      "slug": "performance",
      "title": "Performance",
      "description": "Performance module designed for LeaveFlow Employee Portal."
    },
    {
      "slug": "leave",
      "title": "Leave",
      "description": "Leave module designed for LeaveFlow Employee Portal."
    },
    {
      "slug": "documents",
      "title": "Documents",
      "description": "Documents module designed for LeaveFlow Employee Portal."
    },
    {
      "slug": "settings",
      "title": "Settings",
      "description": "Settings module designed for LeaveFlow Employee Portal."
    },
    {
      "slug": "leaveflow",
      "title": "Leaveflow",
      "description": "Leaveflow module designed for LeaveFlow Employee Portal."
    },
    {
      "slug": "employee",
      "title": "Employee",
      "description": "Employee module designed for LeaveFlow Employee Portal."
    }
  ],
  "stats": [
    {
      "label": "Headcount",
      "value": "126",
      "trend": "+7% this week"
    },
    {
      "label": "Attendance",
      "value": "87%",
      "trend": "+8% this week"
    },
    {
      "label": "Open roles",
      "value": "210",
      "trend": "+9% this week"
    },
    {
      "label": "Payroll",
      "value": "252",
      "trend": "+10% this week"
    }
  ],
  "records": [
    {
      "id": "HR-06-001",
      "title": "Documents record 1",
      "meta": "HR Systems workflow \u00b7 owner A",
      "status": "Active",
      "amount": "750"
    },
    {
      "id": "HR-06-002",
      "title": "Settings record 2",
      "meta": "HR Systems workflow \u00b7 owner B",
      "status": "Pending",
      "amount": "1,500"
    },
    {
      "id": "HR-06-003",
      "title": "Leaveflow record 3",
      "meta": "HR Systems workflow \u00b7 owner C",
      "status": "Review",
      "amount": "2,250"
    },
    {
      "id": "HR-06-004",
      "title": "Employee record 4",
      "meta": "HR Systems workflow \u00b7 owner D",
      "status": "Approved",
      "amount": "3,000"
    },
    {
      "id": "HR-06-005",
      "title": "Employees record 5",
      "meta": "HR Systems workflow \u00b7 owner E",
      "status": "Blocked",
      "amount": "3,750"
    },
    {
      "id": "HR-06-006",
      "title": "Attendance record 6",
      "meta": "HR Systems workflow \u00b7 owner F",
      "status": "Synced",
      "amount": "4,500"
    },
    {
      "id": "HR-06-007",
      "title": "Payroll record 7",
      "meta": "HR Systems workflow \u00b7 owner G",
      "status": "Active",
      "amount": "5,250"
    },
    {
      "id": "HR-06-008",
      "title": "Recruitment record 8",
      "meta": "HR Systems workflow \u00b7 owner H",
      "status": "Pending",
      "amount": "6,000"
    }
  ]
} as const;
