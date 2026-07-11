export const site = {
  slug: "booking-service-landing",
  name: "ReserveFlow Booking Landing",
  client: "Appointment, service, or rental booking business",
  use: "Sell booking-based services and collect reservations.",
  audience: "Salons, consultants, rentals, clinics, service providers",
  position: "Booking landing with availability mock, service tiers, calendar card, and confirmation path.",
  industry: "Booking",
  accent: "from-teal-300 via-cyan-400 to-blue-500",
  bg: "from-slate-950 via-teal-950 to-slate-950",
  nav: ["Services", "Availability", "Plans", "Book"],
  hero: "A booking landing page that turns availability into action.",
  sub: "Built for any service business that needs a polished booking funnel without a full platform yet.",
  cta: "Book Slot",
  secondary: "Check Availability",
  metrics: [
    { value: "6", label: "service types" },
    { value: "3", label: "booking steps" },
    { value: "91%", label: "completion clarity" }
  ],
  features: ["Availability mock", "Service tier cards", "Booking summary", "Confirmation state"],
  steps: ["Pick service", "Choose time", "Add details", "Confirm request"],
  proof: ["Clear booking UX", "Works across many industries", "Ready for calendar integrations"],
  price: "From $249",
  form: "Availability finder",
  faqs: ["Does it sync calendars?", "No. It is a frontend template ready for calendar APIs.", "Can it fit clinics or salons?", "Yes. The data can be changed easily."],
  layout: "trust"
} as const;
