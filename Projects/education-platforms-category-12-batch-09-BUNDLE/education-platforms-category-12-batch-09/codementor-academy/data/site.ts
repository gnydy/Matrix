export const site = {
  name: 'CodeMentor Academy',
  initials: 'CA',
  tagline: 'Programming bootcamp platform',
  description: 'A polished education platform frontend for coding academies, bootcamps, and freelance instructors. It includes LMS-style pages, student dashboard, teacher dashboard, progress tracking, admin operations, mock data, and commercial UI sections.',
  client: 'Coding academies, bootcamps, and freelance instructors',
  useCase: 'Sell cohorts, manage coding tracks, show assignments, and track practical projects.',
  audience: 'Tech education businesses',
  tone: 'Modern, technical, project-based',
  hero: 'Teach code through projects, cohorts, and visible outcomes.',
  layout: 'Bootcamp product layout',
  price: 'EGP 22,000 - 45,000',
  features: ["Project-based curriculum", "Git-style assignment board", "Mentor review queue", "Student portfolio tracker", "Cohort leaderboard"],
  courses: ["Full Stack Web Track", "Python Foundations", "AI App Builder", "DevOps Starter"],
  personas: ["Bootcamp Owner", "Mentor", "Student", "Career Coach"],
  metrics: [
    { label: 'Active learners', value: '1,620', trend: '+11% this month' },
    { label: 'Course completion', value: '75%', trend: 'tracked by cohort' },
    { label: 'Instructor reviews', value: '213', trend: 'pending feedback UI' },
    { label: 'Certificates', value: '371', trend: 'credential mock' }
  ],
  theme: { gradient: 'from-cyan-950 via-slate-950 to-blue-950', text: 'text-cyan-300', button: 'bg-cyan-500', border: 'border-cyan-400/30' }
} as const;
