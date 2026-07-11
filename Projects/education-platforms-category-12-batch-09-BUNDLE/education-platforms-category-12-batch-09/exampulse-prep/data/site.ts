export const site = {
  name: 'ExamPulse Prep',
  initials: 'EP',
  tagline: 'Exam preparation platform',
  description: 'A polished education platform frontend for test-prep centers and online exam coaches. It includes LMS-style pages, student dashboard, teacher dashboard, progress tracking, admin operations, mock data, and commercial UI sections.',
  client: 'Test-prep centers and online exam coaches',
  useCase: 'Organize question banks, mock exams, revision schedules, and performance analytics.',
  audience: 'Students preparing for exams',
  tone: 'Focused, urgent, results-oriented',
  hero: 'Make exam preparation measurable instead of chaotic.',
  layout: 'Exam prep dashboard layout',
  price: 'EGP 19,000 - 40,000',
  features: ["Mock exam center", "Question bank cards", "Weakness analytics", "Revision planner", "Score forecast UI"],
  courses: ["SAT Math Sprint", "IELTS Reading", "High School Physics", "Accounting Revision"],
  personas: ["Exam Coach", "Student", "Parent", "Content Author"],
  metrics: [
    { label: 'Active learners', value: '2,320', trend: '+9% this month' },
    { label: 'Course completion', value: '80%', trend: 'tracked by cohort' },
    { label: 'Instructor reviews', value: '268', trend: 'pending feedback UI' },
    { label: 'Certificates', value: '456', trend: 'credential mock' }
  ],
  theme: { gradient: 'from-red-950 via-slate-950 to-rose-950', text: 'text-red-300', button: 'bg-red-500', border: 'border-red-400/30' }
} as const;
