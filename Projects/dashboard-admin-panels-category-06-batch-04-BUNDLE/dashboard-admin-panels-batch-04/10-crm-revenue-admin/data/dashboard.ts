export const dashboard = {
  name: "CRM Revenue Admin",
  slug: "crm-revenue-admin",
  desc: "A CRM-centered admin panel that turns pipeline, lead activity, follow-ups and deal intelligence into a clean operational interface.",
  client: "Sales teams and B2B agencies",
  use: "Manage leads, deals, pipeline, follow-ups, client notes and sales reports",
  industry: "CRM / Sales",
  layout: "cards",
  metrics: [
  {
    "label": "Pipeline Value",
    "value": "$1.42M",
    "change": "+25%"
  },
  {
    "label": "Qualified Leads",
    "value": "238",
    "change": "+51"
  },
  {
    "label": "Win Rate",
    "value": "28%",
    "change": "+4%"
  },
  {
    "label": "Follow-ups Due",
    "value": "73",
    "change": "+19"
  }
],
  modules: [
  "Lead Board",
  "Deal Pipeline",
  "Account Profiles",
  "Follow-up Queue",
  "Revenue Forecast",
  "Sales Notes"
],
  records: [
  "ERP Deal",
  "Agency Retainer",
  "Clinic Website",
  "SaaS Upgrade",
  "Odoo Migration"
],
  roles: [
  "Sales Admin",
  "Account Manager",
  "Sales Director",
  "BDR"
],
  states: [
  "Qualified",
  "Proposal",
  "Negotiation",
  "Won"
],
  chart: [130, 153, 176, 199, 102, 125, 148, 171],
} as const;
