export const site = {
  name: 'ReturnLoop Reverse Logistics',
  slug: 'returnloop-reverse-logistics',
  category: 'Logistics & Delivery Systems',
  industry: 'Reverse Logistics',
  client: 'E-commerce returns operation',
  audience: 'E-commerce stores, marketplaces, returns teams, 3PL providers',
  positioning: 'A reverse logistics template for return requests, inspection steps, pickup scheduling, refund stages, and warehouse disposition.',
  visual: 'Return workflow board, inspection states, refund timeline, and warehouse disposition cards',
  complexity: 'Medium',
  hero: 'Turn returns from a cost center into a controlled, visible, and measurable workflow.',
  cta: 'Process Returns',
  accent: '#be123c',
  dark: '#4c0519',
  metrics: [
  {
    "label": "Active shipments",
    "value": "3,621",
    "note": "+12.4%"
  },
  {
    "label": "On-time rate",
    "value": "97.4%",
    "note": "SLA protected"
  },
  {
    "label": "Open exceptions",
    "value": "31",
    "note": "Needs review"
  },
  {
    "label": "Fleet utilization",
    "value": "81%",
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
    "id": "LG-13001",
    "customer": "Northstar Retail",
    "route": "Cairo → Giza",
    "status": "Delayed",
    "eta": "09:30",
    "risk": "High"
  },
  {
    "id": "LG-13002",
    "customer": "BlueCart Egypt",
    "route": "Alexandria → Cairo",
    "status": "Delivered",
    "eta": "11:15",
    "risk": "Low"
  },
  {
    "id": "LG-13003",
    "customer": "MedPlus Distribution",
    "route": "6 October → Nasr City",
    "status": "Awaiting pickup",
    "eta": "13:45",
    "risk": "Medium"
  },
  {
    "id": "LG-13004",
    "customer": "Urban Home",
    "route": "Port Said → Cairo",
    "status": "Customs review",
    "eta": "16:20",
    "risk": "Low"
  },
  {
    "id": "LG-13005",
    "customer": "Prime Foods",
    "route": "Maadi → New Cairo",
    "status": "In transit",
    "eta": "18:10",
    "risk": "Low"
  },
  {
    "id": "LG-13006",
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
    "score": "96%",
    "status": "Exception"
  },
  {
    "name": "Karim Nabil",
    "vehicle": "Bike 88",
    "zone": "East",
    "score": "82%",
    "status": "Available"
  },
  {
    "name": "Mina Sameh",
    "vehicle": "Truck 17",
    "zone": "Airport",
    "score": "83%",
    "status": "On route"
  },
  {
    "name": "Youssef Ali",
    "vehicle": "EV 11",
    "zone": "Downtown",
    "score": "84%",
    "status": "Break"
  },
  {
    "name": "Nour Hassan",
    "vehicle": "Van 322",
    "zone": "New Cairo",
    "score": "85%",
    "status": "Loading"
  }
],
  routes: [
  {
    "name": "Priority SLA lane",
    "stops": 17,
    "distance": "125 km",
    "health": "Optimized"
  },
  {
    "name": "Dense urban cluster",
    "stops": 36,
    "distance": "55 km",
    "health": "Traffic risk"
  },
  {
    "name": "Regional transfer",
    "stops": 9,
    "distance": "298 km",
    "health": "On schedule"
  },
  {
    "name": "Recovery route",
    "stops": 12,
    "distance": "87 km",
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
