export const template = {"slug": "invoiceflow-billing-saas", "name": "InvoiceFlow Billing Suite", "port": 3042, "archetype": "Billing and subscription ledger", "client": "Subscription startups, agencies, and finance departments", "use": "Manage invoices, subscriptions, taxes, and collection reminders", "hero": "Subscription billing that feels like a disciplined finance desk, not a spreadsheet.", "layout": "ledger", "nav": "finance tabs", "accent": "emerald", "cta": "Create billing workspace", "highlights": ["Invoice timeline", "Tax-ready summaries", "Dunning automations", "Plan analytics"]};

export const metrics = [{"value": "6.1k", "label": "invoices processed"}, {"value": "3.2%", "label": "failed payment rate"}, {"value": "14d", "label": "DSO improvement"}];

export const highlights = ["Invoice timeline", "Tax-ready summaries", "Dunning automations", "Plan analytics"];

export const plans = [
  { name: "Starter", price: "$29", detail: "For small teams validating the workflow.", features: ["Core workspace", "3 seats", "Basic reporting", "Email support"] },
  { name: "Growth", price: "$79", detail: "For teams running daily operations.", features: ["Advanced dashboard", "Unlimited projects", "Automation rules", "Priority support"] },
  { name: "Enterprise", price: "Custom", detail: "For organizations needing governance and custom setup.", features: ["SSO-ready concept", "Role-based UI", "Audit trail", "Dedicated success plan"] }
];

export const activity = [
  { title: "New workspace configured", status: "Ready", time: "08:30" },
  { title: "Automation rule reviewed", status: "Pending", time: "10:45" },
  { title: "Report exported for leadership", status: "Done", time: "12:20" },
  { title: "Client request moved to escalation", status: "Watch", time: "14:05" }
];

export const rows = [
  { name: "North Team", owner: "Maya Chen", state: "Active", score: "94%" },
  { name: "Enterprise Pilot", owner: "Omar Lane", state: "Review", score: "81%" },
  { name: "Internal Ops", owner: "Lina Hart", state: "Paused", score: "67%" },
  { name: "Client Rollout", owner: "Noah Reid", state: "Active", score: "88%" }
];
