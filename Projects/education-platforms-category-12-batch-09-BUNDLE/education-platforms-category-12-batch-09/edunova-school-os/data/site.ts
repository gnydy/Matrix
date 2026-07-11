export const site = {
  name: 'EduNova School OS',
  initials: 'ES',
  tagline: 'K-12 school learning and parent portal',
  description: 'A polished education platform frontend for private schools and education groups. It includes LMS-style pages, student dashboard, teacher dashboard, progress tracking, admin operations, mock data, and commercial UI sections.',
  client: 'Private schools and education groups',
  useCase: 'Present classes, homework, attendance, parent updates, and teacher dashboards.',
  audience: 'Schools and parents',
  tone: 'Safe, organized, family-focused',
  hero: 'Connect school teams, parents, teachers, and students in one learning front-end.',
  layout: 'School operations layout',
  price: 'EGP 25,000 - 50,000',
  features: ["Classroom overview", "Homework board", "Attendance mock", "Parent communication", "Teacher planning dashboard"],
  courses: ["Grade 6 Science", "Math Skills", "English Reading", "Social Studies"],
  personas: ["Principal", "Teacher", "Parent", "Student"],
  metrics: [
    { label: 'Active learners', value: '2,040', trend: '+14% this month' },
    { label: 'Course completion', value: '78%', trend: 'tracked by cohort' },
    { label: 'Instructor reviews', value: '246', trend: 'pending feedback UI' },
    { label: 'Certificates', value: '422', trend: 'credential mock' }
  ],
  theme: { gradient: 'from-amber-950 via-slate-950 to-orange-950', text: 'text-amber-300', button: 'bg-amber-500', border: 'border-amber-400/30' }
} as const;
