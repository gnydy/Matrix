export const site = {
  "slug": "carepet-vet-booking",
  "name": "CarePet Vet Booking",
  "domain": "Veterinary Appointment Booking",
  "target": "Vet clinics, pet hospitals, grooming centers",
  "useCase": "Book pet appointments, vaccinations, grooming, vet availability, and pet medical notes.",
  "positioning": "A veterinary booking UI for clinics that need pet profiles and appointment clarity.",
  "visual": "Friendly clinic interface with pet cards, vaccination tags, and service booking panels.",
  "bookingEntity": "Pet Appointment",
  "audience": "Vet clinic managers",
  "tone": "Friendly, organized, clinical",
  "layout": "friendly",
  "accent": "from-teal-500 to-cyan-800",
  "surface": "bg-teal-50",
  "statLabels": [
    "Pets Today",
    "Vets",
    "Vaccines",
    "Grooming"
  ],
  "stats": [
    "52",
    "8",
    "23",
    "17"
  ],
  "features": [
    "Pet profile cards",
    "Vaccination reminders",
    "Vet availability",
    "Grooming add-ons"
  ],
  "steps": [
    "Choose pet service",
    "Select vet",
    "Pick slot",
    "Confirm pet data"
  ],
  "roles": [
    "Pet Owner",
    "Vet",
    "Reception"
  ],
  "slots": [
    "Vaccine 09:30",
    "Checkup",
    "Grooming",
    "Emergency",
    "Dental",
    "Surgery Consult"
  ],
  "records": [
    [
      "Luna",
      "Vaccine",
      "09:30",
      "Confirmed"
    ],
    [
      "Max",
      "Grooming",
      "11:00",
      "Paid"
    ],
    [
      "Milo",
      "Checkup",
      "13:00",
      "Follow-up"
    ]
  ],
  "dashboardCards": [
    "Vet utilization",
    "Vaccine due",
    "Grooming capacity",
    "Emergency pressure"
  ],
  "templateNumber": 14
} as const;

export type SiteConfig = typeof site;
