export const site = {
  name: 'DesignCampus Studio',
  initials: 'DS',
  tagline: 'Design bootcamp and creative learning platform',
  description: 'A polished education platform frontend for design schools, ui/ux trainers, and creative academies. It includes LMS-style pages, student dashboard, teacher dashboard, progress tracking, admin operations, mock data, and commercial UI sections.',
  client: 'Design schools, UI/UX trainers, and creative academies',
  useCase: 'Show design tracks, critique sessions, project galleries, and student progress.',
  audience: 'Design learners',
  tone: 'Visual, creative, portfolio-driven',
  hero: 'Teach design with critique, projects, and portfolio outcomes.',
  layout: 'Creative studio layout',
  price: 'EGP 20,000 - 42,000',
  features: ["Project gallery", "Critique board", "Design track roadmap", "Portfolio checklist", "Mentor feedback cards"],
  courses: ["UI Foundations", "UX Research", "Brand Identity", "Figma Systems"],
  personas: ["Studio Owner", "Mentor", "Designer", "Reviewer"],
  metrics: [
    { label: 'Active learners', value: '2,600', trend: '+11% this month' },
    { label: 'Course completion', value: '82%', trend: 'tracked by cohort' },
    { label: 'Instructor reviews', value: '290', trend: 'pending feedback UI' },
    { label: 'Certificates', value: '490', trend: 'credential mock' }
  ],
  theme: { gradient: 'from-pink-950 via-slate-950 to-purple-950', text: 'text-pink-300', button: 'bg-pink-500', border: 'border-pink-400/30' }
} as const;
