export const site = {
  name: "VeganLeaf Kitchen",
  segment: "Vegan restaurants",
  positioning: "Plant-based restaurant storefront with subscriptions and impact UI",
  layout: "mission-led homepage with product cards and impact metrics",
  accent: "#15803d",
  dark: "#052e13",
  light: "#f0fdf4",
  cta: "Start plant-based order",
  audience: "Vegan restaurants, plant-based cafes, sustainable food brands",
  useCase: "Sell vegan meals, weekly plans, sustainability story, pickup orders, and kitchen prep status.",
  tone: "ethical, modern, wellness-led",
  features: ["Plant-based menu", "Weekly vegan plans", "Impact metrics", "Prep status"],
  metrics: ["186 plant meals", "2.4t CO₂ saved mock", "52 weekly plans", "11 pickup slots"],
  modules: ["Impact dashboard", "Meal plans", "Pickup flow", "Kitchen prep"],
  menu: ["Jackfruit wrap", "Green curry bowl", "Vegan cheesecake", "Protein smoothie"],
  roles: ["Brand founder", "Kitchen lead", "Subscription manager"],
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
