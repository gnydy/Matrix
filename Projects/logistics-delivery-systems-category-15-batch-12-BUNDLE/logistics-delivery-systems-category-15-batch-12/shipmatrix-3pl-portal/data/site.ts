export const site = {
  name: 'ShipMatrix 3PL Portal',
  slug: 'shipmatrix-3pl-portal',
  category: 'Logistics & Delivery Systems',
  industry: '3PL Services',
  client: 'Third-party logistics provider',
  audience: '3PL companies and their B2B customers',
  positioning: 'A client-facing 3PL portal for orders, inventory movement, billing snapshots, tickets, and SLA performance.',
  visual: 'Client portal with account selector, SLA cards, invoice preview, and ticket workflow',
  complexity: 'Advanced',
  hero: 'Give every logistics client a transparent portal for orders, inventory, billing, and SLA performance.',
  cta: 'Open Client Portal',
  accent: '#16a34a',
  dark: '#052e16',
  metrics: [
  {
    "label": "Active shipments",
    "value": "2,799",
    "note": "+12.4%"
  },
  {
    "label": "On-time rate",
    "value": "91.7%",
    "note": "SLA protected"
  },
  {
    "label": "Open exceptions",
    "value": "25",
    "note": "Needs review"
  },
  {
    "label": "Fleet utilization",
    "value": "75%",
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
    "id": "LG-07001",
    "customer": "Northstar Retail",
    "route": "Cairo → Giza",
    "status": "Delayed",
    "eta": "09:30",
    "risk": "High"
  },
  {
    "id": "LG-07002",
    "customer": "BlueCart Egypt",
    "route": "Alexandria → Cairo",
    "status": "Delivered",
    "eta": "11:15",
    "risk": "Low"
  },
  {
    "id": "LG-07003",
    "customer": "MedPlus Distribution",
    "route": "6 October → Nasr City",
    "status": "Awaiting pickup",
    "eta": "13:45",
    "risk": "Medium"
  },
  {
    "id": "LG-07004",
    "customer": "Urban Home",
    "route": "Port Said → Cairo",
    "status": "Customs review",
    "eta": "16:20",
    "risk": "Low"
  },
  {
    "id": "LG-07005",
    "customer": "Prime Foods",
    "route": "Maadi → New Cairo",
    "status": "In transit",
    "eta": "18:10",
    "risk": "Low"
  },
  {
    "id": "LG-07006",
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
    "score": "90%",
    "status": "Loading"
  },
  {
    "name": "Karim Nabil",
    "vehicle": "Bike 88",
    "zone": "East",
    "score": "91%",
    "status": "Exception"
  },
  {
    "name": "Mina Sameh",
    "vehicle": "Truck 17",
    "zone": "Airport",
    "score": "92%",
    "status": "Available"
  },
  {
    "name": "Youssef Ali",
    "vehicle": "EV 11",
    "zone": "Downtown",
    "score": "93%",
    "status": "On route"
  },
  {
    "name": "Nour Hassan",
    "vehicle": "Van 322",
    "zone": "New Cairo",
    "score": "94%",
    "status": "Break"
  }
],
  routes: [
  {
    "name": "Priority SLA lane",
    "stops": 16,
    "distance": "107 km",
    "health": "Optimized"
  },
  {
    "name": "Dense urban cluster",
    "stops": 39,
    "distance": "49 km",
    "health": "Traffic risk"
  },
  {
    "name": "Regional transfer",
    "stops": 11,
    "distance": "262 km",
    "health": "On schedule"
  },
  {
    "name": "Recovery route",
    "stops": 12,
    "distance": "75 km",
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
