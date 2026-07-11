export const site = {
  slug: "crm-lead-capture-landing",
  name: "LeadVault CRM Landing",
  client: "CRM provider or sales automation startup",
  use: "Turn visitors into booked sales calls with lead qualification.",
  audience: "B2B sales teams, agencies, consultants",
  position: "Revenue-focused landing page with pipeline preview and lead scoring UI.",
  industry: "CRM / Sales",
  accent: "from-emerald-400 via-teal-400 to-sky-500",
  bg: "from-slate-950 via-emerald-950 to-slate-950",
  nav: ["Pipeline", "Lead Score", "Cases", "Book"],
  hero: "Capture qualified leads before your sales team wastes another hour.",
  sub: "A conversion landing page for CRM, sales dashboards, and lead management services with pipeline proof and qualification forms.",
  cta: "Book Sales Audit",
  secondary: "See Pipeline",
  metrics: [
    { value: "32%", label: "less manual follow-up" },
    { value: "18", label: "lead signals tracked" },
    { value: "24h", label: "response SLA mock" }
  ],
  features: ["Lead scoring preview", "Pipeline stages", "Sales audit form", "ROI and follow-up cards"],
  steps: ["Score inbound lead", "Route by urgency", "Trigger follow-up", "Review pipeline value"],
  proof: ["Built for B2B sales", "Clear conversion hierarchy", "CRM-ready component structure"],
  price: "From $349",
  form: "Lead quality calculator",
  faqs: ["Does it include a real CRM?", "No. It is a frontend template with mock data and clean integration points.", "Can we customize stages?", "Yes. Stages are stored in mock data."],
  layout: "dashboard"
} as const;
