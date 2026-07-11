export const dashboard = {
  name: "Cloud Hosting Panel",
  slug: "cloud-hosting-panel",
  desc: "A cloud services admin console for resource control, server health, billing status, uptime overview, and customer support.",
  client: "Hosting providers and cloud startups",
  use: "Control servers, plans, resource usage, billing, uptime and support tickets",
  industry: "Hosting / Cloud",
  layout: "topnav",
  metrics: [
  {
    "label": "Servers",
    "value": "1,284",
    "change": "+92"
  },
  {
    "label": "Uptime",
    "value": "99.98%",
    "change": "+0.02%"
  },
  {
    "label": "Bandwidth",
    "value": "84 TB",
    "change": "+12%"
  },
  {
    "label": "Support SLA",
    "value": "97%",
    "change": "+3%"
  }
],
  modules: [
  "Server Fleet",
  "Resource Usage",
  "Billing Plans",
  "Uptime Center",
  "Ticket Queue",
  "Security Rules"
],
  records: [
  "VPS Cairo 12",
  "Backup Job",
  "SSL Renewal",
  "Bandwidth Alert",
  "Enterprise Node"
],
  roles: [
  "Cloud Admin",
  "Infrastructure Lead",
  "Support Engineer",
  "Billing Admin"
],
  states: [
  "Online",
  "Scaling",
  "Warning",
  "Maintenance"
],
  chart: [164, 187, 90, 113, 136, 159, 182, 85],
} as const;
