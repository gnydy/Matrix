export const site = {
  name: "Pizzeria Pulse POS Web",
  segment: "Pizzerias and casual dining",
  positioning: "Pizza ordering storefront with operations dashboard",
  layout: "playful menu board with cart drawer visual",
  accent: "#ea580c",
  dark: "#2a1003",
  light: "#fff7ed",
  cta: "Build your pizza",
  audience: "Pizza shops, casual restaurants, delivery restaurants",
  useCase: "Sell custom pizzas with topping UI, delivery tracker, kitchen tickets, and branch performance cards.",
  tone: "energetic, family, ordering-focused",
  features: ["Pizza builder", "Topping matrix", "Kitchen ticket wall", "Branch delivery monitor"],
  metrics: ["212 pies sold", "38 custom builds", "24 min delivery", "6 branch alerts"],
  modules: ["Pizza builder", "Kitchen tickets", "Branch monitor", "Offer cards"],
  menu: ["Margherita grande", "Pepperoni blast", "Truffle mushroom", "Nutella calzone"],
  roles: ["Store manager", "Kitchen maker", "Delivery coordinator"],
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
