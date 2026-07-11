export const site = {
  "title": "TalentGate Recruitment OS",
  "slug": "04-talentgate-recruitment-os",
  "category": "HR Systems",
  "description": "Applicant tracking and hiring board. Includes frontend screens and backend mock API routes.",
  "layout": "command",
  "layoutDescription": "Left command sidebar, KPI rail, dense admin workspace.",
  "dark": "#18181b",
  "accent": "#f59e0b",
  "soft": "#fef3c7",
  "modules": [
    {
      "slug": "employees",
      "title": "Employees",
      "description": "Employees module designed for TalentGate Recruitment OS."
    },
    {
      "slug": "attendance",
      "title": "Attendance",
      "description": "Attendance module designed for TalentGate Recruitment OS."
    },
    {
      "slug": "payroll",
      "title": "Payroll",
      "description": "Payroll module designed for TalentGate Recruitment OS."
    },
    {
      "slug": "recruitment",
      "title": "Recruitment",
      "description": "Recruitment module designed for TalentGate Recruitment OS."
    },
    {
      "slug": "performance",
      "title": "Performance",
      "description": "Performance module designed for TalentGate Recruitment OS."
    },
    {
      "slug": "leave",
      "title": "Leave",
      "description": "Leave module designed for TalentGate Recruitment OS."
    },
    {
      "slug": "documents",
      "title": "Documents",
      "description": "Documents module designed for TalentGate Recruitment OS."
    },
    {
      "slug": "settings",
      "title": "Settings",
      "description": "Settings module designed for TalentGate Recruitment OS."
    },
    {
      "slug": "talentgate",
      "title": "Talentgate",
      "description": "Talentgate module designed for TalentGate Recruitment OS."
    }
  ],
  "stats": [
    {
      "label": "Headcount",
      "value": "84",
      "trend": "+5% this week"
    },
    {
      "label": "Attendance",
      "value": "85%",
      "trend": "+6% this week"
    },
    {
      "label": "Open roles",
      "value": "140",
      "trend": "+7% this week"
    },
    {
      "label": "Payroll",
      "value": "168",
      "trend": "+8% this week"
    }
  ],
  "records": [
    {
      "id": "HR-04-001",
      "title": "Performance record 1",
      "meta": "HR Systems workflow \u00b7 owner A",
      "status": "Blocked",
      "amount": "500"
    },
    {
      "id": "HR-04-002",
      "title": "Leave record 2",
      "meta": "HR Systems workflow \u00b7 owner B",
      "status": "Synced",
      "amount": "1,000"
    },
    {
      "id": "HR-04-003",
      "title": "Documents record 3",
      "meta": "HR Systems workflow \u00b7 owner C",
      "status": "Active",
      "amount": "1,500"
    },
    {
      "id": "HR-04-004",
      "title": "Settings record 4",
      "meta": "HR Systems workflow \u00b7 owner D",
      "status": "Pending",
      "amount": "2,000"
    },
    {
      "id": "HR-04-005",
      "title": "Talentgate record 5",
      "meta": "HR Systems workflow \u00b7 owner E",
      "status": "Review",
      "amount": "2,500"
    },
    {
      "id": "HR-04-006",
      "title": "Employees record 6",
      "meta": "HR Systems workflow \u00b7 owner F",
      "status": "Approved",
      "amount": "3,000"
    },
    {
      "id": "HR-04-007",
      "title": "Attendance record 7",
      "meta": "HR Systems workflow \u00b7 owner G",
      "status": "Blocked",
      "amount": "3,500"
    },
    {
      "id": "HR-04-008",
      "title": "Payroll record 8",
      "meta": "HR Systems workflow \u00b7 owner H",
      "status": "Synced",
      "amount": "4,000"
    }
  ]
} as const;
