export const site = {
  name: "CloudKitchen Command",
  segment: "Cloud kitchens and virtual brands",
  positioning: "Multi-brand restaurant operating system UI",
  layout: "dashboard-heavy operational overview",
  accent: "#2563eb",
  dark: "#07142b",
  light: "#eff6ff",
  cta: "Monitor brands",
  audience: "Cloud kitchens, dark kitchens, virtual restaurant operators",
  useCase: "Control multiple delivery brands, menus, kitchens, orders, and performance from one operational UI.",
  tone: "technical, operational, high-control",
  features: ["Multi-brand order board", "Menu sync status", "Kitchen capacity cards", "Aggregator performance"],
  metrics: ["7 active brands", "421 orders today", "82% capacity", "4 aggregator channels"],
  modules: ["Brand switcher", "Aggregator sync", "Kitchen load", "Performance reports"],
  menu: ["Burger virtual brand", "Sushi box brand", "Healthy bowl brand", "Dessert express brand"],
  roles: ["Operations director", "Kitchen controller", "Brand manager"],
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
