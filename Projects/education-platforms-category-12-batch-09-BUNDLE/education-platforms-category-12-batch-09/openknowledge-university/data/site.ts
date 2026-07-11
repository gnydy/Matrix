export const site = {
  name: 'OpenKnowledge University',
  initials: 'OU',
  tagline: 'Open online university-style education platform',
  description: 'A polished education platform frontend for nonprofit learning initiatives and public education platforms. It includes LMS-style pages, student dashboard, teacher dashboard, progress tracking, admin operations, mock data, and commercial UI sections.',
  client: 'Nonprofit learning initiatives and public education platforms',
  useCase: 'Offer open courses, learning paths, community access, and certificate-style completion.',
  audience: 'Mass learners and nonprofits',
  tone: 'Accessible, broad, mission-driven',
  hero: 'Build public learning access with open courses and clear learning paths.',
  layout: 'Open education layout',
  price: 'EGP 20,000 - 40,000',
  features: ["Open course catalog", "Learning paths", "Community learning cards", "Donation/support CTA", "Completion certificates mock"],
  courses: ["Digital Literacy", "Entrepreneurship Basics", "AI for Everyone", "Career Readiness"],
  personas: ["Program Director", "Volunteer Instructor", "Learner", "Community Partner"],
  metrics: [
    { label: 'Active learners', value: '4,000', trend: '+14% this month' },
    { label: 'Course completion', value: '74%', trend: 'tracked by cohort' },
    { label: 'Instructor reviews', value: '400', trend: 'pending feedback UI' },
    { label: 'Certificates', value: '660', trend: 'credential mock' }
  ],
  theme: { gradient: 'from-stone-950 via-slate-950 to-neutral-950', text: 'text-stone-300', button: 'bg-stone-500', border: 'border-stone-400/30' }
} as const;
