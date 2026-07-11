export const site = {
  "slug": "suitekey-hotel-booking",
  "name": "SuiteKey Hotel Booking",
  "domain": "Hotel Room Reservation",
  "target": "Boutique hotels, resorts, serviced apartments",
  "useCase": "Sell room nights with availability, guest profiles, booking summaries, and front-desk controls.",
  "positioning": "A polished hotel reservation UI for properties that need a premium digital booking experience.",
  "visual": "Luxury hospitality layout with room cards, date availability, and concierge-style trust details.",
  "bookingEntity": "Room Stay",
  "audience": "Hotel owners and reservation teams",
  "tone": "Premium, calm, concierge",
  "layout": "luxury",
  "accent": "from-amber-500 to-orange-700",
  "surface": "bg-stone-50",
  "statLabels": [
    "Available Rooms",
    "Occupancy",
    "ADR",
    "Check-ins"
  ],
  "stats": [
    "42",
    "78%",
    "$146",
    "19"
  ],
  "features": [
    "Room availability board",
    "Guest preference notes",
    "Seasonal pricing preview",
    "Front desk arrival list"
  ],
  "steps": [
    "Choose dates",
    "Select room",
    "Add guest details",
    "Confirm stay"
  ],
  "roles": [
    "Guest",
    "Reservation Agent",
    "Front Desk"
  ],
  "slots": [
    "Deluxe 2N",
    "Suite 1N",
    "Family 3N",
    "Sea View",
    "Business King",
    "Garden Twin"
  ],
  "records": [
    [
      "Omar Nabil",
      "Deluxe Room",
      "Today",
      "Arriving"
    ],
    [
      "Lina Farouk",
      "Suite",
      "Tomorrow",
      "Paid"
    ],
    [
      "Youssef Ali",
      "Family Room",
      "Friday",
      "Hold"
    ]
  ],
  "dashboardCards": [
    "Occupancy forecast",
    "Room revenue",
    "Housekeeping status",
    "Guest arrival risk"
  ],
  "templateNumber": 2
} as const;

export type SiteConfig = typeof site;
