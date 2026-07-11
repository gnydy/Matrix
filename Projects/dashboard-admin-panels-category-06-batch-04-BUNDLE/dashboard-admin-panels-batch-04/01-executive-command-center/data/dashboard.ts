export const dashboard = {
  name: "Executive Command Center",
  slug: "executive-command-center",
  desc: "A premium executive dashboard for CEOs and operating boards that need one screen for performance, risks, approvals, and business health.",
  client: "Enterprise leadership teams",
  use: "Board-level KPI monitoring, approvals, revenue health and risk overview",
  industry: "Corporate / Holding",
  layout: "command",
  metrics: [
  {
    "label": "Revenue",
    "value": "EGP 18.4M",
    "change": "+12.8%"
  },
  {
    "label": "Operating Margin",
    "value": "31.6%",
    "change": "+4.1%"
  },
  {
    "label": "Open Risks",
    "value": "14",
    "change": "-3"
  },
  {
    "label": "Board Tasks",
    "value": "27",
    "change": "+9"
  }
],
  modules: [
  "Executive KPI Wall",
  "Board Approvals",
  "Risk Register",
  "Department Scorecards",
  "Strategic Initiatives",
  "Investor Snapshot"
],
  records: [
  "North Expansion",
  "Pricing Review",
  "Operations Audit",
  "Q3 Hiring Plan",
  "Supplier Renegotiation"
],
  roles: [
  "CEO",
  "COO",
  "CFO",
  "Strategy Director"
],
  states: [
  "Pending approval",
  "At risk",
  "On track",
  "Needs documents"
],
  chart: [97, 120, 143, 166, 189, 92, 115, 138],
} as const;
