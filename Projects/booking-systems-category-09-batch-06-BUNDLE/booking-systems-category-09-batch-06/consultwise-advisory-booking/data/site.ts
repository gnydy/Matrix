export const site = {
  "slug": "consultwise-advisory-booking",
  "name": "ConsultWise Advisory Booking",
  "domain": "Consultation Scheduling",
  "target": "Consultants, advisory firms, coaches, legal/business advisors",
  "useCase": "Book advisory calls, qualify leads, assign consultants, and manage consultation packages.",
  "positioning": "A professional appointment system for paid advisory sessions and expert consultations.",
  "visual": "Boardroom UI with structured packages, qualification cards, and expert availability.",
  "bookingEntity": "Consultation Session",
  "audience": "Consulting offices and expert service providers",
  "tone": "Executive, precise, credible",
  "layout": "boardroom",
  "accent": "from-slate-600 to-zinc-900",
  "surface": "bg-slate-50",
  "statLabels": [
    "Sessions",
    "Experts",
    "Conversion",
    "Revenue"
  ],
  "stats": [
    "58",
    "9",
    "42%",
    "$18k"
  ],
  "features": [
    "Consultant availability",
    "Lead qualification form",
    "Package comparison",
    "Executive notes"
  ],
  "steps": [
    "Pick service",
    "Choose expert",
    "Select call slot",
    "Submit brief"
  ],
  "roles": [
    "Client",
    "Consultant",
    "Practice Manager"
  ],
  "slots": [
    "Strategy 30m",
    "Finance 60m",
    "Legal 45m",
    "Ops Audit",
    "Growth Call",
    "HR Review"
  ],
  "records": [
    [
      "Hassan M.",
      "Strategy 60m",
      "11:00",
      "Qualified"
    ],
    [
      "Dina R.",
      "Finance 45m",
      "14:30",
      "Paid"
    ],
    [
      "Mostafa K.",
      "Ops Audit",
      "16:00",
      "Brief Needed"
    ]
  ],
  "dashboardCards": [
    "Booked revenue",
    "Expert load",
    "Lead quality",
    "Session outcomes"
  ],
  "templateNumber": 5
} as const;

export type SiteConfig = typeof site;
