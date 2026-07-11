export const site = {
  name: 'CorporateCompliance Academy',
  initials: 'CA',
  tagline: 'Compliance and policy training platform',
  description: 'A polished education platform frontend for companies needing internal compliance training. It includes LMS-style pages, student dashboard, teacher dashboard, progress tracking, admin operations, mock data, and commercial UI sections.',
  client: 'Companies needing internal compliance training',
  useCase: 'Organize mandatory training, deadlines, acknowledgements, and audit-friendly reporting.',
  audience: 'Corporate compliance teams',
  tone: 'Strict, accountable, audit-ready',
  hero: 'Make mandatory training trackable, defensible, and clear.',
  layout: 'Compliance governance layout',
  price: 'EGP 23,000 - 48,000',
  features: ["Policy acknowledgements", "Deadline matrix", "Audit export mock", "Risk learning paths", "Manager reports"],
  courses: ["Data Privacy", "Workplace Conduct", "Financial Controls", "Safety Basics"],
  personas: ["Compliance Officer", "HR Manager", "Employee", "Auditor"],
  metrics: [
    { label: 'Active learners', value: '3,580', trend: '+11% this month' },
    { label: 'Course completion', value: '89%', trend: 'tracked by cohort' },
    { label: 'Instructor reviews', value: '367', trend: 'pending feedback UI' },
    { label: 'Certificates', value: '609', trend: 'credential mock' }
  ],
  theme: { gradient: 'from-zinc-950 via-slate-950 to-neutral-950', text: 'text-zinc-300', button: 'bg-zinc-500', border: 'border-zinc-400/30' }
} as const;
