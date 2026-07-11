export const site = {
  name: 'TechKids Lab',
  initials: 'TL',
  tagline: 'Children coding and STEM learning interface',
  description: 'A polished education platform frontend for kids coding academies and stem centers. It includes LMS-style pages, student dashboard, teacher dashboard, progress tracking, admin operations, mock data, and commercial UI sections.',
  client: 'Kids coding academies and STEM centers',
  useCase: 'Present safe learning tracks, parent reports, class progress, and project showcases.',
  audience: 'Parents and young learners',
  tone: 'Bright, safe, structured',
  hero: 'A safe, parent-friendly front-end for kids learning technology.',
  layout: 'Kids STEM layout',
  price: 'EGP 18,000 - 36,000',
  features: ["Parent progress reports", "Project showcase", "Age-level paths", "Instructor notes", "Safe class schedule"],
  courses: ["Scratch Projects", "Robotics Starter", "Python for Kids", "STEM Challenges"],
  personas: ["Center Admin", "Instructor", "Parent", "Learner"],
  metrics: [
    { label: 'Active learners', value: '2,880', trend: '+13% this month' },
    { label: 'Course completion', value: '84%', trend: 'tracked by cohort' },
    { label: 'Instructor reviews', value: '312', trend: 'pending feedback UI' },
    { label: 'Certificates', value: '524', trend: 'credential mock' }
  ],
  theme: { gradient: 'from-orange-950 via-slate-950 to-amber-950', text: 'text-orange-300', button: 'bg-orange-500', border: 'border-orange-400/30' }
} as const;
