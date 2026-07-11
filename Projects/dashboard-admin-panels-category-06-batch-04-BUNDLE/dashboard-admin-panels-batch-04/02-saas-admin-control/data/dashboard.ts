export const dashboard = {
  name: "SaaS Admin Control",
  slug: "saas-admin-control",
  desc: "A modern SaaS back-office panel for subscription products with tenant control, billing indicators, onboarding metrics, and admin operations.",
  client: "SaaS founders and product teams",
  use: "Manage tenants, subscriptions, plans, usage, billing and product health",
  industry: "SaaS",
  layout: "classic",
  metrics: [
  {
    "label": "MRR",
    "value": "$82.7K",
    "change": "+18%"
  },
  {
    "label": "Active Tenants",
    "value": "426",
    "change": "+39"
  },
  {
    "label": "Churn Risk",
    "value": "3.2%",
    "change": "-0.6%"
  },
  {
    "label": "API Usage",
    "value": "8.9M",
    "change": "+22%"
  }
],
  modules: [
  "Tenant Directory",
  "Subscription Plans",
  "Billing Health",
  "Feature Flags",
  "Usage Analytics",
  "Admin Tickets"
],
  records: [
  "Acme Workspace",
  "Nova Teams",
  "Studio One",
  "ClinicCloud",
  "MarketIQ"
],
  roles: [
  "Super Admin",
  "Billing Manager",
  "Product Ops",
  "Support Admin"
],
  states: [
  "Trial",
  "Paid",
  "Overdue",
  "Enterprise"
],
  chart: [114, 137, 160, 183, 86, 109, 132, 155],
} as const;
