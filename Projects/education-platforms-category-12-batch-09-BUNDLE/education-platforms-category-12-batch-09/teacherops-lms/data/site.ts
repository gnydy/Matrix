export const site = {
  name: 'TeacherOps LMS',
  initials: 'TL',
  tagline: 'Teacher-first classroom operations platform',
  description: 'A polished education platform frontend for schools, academies, and independent teachers. It includes LMS-style pages, student dashboard, teacher dashboard, progress tracking, admin operations, mock data, and commercial UI sections.',
  client: 'Schools, academies, and independent teachers',
  useCase: 'Give teachers planning, materials, student lists, attendance, and assessment UI.',
  audience: 'Teachers and education operators',
  tone: 'Operational, practical, fast',
  hero: 'Give teachers a clean command center for daily classroom work.',
  layout: 'Teacher operations layout',
  price: 'EGP 18,000 - 34,000',
  features: ["Lesson planner", "Student roster", "Assessment board", "Material library", "Attendance states"],
  courses: ["Classroom Planning", "Assessment Design", "Digital Teaching", "Student Support"],
  personas: ["Teacher", "Academic Coordinator", "Student", "Parent"],
  metrics: [
    { label: 'Active learners', value: '3,160', trend: '+8% this month' },
    { label: 'Course completion', value: '86%', trend: 'tracked by cohort' },
    { label: 'Instructor reviews', value: '334', trend: 'pending feedback UI' },
    { label: 'Certificates', value: '558', trend: 'credential mock' }
  ],
  theme: { gradient: 'from-lime-950 via-slate-950 to-green-950', text: 'text-lime-300', button: 'bg-lime-500', border: 'border-lime-400/30' }
} as const;
