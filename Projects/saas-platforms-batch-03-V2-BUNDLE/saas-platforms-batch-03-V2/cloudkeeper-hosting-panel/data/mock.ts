export const template = {"slug": "cloudkeeper-hosting-panel", "name": "CloudKeeper Hosting Panel", "port": 3057, "archetype": "Cloud hosting and infrastructure control panel", "client": "Hosting providers, SaaS teams, IT companies, and cloud resellers", "use": "Manage servers, deployments, uptime, usage, and billing", "hero": "A hosting panel that makes infrastructure feel visible, sellable, and controlled.", "layout": "cloud", "nav": "server rack nav", "accent": "blue", "cta": "Deploy cloud service", "highlights": ["Server clusters", "Deployment logs", "Uptime monitor", "Resource billing"]};

export const metrics = [{"value": "99.98%", "label": "uptime"}, {"value": "214", "label": "active instances"}, {"value": "38TB", "label": "monthly bandwidth"}];

export const highlights = ["Server clusters", "Deployment logs", "Uptime monitor", "Resource billing"];

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
