export const site = {
  "slug": "rentdesk-equipment-booking",
  "name": "RentDesk Equipment Booking",
  "domain": "Equipment Rental Booking",
  "target": "Equipment rental companies, construction rentals, camera rentals, tool libraries",
  "useCase": "Book equipment, check availability, manage deposits, delivery windows, and return schedules.",
  "positioning": "A rental booking interface for companies that need availability and asset-control clarity.",
  "visual": "Asset-driven dashboard with inventory calendars, deposit states, and delivery/return timelines.",
  "bookingEntity": "Equipment Rental",
  "audience": "Rental operations teams",
  "tone": "Operational, reliable, asset-focused",
  "layout": "asset",
  "accent": "from-zinc-600 to-stone-950",
  "surface": "bg-zinc-50",
  "statLabels": [
    "Assets",
    "Booked",
    "Returns",
    "Deposits"
  ],
  "stats": [
    "486",
    "231",
    "42",
    "$31k"
  ],
  "features": [
    "Asset availability",
    "Deposit tracking",
    "Delivery/return windows",
    "Damage notes"
  ],
  "steps": [
    "Choose asset",
    "Select rental dates",
    "Add delivery",
    "Confirm deposit"
  ],
  "roles": [
    "Customer",
    "Rental Agent",
    "Warehouse"
  ],
  "slots": [
    "Excavator",
    "Camera Kit",
    "Lighting",
    "Power Tools",
    "Generator",
    "Scaffold"
  ],
  "records": [
    [
      "Site A",
      "Generator",
      "3 days",
      "Deposit"
    ],
    [
      "Studio B",
      "Camera Kit",
      "Weekend",
      "Paid"
    ],
    [
      "Contractor C",
      "Scaffold",
      "1 week",
      "Delivery"
    ]
  ],
  "dashboardCards": [
    "Asset utilization",
    "Return conflicts",
    "Deposit exposure",
    "Delivery capacity"
  ],
  "templateNumber": 17
} as const;

export type SiteConfig = typeof site;
