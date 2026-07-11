export const site = {
  name: 'PharmaRoute Medical Logistics',
  slug: 'pharmaroute-medical-logistics',
  category: 'Logistics & Delivery Systems',
  industry: 'Medical Logistics',
  client: 'Medical distribution company',
  audience: 'Medical distributors, pharmacies, lab logistics, healthcare suppliers',
  positioning: 'A pharma logistics UI for batch tracking, delivery proof, route compliance, cold chain alerts, and recipient verification.',
  visual: 'Compliance-first dashboard with batches, verification, temperature alerts, and chain-of-custody cards',
  complexity: 'Advanced',
  hero: 'Move medical shipments with proof, compliance, batch visibility, and controlled delivery events.',
  cta: 'Review Chain of Custody',
  accent: '#0ea5e9',
  dark: '#0f172a',
  metrics: [
  {
    "label": "Active shipments",
    "value": "4,032",
    "note": "+12.4%"
  },
  {
    "label": "On-time rate",
    "value": "93.7%",
    "note": "SLA protected"
  },
  {
    "label": "Open exceptions",
    "value": "34",
    "note": "Needs review"
  },
  {
    "label": "Fleet utilization",
    "value": "84%",
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
    "id": "LG-16001",
    "customer": "Northstar Retail",
    "route": "Cairo → Giza",
    "status": "Customs review",
    "eta": "09:30",
    "risk": "Low"
  },
  {
    "id": "LG-16002",
    "customer": "BlueCart Egypt",
    "route": "Alexandria → Cairo",
    "status": "In transit",
    "eta": "11:15",
    "risk": "Low"
  },
  {
    "id": "LG-16003",
    "customer": "MedPlus Distribution",
    "route": "6 October → Nasr City",
    "status": "Out for delivery",
    "eta": "13:45",
    "risk": "Medium"
  },
  {
    "id": "LG-16004",
    "customer": "Urban Home",
    "route": "Port Said → Cairo",
    "status": "Delayed",
    "eta": "16:20",
    "risk": "High"
  },
  {
    "id": "LG-16005",
    "customer": "Prime Foods",
    "route": "Maadi → New Cairo",
    "status": "Delivered",
    "eta": "18:10",
    "risk": "Low"
  },
  {
    "id": "LG-16006",
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
    "score": "84%",
    "status": "Break"
  },
  {
    "name": "Karim Nabil",
    "vehicle": "Bike 88",
    "zone": "East",
    "score": "85%",
    "status": "Loading"
  },
  {
    "name": "Mina Sameh",
    "vehicle": "Truck 17",
    "zone": "Airport",
    "score": "86%",
    "status": "Exception"
  },
  {
    "name": "Youssef Ali",
    "vehicle": "EV 11",
    "zone": "Downtown",
    "score": "87%",
    "status": "Available"
  },
  {
    "name": "Nour Hassan",
    "vehicle": "Van 322",
    "zone": "New Cairo",
    "score": "88%",
    "status": "On route"
  }
],
  routes: [
  {
    "name": "Priority SLA lane",
    "stops": 15,
    "distance": "134 km",
    "health": "Optimized"
  },
  {
    "name": "Dense urban cluster",
    "stops": 39,
    "distance": "58 km",
    "health": "Traffic risk"
  },
  {
    "name": "Regional transfer",
    "stops": 8,
    "distance": "316 km",
    "health": "On schedule"
  },
  {
    "name": "Recovery route",
    "stops": 12,
    "distance": "93 km",
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
