export const site = {
  name: 'AirCargo Ops Board',
  slug: 'aircargo-ops-board',
  category: 'Logistics & Delivery Systems',
  industry: 'Air Cargo',
  client: 'Air cargo operation',
  audience: 'Air cargo teams, airport cargo handlers, freight forwarders',
  positioning: 'A cargo airline or airport cargo interface for airway bills, flight capacity, loading status, and customs release.',
  visual: 'Flight board, airway bill tables, loading cards, customs release states, and capacity indicators',
  complexity: 'Advanced',
  hero: 'Control airway bills, capacity, cargo loading, and customs release from a sharp operations board.',
  cta: 'Open Air Cargo Board',
  accent: '#1d4ed8',
  dark: '#172554',
  metrics: [
  {
    "label": "Active shipments",
    "value": "4,169",
    "note": "+12.4%"
  },
  {
    "label": "On-time rate",
    "value": "94.8%",
    "note": "SLA protected"
  },
  {
    "label": "Open exceptions",
    "value": "35",
    "note": "Needs review"
  },
  {
    "label": "Fleet utilization",
    "value": "85%",
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
    "id": "LG-17001",
    "customer": "Northstar Retail",
    "route": "Cairo → Giza",
    "status": "In transit",
    "eta": "09:30",
    "risk": "Low"
  },
  {
    "id": "LG-17002",
    "customer": "BlueCart Egypt",
    "route": "Alexandria → Cairo",
    "status": "Out for delivery",
    "eta": "11:15",
    "risk": "Medium"
  },
  {
    "id": "LG-17003",
    "customer": "MedPlus Distribution",
    "route": "6 October → Nasr City",
    "status": "Delayed",
    "eta": "13:45",
    "risk": "High"
  },
  {
    "id": "LG-17004",
    "customer": "Urban Home",
    "route": "Port Said → Cairo",
    "status": "Delivered",
    "eta": "16:20",
    "risk": "Low"
  },
  {
    "id": "LG-17005",
    "customer": "Prime Foods",
    "route": "Maadi → New Cairo",
    "status": "Awaiting pickup",
    "eta": "18:10",
    "risk": "Medium"
  },
  {
    "id": "LG-17006",
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
    "distance": "137 km",
    "health": "Optimized"
  },
  {
    "name": "Dense urban cluster",
    "stops": 40,
    "distance": "59 km",
    "health": "Traffic risk"
  },
  {
    "name": "Regional transfer",
    "stops": 9,
    "distance": "322 km",
    "health": "On schedule"
  },
  {
    "name": "Recovery route",
    "stops": 13,
    "distance": "95 km",
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
