export const template = {"slug": "supportnest-helpdesk", "name": "SupportNest Helpdesk", "port": 3044, "archetype": "Ticket inbox and support center", "client": "SaaS companies, marketplaces, and service desks", "use": "Handle tickets, SLAs, knowledge base, and customer satisfaction", "hero": "A support desk built around speed, clarity, and escalation control.", "layout": "inbox", "nav": "support inbox nav", "accent": "amber", "cta": "Start support desk", "highlights": ["Shared inbox", "SLA clock", "Macro replies", "Knowledge suggestions"]};

export const metrics = [{"value": "1.8k", "label": "tickets this month"}, {"value": "94%", "label": "CSAT"}, {"value": "11m", "label": "first reply time"}];

export const highlights = ["Shared inbox", "SLA clock", "Macro replies", "Knowledge suggestions"];

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
