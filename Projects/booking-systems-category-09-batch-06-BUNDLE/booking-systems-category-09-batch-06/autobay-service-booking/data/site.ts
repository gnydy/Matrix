export const site = {
  "slug": "autobay-service-booking",
  "name": "AutoBay Service Booking",
  "domain": "Car Service Appointment Booking",
  "target": "Auto workshops, dealerships, tire shops, car-care centers",
  "useCase": "Book vehicle service slots, assign bays, record vehicle data, and manage service advisors.",
  "positioning": "A workshop booking UI focused on bay capacity, service categories, and advisor workflows.",
  "visual": "Garage control design with bay status, vehicle cards, and service queue timeline.",
  "bookingEntity": "Vehicle Service",
  "audience": "Workshop managers",
  "tone": "Technical, industrial, controlled",
  "layout": "industrial",
  "accent": "from-orange-500 to-stone-900",
  "surface": "bg-orange-50",
  "statLabels": [
    "Service Slots",
    "Bays Active",
    "Avg Time",
    "Pending"
  ],
  "stats": [
    "92",
    "14",
    "86m",
    "21"
  ],
  "features": [
    "Bay assignment",
    "Vehicle profile",
    "Service advisor routing",
    "Parts readiness indicator"
  ],
  "steps": [
    "Select service",
    "Enter vehicle",
    "Choose bay time",
    "Confirm advisor"
  ],
  "roles": [
    "Customer",
    "Service Advisor",
    "Workshop Manager"
  ],
  "slots": [
    "Oil 09:00",
    "Tires 10:30",
    "Inspection",
    "Brake Bay",
    "Wash 14:00",
    "Diagnostics"
  ],
  "records": [
    [
      "BMW 320i",
      "Diagnostics",
      "Bay 3",
      "In progress"
    ],
    [
      "Toyota Corolla",
      "Oil Change",
      "09:00",
      "Confirmed"
    ],
    [
      "Kia Sportage",
      "Brake Check",
      "11:30",
      "Parts Ready"
    ]
  ],
  "dashboardCards": [
    "Bay utilization",
    "Advisor queue",
    "Parts blockers",
    "Service revenue"
  ],
  "templateNumber": 8
} as const;

export type SiteConfig = typeof site;
