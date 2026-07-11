export const site = {
  "slug": "courtreserve-sports-booking",
  "name": "CourtReserve Sports Booking",
  "domain": "Sports Court Reservation",
  "target": "Padel clubs, gyms, sports arenas, academies",
  "useCase": "Reserve courts, manage memberships, coaches, recurring sessions, and peak-hour pricing.",
  "positioning": "A sports reservation system designed around utilization, memberships, and live court availability.",
  "visual": "Energetic sports UI with court cards, member activity, peak slots, and coaching packages.",
  "bookingEntity": "Court Slot",
  "audience": "Sports club managers",
  "tone": "Energetic, clean, performance-based",
  "layout": "sports",
  "accent": "from-violet-500 to-blue-800",
  "surface": "bg-violet-50",
  "statLabels": [
    "Court Hours",
    "Members",
    "Peak Fill",
    "Coaches"
  ],
  "stats": [
    "312",
    "1.8k",
    "96%",
    "22"
  ],
  "features": [
    "Court availability grid",
    "Member pricing",
    "Coach booking",
    "Recurring slots"
  ],
  "steps": [
    "Choose sport",
    "Select court",
    "Pick slot",
    "Add players"
  ],
  "roles": [
    "Member",
    "Coach",
    "Club Admin"
  ],
  "slots": [
    "Court 1 18:00",
    "Court 2 19:00",
    "Padel 20:00",
    "Tennis 17:30",
    "Coach 16:00",
    "League Slot"
  ],
  "records": [
    [
      "Team Alpha",
      "Padel Court 2",
      "19:00",
      "Paid"
    ],
    [
      "Mazen",
      "Coach Session",
      "16:00",
      "Confirmed"
    ],
    [
      "League A",
      "Court 1",
      "20:00",
      "Recurring"
    ]
  ],
  "dashboardCards": [
    "Court utilization",
    "Peak demand",
    "Membership revenue",
    "Coach occupancy"
  ],
  "templateNumber": 10
} as const;

export type SiteConfig = typeof site;
