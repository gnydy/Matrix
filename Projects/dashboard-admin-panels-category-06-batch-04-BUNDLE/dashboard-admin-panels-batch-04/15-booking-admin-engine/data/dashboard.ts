export const dashboard = {
  name: "Booking Admin Engine",
  slug: "booking-admin-engine",
  desc: "A booking administration dashboard for appointments, rooms, services, staff availability, payment states and client changes.",
  client: "Service businesses, consultants and reservation platforms",
  use: "Manage reservations, calendars, staff availability, payments and cancellations",
  industry: "Booking",
  layout: "classic",
  metrics: [
  {
    "label": "Bookings",
    "value": "524",
    "change": "+44"
  },
  {
    "label": "No-show Rate",
    "value": "3.8%",
    "change": "-1.1%"
  },
  {
    "label": "Revenue",
    "value": "EGP 214K",
    "change": "+15%"
  },
  {
    "label": "Available Slots",
    "value": "182",
    "change": "+21"
  }
],
  modules: [
  "Calendar Board",
  "Reservation Queue",
  "Staff Availability",
  "Payment Status",
  "Cancellation Desk",
  "Client Messages"
],
  records: [
  "Consultation Slot",
  "Room Reservation",
  "Spa Appointment",
  "Demo Meeting",
  "Service Visit"
],
  roles: [
  "Booking Admin",
  "Receptionist",
  "Service Manager",
  "Finance User"
],
  states: [
  "Confirmed",
  "Pending payment",
  "Cancelled",
  "Rescheduled"
],
  chart: [95, 118, 141, 164, 187, 90, 113, 136],
} as const;
