export const site = {
  name: "BistroReserve Urban",
  segment: "Bistros and modern casual restaurants",
  positioning: "Urban bistro website with booking and private dining funnel",
  layout: "magazine blocks with table availability panel",
  accent: "#4f46e5",
  dark: "#0d0b2a",
  light: "#eef2ff",
  cta: "Check table availability",
  audience: "Bistros, casual fine dining venues, neighborhood restaurants",
  useCase: "Support table booking, event inquiries, seasonal menu presentation, and daily manager overview.",
  tone: "urban, polished, friendly",
  features: ["Availability timeline", "Seasonal menu blocks", "Private dining lead form", "Guest feedback cards"],
  metrics: ["73 covers tonight", "11 waitlist guests", "4 private leads", "4.7 satisfaction"],
  modules: ["Availability panel", "Lead capture", "Guest CRM", "Daily service notes"],
  menu: ["Duck confit", "Burrata salad", "Short rib pasta", "Chocolate fondant"],
  roles: ["General manager", "Host team", "Events coordinator"],
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
