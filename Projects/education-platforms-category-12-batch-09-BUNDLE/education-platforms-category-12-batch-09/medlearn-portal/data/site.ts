export const site = {
  name: 'MedLearn Portal',
  initials: 'MP',
  tagline: 'Medical education and clinical training interface',
  description: 'A polished education platform frontend for medical academies, hospitals, and health training centers. It includes LMS-style pages, student dashboard, teacher dashboard, progress tracking, admin operations, mock data, and commercial UI sections.',
  client: 'Medical academies, hospitals, and health training centers',
  useCase: 'Manage clinical courses, case discussions, attendance, and training progress.',
  audience: 'Medical educators',
  tone: 'Clean, precise, clinical',
  hero: 'A controlled learning portal for healthcare training teams.',
  layout: 'Clinical learning layout',
  price: 'EGP 26,000 - 52,000',
  features: ["Clinical case modules", "Rotation schedules", "Instructor notes", "Assessment checklist", "CME-style certificate UI"],
  courses: ["Patient Safety", "Emergency Protocols", "Clinical Communication", "Diagnostics Basics"],
  personas: ["Medical Director", "Trainer", "Resident", "Nurse Trainee"],
  metrics: [
    { label: 'Active learners', value: '1,760', trend: '+12% this month' },
    { label: 'Course completion', value: '76%', trend: 'tracked by cohort' },
    { label: 'Instructor reviews', value: '224', trend: 'pending feedback UI' },
    { label: 'Certificates', value: '388', trend: 'credential mock' }
  ],
  theme: { gradient: 'from-emerald-950 via-slate-950 to-teal-950', text: 'text-emerald-300', button: 'bg-emerald-500', border: 'border-emerald-400/30' }
} as const;
