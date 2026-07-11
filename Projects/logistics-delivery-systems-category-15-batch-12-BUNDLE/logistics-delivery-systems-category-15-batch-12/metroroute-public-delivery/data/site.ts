export const site = {
  name: 'MetroRoute Public Delivery',
  slug: 'metroroute-public-delivery',
  category: 'Logistics & Delivery Systems',
  industry: 'Urban Logistics',
  client: 'Urban delivery operator',
  audience: 'Urban delivery teams, same-day logistics companies, city courier operators',
  positioning: 'A dense city logistics interface for delivery zones, courier density, traffic risk, and live dispatch balancing.',
  visual: 'Urban grid, zone density cards, route balancing indicators, and delay risk panels',
  complexity: 'Advanced',
  hero: 'Balance dense city routes, traffic pressure, courier density, and delivery windows in real time.',
  cta: 'Balance Zones',
  accent: '#ea580c',
  dark: '#7c2d12',
  metrics: [
  {
    "label": "Active shipments",
    "value": "3,484",
    "note": "+12.4%"
  },
  {
    "label": "On-time rate",
    "value": "96.3%",
    "note": "SLA protected"
  },
  {
    "label": "Open exceptions",
    "value": "30",
    "note": "Needs review"
  },
  {
    "label": "Fleet utilization",
    "value": "80%",
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
    "id": "LG-12001",
    "customer": "Northstar Retail",
    "route": "Cairo → Giza",
    "status": "Out for delivery",
    "eta": "09:30",
    "risk": "Medium"
  },
  {
    "id": "LG-12002",
    "customer": "BlueCart Egypt",
    "route": "Alexandria → Cairo",
    "status": "Delayed",
    "eta": "11:15",
    "risk": "High"
  },
  {
    "id": "LG-12003",
    "customer": "MedPlus Distribution",
    "route": "6 October → Nasr City",
    "status": "Delivered",
    "eta": "13:45",
    "risk": "Low"
  },
  {
    "id": "LG-12004",
    "customer": "Urban Home",
    "route": "Port Said → Cairo",
    "status": "Awaiting pickup",
    "eta": "16:20",
    "risk": "Medium"
  },
  {
    "id": "LG-12005",
    "customer": "Prime Foods",
    "route": "Maadi → New Cairo",
    "status": "Customs review",
    "eta": "18:10",
    "risk": "Low"
  },
  {
    "id": "LG-12006",
    "customer": "Atlas Components",
    "route": "Airport Hub → Downtown",
    "status": "In transit",
    "eta": "21:00",
    "risk": "Low"
  }
],
  drivers: [
  {
    "name": "Omar Adel",
    "vehicle": "Van 204",
    "zone": "West",
    "score": "95%",
    "status": "Loading"
  },
  {
    "name": "Karim Nabil",
    "vehicle": "Bike 88",
    "zone": "East",
    "score": "96%",
    "status": "Exception"
  },
  {
    "name": "Mina Sameh",
    "vehicle": "Truck 17",
    "zone": "Airport",
    "score": "82%",
    "status": "Available"
  },
  {
    "name": "Youssef Ali",
    "vehicle": "EV 11",
    "zone": "Downtown",
    "score": "83%",
    "status": "On route"
  },
  {
    "name": "Nour Hassan",
    "vehicle": "Van 322",
    "zone": "New Cairo",
    "score": "84%",
    "status": "Break"
  }
],
  routes: [
  {
    "name": "Priority SLA lane",
    "stops": 16,
    "distance": "122 km",
    "health": "Optimized"
  },
  {
    "name": "Dense urban cluster",
    "stops": 35,
    "distance": "54 km",
    "health": "Traffic risk"
  },
  {
    "name": "Regional transfer",
    "stops": 8,
    "distance": "292 km",
    "health": "On schedule"
  },
  {
    "name": "Recovery route",
    "stops": 11,
    "distance": "85 km",
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
