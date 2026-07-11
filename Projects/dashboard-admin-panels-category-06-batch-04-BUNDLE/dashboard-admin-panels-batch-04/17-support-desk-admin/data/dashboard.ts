export const dashboard = {
  name: "Support Desk Admin",
  slug: "support-desk-admin",
  desc: "A support desk administration panel that handles tickets, priorities, agent workload, SLA warnings, and customer response operations.",
  client: "Support centers and SaaS customer success teams",
  use: "Manage tickets, agents, priorities, SLA, replies and escalations",
  industry: "Support / Ticketing",
  layout: "split",
  metrics: [
  {
    "label": "Open Tickets",
    "value": "389",
    "change": "-31"
  },
  {
    "label": "SLA Compliance",
    "value": "92%",
    "change": "+5%"
  },
  {
    "label": "Avg Reply",
    "value": "7 min",
    "change": "-2 min"
  },
  {
    "label": "Escalations",
    "value": "16",
    "change": "-4"
  }
],
  modules: [
  "Ticket Inbox",
  "Agent Workload",
  "SLA Monitor",
  "Knowledge Suggestions",
  "Escalation Board",
  "Customer History"
],
  records: [
  "Login Issue",
  "Billing Question",
  "API Error",
  "Feature Request",
  "Refund Case"
],
  roles: [
  "Support Admin",
  "Agent",
  "Success Manager",
  "Technical Lead"
],
  states: [
  "Open",
  "Pending customer",
  "Escalated",
  "Resolved"
],
  chart: [129, 152, 175, 198, 101, 124, 147, 170],
} as const;
