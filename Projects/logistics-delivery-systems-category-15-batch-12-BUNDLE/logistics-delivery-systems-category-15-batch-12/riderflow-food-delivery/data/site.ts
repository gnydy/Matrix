export const site = {
  name: 'RiderFlow Food Delivery',
  slug: 'riderflow-food-delivery',
  category: 'Logistics & Delivery Systems',
  industry: 'Food Delivery',
  client: 'Food delivery platform',
  audience: 'Food delivery startups, restaurant fleets, cloud kitchens',
  positioning: 'A rider operations template for restaurant pickup, dispatch zones, rider availability, and delivery exceptions.',
  visual: 'Zone dispatch map concept, rider roster, restaurant pickup SLA, and delivery exception cards',
  complexity: 'Advanced',
  hero: 'Coordinate riders, restaurants, pickup windows, and delivery exceptions in one fast interface.',
  cta: 'Open Rider Board',
  accent: '#dc2626',
  dark: '#450a0a',
  metrics: [
  {
    "label": "Active shipments",
    "value": "2,936",
    "note": "+12.4%"
  },
  {
    "label": "On-time rate",
    "value": "92.8%",
    "note": "SLA protected"
  },
  {
    "label": "Open exceptions",
    "value": "26",
    "note": "Needs review"
  },
  {
    "label": "Fleet utilization",
    "value": "76%",
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
    "id": "LG-08001",
    "customer": "Northstar Retail",
    "route": "Cairo → Giza",
    "status": "Delivered",
    "eta": "09:30",
    "risk": "Low"
  },
  {
    "id": "LG-08002",
    "customer": "BlueCart Egypt",
    "route": "Alexandria → Cairo",
    "status": "Awaiting pickup",
    "eta": "11:15",
    "risk": "Medium"
  },
  {
    "id": "LG-08003",
    "customer": "MedPlus Distribution",
    "route": "6 October → Nasr City",
    "status": "Customs review",
    "eta": "13:45",
    "risk": "Low"
  },
  {
    "id": "LG-08004",
    "customer": "Urban Home",
    "route": "Port Said → Cairo",
    "status": "In transit",
    "eta": "16:20",
    "risk": "Low"
  },
  {
    "id": "LG-08005",
    "customer": "Prime Foods",
    "route": "Maadi → New Cairo",
    "status": "Out for delivery",
    "eta": "18:10",
    "risk": "Medium"
  },
  {
    "id": "LG-08006",
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
    "score": "91%",
    "status": "Exception"
  },
  {
    "name": "Karim Nabil",
    "vehicle": "Bike 88",
    "zone": "East",
    "score": "92%",
    "status": "Available"
  },
  {
    "name": "Mina Sameh",
    "vehicle": "Truck 17",
    "zone": "Airport",
    "score": "93%",
    "status": "On route"
  },
  {
    "name": "Youssef Ali",
    "vehicle": "EV 11",
    "zone": "Downtown",
    "score": "94%",
    "status": "Break"
  },
  {
    "name": "Nour Hassan",
    "vehicle": "Van 322",
    "zone": "New Cairo",
    "score": "95%",
    "status": "Loading"
  }
],
  routes: [
  {
    "name": "Priority SLA lane",
    "stops": 17,
    "distance": "110 km",
    "health": "Optimized"
  },
  {
    "name": "Dense urban cluster",
    "stops": 40,
    "distance": "50 km",
    "health": "Traffic risk"
  },
  {
    "name": "Regional transfer",
    "stops": 8,
    "distance": "268 km",
    "health": "On schedule"
  },
  {
    "name": "Recovery route",
    "stops": 13,
    "distance": "77 km",
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
