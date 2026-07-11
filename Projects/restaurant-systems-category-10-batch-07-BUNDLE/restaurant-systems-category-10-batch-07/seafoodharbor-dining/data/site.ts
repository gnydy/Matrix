export const site = {
  name: "SeafoodHarbor Dining",
  segment: "Seafood restaurants",
  positioning: "Coastal seafood website with fresh-catch menu and table booking",
  layout: "coastal visual story with freshness board",
  accent: "#0284c7",
  dark: "#061923",
  light: "#f0f9ff",
  cta: "Reserve seaside table",
  audience: "Seafood restaurants, coastal dining venues, fish markets with dine-in",
  useCase: "Promote fresh catch, reservations, tasting platters, delivery seafood boxes, and chef prep dashboard.",
  tone: "fresh, coastal, premium casual",
  features: ["Fresh catch board", "Sea-view reservation CTA", "Seafood box ordering", "Kitchen prep status"],
  metrics: ["36 kg fresh catch", "58 covers booked", "12 seafood boxes", "98% freshness score"],
  modules: ["Catch board", "Table booking", "Box orders", "Prep tracking"],
  menu: ["Grilled seabream", "Lobster linguine", "Calamari plate", "Harbor seafood platter"],
  roles: ["Restaurant manager", "Fishmonger chef", "Reservation host"],
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
