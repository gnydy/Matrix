export const site = {
      name: "EduSphere LMS",
      slug: "edusphere-lms",
      tagline: "A modern learning platform for course businesses",
      description: "Course catalog, student dashboard, lesson progress, certificates, and instructor analytics.",
      industry: "Education / LMS",
      audience: "Academies, tutors, training companies",
      useCase: "Course catalog, student dashboard, lesson progress, certificates, and instructor analytics.",
      layout: "Learning journey hero with student progress ring",
      visualTone: "premium academy LMS",
      complexity: "Advanced",
      price: "$99-$279",
      accent: "from-indigo-300 via-violet-400 to-fuchsia-500",
      surface: "bg-slate-950",
      features: [
  "Course catalog",
  "Student progress",
  "Instructor dashboard",
  "Certificate UI",
  "Assessment mock",
  "Learning paths"
],
      metrics: [
  {
    "value": "64%",
    "label": "course completion uplift"
  },
  {
    "value": "48",
    "label": "courses mock"
  },
  {
    "value": "12k",
    "label": "lesson events"
  },
  {
    "value": "4.9",
    "label": "learner rating"
  }
],
      plans: [
  "Academy Lite",
  "LMS Growth",
  "Enterprise Learning"
],
      workflow: [
  "Create course",
  "Enroll learners",
  "Track progress",
  "Issue certificates"
],
      integrations: [
  "Zoom",
  "YouTube",
  "Stripe",
  "Google Drive",
  "Notion",
  "Discord"
],
      screens: [
  "Course library",
  "Student dashboard",
  "Instructor analytics",
  "Certificate center"
],
      nav: [
        {label:'Product', href:'/#product'},
        {label:'Pricing', href:'/pricing'},
        {label:'Dashboard', href:'/dashboard'},
        {label:'Integrations', href:'/integrations'},
        {label:'Security', href:'/security'},
        {label:'Docs', href:'/docs'}
      ]
    } as const;

    export const dashboardRows = [
      { name: 'North Region', status: 'Healthy', owner: 'Operations', score: 94, trend: '+12%' },
      { name: 'Enterprise Clients', status: 'Review', owner: 'Success', score: 81, trend: '+4%' },
      { name: 'Automation Queue', status: 'Action Needed', owner: 'Product', score: 73, trend: '-3%' },
      { name: 'Executive Report', status: 'Ready', owner: 'Finance', score: 98, trend: '+18%' }
    ];

    export const activity = [
      'New workspace created for executive demo',
      'AI recommendation generated for quarterly report',
      'Security policy updated for admin roles',
      'Integration sync completed with no failed jobs'
    ];
