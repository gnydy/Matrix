export const site = {
  name: "MultiBranch Restaurant HQ",
  segment: "Multi-branch restaurant companies",
  positioning: "Restaurant chain HQ website and admin dashboard template",
  layout: "executive dashboard plus branch selector",
  accent: "#1d4ed8",
  dark: "#071a33",
  light: "#eff6ff",
  cta: "Review branch performance",
  audience: "Restaurant chains, franchise operators, multi-location food brands",
  useCase: "Present brand, branches, menu, delivery channels, branch KPIs, and admin control room mock.",
  tone: "enterprise, scalable, franchise-ready",
  features: ["Branch selector", "Unified menu manager", "Branch KPI dashboard", "Franchise lead capture"],
  metrics: ["12 branches", "2,140 orders today", "93% SLA", "6 franchise leads"],
  modules: ["Branch HQ", "Menu control", "Franchise funnel", "Operations KPIs"],
  menu: ["Signature burger", "Family meal box", "Kids combo", "Premium dessert"],
  roles: ["CEO/owner", "Regional manager", "Menu operations lead"],
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
