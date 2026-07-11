export const crm = {
  title: "Account 360 CRM",
  positioning: "Enterprise Account Intelligence",
  target: "Enterprise account managers and key-account teams",
  concept: "Customer 360 profile layout with relationship map, contracts, health score, and notes",
  variant: "account-360",
  port: 3081,
  modules: [
  {
    "name": "Leads",
    "metric": "127",
    "state": "Active"
  },
  {
    "name": "Deals",
    "metric": "$478k",
    "state": "Forecast"
  },
  {
    "name": "Accounts",
    "metric": "39",
    "state": "Managed"
  },
  {
    "name": "Follow-ups",
    "metric": "17",
    "state": "Today"
  }
],
  deals: [
  {
    "company": "Atlas Group",
    "owner": "Mariam",
    "stage": "New",
    "value": "$24k",
    "probability": "35%",
    "next": "Call"
  },
  {
    "company": "Nova Labs",
    "owner": "Omar",
    "stage": "Qualified",
    "value": "$36k",
    "probability": "42%",
    "next": "Demo"
  },
  {
    "company": "Prime Holdings",
    "owner": "Youssef",
    "stage": "Proposal",
    "value": "$48k",
    "probability": "49%",
    "next": "Quote"
  },
  {
    "company": "Delta Systems",
    "owner": "Nour",
    "stage": "Negotiation",
    "value": "$60k",
    "probability": "56%",
    "next": "Legal"
  },
  {
    "company": "Vertex Partners",
    "owner": "Salma",
    "stage": "Won",
    "value": "$72k",
    "probability": "63%",
    "next": "Site visit"
  },
  {
    "company": "Urban Network",
    "owner": "Kareem",
    "stage": "New",
    "value": "$84k",
    "probability": "70%",
    "next": "Renewal"
  },
  {
    "company": "Apex Office",
    "owner": "Mona",
    "stage": "Qualified",
    "value": "$96k",
    "probability": "77%",
    "next": "Workshop"
  },
  {
    "company": "Orion Works",
    "owner": "Hady",
    "stage": "Proposal",
    "value": "$108k",
    "probability": "84%",
    "next": "Board review"
  }
],
  activity: [
  "Enterprise Account Intelligence priority account moved to proposal",
  "AI next-action recommends executive follow-up for Nova Labs",
  "New note added to Prime Holdings with buying objections",
  "Forecast risk detected in Delta Systems due to stalled response"
],
  uiCards: [
  {
    "label": "Lead Quality",
    "value": "83%",
    "hint": "AI scoring"
  },
  {
    "label": "Forecast",
    "value": "$369k",
    "hint": "Weighted pipeline"
  },
  {
    "label": "Response SLA",
    "value": "8h",
    "hint": "Median reply"
  }
]
};
