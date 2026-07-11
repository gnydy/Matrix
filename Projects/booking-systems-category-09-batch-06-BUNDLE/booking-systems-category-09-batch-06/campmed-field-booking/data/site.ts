export const site = {
  "slug": "campmed-field-booking",
  "name": "CampMed Field Booking",
  "domain": "Mobile Camp & Outreach Booking",
  "target": "Medical camps, field clinics, vaccination drives, NGO outreach teams",
  "useCase": "Book outreach appointments, register participants, manage locations, and monitor camp capacity.",
  "positioning": "A field-ready booking portal for outreach operations and mobile service campaigns.",
  "visual": "Mission control layout with location capacity, participant cards, and outreach schedule.",
  "bookingEntity": "Outreach Slot",
  "audience": "NGO and outreach coordinators",
  "tone": "Mission-driven, practical, accessible",
  "layout": "field",
  "accent": "from-green-600 to-slate-900",
  "surface": "bg-green-50",
  "statLabels": [
    "Locations",
    "Participants",
    "Teams",
    "Capacity"
  ],
  "stats": [
    "9",
    "2.4k",
    "18",
    "76%"
  ],
  "features": [
    "Location capacity",
    "Participant intake",
    "Team assignment",
    "Offline-ready checklist concept"
  ],
  "steps": [
    "Select camp",
    "Choose service",
    "Pick slot",
    "Register participant"
  ],
  "roles": [
    "Participant",
    "Field Agent",
    "Coordinator"
  ],
  "slots": [
    "Camp A",
    "Camp B",
    "Vaccination",
    "Dental",
    "Screening",
    "Follow-up"
  ],
  "records": [
    [
      "Ticket 210",
      "Screening",
      "Camp A",
      "Registered"
    ],
    [
      "Ticket 211",
      "Vaccination",
      "Camp B",
      "Confirmed"
    ],
    [
      "Ticket 212",
      "Dental",
      "Camp A",
      "Waiting"
    ]
  ],
  "dashboardCards": [
    "Camp capacity",
    "Team load",
    "Participant flow",
    "Follow-up needs"
  ],
  "templateNumber": 19
} as const;

export type SiteConfig = typeof site;
