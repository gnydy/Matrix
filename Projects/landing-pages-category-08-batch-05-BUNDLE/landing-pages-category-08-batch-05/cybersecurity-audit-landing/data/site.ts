export const site = {
  slug: "cybersecurity-audit-landing",
  name: "ThreatShield Security Landing",
  client: "Cybersecurity services company",
  use: "Sell security audits, assessments, and SOC services.",
  audience: "Cybersecurity firms, MSPs, compliance consultants",
  position: "Security landing page with risk score UI, audit packages, trust badges, and incident readiness.",
  industry: "Cybersecurity",
  accent: "from-fuchsia-400 via-red-500 to-orange-400",
  bg: "from-slate-950 via-fuchsia-950 to-slate-950",
  nav: ["Risk", "Audit", "SOC", "Contact"],
  hero: "A security landing page that makes risk visible and action urgent.",
  sub: "Built for cybersecurity audits, SOC services, penetration testing packages, and compliance-focused lead generation.",
  cta: "Request Security Audit",
  secondary: "View Risk Score",
  metrics: [
    { value: "12", label: "threat checks" },
    { value: "48h", label: "audit response mock" },
    { value: "5", label: "risk levels" }
  ],
  features: ["Risk score interface", "Audit package cards", "Incident response flow", "Security proof section"],
  steps: ["Assess exposure", "Prioritize risks", "Choose audit scope", "Book consultation"],
  proof: ["Serious enterprise tone", "Risk-first conversion UX", "Built for security companies"],
  price: "From $449",
  form: "Risk score estimator",
  faqs: ["Does it scan real systems?", "No. It is a frontend landing template with mock risk UI.", "Can it connect to a scanner?", "Yes. It can be integrated later."],
  layout: "command"
} as const;
