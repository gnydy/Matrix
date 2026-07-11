export const site = {
  name: "QuickBite Delivery Hub",
  segment: "Fast food and delivery chains",
  positioning: "High-speed ordering system for delivery-first restaurants",
  layout: "conversion-first grid with live order rail",
  accent: "#dc2626",
  dark: "#1f0a0a",
  light: "#fff1f2",
  cta: "Start fast order",
  audience: "Fast food chains, burger shops, fried chicken brands",
  useCase: "Turn visitors into delivery orders with menu filters, combo cards, cart summary, and dispatch dashboard.",
  tone: "bold, fast, promotional",
  features: ["Combo builder", "Delivery ETA cards", "Kitchen queue", "Courier status tracking"],
  metrics: ["148 active orders", "22 min avg delivery", "91% on-time dispatch", "34 combo upsells"],
  modules: ["Online ordering", "Dispatch board", "Offer engine", "Kitchen queue"],
  menu: ["Double smash combo", "Spicy chicken box", "Loaded fries", "Milkshake pack"],
  roles: ["Branch manager", "Cashier", "Dispatch coordinator"],
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
