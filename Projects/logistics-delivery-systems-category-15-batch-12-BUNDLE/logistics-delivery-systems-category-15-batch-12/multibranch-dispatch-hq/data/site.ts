export const site = {
  name: 'MultiBranch Dispatch HQ',
  slug: 'multibranch-dispatch-hq',
  category: 'Logistics & Delivery Systems',
  industry: 'Multi-branch Logistics',
  client: 'Multi-branch delivery company',
  audience: 'Large courier networks, franchised delivery businesses, regional logistics operators',
  positioning: 'A headquarters-level dashboard for branches, dispatch capacity, local SLAs, revenue by region, and operational exceptions.',
  visual: 'Executive HQ layout with branch comparison, SLA heatcards, revenue overview, and exception escalation',
  complexity: 'Advanced',
  hero: 'Compare branches, dispatch capacity, SLA performance, and exceptions from headquarters.',
  cta: 'Open HQ Control',
  accent: '#64748b',
  dark: '#111827',
  metrics: [
  {
    "label": "Active shipments",
    "value": "4,443",
    "note": "+12.4%"
  },
  {
    "label": "On-time rate",
    "value": "96.1%",
    "note": "SLA protected"
  },
  {
    "label": "Open exceptions",
    "value": "37",
    "note": "Needs review"
  },
  {
    "label": "Fleet utilization",
    "value": "87%",
    "note": "Capacity live"
  }
],
  features: [
  "Live shipment timeline with delivery milestones and exception states",
  "Driver and vehicle visibility with utilization and status scoring",
  "Route planning board with SLA risk, stops, ETA, and operating capacity",
  "Customer-facing tracking experience ready to connect with a backend later",
  "Operations dashboard designed for managers, dispatchers, and support teams",
  "Mock data architecture that can be replaced with API responses quickly"
],
  modules: [
  {
    "title": "Tracking Console",
    "description": "Search shipments, view ETA, status, route movement, and exception history."
  },
  {
    "title": "Dispatch Board",
    "description": "Assign drivers, rebalance routes, and recover delayed orders from one board."
  },
  {
    "title": "Fleet & Drivers",
    "description": "Monitor vehicle readiness, driver status, compliance, and performance signals."
  },
  {
    "title": "Customer Updates",
    "description": "Prepare notifications, delivery preferences, and support escalation flows."
  }
],
  orders: [
  {
    "id": "LG-19001",
    "customer": "Northstar Retail",
    "route": "Cairo → Giza",
    "status": "Delayed",
    "eta": "09:30",
    "risk": "High"
  },
  {
    "id": "LG-19002",
    "customer": "BlueCart Egypt",
    "route": "Alexandria → Cairo",
    "status": "Delivered",
    "eta": "11:15",
    "risk": "Low"
  },
  {
    "id": "LG-19003",
    "customer": "MedPlus Distribution",
    "route": "6 October → Nasr City",
    "status": "Awaiting pickup",
    "eta": "13:45",
    "risk": "Medium"
  },
  {
    "id": "LG-19004",
    "customer": "Urban Home",
    "route": "Port Said → Cairo",
    "status": "Customs review",
    "eta": "16:20",
    "risk": "Low"
  },
  {
    "id": "LG-19005",
    "customer": "Prime Foods",
    "route": "Maadi → New Cairo",
    "status": "In transit",
    "eta": "18:10",
    "risk": "Low"
  },
  {
    "id": "LG-19006",
    "customer": "Atlas Components",
    "route": "Airport Hub → Downtown",
    "status": "Out for delivery",
    "eta": "21:00",
    "risk": "Medium"
  }
],
  drivers: [
  {
    "name": "Omar Adel",
    "vehicle": "Van 204",
    "zone": "West",
    "score": "87%",
    "status": "Available"
  },
  {
    "name": "Karim Nabil",
    "vehicle": "Bike 88",
    "zone": "East",
    "score": "88%",
    "status": "On route"
  },
  {
    "name": "Mina Sameh",
    "vehicle": "Truck 17",
    "zone": "Airport",
    "score": "89%",
    "status": "Break"
  },
  {
    "name": "Youssef Ali",
    "vehicle": "EV 11",
    "zone": "Downtown",
    "score": "90%",
    "status": "Loading"
  },
  {
    "name": "Nour Hassan",
    "vehicle": "Van 322",
    "zone": "New Cairo",
    "score": "91%",
    "status": "Exception"
  }
],
  routes: [
  {
    "name": "Priority SLA lane",
    "stops": 18,
    "distance": "143 km",
    "health": "Optimized"
  },
  {
    "name": "Dense urban cluster",
    "stops": 33,
    "distance": "61 km",
    "health": "Traffic risk"
  },
  {
    "name": "Regional transfer",
    "stops": 11,
    "distance": "334 km",
    "health": "On schedule"
  },
  {
    "name": "Recovery route",
    "stops": 12,
    "distance": "99 km",
    "health": "Needs dispatch"
  }
],
  timeline: [
    { step: 'Order received', detail: 'Customer request created and validated', state: 'Done' },
    { step: 'Hub scan', detail: 'Package scanned at operational hub', state: 'Done' },
    { step: 'Driver assigned', detail: 'Best route and driver selected', state: 'Active' },
    { step: 'Delivery proof', detail: 'Signature, image, OTP, or customer confirmation', state: 'Pending' }
  ]
};

export type Site = typeof site;
