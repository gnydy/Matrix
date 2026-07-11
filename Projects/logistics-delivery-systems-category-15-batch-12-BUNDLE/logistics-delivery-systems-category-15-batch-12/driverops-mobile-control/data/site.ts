export const site = {
  name: 'DriverOps Mobile Control',
  slug: 'driverops-mobile-control',
  category: 'Logistics & Delivery Systems',
  industry: 'Driver Management',
  client: 'Driver-heavy transport operation',
  audience: 'Delivery companies, ride fleets, transport contractors',
  positioning: 'A driver management dashboard for shifts, onboarding, compliance, documents, and performance coaching.',
  visual: 'Driver profile cards, shift heatmap, compliance document status, and performance score panels',
  complexity: 'Medium',
  hero: 'Manage driver onboarding, shifts, documents, and performance before issues hit operations.',
  cta: 'Review Driver Ops',
  accent: '#9333ea',
  dark: '#3b0764',
  metrics: [
  {
    "label": "Active shipments",
    "value": "3,210",
    "note": "+12.4%"
  },
  {
    "label": "On-time rate",
    "value": "94.1%",
    "note": "SLA protected"
  },
  {
    "label": "Open exceptions",
    "value": "28",
    "note": "Needs review"
  },
  {
    "label": "Fleet utilization",
    "value": "78%",
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
    "id": "LG-10001",
    "customer": "Northstar Retail",
    "route": "Cairo → Giza",
    "status": "Customs review",
    "eta": "09:30",
    "risk": "Low"
  },
  {
    "id": "LG-10002",
    "customer": "BlueCart Egypt",
    "route": "Alexandria → Cairo",
    "status": "In transit",
    "eta": "11:15",
    "risk": "Low"
  },
  {
    "id": "LG-10003",
    "customer": "MedPlus Distribution",
    "route": "6 October → Nasr City",
    "status": "Out for delivery",
    "eta": "13:45",
    "risk": "Medium"
  },
  {
    "id": "LG-10004",
    "customer": "Urban Home",
    "route": "Port Said → Cairo",
    "status": "Delayed",
    "eta": "16:20",
    "risk": "High"
  },
  {
    "id": "LG-10005",
    "customer": "Prime Foods",
    "route": "Maadi → New Cairo",
    "status": "Delivered",
    "eta": "18:10",
    "risk": "Low"
  },
  {
    "id": "LG-10006",
    "customer": "Atlas Components",
    "route": "Airport Hub → Downtown",
    "status": "Awaiting pickup",
    "eta": "21:00",
    "risk": "Medium"
  }
],
  drivers: [
  {
    "name": "Omar Adel",
    "vehicle": "Van 204",
    "zone": "West",
    "score": "93%",
    "status": "On route"
  },
  {
    "name": "Karim Nabil",
    "vehicle": "Bike 88",
    "zone": "East",
    "score": "94%",
    "status": "Break"
  },
  {
    "name": "Mina Sameh",
    "vehicle": "Truck 17",
    "zone": "Airport",
    "score": "95%",
    "status": "Loading"
  },
  {
    "name": "Youssef Ali",
    "vehicle": "EV 11",
    "zone": "Downtown",
    "score": "96%",
    "status": "Exception"
  },
  {
    "name": "Nour Hassan",
    "vehicle": "Van 322",
    "zone": "New Cairo",
    "score": "82%",
    "status": "Available"
  }
],
  routes: [
  {
    "name": "Priority SLA lane",
    "stops": 14,
    "distance": "116 km",
    "health": "Optimized"
  },
  {
    "name": "Dense urban cluster",
    "stops": 33,
    "distance": "52 km",
    "health": "Traffic risk"
  },
  {
    "name": "Regional transfer",
    "stops": 10,
    "distance": "280 km",
    "health": "On schedule"
  },
  {
    "name": "Recovery route",
    "stops": 12,
    "distance": "81 km",
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
