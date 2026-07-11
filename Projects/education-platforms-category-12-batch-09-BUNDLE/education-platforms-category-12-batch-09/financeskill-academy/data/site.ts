export const site = {
  name: 'FinanceSkill Academy',
  initials: 'FA',
  tagline: 'Business and finance education portal',
  description: 'A polished education platform frontend for business academies, finance trainers, and commerce institutes. It includes LMS-style pages, student dashboard, teacher dashboard, progress tracking, admin operations, mock data, and commercial UI sections.',
  client: 'Business academies, finance trainers, and commerce institutes',
  useCase: 'Teach finance, accounting, business planning, and investment fundamentals with dashboards.',
  audience: 'Commerce and business students',
  tone: 'Professional, numerical, strategic',
  hero: 'Train business minds with finance tracks, simulations, and measurable progress.',
  layout: 'Business education layout',
  price: 'EGP 20,000 - 44,000',
  features: ["Finance simulation cards", "Progress by competency", "Case-study modules", "Certificate path", "Instructor analytics"],
  courses: ["Accounting Basics", "Business Planning", "Financial Modeling", "Marketing Strategy"],
  personas: ["Academy Director", "Instructor", "Student", "Corporate Sponsor"],
  metrics: [
    { label: 'Active learners', value: '2,740', trend: '+12% this month' },
    { label: 'Course completion', value: '83%', trend: 'tracked by cohort' },
    { label: 'Instructor reviews', value: '301', trend: 'pending feedback UI' },
    { label: 'Certificates', value: '507', trend: 'credential mock' }
  ],
  theme: { gradient: 'from-green-950 via-slate-950 to-emerald-950', text: 'text-green-300', button: 'bg-green-500', border: 'border-green-400/30' }
} as const;
