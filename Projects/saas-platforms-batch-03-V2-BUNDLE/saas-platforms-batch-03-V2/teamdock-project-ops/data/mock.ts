export const template = {"slug": "teamdock-project-ops", "name": "TeamDock Project Ops", "port": 3055, "archetype": "Project execution and team delivery SaaS", "client": "Agencies, software teams, consulting firms, and operations teams", "use": "Plan sprints, manage tasks, track resources, and report delivery health", "hero": "Project delivery without scattered boards, lost files, or invisible blockers.", "layout": "project", "nav": "delivery timeline nav", "accent": "zinc", "cta": "Plan project sprint", "highlights": ["Timeline view", "Kanban lanes", "Resource load", "Delivery health"]};

export const metrics = [{"value": "73", "label": "active projects"}, {"value": "89%", "label": "on-track milestones"}, {"value": "38", "label": "blocked tasks"}];

export const highlights = ["Timeline view", "Kanban lanes", "Resource load", "Delivery health"];

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
