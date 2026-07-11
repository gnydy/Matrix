export const site = {
  "title": "BlueCollar Workforce OS",
  "slug": "14-bluecollar-workforce-os",
  "category": "HR Systems",
  "description": "Field staff, uniforms, tools, and attendance. Includes frontend screens and backend mock API routes.",
  "layout": "command",
  "layoutDescription": "Left command sidebar, KPI rail, dense admin workspace.",
  "dark": "#064e3b",
  "accent": "#2dd4bf",
  "soft": "#ccfbf1",
  "modules": [
    {
      "slug": "employees",
      "title": "Employees",
      "description": "Employees module designed for BlueCollar Workforce OS."
    },
    {
      "slug": "attendance",
      "title": "Attendance",
      "description": "Attendance module designed for BlueCollar Workforce OS."
    },
    {
      "slug": "payroll",
      "title": "Payroll",
      "description": "Payroll module designed for BlueCollar Workforce OS."
    },
    {
      "slug": "recruitment",
      "title": "Recruitment",
      "description": "Recruitment module designed for BlueCollar Workforce OS."
    },
    {
      "slug": "performance",
      "title": "Performance",
      "description": "Performance module designed for BlueCollar Workforce OS."
    },
    {
      "slug": "leave",
      "title": "Leave",
      "description": "Leave module designed for BlueCollar Workforce OS."
    },
    {
      "slug": "documents",
      "title": "Documents",
      "description": "Documents module designed for BlueCollar Workforce OS."
    },
    {
      "slug": "settings",
      "title": "Settings",
      "description": "Settings module designed for BlueCollar Workforce OS."
    },
    {
      "slug": "bluecollar",
      "title": "Bluecollar",
      "description": "Bluecollar module designed for BlueCollar Workforce OS."
    },
    {
      "slug": "workforce",
      "title": "Workforce",
      "description": "Workforce module designed for BlueCollar Workforce OS."
    }
  ],
  "stats": [
    {
      "label": "Headcount",
      "value": "294",
      "trend": "+6% this week"
    },
    {
      "label": "Attendance",
      "value": "95%",
      "trend": "+7% this week"
    },
    {
      "label": "Open roles",
      "value": "490",
      "trend": "+8% this week"
    },
    {
      "label": "Payroll",
      "value": "588",
      "trend": "+9% this week"
    }
  ],
  "records": [
    {
      "id": "HR-14-001",
      "title": "Performance record 1",
      "meta": "HR Systems workflow \u00b7 owner A",
      "status": "Review",
      "amount": "1,750"
    },
    {
      "id": "HR-14-002",
      "title": "Leave record 2",
      "meta": "HR Systems workflow \u00b7 owner B",
      "status": "Approved",
      "amount": "3,500"
    },
    {
      "id": "HR-14-003",
      "title": "Documents record 3",
      "meta": "HR Systems workflow \u00b7 owner C",
      "status": "Blocked",
      "amount": "5,250"
    },
    {
      "id": "HR-14-004",
      "title": "Settings record 4",
      "meta": "HR Systems workflow \u00b7 owner D",
      "status": "Synced",
      "amount": "7,000"
    },
    {
      "id": "HR-14-005",
      "title": "Bluecollar record 5",
      "meta": "HR Systems workflow \u00b7 owner E",
      "status": "Active",
      "amount": "8,750"
    },
    {
      "id": "HR-14-006",
      "title": "Workforce record 6",
      "meta": "HR Systems workflow \u00b7 owner F",
      "status": "Pending",
      "amount": "10,500"
    },
    {
      "id": "HR-14-007",
      "title": "Employees record 7",
      "meta": "HR Systems workflow \u00b7 owner G",
      "status": "Review",
      "amount": "12,250"
    },
    {
      "id": "HR-14-008",
      "title": "Attendance record 8",
      "meta": "HR Systems workflow \u00b7 owner H",
      "status": "Approved",
      "amount": "14,000"
    }
  ]
} as const;
