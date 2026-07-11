export const site = {
  slug: "event-conference-landing",
  name: "SummitFlow Conference Landing",
  client: "Conference, event, or workshop organizer",
  use: "Sell tickets or collect registrations.",
  audience: "Event organizers, conferences, summits",
  position: "Event landing with agenda, speakers, ticket tiers, sponsors, and venue CTA.",
  industry: "Events",
  accent: "from-violet-400 via-fuchsia-500 to-pink-500",
  bg: "from-slate-950 via-violet-950 to-slate-950",
  nav: ["Agenda", "Speakers", "Tickets", "Venue"],
  hero: "Turn an event into a focused registration funnel.",
  sub: "A conference landing page with agenda preview, speaker cards, sponsor trust, ticket tiers, and registration CTA.",
  cta: "Register Now",
  secondary: "View Agenda",
  metrics: [
    { value: "24", label: "sessions mock" },
    { value: "16", label: "speakers mock" },
    { value: "3", label: "ticket tiers" }
  ],
  features: ["Agenda timeline", "Speaker cards", "Sponsor band", "Ticket pricing blocks"],
  steps: ["Review agenda", "Choose ticket", "Register details", "Get confirmation"],
  proof: ["Event-grade information architecture", "Ticket-focused UX", "Good for physical and online events"],
  price: "From $249",
  form: "Ticket selector",
  faqs: ["Can it manage real tickets?", "No. It is a frontend template ready for ticket integrations.", "Can it handle sponsors?", "Yes. Sponsor sections are included."],
  layout: "timeline"
} as const;
