export const dashboard = {
  name: "Project Admin Kanban",
  slug: "project-admin-kanban",
  desc: "A project operations dashboard combining Kanban, milestones, task health, team load, delivery risks, and client reporting.",
  client: "Agencies, software teams and PM offices",
  use: "Manage tasks, projects, timelines, teams, milestones, risks and client reports",
  industry: "Project Management",
  layout: "cards",
  metrics: [
  {
    "label": "Active Projects",
    "value": "32",
    "change": "+6"
  },
  {
    "label": "Tasks Done",
    "value": "684",
    "change": "+102"
  },
  {
    "label": "At Risk",
    "value": "5",
    "change": "-2"
  },
  {
    "label": "Team Load",
    "value": "81%",
    "change": "+4%"
  }
],
  modules: [
  "Project Board",
  "Team Load",
  "Milestones",
  "Client Reports",
  "Risk Log",
  "Delivery Timeline"
],
  records: [
  "ERP Phase 1",
  "Website Sprint",
  "Mobile UI Kit",
  "Client Review",
  "QA Release"
],
  roles: [
  "Project Admin",
  "PM",
  "Designer",
  "Developer Lead"
],
  states: [
  "Backlog",
  "In progress",
  "Review",
  "Done"
],
  chart: [163, 186, 89, 112, 135, 158, 181, 84],
} as const;
