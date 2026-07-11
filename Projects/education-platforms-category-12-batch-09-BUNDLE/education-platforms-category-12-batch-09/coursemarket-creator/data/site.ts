export const site = {
  name: 'CourseMarket Creator',
  initials: 'CC',
  tagline: 'Marketplace-style course storefront',
  description: 'A polished education platform frontend for course creators and education startups. It includes LMS-style pages, student dashboard, teacher dashboard, progress tracking, admin operations, mock data, and commercial UI sections.',
  client: 'Course creators and education startups',
  useCase: 'Sell multiple courses with instructor pages, ratings, bundles, and learner accounts.',
  audience: 'Course businesses',
  tone: 'Commercial, conversion-focused',
  hero: 'Launch a course marketplace that feels ready to sell from day one.',
  layout: 'Marketplace education layout',
  price: 'EGP 21,000 - 42,000',
  features: ["Course catalog", "Instructor profiles", "Bundle offers", "Ratings UI", "Learner purchase dashboard"],
  courses: ["AI Prompting for Teams", "Freelance Business", "Design Systems", "Digital Marketing"],
  personas: ["Marketplace Admin", "Creator", "Learner", "Affiliate"],
  metrics: [
    { label: 'Active learners', value: '2,180', trend: '+8% this month' },
    { label: 'Course completion', value: '79%', trend: 'tracked by cohort' },
    { label: 'Instructor reviews', value: '257', trend: 'pending feedback UI' },
    { label: 'Certificates', value: '439', trend: 'credential mock' }
  ],
  theme: { gradient: 'from-violet-950 via-slate-950 to-fuchsia-950', text: 'text-violet-300', button: 'bg-violet-500', border: 'border-violet-400/30' }
} as const;
