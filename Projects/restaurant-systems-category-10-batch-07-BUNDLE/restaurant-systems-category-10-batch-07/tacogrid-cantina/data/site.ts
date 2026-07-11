export const site = {
  name: "TacoGrid Cantina",
  segment: "Mexican restaurants and cantinas",
  positioning: "Vibrant restaurant ordering and events template",
  layout: "festival-like homepage with offer tiles",
  accent: "#f97316",
  dark: "#271000",
  light: "#fff7ed",
  cta: "Order fiesta pack",
  audience: "Mexican restaurants, cantinas, casual food brands",
  useCase: "Sell party boxes, table booking, happy-hour events, and manage kitchen/delivery status.",
  tone: "vibrant, social, offer-focused",
  features: ["Party box ordering", "Happy hour calendar", "Table booking", "Kitchen status tiles"],
  metrics: ["67 fiesta packs", "22 reservations", "4 live offers", "31 delivery orders"],
  modules: ["Offer tiles", "Event calendar", "Reservation flow", "Delivery monitor"],
  menu: ["Birria tacos", "Loaded nachos", "Chicken quesadilla", "Churros cup"],
  roles: ["Cantina manager", "Event host", "Kitchen expeditor"],
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
