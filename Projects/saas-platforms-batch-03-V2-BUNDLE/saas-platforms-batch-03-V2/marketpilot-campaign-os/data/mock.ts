export const template = {"slug": "marketpilot-campaign-os", "name": "MarketPilot Campaign OS", "port": 3047, "archetype": "Marketing campaign planning board", "client": "Marketing agencies, growth teams, and brand managers", "use": "Plan campaigns, assign channels, track creative assets and ROI", "hero": "A campaign operating system for teams that ship marketing with discipline.", "layout": "calendar", "nav": "campaign calendar", "accent": "fuchsia", "cta": "Plan a campaign", "highlights": ["Campaign calendar", "Asset approvals", "Channel budget", "ROI snapshots"]};

export const metrics = [{"value": "64", "label": "campaigns planned"}, {"value": "3.9x", "label": "average ROAS"}, {"value": "124", "label": "assets in review"}];

export const highlights = ["Campaign calendar", "Asset approvals", "Channel budget", "ROI snapshots"];

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
