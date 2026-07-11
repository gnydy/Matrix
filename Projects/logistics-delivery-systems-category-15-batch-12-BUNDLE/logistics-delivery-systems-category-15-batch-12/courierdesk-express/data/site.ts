export const site = {
  name: 'CourierDesk Express',
  slug: 'courierdesk-express',
  category: 'Logistics & Delivery Systems',
  industry: 'Courier Service',
  client: 'Local courier service',
  audience: 'Courier offices, messenger services, local delivery teams',
  positioning: 'A simple but premium courier dashboard for pickup requests, live tracking, SLA alerts, and customer communication.',
  visual: 'Ticket-like job queues with courier status, proof-of-delivery blocks, and SLA chips',
  complexity: 'Medium',
  hero: 'Manage pickup, handoff, delivery proof, and customer updates without operational confusion.',
  cta: 'Open Courier Desk',
  accent: '#f97316',
  dark: '#431407',
  metrics: [
  {
    "label": "Active shipments",
    "value": "2,388",
    "note": "+12.4%"
  },
  {
    "label": "On-time rate",
    "value": "95.4%",
    "note": "SLA protected"
  },
  {
    "label": "Open exceptions",
    "value": "22",
    "note": "Needs review"
  },
  {
    "label": "Fleet utilization",
    "value": "72%",
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
    "id": "LG-04001",
    "customer": "Northstar Retail",
    "route": "Cairo → Giza",
    "status": "Customs review",
    "eta": "09:30",
    "risk": "Low"
  },
  {
    "id": "LG-04002",
    "customer": "BlueCart Egypt",
    "route": "Alexandria → Cairo",
    "status": "In transit",
    "eta": "11:15",
    "risk": "Low"
  },
  {
    "id": "LG-04003",
    "customer": "MedPlus Distribution",
    "route": "6 October → Nasr City",
    "status": "Out for delivery",
    "eta": "13:45",
    "risk": "Medium"
  },
  {
    "id": "LG-04004",
    "customer": "Urban Home",
    "route": "Port Said → Cairo",
    "status": "Delayed",
    "eta": "16:20",
    "risk": "High"
  },
  {
    "id": "LG-04005",
    "customer": "Prime Foods",
    "route": "Maadi → New Cairo",
    "status": "Delivered",
    "eta": "18:10",
    "risk": "Low"
  },
  {
    "id": "LG-04006",
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
    "score": "87%",
    "status": "Available"
  },
  {
    "name": "Karim Nabil",
    "vehicle": "Bike 88",
    "zone": "East",
    "score": "88%",
    "status": "On route"
  },
  {
    "name": "Mina Sameh",
    "vehicle": "Truck 17",
    "zone": "Airport",
    "score": "89%",
    "status": "Break"
  },
  {
    "name": "Youssef Ali",
    "vehicle": "EV 11",
    "zone": "Downtown",
    "score": "90%",
    "status": "Loading"
  },
  {
    "name": "Nour Hassan",
    "vehicle": "Van 322",
    "zone": "New Cairo",
    "score": "91%",
    "status": "Exception"
  }
],
  routes: [
  {
    "name": "Priority SLA lane",
    "stops": 18,
    "distance": "98 km",
    "health": "Optimized"
  },
  {
    "name": "Dense urban cluster",
    "stops": 36,
    "distance": "46 km",
    "health": "Traffic risk"
  },
  {
    "name": "Regional transfer",
    "stops": 8,
    "distance": "244 km",
    "health": "On schedule"
  },
  {
    "name": "Recovery route",
    "stops": 12,
    "distance": "69 km",
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
