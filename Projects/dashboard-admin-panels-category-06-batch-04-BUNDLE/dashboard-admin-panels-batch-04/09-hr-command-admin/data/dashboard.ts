export const dashboard = {
  name: "HR Command Admin",
  slug: "hr-command-admin",
  desc: "A complete HR administration panel for employee operations, attendance status, recruitment pipeline, leave requests and performance reviews.",
  client: "HR teams and recruitment departments",
  use: "Manage employees, attendance, payroll mock, leave, hiring pipeline and performance",
  industry: "Human Resources",
  layout: "classic",
  metrics: [
  {
    "label": "Employees",
    "value": "642",
    "change": "+28"
  },
  {
    "label": "Attendance",
    "value": "96%",
    "change": "+2%"
  },
  {
    "label": "Open Roles",
    "value": "18",
    "change": "+4"
  },
  {
    "label": "Leave Requests",
    "value": "34",
    "change": "-6"
  }
],
  modules: [
  "Employee Directory",
  "Attendance Control",
  "Leave Desk",
  "Payroll Mock",
  "Recruitment Pipeline",
  "Performance Board"
],
  records: [
  "Frontend Hiring",
  "Annual Leave",
  "Payroll Batch",
  "Performance Review",
  "Onboarding Pack"
],
  roles: [
  "HR Admin",
  "Recruiter",
  "Payroll Officer",
  "Team Lead"
],
  states: [
  "Accepted",
  "Pending",
  "Interview",
  "Needs approval"
],
  chart: [113, 136, 159, 182, 85, 108, 131, 154],
} as const;
