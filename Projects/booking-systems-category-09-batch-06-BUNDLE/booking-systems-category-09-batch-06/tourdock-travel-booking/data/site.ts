export const site = {
  "slug": "tourdock-travel-booking",
  "name": "TourDock Travel Booking",
  "domain": "Travel & Tour Reservation",
  "target": "Travel agencies, tour operators, local experience companies",
  "useCase": "Book tours, group trips, travel packages, guides, and pickup schedules.",
  "positioning": "A travel booking interface designed for package discovery, itinerary clarity, and group capacity.",
  "visual": "Editorial travel cards, itinerary timeline, capacity meters, and destination-focused CTAs.",
  "bookingEntity": "Travel Package",
  "audience": "Tour agency sales teams",
  "tone": "Aspirational, clear, organized",
  "layout": "editorial",
  "accent": "from-sky-500 to-indigo-700",
  "surface": "bg-sky-50",
  "statLabels": [
    "Packages",
    "Seats Left",
    "Guides",
    "Bookings"
  ],
  "stats": [
    "37",
    "218",
    "24",
    "641"
  ],
  "features": [
    "Package capacity view",
    "Guide allocation",
    "Pickup point selector",
    "Itinerary preview"
  ],
  "steps": [
    "Choose destination",
    "Select package",
    "Add travelers",
    "Confirm pickup"
  ],
  "roles": [
    "Traveler",
    "Sales Agent",
    "Tour Manager"
  ],
  "slots": [
    "Cairo Day",
    "Luxor 3D",
    "Siwa 4D",
    "Dahab Camp",
    "Nile Cruise",
    "Alex Walk"
  ],
  "records": [
    [
      "Mariam Soliman",
      "Luxor 3D",
      "8 seats",
      "Deposit"
    ],
    [
      "Ali Zaki",
      "Dahab Camp",
      "2 seats",
      "Paid"
    ],
    [
      "Farah Nasr",
      "Cairo Day",
      "4 seats",
      "Pending"
    ]
  ],
  "dashboardCards": [
    "Package fill rate",
    "Guide workload",
    "Pickup conflicts",
    "Revenue by destination"
  ],
  "templateNumber": 4
} as const;

export type SiteConfig = typeof site;
