export const site = {
  name: 'MicroLearn Mobile LMS',
  initials: 'MM',
  tagline: 'Microlearning platform optimized for short lessons',
  description: 'A polished education platform frontend for training startups and mobile-first education brands. It includes LMS-style pages, student dashboard, teacher dashboard, progress tracking, admin operations, mock data, and commercial UI sections.',
  client: 'Training startups and mobile-first education brands',
  useCase: 'Show bite-sized lessons, streaks, learning nudges, and progress cards.',
  audience: 'Busy learners',
  tone: 'Fast, minimal, mobile-first',
  hero: 'Deliver short lessons that users can finish before they lose focus.',
  layout: 'Mobile-first microlearning layout',
  price: 'EGP 17,000 - 35,000',
  features: ["Micro lesson cards", "Streak tracker", "Daily challenge UI", "Quick quiz states", "Mobile dashboard mock"],
  courses: ["5-Minute Sales", "AI Daily Skills", "Business English Micro", "Cyber Hygiene"],
  personas: ["Product Owner", "Learner", "Coach", "Content Admin"],
  metrics: [
    { label: 'Active learners', value: '3,300', trend: '+9% this month' },
    { label: 'Course completion', value: '87%', trend: 'tracked by cohort' },
    { label: 'Instructor reviews', value: '345', trend: 'pending feedback UI' },
    { label: 'Certificates', value: '575', trend: 'credential mock' }
  ],
  theme: { gradient: 'from-sky-950 via-slate-950 to-cyan-950', text: 'text-sky-300', button: 'bg-sky-500', border: 'border-sky-400/30' }
} as const;
