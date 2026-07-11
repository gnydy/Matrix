export const site = {
  name: 'ResearchBridge Academy',
  initials: 'RA',
  tagline: 'Research training and postgraduate learning platform',
  description: 'A polished education platform frontend for research centers and postgraduate academies. It includes LMS-style pages, student dashboard, teacher dashboard, progress tracking, admin operations, mock data, and commercial UI sections.',
  client: 'Research centers and postgraduate academies',
  useCase: 'Manage research methods courses, supervisor feedback, resources, and milestones.',
  audience: 'Postgraduate learners',
  tone: 'Serious, academic, research-oriented',
  hero: 'Organize research training with milestones, supervisors, and academic resources.',
  layout: 'Research portal layout',
  price: 'EGP 24,000 - 48,000',
  features: ["Research milestone tracker", "Supervisor notes", "Resource library", "Methodology modules", "Progress panel"],
  courses: ["Research Methods", "Academic Writing", "Data Analysis", "Thesis Planning"],
  personas: ["Research Director", "Supervisor", "Researcher", "Coordinator"],
  metrics: [
    { label: 'Active learners', value: '3,020', trend: '+14% this month' },
    { label: 'Course completion', value: '85%', trend: 'tracked by cohort' },
    { label: 'Instructor reviews', value: '323', trend: 'pending feedback UI' },
    { label: 'Certificates', value: '541', trend: 'credential mock' }
  ],
  theme: { gradient: 'from-blue-950 via-slate-950 to-sky-950', text: 'text-blue-300', button: 'bg-blue-500', border: 'border-blue-400/30' }
} as const;
