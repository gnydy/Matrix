export const site = {
  name: "RamenHouse Queue",
  segment: "Ramen and noodle bars",
  positioning: "Queue-based restaurant website with waitlist and kitchen ticketing",
  layout: "compact waitlist UI with steam-inspired hero",
  accent: "#b91c1c",
  dark: "#240808",
  light: "#fef2f2",
  cta: "Join waitlist",
  audience: "Ramen shops, noodle bars, high-turnover casual restaurants",
  useCase: "Manage waitlist, counter seats, menu specials, kitchen bowls queue, and customer SMS mock state.",
  tone: "compact, efficient, high-demand",
  features: ["Live waitlist", "Counter seat map", "Noodle queue", "Specials board"],
  metrics: ["24 min wait", "17 guests queued", "88 bowls served", "9 seats turning"],
  modules: ["Waitlist", "Seat map", "Kitchen queue", "Specials status"],
  menu: ["Tonkotsu ramen", "Spicy miso bowl", "Gyoza plate", "Matcha pudding"],
  roles: ["Floor host", "Ramen chef", "Queue manager"],
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
