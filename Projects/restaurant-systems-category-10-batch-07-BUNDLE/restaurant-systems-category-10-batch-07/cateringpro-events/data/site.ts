export const site = {
  name: "CateringPro Events",
  segment: "Catering companies",
  positioning: "Catering sales website with event quote and operations UI",
  layout: "proposal-led landing with event package builder",
  accent: "#16a34a",
  dark: "#06220f",
  light: "#f0fdf4",
  cta: "Request catering quote",
  audience: "Catering companies, event food providers, corporate meal suppliers",
  useCase: "Capture catering leads, display event packages, manage menus, crews, and event production status.",
  tone: "professional, event-focused, operational",
  features: ["Event quote builder", "Package comparison", "Crew assignment board", "Banquet production checklist"],
  metrics: ["23 quote requests", "11 events this week", "94% prep complete", "6 crew teams"],
  modules: ["Quote builder", "Package cards", "Crew board", "Event timeline"],
  menu: ["Corporate lunch buffet", "Wedding plated dinner", "Canape reception", "Breakfast meeting box"],
  roles: ["Sales manager", "Event planner", "Kitchen production lead"],
  nav: [
    { label: 'Menu', href: '/menu' },
    { label: 'Order', href: '/order' },
    { label: 'Reservations', href: '/reservations' },
    { label: 'Kitchen', href: '/kitchen' },
    { label: 'Delivery', href: '/delivery' },
    { label: 'Dashboard', href: '/dashboard' },
  ],
};

export const orders = [
  { id: '#R-1048', customer: 'Maya Samir', type: 'Dine-in', status: 'Plating', value: '$86.40', eta: '8 min' },
  { id: '#R-1049', customer: 'Omar Lee', type: 'Delivery', status: 'Cooking', value: '$42.00', eta: '19 min' },
  { id: '#R-1050', customer: 'Nora Patel', type: 'Pickup', status: 'Ready', value: '$31.20', eta: 'Now' },
  { id: '#R-1051', customer: 'Client Event', type: 'Catering', status: 'Scheduled', value: '$420.00', eta: 'Tomorrow' },
];

export const reservations = [
  { time: '18:30', party: '2 guests', table: 'T04', status: 'Confirmed' },
  { time: '19:00', party: '6 guests', table: 'T11', status: 'Deposit paid' },
  { time: '20:15', party: '4 guests', table: 'T07', status: 'VIP notes' },
  { time: '21:00', party: '8 guests', table: 'Private room', status: 'Pending call' },
];

export const kitchenTickets = [
  { station: 'Hot line', load: 'High', item: site.menu[0], tickets: 12 },
  { station: 'Cold prep', load: 'Normal', item: site.menu[1], tickets: 7 },
  { station: 'Dessert', load: 'Normal', item: site.menu[3], tickets: 5 },
  { station: 'Expo', load: 'Watch', item: 'Order coordination', tickets: 18 },
];
