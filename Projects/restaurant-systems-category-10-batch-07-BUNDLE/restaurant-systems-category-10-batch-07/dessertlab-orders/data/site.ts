export const site = {
  name: "DessertLab Orders",
  segment: "Dessert bars and ice cream shops",
  positioning: "Dessert ecommerce-style restaurant template with operations panel",
  layout: "visual menu gallery with order queue cards",
  accent: "#db2777",
  dark: "#2a0a19",
  light: "#fdf2f8",
  cta: "Build dessert box",
  audience: "Dessert bars, ice cream shops, waffle houses, sweet brands",
  useCase: "Sell dessert boxes, manage custom orders, display seasonal menu, and track prep/delivery states.",
  tone: "sweet, visual, conversion-focused",
  features: ["Dessert box builder", "Custom order flow", "Seasonal drops", "Prep/delivery tracking"],
  metrics: ["103 dessert boxes", "19 custom cakes", "8 seasonal drops", "26 delivery tickets"],
  modules: ["Box builder", "Order queue", "Seasonal menu", "Delivery tracker"],
  menu: ["Brownie tower", "Lotus waffle", "Gelato cup", "Mini cheesecake box"],
  roles: ["Shop manager", "Pastry crew", "Delivery coordinator"],
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
