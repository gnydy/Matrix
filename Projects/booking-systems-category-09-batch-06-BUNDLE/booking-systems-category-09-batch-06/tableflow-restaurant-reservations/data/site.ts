export const site = {
  "slug": "tableflow-restaurant-reservations",
  "name": "TableFlow Restaurant Reservations",
  "domain": "Restaurant Table Booking",
  "target": "Fine dining restaurants, cafes, restaurant chains",
  "useCase": "Manage table reservations, party sizes, dining zones, waitlist, and kitchen pacing.",
  "positioning": "A restaurant booking UI that balances table utilization with guest experience.",
  "visual": "Hospitality-first dashboard with seating map concepts, dinner rush stats, and waitlist cards.",
  "bookingEntity": "Table Reservation",
  "audience": "Restaurant managers and host teams",
  "tone": "Warm, premium, operational",
  "layout": "hospitality",
  "accent": "from-rose-500 to-red-700",
  "surface": "bg-rose-50",
  "statLabels": [
    "Reservations",
    "Waitlist",
    "Avg Turn",
    "Open Tables"
  ],
  "stats": [
    "126",
    "14",
    "74m",
    "18"
  ],
  "features": [
    "Dining zone control",
    "Party size filters",
    "Waitlist priority",
    "Kitchen pacing indicators"
  ],
  "steps": [
    "Select guests",
    "Choose date",
    "Pick table zone",
    "Confirm reservation"
  ],
  "roles": [
    "Host",
    "Manager",
    "Guest"
  ],
  "slots": [
    "18:00",
    "18:45",
    "19:30",
    "20:15",
    "21:00",
    "21:30"
  ],
  "records": [
    [
      "Sara Gamal",
      "4 guests",
      "19:30",
      "Confirmed"
    ],
    [
      "Tarek Amin",
      "2 guests",
      "20:15",
      "VIP"
    ],
    [
      "Nadine Helmy",
      "6 guests",
      "21:00",
      "Waitlist"
    ]
  ],
  "dashboardCards": [
    "Dinner rush load",
    "Table utilization",
    "VIP arrivals",
    "Waitlist conversion"
  ],
  "templateNumber": 3
} as const;

export type SiteConfig = typeof site;
