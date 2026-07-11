export const site = {
  "slug": "govqueue-appointment-portal",
  "name": "GovQueue Appointment Portal",
  "domain": "Public Service Appointment Booking",
  "target": "Government service offices, embassies, public-service centers",
  "useCase": "Book public-service appointments, collect documents, manage queues, and reduce walk-in congestion.",
  "positioning": "A queue-aware booking portal for high-volume service offices and documentation workflows.",
  "visual": "Civic service UI with document checklist, queue load, slot availability, and branch status.",
  "bookingEntity": "Service Appointment",
  "audience": "Public service administrators",
  "tone": "Official, accessible, controlled",
  "layout": "civic",
  "accent": "from-blue-600 to-slate-900",
  "surface": "bg-blue-50",
  "statLabels": [
    "Appointments",
    "Branches",
    "Queue Load",
    "Docs Ready"
  ],
  "stats": [
    "1,284",
    "18",
    "73%",
    "89%"
  ],
  "features": [
    "Branch availability",
    "Document checklist",
    "Queue load indicator",
    "Service category routing"
  ],
  "steps": [
    "Choose service",
    "Select branch",
    "Pick slot",
    "Upload checklist"
  ],
  "roles": [
    "Citizen",
    "Officer",
    "Branch Admin"
  ],
  "slots": [
    "Passport",
    "ID Renewal",
    "Certificate",
    "Visa Desk",
    "Attestation",
    "Permit"
  ],
  "records": [
    [
      "Ticket 1042",
      "Passport",
      "Branch A",
      "Docs Ready"
    ],
    [
      "Ticket 1043",
      "ID Renewal",
      "Branch C",
      "Pending"
    ],
    [
      "Ticket 1044",
      "Permit",
      "Branch B",
      "Confirmed"
    ]
  ],
  "dashboardCards": [
    "Branch demand",
    "Queue pressure",
    "Document readiness",
    "No-show risk"
  ],
  "templateNumber": 15
} as const;

export type SiteConfig = typeof site;
