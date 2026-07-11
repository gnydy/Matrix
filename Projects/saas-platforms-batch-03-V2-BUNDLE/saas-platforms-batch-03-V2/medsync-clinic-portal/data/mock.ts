export const template = {"slug": "medsync-clinic-portal", "name": "MedSync Clinic Portal", "port": 3053, "archetype": "Clinic operations SaaS", "client": "Clinics, medical centers, appointment networks, and healthcare operators", "use": "Manage patients, appointments, queues, visits, and clinic metrics", "hero": "A clinic portal that connects appointments, queues, patients, and operational insight.", "layout": "clinic", "nav": "clinic triage nav", "accent": "teal", "cta": "Open clinic portal", "highlights": ["Patient queue", "Appointment board", "Visit notes mock", "Doctor workload"]};

export const metrics = [{"value": "186", "label": "patients/day"}, {"value": "24m", "label": "avg wait time"}, {"value": "14", "label": "active doctors"}];

export const highlights = ["Patient queue", "Appointment board", "Visit notes mock", "Doctor workload"];

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
