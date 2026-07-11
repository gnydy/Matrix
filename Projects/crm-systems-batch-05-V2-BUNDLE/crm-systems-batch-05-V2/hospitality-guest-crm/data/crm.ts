export const crm = {
  title: "Hospitality Guest CRM",
  positioning: "Guest Loyalty CRM",
  target: "Hotels and hospitality groups managing guest relationships",
  concept: "Guest CRM with loyalty tier, stay history, preferences, complaints, and upsell journeys",
  variant: "guest-loyalty",
  port: 3092,
  modules: [
  {
    "name": "Leads",
    "metric": "160",
    "state": "Active"
  },
  {
    "name": "Deals",
    "metric": "$676k",
    "state": "Forecast"
  },
  {
    "name": "Accounts",
    "metric": "50",
    "state": "Managed"
  },
  {
    "name": "Follow-ups",
    "metric": "28",
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
  "Guest Loyalty CRM priority account moved to proposal",
  "AI next-action recommends executive follow-up for Nova Labs",
  "New note added to Prime Holdings with buying objections",
  "Forecast risk detected in Delta Systems due to stalled response"
],
  uiCards: [
  {
    "label": "Lead Quality",
    "value": "85%",
    "hint": "AI scoring"
  },
  {
    "label": "Forecast",
    "value": "$820k",
    "hint": "Weighted pipeline"
  },
  {
    "label": "Response SLA",
    "value": "9h",
    "hint": "Median reply"
  }
]
};
