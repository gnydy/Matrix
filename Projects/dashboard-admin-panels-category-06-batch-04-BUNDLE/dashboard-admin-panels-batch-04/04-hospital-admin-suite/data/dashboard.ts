export const dashboard = {
  name: "Hospital Admin Suite",
  slug: "hospital-admin-suite",
  desc: "A healthcare administration dashboard that presents clinic performance, appointments, departments, and operational pressure in a polished UI.",
  client: "Clinics, hospitals and medical networks",
  use: "Manage appointments, departments, patient flow, staff and service quality",
  industry: "Healthcare",
  layout: "cards",
  metrics: [
  {
    "label": "Appointments",
    "value": "318",
    "change": "+42"
  },
  {
    "label": "Waiting Avg",
    "value": "14 min",
    "change": "-3 min"
  },
  {
    "label": "Doctors Active",
    "value": "46",
    "change": "+4"
  },
  {
    "label": "Patient Satisfaction",
    "value": "94%",
    "change": "+2%"
  }
],
  modules: [
  "Appointment Board",
  "Department Load",
  "Doctor Schedule",
  "Patient Flow",
  "Billing Status",
  "Care Quality"
],
  records: [
  "Cardiology Queue",
  "Dental Visit",
  "Lab Result Desk",
  "Pediatrics Slot",
  "Insurance Review"
],
  roles: [
  "Clinic Admin",
  "Reception Lead",
  "Doctor Coordinator",
  "Billing Officer"
],
  states: [
  "Checked in",
  "In consultation",
  "Lab pending",
  "Completed"
],
  chart: [148, 171, 194, 97, 120, 143, 166, 189],
} as const;
