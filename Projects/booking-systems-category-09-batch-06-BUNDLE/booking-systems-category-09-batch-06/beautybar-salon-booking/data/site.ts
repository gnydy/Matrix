export const site = {
  "slug": "beautybar-salon-booking",
  "name": "BeautyBar Salon Booking",
  "domain": "Salon Appointment Booking",
  "target": "Beauty salons, barbershops, nail studios, grooming lounges",
  "useCase": "Book stylists, chairs, treatments, service packages, and repeat customer preferences.",
  "positioning": "A salon booking UI designed for stylist calendars, service bundles, and client loyalty.",
  "visual": "Fashion-forward interface with stylist cards, treatment packages, and repeat-client preferences.",
  "bookingEntity": "Salon Appointment",
  "audience": "Salon owners and reception teams",
  "tone": "Stylish, personal, commercial",
  "layout": "beauty",
  "accent": "from-purple-500 to-pink-700",
  "surface": "bg-purple-50",
  "statLabels": [
    "Appointments",
    "Stylists",
    "Chairs",
    "Repeat"
  ],
  "stats": [
    "96",
    "13",
    "18",
    "64%"
  ],
  "features": [
    "Stylist schedule",
    "Chair allocation",
    "Treatment packages",
    "Client preferences"
  ],
  "steps": [
    "Pick service",
    "Choose stylist",
    "Select time",
    "Confirm preferences"
  ],
  "roles": [
    "Client",
    "Stylist",
    "Reception"
  ],
  "slots": [
    "Haircut",
    "Color",
    "Nails",
    "Beard",
    "Bridal",
    "Treatment"
  ],
  "records": [
    [
      "Maya",
      "Color",
      "12:00",
      "VIP"
    ],
    [
      "Heba",
      "Nails",
      "14:30",
      "Confirmed"
    ],
    [
      "Rana",
      "Bridal",
      "Friday",
      "Deposit"
    ]
  ],
  "dashboardCards": [
    "Stylist utilization",
    "Chair occupancy",
    "Package upsells",
    "Loyalty bookings"
  ],
  "templateNumber": 16
} as const;

export type SiteConfig = typeof site;
