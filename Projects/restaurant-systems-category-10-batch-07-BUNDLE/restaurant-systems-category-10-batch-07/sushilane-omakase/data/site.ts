export const site = {
  name: "SushiLane Omakase",
  segment: "Sushi and Japanese restaurants",
  positioning: "Minimal Japanese dining site with omakase reservations",
  layout: "minimal gallery layout with reservation strip",
  accent: "#0f766e",
  dark: "#061a18",
  light: "#ecfdf5",
  cta: "Book omakase seat",
  audience: "Sushi bars, Japanese restaurants, omakase counters",
  useCase: "Showcase menus, chef story, reservation slots, sake pairings, and daily kitchen preparation board.",
  tone: "minimal, calm, premium",
  features: ["Omakase seat booking", "Sake pairing cards", "Chef counter capacity", "Daily prep board"],
  metrics: ["18 counter seats", "6 omakase slots", "42 sake pairings", "97% seat utilization"],
  modules: ["Seat calendar", "Menu ritual", "Chef notes", "Sake inventory mock"],
  menu: ["Omakase twelve-course", "Toro nigiri", "Miso black cod", "Yuzu sorbet"],
  roles: ["Head chef", "Reservation host", "Sommelier"],
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
