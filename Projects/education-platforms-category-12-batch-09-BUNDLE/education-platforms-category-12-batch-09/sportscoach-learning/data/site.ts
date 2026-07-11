export const site = {
  name: 'SportsCoach Learning',
  initials: 'SL',
  tagline: 'Coach education and athlete learning platform',
  description: 'A polished education platform frontend for sports academies, gyms, and coach certification brands. It includes LMS-style pages, student dashboard, teacher dashboard, progress tracking, admin operations, mock data, and commercial UI sections.',
  client: 'Sports academies, gyms, and coach certification brands',
  useCase: 'Manage coach education, athlete modules, drills, progress, and assessment.',
  audience: 'Sports coaches and athletes',
  tone: 'Energetic, structured, performance-based',
  hero: 'Train coaches and athletes with drills, modules, and performance progress.',
  layout: 'Sports training layout',
  price: 'EGP 18,000 - 38,000',
  features: ["Drill library", "Athlete progress", "Coach certification", "Training calendar", "Performance notes"],
  courses: ["Strength Foundations", "Football Coaching", "Nutrition Basics", "Injury Prevention"],
  personas: ["Academy Admin", "Coach", "Athlete", "Parent"],
  metrics: [
    { label: 'Active learners', value: '3,860', trend: '+13% this month' },
    { label: 'Course completion', value: '73%', trend: 'tracked by cohort' },
    { label: 'Instructor reviews', value: '389', trend: 'pending feedback UI' },
    { label: 'Certificates', value: '643', trend: 'credential mock' }
  ],
  theme: { gradient: 'from-yellow-950 via-slate-950 to-orange-950', text: 'text-yellow-300', button: 'bg-yellow-500', border: 'border-yellow-400/30' }
} as const;
