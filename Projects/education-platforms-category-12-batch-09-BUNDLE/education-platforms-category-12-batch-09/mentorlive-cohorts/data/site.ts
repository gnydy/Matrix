export const site = {
  name: 'MentorLive Cohorts',
  initials: 'MC',
  tagline: 'Live cohort-based learning platform',
  description: 'A polished education platform frontend for premium coaches, accelerators, and community academies. It includes LMS-style pages, student dashboard, teacher dashboard, progress tracking, admin operations, mock data, and commercial UI sections.',
  client: 'Premium coaches, accelerators, and community academies',
  useCase: 'Run cohorts with sessions, mentors, assignment reviews, community prompts, and progress.',
  audience: 'Premium cohort students',
  tone: 'Human, premium, mentorship-driven',
  hero: 'Run cohort programs where students feel guided, not abandoned.',
  layout: 'Live cohort layout',
  price: 'EGP 22,000 - 45,000',
  features: ["Live session schedule", "Mentor assignment queue", "Community prompt cards", "Cohort progress", "Office hours UI"],
  courses: ["Startup Sprint", "AI Founder Cohort", "Career Accelerator", "Marketing Mastery"],
  personas: ["Program Manager", "Mentor", "Student", "Community Lead"],
  metrics: [
    { label: 'Active learners', value: '3,720', trend: '+12% this month' },
    { label: 'Course completion', value: '72%', trend: 'tracked by cohort' },
    { label: 'Instructor reviews', value: '378', trend: 'pending feedback UI' },
    { label: 'Certificates', value: '626', trend: 'credential mock' }
  ],
  theme: { gradient: 'from-fuchsia-950 via-slate-950 to-purple-950', text: 'text-fuchsia-300', button: 'bg-fuchsia-500', border: 'border-fuchsia-400/30' }
} as const;
