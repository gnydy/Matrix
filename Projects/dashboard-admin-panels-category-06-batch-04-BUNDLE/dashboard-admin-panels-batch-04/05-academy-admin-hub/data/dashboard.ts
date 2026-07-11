export const dashboard = {
  name: "Academy Admin Hub",
  slug: "academy-admin-hub",
  desc: "An academy administration console for managing learners, classes, attendance, course progress, and education operations.",
  client: "Schools, academies and LMS operators",
  use: "Track students, teachers, courses, attendance, payments and progress",
  industry: "Education",
  layout: "topnav",
  metrics: [
  {
    "label": "Students",
    "value": "8,420",
    "change": "+310"
  },
  {
    "label": "Completion",
    "value": "76%",
    "change": "+7%"
  },
  {
    "label": "Late Payments",
    "value": "93",
    "change": "-12"
  },
  {
    "label": "Live Classes",
    "value": "58",
    "change": "+11"
  }
],
  modules: [
  "Student Registry",
  "Course Control",
  "Teacher Schedule",
  "Attendance Board",
  "Payment Follow-up",
  "Progress Reports"
],
  records: [
  "AI Fundamentals",
  "Grade 10 Math",
  "Mobile Bootcamp",
  "Business English",
  "Cyber Lab"
],
  roles: [
  "Academy Admin",
  "Teacher",
  "Student Support",
  "Finance Officer"
],
  states: [
  "Active",
  "Needs follow-up",
  "Payment pending",
  "Completed"
],
  chart: [165, 188, 91, 114, 137, 160, 183, 86],
} as const;
