export const site = {
  name: "StreetFood Market OS",
  segment: "Food courts and street food brands",
  positioning: "Vendor-style street food marketplace UI",
  layout: "marketplace grid with vendor cards",
  accent: "#ca8a04",
  dark: "#211500",
  light: "#fefce8",
  cta: "Explore vendors",
  audience: "Food courts, pop-up markets, street food halls",
  useCase: "Display multiple vendors, menus, events, pickup zones, and market operations status.",
  tone: "busy, colorful, marketplace-like",
  features: ["Vendor cards", "Pickup zone status", "Event schedule", "Market sales board"],
  metrics: ["18 active vendors", "520 market orders", "5 pickup zones", "3 live events"],
  modules: ["Vendor marketplace", "Pickup zones", "Event schedule", "Sales monitor"],
  menu: ["Korean tacos", "Shawarma bowl", "Bao buns", "Churro basket"],
  roles: ["Market operator", "Vendor admin", "Pickup marshal"],
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
