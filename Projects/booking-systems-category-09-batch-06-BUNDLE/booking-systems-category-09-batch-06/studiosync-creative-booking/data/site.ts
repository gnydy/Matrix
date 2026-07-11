export const site = {
  "slug": "studiosync-creative-booking",
  "name": "StudioSync Creative Booking",
  "domain": "Studio & Creative Session Booking",
  "target": "Photography studios, podcast rooms, content production spaces",
  "useCase": "Book studios, equipment, production crews, time blocks, and client requirements.",
  "positioning": "A creative production booking UI for studios that sell space, equipment, and crew time.",
  "visual": "Creative grid layout with studio cards, equipment toggles, and production checklist previews.",
  "bookingEntity": "Studio Session",
  "audience": "Studio owners and production coordinators",
  "tone": "Creative, organized, premium",
  "layout": "creative",
  "accent": "from-pink-500 to-neutral-900",
  "surface": "bg-pink-50",
  "statLabels": [
    "Studio Hours",
    "Crew",
    "Equipment",
    "Shoots"
  ],
  "stats": [
    "188",
    "11",
    "46",
    "64"
  ],
  "features": [
    "Studio availability",
    "Equipment add-ons",
    "Crew assignment",
    "Production brief capture"
  ],
  "steps": [
    "Choose studio",
    "Add equipment",
    "Select hours",
    "Submit brief"
  ],
  "roles": [
    "Client",
    "Producer",
    "Studio Manager"
  ],
  "slots": [
    "Studio A",
    "Podcast Room",
    "Green Screen",
    "Product Table",
    "Lighting Kit",
    "Crew Half-Day"
  ],
  "records": [
    [
      "Brand X",
      "Product Shoot",
      "Studio A",
      "Confirmed"
    ],
    [
      "Creator Lab",
      "Podcast Room",
      "14:00",
      "Paid"
    ],
    [
      "Agency Y",
      "Green Screen",
      "10:00",
      "Brief Needed"
    ]
  ],
  "dashboardCards": [
    "Studio utilization",
    "Equipment demand",
    "Crew schedule",
    "Production revenue"
  ],
  "templateNumber": 11
} as const;

export type SiteConfig = typeof site;
