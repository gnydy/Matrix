export const site = {
  name: "HotelDining Suite",
  segment: "Hotel restaurants and room service",
  positioning: "Hotel dining and room-service control template",
  layout: "hospitality portal with room-service dashboard",
  accent: "#0ea5e9",
  dark: "#082033",
  light: "#f0f9ff",
  cta: "Order room service",
  audience: "Hotels, resorts, serviced apartments with dining operations",
  useCase: "Manage room-service menu, restaurant reservation, guest profiles, kitchen queue, and delivery to rooms.",
  tone: "hotel-grade, polished, service-focused",
  features: ["Room service menu", "Guest profile mock", "Table reservations", "Floor delivery tracker"],
  metrics: ["74 room orders", "21 table bookings", "8 floor runners", "94% guest satisfaction"],
  modules: ["Room ordering", "Restaurant booking", "Guest profiles", "Runner dispatch"],
  menu: ["Club sandwich", "Seafood dinner", "Breakfast tray", "Chocolate mousse"],
  roles: ["F&B manager", "Room service captain", "Hotel concierge"],
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
