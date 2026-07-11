export const dashboard = {
  name: "Restaurant Ops Admin",
  slug: "restaurant-ops-admin",
  desc: "A restaurant operations admin panel for kitchen order flow, menu control, table bookings, delivery tracking and staff shift visibility.",
  client: "Restaurants, cloud kitchens and delivery kitchens",
  use: "Manage orders, menu, reservations, kitchen queue, delivery status and staff shifts",
  industry: "Restaurant",
  layout: "dense",
  metrics: [
  {
    "label": "Orders",
    "value": "763",
    "change": "+89"
  },
  {
    "label": "Kitchen Avg",
    "value": "18 min",
    "change": "-2 min"
  },
  {
    "label": "Reservations",
    "value": "46",
    "change": "+8"
  },
  {
    "label": "Menu Alerts",
    "value": "12",
    "change": "+4"
  }
],
  modules: [
  "Kitchen Queue",
  "Menu Manager",
  "Table Reservations",
  "Delivery Board",
  "Shift Control",
  "Customer Feedback"
],
  records: [
  "Table 14",
  "Delivery Order",
  "Menu Price Update",
  "Chef Shift",
  "VIP Reservation"
],
  roles: [
  "Restaurant Admin",
  "Kitchen Manager",
  "Cashier",
  "Delivery Coordinator"
],
  states: [
  "Preparing",
  "Ready",
  "Delivered",
  "Waiting table"
],
  chart: [112, 135, 158, 181, 84, 107, 130, 153],
} as const;
