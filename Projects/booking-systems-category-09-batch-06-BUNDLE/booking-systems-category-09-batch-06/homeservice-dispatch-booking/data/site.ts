export const site = {
  "slug": "homeservice-dispatch-booking",
  "name": "HomeService Dispatch Booking",
  "domain": "Home Services Booking",
  "target": "Cleaning, plumbing, maintenance, repair, and field-service companies",
  "useCase": "Book home-service visits, assign technicians, manage addresses, and track arrival windows.",
  "positioning": "A dispatch-first booking system for service companies that need operational control.",
  "visual": "Map-inspired service UI with technician cards, urgency indicators, and visit summaries.",
  "bookingEntity": "Service Visit",
  "audience": "Field-service operators",
  "tone": "Practical, fast, dispatch-driven",
  "layout": "operations",
  "accent": "from-emerald-500 to-teal-800",
  "surface": "bg-emerald-50",
  "statLabels": [
    "Visits",
    "Technicians",
    "On-time",
    "Urgent"
  ],
  "stats": [
    "143",
    "38",
    "91%",
    "12"
  ],
  "features": [
    "Technician assignment",
    "Address notes",
    "Urgency levels",
    "Service window tracking"
  ],
  "steps": [
    "Choose service",
    "Enter address",
    "Select time window",
    "Assign technician"
  ],
  "roles": [
    "Customer",
    "Dispatcher",
    "Technician"
  ],
  "slots": [
    "08-10",
    "10-12",
    "12-14",
    "14-16",
    "16-18",
    "Emergency"
  ],
  "records": [
    [
      "Villa 18",
      "AC Repair",
      "10-12",
      "Assigned"
    ],
    [
      "Apartment 22",
      "Cleaning",
      "14-16",
      "Confirmed"
    ],
    [
      "Office 3",
      "Plumbing",
      "Emergency",
      "Urgent"
    ]
  ],
  "dashboardCards": [
    "Route pressure",
    "Technician capacity",
    "Emergency queue",
    "Completion rate"
  ],
  "templateNumber": 6
} as const;

export type SiteConfig = typeof site;
