export const dashboard = {
  name: "SOC Security Console",
  slug: "soc-security-console",
  desc: "A dark, high-alert security operations dashboard for incident response, threat visibility, asset risk, and analyst workflows.",
  client: "Cybersecurity companies and SOC teams",
  use: "Monitor threats, incidents, assets, alerts, severity and response status",
  industry: "Cybersecurity",
  layout: "dark",
  metrics: [
  {
    "label": "Critical Alerts",
    "value": "17",
    "change": "-4"
  },
  {
    "label": "Assets Monitored",
    "value": "12.8K",
    "change": "+880"
  },
  {
    "label": "MTTR",
    "value": "42 min",
    "change": "-9 min"
  },
  {
    "label": "Blocked Events",
    "value": "1.9M",
    "change": "+31%"
  }
],
  modules: [
  "Threat Feed",
  "Incident Queue",
  "Asset Risk",
  "Analyst Workbench",
  "Severity Matrix",
  "Response Timeline"
],
  records: [
  "Credential Leak",
  "Endpoint Alert",
  "Firewall Spike",
  "Cloud Policy Drift",
  "Phishing Campaign"
],
  roles: [
  "SOC Manager",
  "Security Analyst",
  "Incident Lead",
  "Compliance Admin"
],
  states: [
  "Critical",
  "High",
  "Contained",
  "Investigating"
],
  chart: [147, 170, 193, 96, 119, 142, 165, 188],
} as const;
