export const site = {
  "slug": "repairpro-appointment-booking",
  "name": "RepairPro Appointment Booking",
  "domain": "Device Repair Booking",
  "target": "Phone repair shops, electronics service centers, warranty support desks",
  "useCase": "Book repair appointments, capture device symptoms, assign technicians, and track repair status.",
  "positioning": "A repair booking UI that connects customer intake with technician workflow and status tracking.",
  "visual": "Tech service interface with symptom intake, repair queue, technician cards, and SLA indicators.",
  "bookingEntity": "Repair Appointment",
  "audience": "Repair center managers",
  "tone": "Technical, fast, customer-service focused",
  "layout": "techservice",
  "accent": "from-blue-500 to-violet-800",
  "surface": "bg-blue-50",
  "statLabels": [
    "Repairs",
    "Techs",
    "SLA",
    "Ready"
  ],
  "stats": [
    "118",
    "17",
    "94%",
    "39"
  ],
  "features": [
    "Symptom intake",
    "Technician assignment",
    "Repair status states",
    "Warranty notes"
  ],
  "steps": [
    "Select device",
    "Describe issue",
    "Pick appointment",
    "Confirm ticket"
  ],
  "roles": [
    "Customer",
    "Technician",
    "Service Manager"
  ],
  "slots": [
    "iPhone Screen",
    "Laptop Battery",
    "Console Repair",
    "Diagnostics",
    "Warranty",
    "Pickup"
  ],
  "records": [
    [
      "iPhone 14",
      "Screen",
      "10:00",
      "Parts Ready"
    ],
    [
      "Dell XPS",
      "Battery",
      "12:00",
      "In Queue"
    ],
    [
      "PS5",
      "Diagnostics",
      "15:00",
      "Confirmed"
    ]
  ],
  "dashboardCards": [
    "Repair queue",
    "SLA risk",
    "Technician load",
    "Parts readiness"
  ],
  "templateNumber": 20
} as const;

export type SiteConfig = typeof site;
