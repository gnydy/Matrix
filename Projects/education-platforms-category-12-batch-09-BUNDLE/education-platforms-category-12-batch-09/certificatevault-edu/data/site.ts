export const site = {
  name: 'CertificateVault Edu',
  initials: 'CE',
  tagline: 'Certification and credential learning portal',
  description: 'A polished education platform frontend for professional certification providers and training centers. It includes LMS-style pages, student dashboard, teacher dashboard, progress tracking, admin operations, mock data, and commercial UI sections.',
  client: 'Professional certification providers and training centers',
  useCase: 'Manage certification tracks, assessment readiness, credential previews, and completion states.',
  audience: 'Professionals seeking credentials',
  tone: 'Formal, trust-heavy, credential-focused',
  hero: 'Turn training completion into credible certification journeys.',
  layout: 'Certification authority layout',
  price: 'EGP 22,000 - 46,000',
  features: ["Credential preview", "Exam readiness meter", "Certification tracks", "Verification UI mock", "Completion timeline"],
  courses: ["Project Management Certificate", "Data Analyst Certificate", "HR Specialist Certificate", "Cloud Admin Certificate"],
  personas: ["Certification Admin", "Instructor", "Candidate", "Employer"],
  metrics: [
    { label: 'Active learners', value: '3,440', trend: '+10% this month' },
    { label: 'Course completion', value: '88%', trend: 'tracked by cohort' },
    { label: 'Instructor reviews', value: '356', trend: 'pending feedback UI' },
    { label: 'Certificates', value: '592', trend: 'credential mock' }
  ],
  theme: { gradient: 'from-purple-950 via-slate-950 to-indigo-950', text: 'text-purple-300', button: 'bg-purple-500', border: 'border-purple-400/30' }
} as const;
