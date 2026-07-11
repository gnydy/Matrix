export const site = {
  "title": "MedicalStaff HR Board",
  "slug": "16-medicalstaff-hr-board",
  "category": "HR Systems",
  "description": "Hospital staff scheduling and credential UI. Includes frontend screens and backend mock API routes.",
  "layout": "kanban",
  "layoutDescription": "Board-style operational cards with stages and queues.",
  "dark": "#1c1917",
  "accent": "#fbbf24",
  "soft": "#fef9c3",
  "modules": [
    {
      "slug": "employees",
      "title": "Employees",
      "description": "Employees module designed for MedicalStaff HR Board."
    },
    {
      "slug": "attendance",
      "title": "Attendance",
      "description": "Attendance module designed for MedicalStaff HR Board."
    },
    {
      "slug": "payroll",
      "title": "Payroll",
      "description": "Payroll module designed for MedicalStaff HR Board."
    },
    {
      "slug": "recruitment",
      "title": "Recruitment",
      "description": "Recruitment module designed for MedicalStaff HR Board."
    },
    {
      "slug": "performance",
      "title": "Performance",
      "description": "Performance module designed for MedicalStaff HR Board."
    },
    {
      "slug": "leave",
      "title": "Leave",
      "description": "Leave module designed for MedicalStaff HR Board."
    },
    {
      "slug": "documents",
      "title": "Documents",
      "description": "Documents module designed for MedicalStaff HR Board."
    },
    {
      "slug": "settings",
      "title": "Settings",
      "description": "Settings module designed for MedicalStaff HR Board."
    },
    {
      "slug": "medicalstaff",
      "title": "Medicalstaff",
      "description": "Medicalstaff module designed for MedicalStaff HR Board."
    },
    {
      "slug": "hr",
      "title": "Hr",
      "description": "Hr module designed for MedicalStaff HR Board."
    }
  ],
  "stats": [
    {
      "label": "Headcount",
      "value": "336",
      "trend": "+8% this week"
    },
    {
      "label": "Attendance",
      "value": "82%",
      "trend": "+9% this week"
    },
    {
      "label": "Open roles",
      "value": "560",
      "trend": "+10% this week"
    },
    {
      "label": "Payroll",
      "value": "672",
      "trend": "+2% this week"
    }
  ],
  "records": [
    {
      "id": "HR-16-001",
      "title": "Documents record 1",
      "meta": "HR Systems workflow \u00b7 owner A",
      "status": "Blocked",
      "amount": "2,000"
    },
    {
      "id": "HR-16-002",
      "title": "Settings record 2",
      "meta": "HR Systems workflow \u00b7 owner B",
      "status": "Synced",
      "amount": "4,000"
    },
    {
      "id": "HR-16-003",
      "title": "Medicalstaff record 3",
      "meta": "HR Systems workflow \u00b7 owner C",
      "status": "Active",
      "amount": "6,000"
    },
    {
      "id": "HR-16-004",
      "title": "Hr record 4",
      "meta": "HR Systems workflow \u00b7 owner D",
      "status": "Pending",
      "amount": "8,000"
    },
    {
      "id": "HR-16-005",
      "title": "Employees record 5",
      "meta": "HR Systems workflow \u00b7 owner E",
      "status": "Review",
      "amount": "10,000"
    },
    {
      "id": "HR-16-006",
      "title": "Attendance record 6",
      "meta": "HR Systems workflow \u00b7 owner F",
      "status": "Approved",
      "amount": "12,000"
    },
    {
      "id": "HR-16-007",
      "title": "Payroll record 7",
      "meta": "HR Systems workflow \u00b7 owner G",
      "status": "Blocked",
      "amount": "14,000"
    },
    {
      "id": "HR-16-008",
      "title": "Recruitment record 8",
      "meta": "HR Systems workflow \u00b7 owner H",
      "status": "Synced",
      "amount": "16,000"
    }
  ]
} as const;
