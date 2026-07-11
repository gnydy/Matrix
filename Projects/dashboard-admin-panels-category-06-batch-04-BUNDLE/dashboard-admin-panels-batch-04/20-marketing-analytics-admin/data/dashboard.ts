export const dashboard = {
  name: "Marketing Analytics Admin",
  slug: "marketing-analytics-admin",
  desc: "A campaign performance admin panel for agencies tracking ads, funnels, leads, conversion, budgets, channels and ROI.",
  client: "Marketing agencies and growth teams",
  use: "Monitor campaigns, channels, leads, conversion, spend and ROI",
  industry: "Marketing",
  layout: "topnav",
  metrics: [
  {
    "label": "Ad Spend",
    "value": "EGP 380K",
    "change": "+12%"
  },
  {
    "label": "Leads",
    "value": "4,892",
    "change": "+31%"
  },
  {
    "label": "ROAS",
    "value": "4.7x",
    "change": "+0.8x"
  },
  {
    "label": "CPA",
    "value": "EGP 78",
    "change": "-13%"
  }
],
  modules: [
  "Campaign Board",
  "Channel Breakdown",
  "Lead Funnel",
  "Budget Control",
  "Creative Testing",
  "ROI Reports"
],
  records: [
  "Facebook Campaign",
  "Google Search",
  "Landing A/B",
  "Email Sequence",
  "Client Report"
],
  roles: [
  "Marketing Admin",
  "Media Buyer",
  "Growth Lead",
  "Client Success"
],
  states: [
  "Active",
  "Paused",
  "Testing",
  "Scaled"
],
  chart: [180, 83, 106, 129, 152, 175, 198, 101],
} as const;
