export const site = {
  name: 'RoutePulse Delivery OS',
  slug: 'routepulse-delivery-os',
  category: 'Logistics & Delivery Systems',
  industry: 'Last-mile Delivery',
  client: 'Last-mile delivery startup',
  audience: 'Delivery startups, courier teams, and e-commerce fulfillment teams',
  positioning: 'A command center for daily delivery operations, failed attempts, driver allocation, and route health.',
  visual: 'Map-first operational dashboard with route strips and alert-heavy status cards',
  complexity: 'Advanced',
  hero: 'Dispatch, track, and recover delivery operations from one live command center.',
  cta: 'Optimize Today\'s Routes',
  accent: '#2563eb',
  dark: '#0f172a',
  metrics: [
  {
    "label": "Active shipments",
    "value": "1,977",
    "note": "+12.4%"
  },
  {
    "label": "On-time rate",
    "value": "92.1%",
    "note": "SLA protected"
  },
  {
    "label": "Open exceptions",
    "value": "19",
    "note": "Needs review"
  },
  {
    "label": "Fleet utilization",
    "value": "69%",
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
    "id": "LG-01001",
    "customer": "Northstar Retail",
    "route": "Cairo → Giza",
    "status": "Delayed",
    "eta": "09:30",
    "risk": "High"
  },
  {
    "id": "LG-01002",
    "customer": "BlueCart Egypt",
    "route": "Alexandria → Cairo",
    "status": "Delivered",
    "eta": "11:15",
    "risk": "Low"
  },
  {
    "id": "LG-01003",
    "customer": "MedPlus Distribution",
    "route": "6 October → Nasr City",
    "status": "Awaiting pickup",
    "eta": "13:45",
    "risk": "Medium"
  },
  {
    "id": "LG-01004",
    "customer": "Urban Home",
    "route": "Port Said → Cairo",
    "status": "Customs review",
    "eta": "16:20",
    "risk": "Low"
  },
  {
    "id": "LG-01005",
    "customer": "Prime Foods",
    "route": "Maadi → New Cairo",
    "status": "In transit",
    "eta": "18:10",
    "risk": "Low"
  },
  {
    "id": "LG-01006",
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
    "distance": "89 km",
    "health": "Optimized"
  },
  {
    "name": "Dense urban cluster",
    "stops": 33,
    "distance": "43 km",
    "health": "Traffic risk"
  },
  {
    "name": "Regional transfer",
    "stops": 9,
    "distance": "226 km",
    "health": "On schedule"
  },
  {
    "name": "Recovery route",
    "stops": 12,
    "distance": "63 km",
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
