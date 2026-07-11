export const site = {
  name: 'LanguaHub Institute',
  initials: 'LI',
  tagline: 'Language school and placement-learning system',
  description: 'A polished education platform frontend for language centers and online tutoring brands. It includes LMS-style pages, student dashboard, teacher dashboard, progress tracking, admin operations, mock data, and commercial UI sections.',
  client: 'Language centers and online tutoring brands',
  useCase: 'Offer placement tests, course levels, instructor schedules, and learner dashboards.',
  audience: 'Language learners and institutes',
  tone: 'Friendly, international, clear',
  hero: 'Move learners from placement test to fluent progress tracking.',
  layout: 'Language institute layout',
  price: 'EGP 18,000 - 38,000',
  features: ["Level placement UX", "Live class schedule", "Speaking practice cards", "Vocabulary progress", "Teacher feedback panel"],
  courses: ["English B1 Accelerator", "Business English", "Arabic for Professionals", "IELTS Preparation"],
  personas: ["Center Admin", "Teacher", "Learner", "Parent"],
  metrics: [
    { label: 'Active learners', value: '1,900', trend: '+13% this month' },
    { label: 'Course completion', value: '77%', trend: 'tracked by cohort' },
    { label: 'Instructor reviews', value: '235', trend: 'pending feedback UI' },
    { label: 'Certificates', value: '405', trend: 'credential mock' }
  ],
  theme: { gradient: 'from-rose-950 via-slate-950 to-pink-950', text: 'text-rose-300', button: 'bg-rose-500', border: 'border-rose-400/30' }
} as const;
