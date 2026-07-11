export const site = {
  name: 'HeavyHaul Project Logistics',
  slug: 'heavyhaul-project-logistics',
  category: 'Logistics & Delivery Systems',
  industry: 'Heavy Haulage',
  client: 'Heavy equipment transport company',
  audience: 'Heavy haulage companies, construction logistics, industrial transport teams',
  positioning: 'A project logistics interface for heavy loads, permits, escort vehicles, route constraints, and staged delivery milestones.',
  visual: 'Project milestone layout with permits, route constraints, escort resources, and risk panels',
  complexity: 'Advanced',
  hero: 'Plan and monitor heavy shipments with permits, escorts, route limits, and risk controls.',
  cta: 'Open Project Plan',
  accent: '#ca8a04',
  dark: '#422006',
  metrics: [
  {
    "label": "Active shipments",
    "value": "3,895",
    "note": "+12.4%"
  },
  {
    "label": "On-time rate",
    "value": "92.6%",
    "note": "SLA protected"
  },
  {
    "label": "Open exceptions",
    "value": "33",
    "note": "Needs review"
  },
  {
    "label": "Fleet utilization",
    "value": "83%",
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
    "id": "LG-15001",
    "customer": "Northstar Retail",
    "route": "Cairo → Giza",
    "status": "Awaiting pickup",
    "eta": "09:30",
    "risk": "Medium"
  },
  {
    "id": "LG-15002",
    "customer": "BlueCart Egypt",
    "route": "Alexandria → Cairo",
    "status": "Customs review",
    "eta": "11:15",
    "risk": "Low"
  },
  {
    "id": "LG-15003",
    "customer": "MedPlus Distribution",
    "route": "6 October → Nasr City",
    "status": "In transit",
    "eta": "13:45",
    "risk": "Low"
  },
  {
    "id": "LG-15004",
    "customer": "Urban Home",
    "route": "Port Said → Cairo",
    "status": "Out for delivery",
    "eta": "16:20",
    "risk": "Medium"
  },
  {
    "id": "LG-15005",
    "customer": "Prime Foods",
    "route": "Maadi → New Cairo",
    "status": "Delayed",
    "eta": "18:10",
    "risk": "High"
  },
  {
    "id": "LG-15006",
    "customer": "Atlas Components",
    "route": "Airport Hub → Downtown",
    "status": "Delivered",
    "eta": "21:00",
    "risk": "Low"
  }
],
  drivers: [
  {
    "name": "Omar Adel",
    "vehicle": "Van 204",
    "zone": "West",
    "score": "83%",
    "status": "On route"
  },
  {
    "name": "Karim Nabil",
    "vehicle": "Bike 88",
    "zone": "East",
    "score": "84%",
    "status": "Break"
  },
  {
    "name": "Mina Sameh",
    "vehicle": "Truck 17",
    "zone": "Airport",
    "score": "85%",
    "status": "Loading"
  },
  {
    "name": "Youssef Ali",
    "vehicle": "EV 11",
    "zone": "Downtown",
    "score": "86%",
    "status": "Exception"
  },
  {
    "name": "Nour Hassan",
    "vehicle": "Van 322",
    "zone": "New Cairo",
    "score": "87%",
    "status": "Available"
  }
],
  routes: [
  {
    "name": "Priority SLA lane",
    "stops": 14,
    "distance": "131 km",
    "health": "Optimized"
  },
  {
    "name": "Dense urban cluster",
    "stops": 38,
    "distance": "57 km",
    "health": "Traffic risk"
  },
  {
    "name": "Regional transfer",
    "stops": 11,
    "distance": "310 km",
    "health": "On schedule"
  },
  {
    "name": "Recovery route",
    "stops": 11,
    "distance": "91 km",
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
