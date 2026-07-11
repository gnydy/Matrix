export const site = {
  name: 'QuickShip Marketplace Logistics',
  slug: 'quickship-marketplace-logistics',
  category: 'Logistics & Delivery Systems',
  industry: 'Marketplace Delivery',
  client: 'Marketplace shipping team',
  audience: 'Marketplaces, multi-vendor platforms, seller operations teams',
  positioning: 'A marketplace logistics backoffice for seller shipments, courier allocation, failed orders, and customer claims.',
  visual: 'Seller shipment queues, courier comparison blocks, claim cards, and shipping performance tables',
  complexity: 'Advanced',
  hero: 'Coordinate seller shipments, courier partners, failed deliveries, and buyer claims from one dashboard.',
  cta: 'Open Marketplace Ops',
  accent: '#0d9488',
  dark: '#134e4a',
  metrics: [
  {
    "label": "Active shipments",
    "value": "3,758",
    "note": "+12.4%"
  },
  {
    "label": "On-time rate",
    "value": "91.5%",
    "note": "SLA protected"
  },
  {
    "label": "Open exceptions",
    "value": "32",
    "note": "Needs review"
  },
  {
    "label": "Fleet utilization",
    "value": "82%",
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
    "id": "LG-14001",
    "customer": "Northstar Retail",
    "route": "Cairo → Giza",
    "status": "Delivered",
    "eta": "09:30",
    "risk": "Low"
  },
  {
    "id": "LG-14002",
    "customer": "BlueCart Egypt",
    "route": "Alexandria → Cairo",
    "status": "Awaiting pickup",
    "eta": "11:15",
    "risk": "Medium"
  },
  {
    "id": "LG-14003",
    "customer": "MedPlus Distribution",
    "route": "6 October → Nasr City",
    "status": "Customs review",
    "eta": "13:45",
    "risk": "Low"
  },
  {
    "id": "LG-14004",
    "customer": "Urban Home",
    "route": "Port Said → Cairo",
    "status": "In transit",
    "eta": "16:20",
    "risk": "Low"
  },
  {
    "id": "LG-14005",
    "customer": "Prime Foods",
    "route": "Maadi → New Cairo",
    "status": "Out for delivery",
    "eta": "18:10",
    "risk": "Medium"
  },
  {
    "id": "LG-14006",
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
    "score": "82%",
    "status": "Available"
  },
  {
    "name": "Karim Nabil",
    "vehicle": "Bike 88",
    "zone": "East",
    "score": "83%",
    "status": "On route"
  },
  {
    "name": "Mina Sameh",
    "vehicle": "Truck 17",
    "zone": "Airport",
    "score": "84%",
    "status": "Break"
  },
  {
    "name": "Youssef Ali",
    "vehicle": "EV 11",
    "zone": "Downtown",
    "score": "85%",
    "status": "Loading"
  },
  {
    "name": "Nour Hassan",
    "vehicle": "Van 322",
    "zone": "New Cairo",
    "score": "86%",
    "status": "Exception"
  }
],
  routes: [
  {
    "name": "Priority SLA lane",
    "stops": 18,
    "distance": "128 km",
    "health": "Optimized"
  },
  {
    "name": "Dense urban cluster",
    "stops": 37,
    "distance": "56 km",
    "health": "Traffic risk"
  },
  {
    "name": "Regional transfer",
    "stops": 10,
    "distance": "304 km",
    "health": "On schedule"
  },
  {
    "name": "Recovery route",
    "stops": 13,
    "distance": "89 km",
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
