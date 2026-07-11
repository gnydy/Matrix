export const dashboard = {
  name: "Logistics Control Tower",
  slug: "logistics-control-tower",
  desc: "A high-visibility logistics dashboard for route operations, fleet load, shipments, driver status, and exception handling.",
  client: "Delivery, shipping and logistics companies",
  use: "Track shipments, fleets, routes, drivers and delivery exceptions",
  industry: "Logistics",
  layout: "command",
  metrics: [
  {
    "label": "Live Shipments",
    "value": "2,948",
    "change": "+7%"
  },
  {
    "label": "On-time Rate",
    "value": "93.4%",
    "change": "+2.1%"
  },
  {
    "label": "Delayed Routes",
    "value": "18",
    "change": "-5"
  },
  {
    "label": "Fleet Active",
    "value": "142",
    "change": "+12"
  }
],
  modules: [
  "Shipment Map UI",
  "Fleet Board",
  "Driver Status",
  "Route Planner",
  "Exception Queue",
  "Delivery Analytics"
],
  records: [
  "Cairo Route A7",
  "Alex Hub Dispatch",
  "Return Pickup",
  "Cold Chain Load",
  "Airport Clearance"
],
  roles: [
  "Operations Admin",
  "Fleet Manager",
  "Dispatcher",
  "Regional Manager"
],
  states: [
  "In transit",
  "Delayed",
  "Delivered",
  "Exception"
],
  chart: [199, 102, 125, 148, 171, 194, 97, 120],
} as const;
