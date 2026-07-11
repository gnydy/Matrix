export const site = {
  "title": "PeopleCore HR Command",
  "slug": "01-peoplecore-hr-command",
  "category": "HR Systems",
  "description": "Enterprise HR dashboard for medium companies. Includes frontend screens and backend mock API routes.",
  "layout": "desktop",
  "layoutDescription": "Desktop shell with window chrome and module launcher.",
  "dark": "#0f172a",
  "accent": "#38bdf8",
  "soft": "#e0f2fe",
  "modules": [
    {
      "slug": "employees",
      "title": "Employees",
      "description": "Employees module designed for PeopleCore HR Command."
    },
    {
      "slug": "attendance",
      "title": "Attendance",
      "description": "Attendance module designed for PeopleCore HR Command."
    },
    {
      "slug": "payroll",
      "title": "Payroll",
      "description": "Payroll module designed for PeopleCore HR Command."
    },
    {
      "slug": "recruitment",
      "title": "Recruitment",
      "description": "Recruitment module designed for PeopleCore HR Command."
    },
    {
      "slug": "performance",
      "title": "Performance",
      "description": "Performance module designed for PeopleCore HR Command."
    },
    {
      "slug": "leave",
      "title": "Leave",
      "description": "Leave module designed for PeopleCore HR Command."
    },
    {
      "slug": "documents",
      "title": "Documents",
      "description": "Documents module designed for PeopleCore HR Command."
    },
    {
      "slug": "settings",
      "title": "Settings",
      "description": "Settings module designed for PeopleCore HR Command."
    },
    {
      "slug": "peoplecore",
      "title": "Peoplecore",
      "description": "Peoplecore module designed for PeopleCore HR Command."
    },
    {
      "slug": "hr",
      "title": "Hr",
      "description": "Hr module designed for PeopleCore HR Command."
    }
  ],
  "stats": [
    {
      "label": "Headcount",
      "value": "21",
      "trend": "+2% this week"
    },
    {
      "label": "Attendance",
      "value": "82%",
      "trend": "+3% this week"
    },
    {
      "label": "Open roles",
      "value": "35",
      "trend": "+4% this week"
    },
    {
      "label": "Payroll",
      "value": "42",
      "trend": "+5% this week"
    }
  ],
  "records": [
    {
      "id": "HR-01-001",
      "title": "Attendance record 1",
      "meta": "HR Systems workflow \u00b7 owner A",
      "status": "Pending",
      "amount": "125"
    },
    {
      "id": "HR-01-002",
      "title": "Payroll record 2",
      "meta": "HR Systems workflow \u00b7 owner B",
      "status": "Review",
      "amount": "250"
    },
    {
      "id": "HR-01-003",
      "title": "Recruitment record 3",
      "meta": "HR Systems workflow \u00b7 owner C",
      "status": "Approved",
      "amount": "375"
    },
    {
      "id": "HR-01-004",
      "title": "Performance record 4",
      "meta": "HR Systems workflow \u00b7 owner D",
      "status": "Blocked",
      "amount": "500"
    },
    {
      "id": "HR-01-005",
      "title": "Leave record 5",
      "meta": "HR Systems workflow \u00b7 owner E",
      "status": "Synced",
      "amount": "625"
    },
    {
      "id": "HR-01-006",
      "title": "Documents record 6",
      "meta": "HR Systems workflow \u00b7 owner F",
      "status": "Active",
      "amount": "750"
    },
    {
      "id": "HR-01-007",
      "title": "Settings record 7",
      "meta": "HR Systems workflow \u00b7 owner G",
      "status": "Pending",
      "amount": "875"
    },
    {
      "id": "HR-01-008",
      "title": "Peoplecore record 8",
      "meta": "HR Systems workflow \u00b7 owner H",
      "status": "Review",
      "amount": "1,000"
    }
  ]
} as const;
