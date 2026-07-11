export const dashboard = {
  name: "Manufacturing Floor Admin",
  slug: "manufacturing-floor-admin",
  desc: "A production-grade admin interface for factories that need a digital view of machines, work orders, quality, and materials.",
  client: "Factories and production managers",
  use: "Manage work orders, machines, material usage, quality checks and downtime",
  industry: "Manufacturing",
  layout: "split",
  metrics: [
  {
    "label": "Work Orders",
    "value": "86",
    "change": "+11"
  },
  {
    "label": "Machine Uptime",
    "value": "91.8%",
    "change": "+1.5%"
  },
  {
    "label": "Defect Rate",
    "value": "1.7%",
    "change": "-0.4%"
  },
  {
    "label": "Material Alerts",
    "value": "23",
    "change": "+5"
  }
],
  modules: [
  "Production Board",
  "Machine Health",
  "Material Planning",
  "Quality Control",
  "Maintenance Queue",
  "Shift Reports"
],
  records: [
  "Line 3 Batch",
  "CNC Maintenance",
  "QC Inspection",
  "Steel Stock",
  "Packaging Run"
],
  roles: [
  "Plant Manager",
  "Production Lead",
  "Quality Officer",
  "Maintenance Admin"
],
  states: [
  "Running",
  "Paused",
  "QC hold",
  "Maintenance"
],
  chart: [96, 119, 142, 165, 188, 91, 114, 137],
} as const;
