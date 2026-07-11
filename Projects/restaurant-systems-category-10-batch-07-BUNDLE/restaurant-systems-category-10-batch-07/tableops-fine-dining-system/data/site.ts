export const site = {
  name: "TableOps Fine Dining System",
  segment: "Fine dining restaurant groups",
  positioning: "Premium reservation-first restaurant website with dining room intelligence",
  layout: "split editorial hero with reservation console",
  accent: "#7c2d12",
  dark: "#180b05",
  light: "#fff7ed",
  cta: "Reserve a VIP table",
  audience: "Luxury restaurants, chef-led venues, boutique hospitality groups",
  useCase: "Sell a premium restaurant experience with reservations, tasting menu, private dining, and manager dashboard.",
  tone: "refined, editorial, dark-luxury",
  features: ["Chef tasting menu", "Private dining inquiries", "VIP reservation board", "Guest preference notes"],
  metrics: ["96 booked covers", "4.8 guest rating", "18 min avg table turn", "12 VIP requests"],
  modules: ["Reservation intelligence", "Table status map", "Guest notes", "Private event lead capture"],
  menu: ["Charred sea bass", "Truffle risotto", "Aged ribeye", "Citrus panna cotta"],
  roles: ["Host manager", "Dining room captain", "Executive chef"],
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
