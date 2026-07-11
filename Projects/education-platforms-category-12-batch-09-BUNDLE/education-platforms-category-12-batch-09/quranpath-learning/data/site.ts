export const site = {
  name: 'QuranPath Learning',
  initials: 'QL',
  tagline: 'Structured Quran and Arabic learning portal',
  description: 'A polished education platform frontend for islamic education centers and online quran academies. It includes LMS-style pages, student dashboard, teacher dashboard, progress tracking, admin operations, mock data, and commercial UI sections.',
  client: 'Islamic education centers and online Quran academies',
  useCase: 'Manage memorization paths, teacher sessions, attendance, and progress notes respectfully.',
  audience: 'Quran academies and learners',
  tone: 'Respectful, calm, organized',
  hero: 'A respectful learning experience for Quran, Arabic, and structured progress.',
  layout: 'Calm academy layout',
  price: 'EGP 18,000 - 36,000',
  features: ["Memorization progress", "Teacher session cards", "Attendance notes", "Level-based curriculum", "Parent/student dashboard"],
  courses: ["Quran Memorization Level 1", "Arabic Reading", "Tajweed Basics", "Islamic Studies Starter"],
  personas: ["Academy Admin", "Teacher", "Student", "Parent"],
  metrics: [
    { label: 'Active learners', value: '2,460', trend: '+10% this month' },
    { label: 'Course completion', value: '81%', trend: 'tracked by cohort' },
    { label: 'Instructor reviews', value: '279', trend: 'pending feedback UI' },
    { label: 'Certificates', value: '473', trend: 'credential mock' }
  ],
  theme: { gradient: 'from-teal-950 via-slate-950 to-emerald-950', text: 'text-teal-300', button: 'bg-teal-500', border: 'border-teal-400/30' }
} as const;
