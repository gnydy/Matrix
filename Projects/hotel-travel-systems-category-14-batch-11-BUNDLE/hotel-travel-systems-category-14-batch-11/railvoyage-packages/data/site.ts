export const site = {
  name: "RailVoyage Packages",
  slug: "railvoyage-packages",
  logo: "RP",
  category: "Category 14 — Hotel & Travel Systems",
  tagline: "Hotel & Travel System Template",
  accent: "#B45309",
  soft: "#FEF3C7",
  hero: "RailVoyage Packages built for booking, guest experience, and travel operations.",
  description: "Rail vacation booking interface with routes, cabins, schedules, and trip planner.",
  longDescription: "Rail vacation booking interface with routes, cabins, schedules, and trip planner. Designed for rail tourism companies and travel agencies with a professional UI that shows booking logic, availability, guest journeys, and operational control without requiring a backend.",
  positioning: "Routes, cabins, schedule, itinerary, booking flow, traveler dashboard",
  defaultDestination: "RailVoyage flagship experience",
  featuredPanel: "Availability & package command",
  metrics: [
    { label: "conversion sections", value: "12+" },
    { label: "mock records", value: "48" },
    { label: "responsive pages", value: "6" }
  ],
  features: [
    { kicker: "UX", title: "Route-timeline UI with polished travel catalog experience", text: "A distinct visual direction, navigation pattern, and content structure built for this specific travel business model." },
    { kicker: "Booking", title: "Inventory-first booking flow", text: "Shows packages, dates, open units, guest details, and booking state so the client sees a real system concept." },
    { kicker: "Operations", title: "Travel control room", text: "Includes dashboard cards, status queue, guest timeline, and administrative panels for portfolio strength." }
  ],
  packages: [
    { name: "Signature Stay", meta: "Premium room / guided package · 6 nights", price: "$1,240", status: "Available" },
    { name: "Family Flex", meta: "2 rooms · breakfast · transfer", price: "$1,860", status: "Limited" },
    { name: "Executive Escape", meta: "Suite · lounge · private pickup", price: "$2,450", status: "High demand" },
    { name: "Group Journey", meta: "10 travelers · itinerary support", price: "$8,900", status: "Quote" },
    { name: "Weekend Express", meta: "2 nights · city highlights", price: "$520", status: "Available" },
    { name: "Long Stay", meta: "21 nights · flexible housekeeping", price: "$3,780", status: "Open" }
  ],
  bookingSteps: ["Select package and dates", "Confirm guest details", "Review availability and room rules", "Mock payment / reservation hold", "Guest portal generated"],
  availability: [
    { date: "Aug 18", open: "18", fill: "72%" },
    { date: "Aug 19", open: "11", fill: "82%" },
    { date: "Aug 20", open: "24", fill: "58%" },
    { date: "Aug 21", open: "7", fill: "91%" }
  ],
  guest: { name: "Omar Hassan", tier: "Gold traveler · confirmed", trip: "6-night premium booking" },
  itinerary: [
    { time: "10:00", action: "Airport pickup and welcome desk verification" },
    { time: "13:30", action: "Room check-in / package briefing" },
    { time: "18:00", action: "Local experience or dinner reservation" },
    { time: "09:00", action: "Next-day itinerary confirmation" }
  ],
  ops: [
    { label: "today arrivals", value: "42" },
    { label: "open issues", value: "7" },
    { label: "booking revenue", value: "$84k" },
    { label: "guest satisfaction", value: "96%" }
  ],
  queue: [
    { code: "BK-1048", guest: "Mona Adel", status: "Arrival", owner: "Front Desk" },
    { code: "BK-1052", guest: "Karim Nabil", status: "Transfer", owner: "Concierge" },
    { code: "BK-1061", guest: "Sara Ali", status: "Payment hold", owner: "Reservations" },
    { code: "BK-1074", guest: "Youssef Tarek", status: "Upgrade", owner: "Revenue" }
  ]
};
