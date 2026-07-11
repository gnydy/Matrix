export const site = {
  name: "FoodTruck RouteBoard",
  segment: "Food trucks and mobile kitchens",
  positioning: "Mobile food brand website with route, preorder, and stock UX",
  layout: "route-first interface with location timeline",
  accent: "#9333ea",
  dark: "#1c0b2e",
  light: "#faf5ff",
  cta: "Find today route",
  audience: "Food trucks, pop-up food brands, mobile catering businesses",
  useCase: "Show route schedule, enable pre-orders, track sold-out items, and manage location operations.",
  tone: "mobile, energetic, location-driven",
  features: ["Route calendar", "Location-based preorder", "Sold-out status", "Truck operations panel"],
  metrics: ["5 stops today", "79 preorders", "3 sold-out items", "14 min service time"],
  modules: ["Route board", "Preorder menu", "Stock status", "Location analytics"],
  menu: ["Loaded taco box", "Street burger", "Lemonade jar", "Chili fries"],
  roles: ["Truck owner", "Crew lead", "Route coordinator"],
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
