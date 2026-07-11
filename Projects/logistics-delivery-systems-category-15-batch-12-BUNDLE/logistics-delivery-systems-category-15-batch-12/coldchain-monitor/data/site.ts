export const site = {
  name: 'ColdChain Monitor',
  slug: 'coldchain-monitor',
  category: 'Logistics & Delivery Systems',
  industry: 'Cold Chain',
  client: 'Cold-chain delivery provider',
  audience: 'Pharma distribution, food logistics, frozen goods delivery',
  positioning: 'A specialized logistics template for temperature-sensitive shipments, sensor alerts, route deviation, and compliance reports.',
  visual: 'Sensor dashboard with temperature bands, compliance states, and incident timeline',
  complexity: 'Advanced',
  hero: 'Protect temperature-sensitive shipments with route, sensor, and compliance visibility.',
  cta: 'Monitor Shipments',
  accent: '#0891b2',
  dark: '#164e63',
  metrics: [
  {
    "label": "Active shipments",
    "value": "2,525",
    "note": "+12.4%"
  },
  {
    "label": "On-time rate",
    "value": "96.5%",
    "note": "SLA protected"
  },
  {
    "label": "Open exceptions",
    "value": "23",
    "note": "Needs review"
  },
  {
    "label": "Fleet utilization",
    "value": "73%",
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
    "id": "LG-05001",
    "customer": "Northstar Retail",
    "route": "Cairo → Giza",
    "status": "In transit",
    "eta": "09:30",
    "risk": "Low"
  },
  {
    "id": "LG-05002",
    "customer": "BlueCart Egypt",
    "route": "Alexandria → Cairo",
    "status": "Out for delivery",
    "eta": "11:15",
    "risk": "Medium"
  },
  {
    "id": "LG-05003",
    "customer": "MedPlus Distribution",
    "route": "6 October → Nasr City",
    "status": "Delayed",
    "eta": "13:45",
    "risk": "High"
  },
  {
    "id": "LG-05004",
    "customer": "Urban Home",
    "route": "Port Said → Cairo",
    "status": "Delivered",
    "eta": "16:20",
    "risk": "Low"
  },
  {
    "id": "LG-05005",
    "customer": "Prime Foods",
    "route": "Maadi → New Cairo",
    "status": "Awaiting pickup",
    "eta": "18:10",
    "risk": "Medium"
  },
  {
    "id": "LG-05006",
    "customer": "Atlas Components",
    "route": "Airport Hub → Downtown",
    "status": "Customs review",
    "eta": "21:00",
    "risk": "Low"
  }
],
  drivers: [
  {
    "name": "Omar Adel",
    "vehicle": "Van 204",
    "zone": "West",
    "score": "88%",
    "status": "On route"
  },
  {
    "name": "Karim Nabil",
    "vehicle": "Bike 88",
    "zone": "East",
    "score": "89%",
    "status": "Break"
  },
  {
    "name": "Mina Sameh",
    "vehicle": "Truck 17",
    "zone": "Airport",
    "score": "90%",
    "status": "Loading"
  },
  {
    "name": "Youssef Ali",
    "vehicle": "EV 11",
    "zone": "Downtown",
    "score": "91%",
    "status": "Exception"
  },
  {
    "name": "Nour Hassan",
    "vehicle": "Van 322",
    "zone": "New Cairo",
    "score": "92%",
    "status": "Available"
  }
],
  routes: [
  {
    "name": "Priority SLA lane",
    "stops": 14,
    "distance": "101 km",
    "health": "Optimized"
  },
  {
    "name": "Dense urban cluster",
    "stops": 37,
    "distance": "47 km",
    "health": "Traffic risk"
  },
  {
    "name": "Regional transfer",
    "stops": 9,
    "distance": "250 km",
    "health": "On schedule"
  },
  {
    "name": "Recovery route",
    "stops": 13,
    "distance": "71 km",
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
