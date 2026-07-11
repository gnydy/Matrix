export const site = {
  name: "HealthyBowl Ordering",
  segment: "Healthy restaurants and salad bars",
  positioning: "Nutrition-first ordering UI with meal plans",
  layout: "clean wellness interface with macro cards",
  accent: "#65a30d",
  dark: "#142006",
  light: "#f7fee7",
  cta: "Build healthy bowl",
  audience: "Healthy food brands, salad bars, meal-prep restaurants",
  useCase: "Sell bowls, subscriptions, calories-based meals, and show nutrition dashboard for customers.",
  tone: "clean, healthy, data-oriented",
  features: ["Macro calculator", "Bowl builder", "Meal plan subscription", "Nutrition dashboard"],
  metrics: ["128 bowls sold", "41 meal plans", "520 kcal avg meal", "16 repeat customers"],
  modules: ["Nutrition menu", "Subscription cards", "Customer health preferences", "Prep queue"],
  menu: ["Protein power bowl", "Vegan crunch bowl", "Keto chicken plate", "Green detox juice"],
  roles: ["Nutrition manager", "Kitchen prep lead", "Subscription admin"],
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
