export const site = {
  "slug": "medslot-clinic-booking",
  "name": "MedSlot Clinic Booking",
  "domain": "Medical Appointment Booking",
  "target": "Private clinics, doctor offices, diagnostic centers",
  "useCase": "Book patient appointments, assign doctors, monitor waiting list, and manage follow-up visits.",
  "positioning": "A clinical booking interface focused on patient flow, doctor availability, and appointment clarity.",
  "visual": "Clean medical interface with calm cards, patient queue preview, and clinical trust sections.",
  "bookingEntity": "Patient Visit",
  "audience": "Clinic operations managers",
  "tone": "Clinical, trustworthy, efficient",
  "layout": "clinical",
  "accent": "from-cyan-500 to-blue-700",
  "surface": "bg-cyan-50",
  "statLabels": [
    "Today's Visits",
    "Available Doctors",
    "Avg Wait",
    "Follow-ups"
  ],
  "stats": [
    "84",
    "12",
    "18m",
    "31"
  ],
  "features": [
    "Doctor availability matrix",
    "Patient intake cards",
    "Insurance-ready visit notes",
    "Follow-up reminders"
  ],
  "steps": [
    "Select specialty",
    "Choose doctor",
    "Pick time slot",
    "Confirm patient data"
  ],
  "roles": [
    "Receptionist",
    "Doctor",
    "Clinic Manager"
  ],
  "slots": [
    "09:00",
    "09:30",
    "10:15",
    "11:00",
    "13:30",
    "16:00"
  ],
  "records": [
    [
      "Mona Adel",
      "Cardiology",
      "09:00",
      "Confirmed"
    ],
    [
      "Karim Samy",
      "Dermatology",
      "10:15",
      "Waiting"
    ],
    [
      "Nour Hassan",
      "Pediatrics",
      "13:30",
      "Follow-up"
    ]
  ],
  "dashboardCards": [
    "Doctor utilization",
    "Queue pressure",
    "No-show risk",
    "Follow-up pipeline"
  ],
  "templateNumber": 1
} as const;

export type SiteConfig = typeof site;
