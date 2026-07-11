export const dashboard = {
  name: "Real Estate Admin Board",
  slug: "real-estate-admin-board",
  desc: "A property operations dashboard for agencies that need listing control, agent performance, lead handling, and booking visibility.",
  client: "Real estate agencies and property platforms",
  use: "Manage listings, agents, leads, property views and viewing requests",
  industry: "Real Estate",
  layout: "cards",
  metrics: [
  {
    "label": "Active Listings",
    "value": "742",
    "change": "+36"
  },
  {
    "label": "Viewing Requests",
    "value": "119",
    "change": "+22"
  },
  {
    "label": "Agent Response",
    "value": "88%",
    "change": "+6%"
  },
  {
    "label": "Closed Deals",
    "value": "24",
    "change": "+5"
  }
],
  modules: [
  "Listing Manager",
  "Agent Board",
  "Lead Inbox",
  "Viewing Calendar",
  "Property Analytics",
  "Contract Stage"
],
  records: [
  "New Cairo Villa",
  "Zayed Apartment",
  "Office Tower",
  "Coastal Chalet",
  "Agent Follow-up"
],
  roles: [
  "Agency Admin",
  "Listing Manager",
  "Agent",
  "Sales Director"
],
  states: [
  "Available",
  "Reserved",
  "Sold",
  "Needs photos"
],
  chart: [198, 101, 124, 147, 170, 193, 96, 119],
} as const;
