export const site = {
  "slug": "eventhall-venue-booking",
  "name": "EventHall Venue Booking",
  "domain": "Venue & Hall Reservation",
  "target": "Wedding halls, conference venues, event spaces, studios",
  "useCase": "Reserve halls, check dates, manage packages, deposits, and event requirements.",
  "positioning": "A venue booking system built for capacity, packages, deposits, and event planning clarity.",
  "visual": "Event-focused layout with availability grid, package tiers, and planning cards.",
  "bookingEntity": "Venue Reservation",
  "audience": "Venue sales teams",
  "tone": "Elegant, structured, sales-focused",
  "layout": "venue",
  "accent": "from-fuchsia-500 to-purple-800",
  "surface": "bg-fuchsia-50",
  "statLabels": [
    "Open Dates",
    "Deposits",
    "Venues",
    "Events"
  ],
  "stats": [
    "24",
    "$52k",
    "6",
    "88"
  ],
  "features": [
    "Venue capacity board",
    "Package deposit tracking",
    "Add-on selection",
    "Event requirement notes"
  ],
  "steps": [
    "Choose venue",
    "Pick date",
    "Select package",
    "Pay deposit"
  ],
  "roles": [
    "Client",
    "Sales Agent",
    "Event Coordinator"
  ],
  "slots": [
    "Grand Hall",
    "Garden Venue",
    "Rooftop",
    "Studio A",
    "Ballroom",
    "Conference"
  ],
  "records": [
    [
      "Nour Wedding",
      "Grand Hall",
      "Aug 12",
      "Deposit"
    ],
    [
      "Tech Summit",
      "Conference",
      "Sep 2",
      "Proposal"
    ],
    [
      "Brand Shoot",
      "Studio A",
      "Jul 28",
      "Confirmed"
    ]
  ],
  "dashboardCards": [
    "Date demand",
    "Deposit pipeline",
    "Venue utilization",
    "Coordinator load"
  ],
  "templateNumber": 7
} as const;

export type SiteConfig = typeof site;
