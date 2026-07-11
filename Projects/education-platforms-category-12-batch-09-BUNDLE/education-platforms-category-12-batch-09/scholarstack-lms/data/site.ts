export const site = {
  name: 'ScholarStack LMS',
  initials: 'SL',
  tagline: 'University-grade digital learning portal',
  description: 'A polished education platform frontend for private universities, institutes, and large academies. It includes LMS-style pages, student dashboard, teacher dashboard, progress tracking, admin operations, mock data, and commercial UI sections.',
  client: 'Private universities, institutes, and large academies',
  useCase: 'Centralized LMS with courses, cohorts, instructors, student analytics, and governance.',
  audience: 'Academic institutions',
  tone: 'Institutional, structured, trustworthy',
  hero: 'Run a serious digital campus without losing academic control.',
  layout: 'Academic command layout',
  price: 'EGP 28,000 - 55,000',
  features: ["Academic program pages", "Cohort enrollment UX", "Instructor workload view", "Student progress intelligence", "Accreditation-ready content structure"],
  courses: ["Business Strategy 401", "Applied AI Foundations", "Marketing Analytics", "Operations Management"],
  personas: ["Dean Office", "Instructor", "Student Affairs", "Student"],
  metrics: [
    { label: 'Active learners', value: '1,340', trend: '+9% this month' },
    { label: 'Course completion', value: '73%', trend: 'tracked by cohort' },
    { label: 'Instructor reviews', value: '191', trend: 'pending feedback UI' },
    { label: 'Certificates', value: '337', trend: 'credential mock' }
  ],
  theme: { gradient: 'from-indigo-950 via-slate-950 to-indigo-900', text: 'text-indigo-300', button: 'bg-indigo-500', border: 'border-indigo-400/30' }
} as const;
