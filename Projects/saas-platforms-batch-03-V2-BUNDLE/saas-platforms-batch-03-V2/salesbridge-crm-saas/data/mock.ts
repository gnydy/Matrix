export const template = {"slug": "salesbridge-crm-saas", "name": "SalesBridge CRM SaaS", "port": 3050, "archetype": "CRM and revenue pipeline workspace", "client": "Sales teams, agencies, B2B companies, and consultants", "use": "Manage leads, deals, activities, clients, and sales forecasts", "hero": "A sales command room that makes every deal, note, and next step visible.", "layout": "crm", "nav": "deal pipeline nav", "accent": "orange", "cta": "Open CRM workspace", "highlights": ["Deal board", "Lead scoring", "Follow-up tasks", "Forecast view"]};

export const metrics = [{"value": "$840k", "label": "pipeline value"}, {"value": "37%", "label": "win rate"}, {"value": "112", "label": "follow-ups queued"}];

export const highlights = ["Deal board", "Lead scoring", "Follow-up tasks", "Forecast view"];

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
