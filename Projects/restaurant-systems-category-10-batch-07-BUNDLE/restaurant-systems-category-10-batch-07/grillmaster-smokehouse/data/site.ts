export const site = {
  name: "GrillMaster Smokehouse",
  segment: "BBQ and grill restaurants",
  positioning: "Smokehouse website with pickup, catering, and pitmaster operations",
  layout: "bold product-first layout with smokehouse production board",
  accent: "#991b1b",
  dark: "#1f0505",
  light: "#fef2f2",
  cta: "Pre-order BBQ tray",
  audience: "BBQ houses, grill restaurants, smokehouses, meat-focused brands",
  useCase: "Sell BBQ trays, promote catering, manage smoke schedule, pickup orders, and inventory states.",
  tone: "bold, rustic, operational",
  features: ["BBQ tray preorder", "Smoke schedule", "Catering inquiry", "Pit inventory board"],
  metrics: ["42 trays booked", "14 hr brisket cycle", "7 catering leads", "88% pit capacity"],
  modules: ["Preorder trays", "Smoke timer", "Catering leads", "Inventory states"],
  menu: ["Brisket tray", "Smoked ribs", "Pulled beef sandwich", "Cornbread box"],
  roles: ["Pitmaster", "Store manager", "Catering coordinator"],
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
