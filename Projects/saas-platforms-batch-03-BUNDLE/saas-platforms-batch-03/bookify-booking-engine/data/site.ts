export const site = {
      name: "Bookify Booking Engine",
      slug: "bookify-booking-engine",
      tagline: "Bookings, availability, and payments without friction",
      description: "Availability calendar, booking flow, staff schedules, deposits, and customer reminders.",
      industry: "Booking SaaS",
      audience: "Clinics, salons, consultants, hotels, service providers",
      useCase: "Availability calendar, booking flow, staff schedules, deposits, and customer reminders.",
      layout: "Calendar-first hero with booking preview",
      visualTone: "reservation management interface",
      complexity: "Intermediate-Advanced",
      price: "$69-$249",
      accent: "from-purple-300 via-indigo-400 to-blue-500",
      surface: "bg-slate-950",
      features: [
  "Availability calendar",
  "Booking flow mock",
  "Staff schedule",
  "Deposit payment UI",
  "Reminder settings",
  "Customer portal"
],
      metrics: [
  {
    "value": "33%",
    "label": "more completed bookings"
  },
  {
    "value": "1.8k",
    "label": "reservations mock"
  },
  {
    "value": "11",
    "label": "service types"
  },
  {
    "value": "2min",
    "label": "setup flow"
  }
],
      plans: [
  "Booking Start",
  "Service Pro",
  "Venue Enterprise"
],
      workflow: [
  "Set services",
  "Publish availability",
  "Accept bookings",
  "Send reminders"
],
      integrations: [
  "Google Calendar",
  "Stripe",
  "WhatsApp",
  "Zoom",
  "SMS Gateway",
  "CRM"
],
      screens: [
  "Booking calendar",
  "Service catalog",
  "Customer portal",
  "Reminder center"
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
