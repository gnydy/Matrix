export const site = {
  name: 'SkillForge Pro',
  initials: 'SP',
  tagline: 'Corporate training and employee upskilling suite',
  description: 'A polished education platform frontend for hr departments and enterprise training teams. It includes LMS-style pages, student dashboard, teacher dashboard, progress tracking, admin operations, mock data, and commercial UI sections.',
  client: 'HR departments and enterprise training teams',
  useCase: 'Deliver internal training paths, compliance modules, and employee capability tracking.',
  audience: 'Corporates and HR leaders',
  tone: 'Executive, performance-driven, B2B',
  hero: 'Turn employee training into a measurable operating system.',
  layout: 'Corporate performance layout',
  price: 'EGP 24,000 - 48,000',
  features: ["Employee learning paths", "Manager progress reports", "Skill gap dashboard", "Compliance deadlines", "Certificate tracking"],
  courses: ["Leadership Essentials", "Sales Enablement", "Cyber Awareness", "Excel for Operations"],
  personas: ["HR Admin", "Team Manager", "Employee", "L&D Lead"],
  metrics: [
    { label: 'Active learners', value: '1,480', trend: '+10% this month' },
    { label: 'Course completion', value: '74%', trend: 'tracked by cohort' },
    { label: 'Instructor reviews', value: '202', trend: 'pending feedback UI' },
    { label: 'Certificates', value: '354', trend: 'credential mock' }
  ],
  theme: { gradient: 'from-slate-950 via-gray-950 to-slate-900', text: 'text-slate-300', button: 'bg-slate-500', border: 'border-slate-400/30' }
} as const;
