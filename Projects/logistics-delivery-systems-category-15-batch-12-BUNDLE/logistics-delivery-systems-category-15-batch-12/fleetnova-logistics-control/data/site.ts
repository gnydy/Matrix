export const site = {
  name: 'FleetNova Logistics Control',
  slug: 'fleetnova-logistics-control',
  category: 'Logistics & Delivery Systems',
  industry: 'Fleet Operations',
  client: 'Fleet-based logistics company',
  audience: 'Transport firms, van fleets, and regional logistics operators',
  positioning: 'A fleet performance interface focused on vehicle utilization, driver shifts, maintenance, and dispatch efficiency.',
  visual: 'Fleet cards, maintenance alerts, utilization bars, and operations overview',
  complexity: 'Advanced',
  hero: 'Control vehicles, drivers, maintenance, and dispatch from one operational cockpit.',
  cta: 'View Fleet Board',
  accent: '#0f766e',
  dark: '#042f2e',
  metrics: [
  {
    "label": "Active shipments",
    "value": "2,114",
    "note": "+12.4%"
  },
  {
    "label": "On-time rate",
    "value": "93.2%",
    "note": "SLA protected"
  },
  {
    "label": "Open exceptions",
    "value": "20",
    "note": "Needs review"
  },
  {
    "label": "Fleet utilization",
    "value": "70%",
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
    "id": "LG-02001",
    "customer": "Northstar Retail",
    "route": "Cairo → Giza",
    "status": "Delivered",
    "eta": "09:30",
    "risk": "Low"
  },
  {
    "id": "LG-02002",
    "customer": "BlueCart Egypt",
    "route": "Alexandria → Cairo",
    "status": "Awaiting pickup",
    "eta": "11:15",
    "risk": "Medium"
  },
  {
    "id": "LG-02003",
    "customer": "MedPlus Distribution",
    "route": "6 October → Nasr City",
    "status": "Customs review",
    "eta": "13:45",
    "risk": "Low"
  },
  {
    "id": "LG-02004",
    "customer": "Urban Home",
    "route": "Port Said → Cairo",
    "status": "In transit",
    "eta": "16:20",
    "risk": "Low"
  },
  {
    "id": "LG-02005",
    "customer": "Prime Foods",
    "route": "Maadi → New Cairo",
    "status": "Out for delivery",
    "eta": "18:10",
    "risk": "Medium"
  },
  {
    "id": "LG-02006",
    "customer": "Atlas Components",
    "route": "Airport Hub → Downtown",
    "status": "Delayed",
    "eta": "21:00",
    "risk": "High"
  }
],
  drivers: [
  {
    "name": "Omar Adel",
    "vehicle": "Van 204",
    "zone": "West",
    "score": "85%",
    "status": "Loading"
  },
  {
    "name": "Karim Nabil",
    "vehicle": "Bike 88",
    "zone": "East",
    "score": "86%",
    "status": "Exception"
  },
  {
    "name": "Mina Sameh",
    "vehicle": "Truck 17",
    "zone": "Airport",
    "score": "87%",
    "status": "Available"
  },
  {
    "name": "Youssef Ali",
    "vehicle": "EV 11",
    "zone": "Downtown",
    "score": "88%",
    "status": "On route"
  },
  {
    "name": "Nour Hassan",
    "vehicle": "Van 322",
    "zone": "New Cairo",
    "score": "89%",
    "status": "Break"
  }
],
  routes: [
  {
    "name": "Priority SLA lane",
    "stops": 16,
    "distance": "92 km",
    "health": "Optimized"
  },
  {
    "name": "Dense urban cluster",
    "stops": 34,
    "distance": "44 km",
    "health": "Traffic risk"
  },
  {
    "name": "Regional transfer",
    "stops": 10,
    "distance": "232 km",
    "health": "On schedule"
  },
  {
    "name": "Recovery route",
    "stops": 13,
    "distance": "65 km",
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
