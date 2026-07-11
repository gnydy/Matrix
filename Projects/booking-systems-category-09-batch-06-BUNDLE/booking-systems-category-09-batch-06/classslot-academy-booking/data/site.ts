export const site = {
  "slug": "classslot-academy-booking",
  "name": "ClassSlot Academy Booking",
  "domain": "Class & Training Session Booking",
  "target": "Training centers, academies, workshops, bootcamps",
  "useCase": "Book classes, workshops, instructors, rooms, attendance, and enrollment capacity.",
  "positioning": "An academic booking platform for cohort sessions, workshops, and instructor-led classes.",
  "visual": "Education dashboard with class cards, room schedules, instructor load, and enrollment status.",
  "bookingEntity": "Class Session",
  "audience": "Academy coordinators",
  "tone": "Structured, educational, clear",
  "layout": "academy",
  "accent": "from-indigo-500 to-purple-800",
  "surface": "bg-indigo-50",
  "statLabels": [
    "Classes",
    "Students",
    "Instructors",
    "Seats Left"
  ],
  "stats": [
    "48",
    "920",
    "36",
    "174"
  ],
  "features": [
    "Class schedule grid",
    "Instructor availability",
    "Room capacity tracking",
    "Attendance states"
  ],
  "steps": [
    "Choose course",
    "Select class",
    "Reserve seat",
    "Confirm student"
  ],
  "roles": [
    "Student",
    "Instructor",
    "Coordinator"
  ],
  "slots": [
    "Python 6PM",
    "Business 8PM",
    "Design Sat",
    "AI Bootcamp",
    "English B2",
    "Kids Coding"
  ],
  "records": [
    [
      "Ahmed",
      "AI Bootcamp",
      "Sat",
      "Reserved"
    ],
    [
      "Salma",
      "Python 6PM",
      "Today",
      "Paid"
    ],
    [
      "Nour",
      "Design Sat",
      "Weekend",
      "Waitlist"
    ]
  ],
  "dashboardCards": [
    "Enrollment rate",
    "Instructor load",
    "Room capacity",
    "Payment status"
  ],
  "templateNumber": 12
} as const;

export type SiteConfig = typeof site;
