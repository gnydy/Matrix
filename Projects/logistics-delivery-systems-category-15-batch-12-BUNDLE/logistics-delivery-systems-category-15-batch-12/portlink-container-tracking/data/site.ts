export const site = {
  name: 'PortLink Container Tracking',
  slug: 'portlink-container-tracking',
  category: 'Logistics & Delivery Systems',
  industry: 'Container Logistics',
  client: 'Shipping and container logistics company',
  audience: 'Shipping lines, freight forwarders, importers, logistics brokers',
  positioning: 'A container tracking interface for port milestones, vessel ETA, demurrage risk, documents, and consignee updates.',
  visual: 'Maritime tracking layout with vessel cards, container milestones, ETA risks, and document readiness',
  complexity: 'Advanced',
  hero: 'Track containers, vessels, documents, and demurrage risk before delays become expensive.',
  cta: 'Track Container',
  accent: '#0369a1',
  dark: '#0c4a6e',
  metrics: [
  {
    "label": "Active shipments",
    "value": "3,347",
    "note": "+12.4%"
  },
  {
    "label": "On-time rate",
    "value": "95.2%",
    "note": "SLA protected"
  },
  {
    "label": "Open exceptions",
    "value": "29",
    "note": "Needs review"
  },
  {
    "label": "Fleet utilization",
    "value": "79%",
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
    "id": "LG-11001",
    "customer": "Northstar Retail",
    "route": "Cairo → Giza",
    "status": "In transit",
    "eta": "09:30",
    "risk": "Low"
  },
  {
    "id": "LG-11002",
    "customer": "BlueCart Egypt",
    "route": "Alexandria → Cairo",
    "status": "Out for delivery",
    "eta": "11:15",
    "risk": "Medium"
  },
  {
    "id": "LG-11003",
    "customer": "MedPlus Distribution",
    "route": "6 October → Nasr City",
    "status": "Delayed",
    "eta": "13:45",
    "risk": "High"
  },
  {
    "id": "LG-11004",
    "customer": "Urban Home",
    "route": "Port Said → Cairo",
    "status": "Delivered",
    "eta": "16:20",
    "risk": "Low"
  },
  {
    "id": "LG-11005",
    "customer": "Prime Foods",
    "route": "Maadi → New Cairo",
    "status": "Awaiting pickup",
    "eta": "18:10",
    "risk": "Medium"
  },
  {
    "id": "LG-11006",
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
    "score": "94%",
    "status": "Break"
  },
  {
    "name": "Karim Nabil",
    "vehicle": "Bike 88",
    "zone": "East",
    "score": "95%",
    "status": "Loading"
  },
  {
    "name": "Mina Sameh",
    "vehicle": "Truck 17",
    "zone": "Airport",
    "score": "96%",
    "status": "Exception"
  },
  {
    "name": "Youssef Ali",
    "vehicle": "EV 11",
    "zone": "Downtown",
    "score": "82%",
    "status": "Available"
  },
  {
    "name": "Nour Hassan",
    "vehicle": "Van 322",
    "zone": "New Cairo",
    "score": "83%",
    "status": "On route"
  }
],
  routes: [
  {
    "name": "Priority SLA lane",
    "stops": 15,
    "distance": "119 km",
    "health": "Optimized"
  },
  {
    "name": "Dense urban cluster",
    "stops": 34,
    "distance": "53 km",
    "health": "Traffic risk"
  },
  {
    "name": "Regional transfer",
    "stops": 11,
    "distance": "286 km",
    "health": "On schedule"
  },
  {
    "name": "Recovery route",
    "stops": 13,
    "distance": "83 km",
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
