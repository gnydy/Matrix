export const site = {
  "slug": "wellness-spa-booking",
  "name": "Wellness Spa Booking",
  "domain": "Spa & Wellness Appointment Booking",
  "target": "Spas, wellness centers, salons, therapy studios",
  "useCase": "Book wellness services, therapist schedules, packages, memberships, and room allocation.",
  "positioning": "A serene booking experience that sells premium wellness packages with operational clarity.",
  "visual": "Soft wellness identity with packages, therapist cards, room availability, and calming CTA sections.",
  "bookingEntity": "Wellness Session",
  "audience": "Spa owners and reception teams",
  "tone": "Calm, premium, personal",
  "layout": "wellness",
  "accent": "from-lime-500 to-green-700",
  "surface": "bg-lime-50",
  "statLabels": [
    "Sessions",
    "Therapists",
    "Rooms",
    "Packages"
  ],
  "stats": [
    "73",
    "16",
    "9",
    "28"
  ],
  "features": [
    "Therapist schedule",
    "Room allocation",
    "Package upsells",
    "Membership notes"
  ],
  "steps": [
    "Pick service",
    "Choose therapist",
    "Select room/time",
    "Confirm package"
  ],
  "roles": [
    "Guest",
    "Therapist",
    "Reception"
  ],
  "slots": [
    "Massage 60",
    "Facial 45",
    "Sauna",
    "Couple Room",
    "Therapy 30",
    "Package Day"
  ],
  "records": [
    [
      "Leila",
      "Massage 60",
      "Room 2",
      "Confirmed"
    ],
    [
      "Hana",
      "Facial 45",
      "Room 4",
      "Paid"
    ],
    [
      "Yara",
      "Wellness Day",
      "Room 1",
      "VIP"
    ]
  ],
  "dashboardCards": [
    "Therapist utilization",
    "Room occupancy",
    "Package revenue",
    "Member retention"
  ],
  "templateNumber": 9
} as const;

export type SiteConfig = typeof site;
