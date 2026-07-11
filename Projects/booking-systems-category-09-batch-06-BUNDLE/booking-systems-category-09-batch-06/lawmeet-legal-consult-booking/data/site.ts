export const site = {
  "slug": "lawmeet-legal-consult-booking",
  "name": "LawMeet Legal Consult Booking",
  "domain": "Legal Appointment Booking",
  "target": "Law firms, legal advisors, arbitration offices",
  "useCase": "Book legal consultations, collect case briefs, assign lawyers, and manage confidential appointments.",
  "positioning": "A legal booking UI with confidentiality-first intake and lawyer availability management.",
  "visual": "Formal legal interface with case-type selectors, confidential intake, and appointment audit trail.",
  "bookingEntity": "Legal Consultation",
  "audience": "Law firm operations teams",
  "tone": "Formal, secure, precise",
  "layout": "legal",
  "accent": "from-yellow-600 to-neutral-950",
  "surface": "bg-yellow-50",
  "statLabels": [
    "Consults",
    "Lawyers",
    "Urgent Cases",
    "Paid"
  ],
  "stats": [
    "39",
    "14",
    "7",
    "82%"
  ],
  "features": [
    "Confidential intake",
    "Lawyer assignment",
    "Case category routing",
    "Consultation fee status"
  ],
  "steps": [
    "Select case type",
    "Choose lawyer",
    "Pick time",
    "Submit brief"
  ],
  "roles": [
    "Client",
    "Lawyer",
    "Case Coordinator"
  ],
  "slots": [
    "Civil 10:00",
    "Corporate",
    "Family",
    "Criminal",
    "Contracts",
    "Arbitration"
  ],
  "records": [
    [
      "Client A",
      "Corporate",
      "11:00",
      "Paid"
    ],
    [
      "Client B",
      "Family",
      "14:00",
      "Private"
    ],
    [
      "Client C",
      "Contracts",
      "16:00",
      "Brief Received"
    ]
  ],
  "dashboardCards": [
    "Lawyer utilization",
    "Urgent intake",
    "Revenue by case",
    "Confidential queue"
  ],
  "templateNumber": 13
} as const;

export type SiteConfig = typeof site;
