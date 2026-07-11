export const site = {
  name: 'CargoGate Freight Portal',
  slug: 'cargogate-freight-portal',
  category: 'Logistics & Delivery Systems',
  industry: 'Freight Forwarding',
  client: 'Freight forwarding company',
  audience: 'Freight forwarders, import/export teams, customs brokers',
  positioning: 'A B2B freight portal for shipment requests, customs milestones, carrier options, and document readiness.',
  visual: 'B2B portal layout with shipment lanes, documents, and customs checkpoint cards',
  complexity: 'Advanced',
  hero: 'Give exporters and importers a clear portal for freight movement, documents, and customs milestones.',
  cta: 'Create Freight Request',
  accent: '#7c3aed',
  dark: '#1e1b4b',
  metrics: [
  {
    "label": "Active shipments",
    "value": "2,251",
    "note": "+12.4%"
  },
  {
    "label": "On-time rate",
    "value": "94.3%",
    "note": "SLA protected"
  },
  {
    "label": "Open exceptions",
    "value": "21",
    "note": "Needs review"
  },
  {
    "label": "Fleet utilization",
    "value": "71%",
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
    "id": "LG-03001",
    "customer": "Northstar Retail",
    "route": "Cairo → Giza",
    "status": "Awaiting pickup",
    "eta": "09:30",
    "risk": "Medium"
  },
  {
    "id": "LG-03002",
    "customer": "BlueCart Egypt",
    "route": "Alexandria → Cairo",
    "status": "Customs review",
    "eta": "11:15",
    "risk": "Low"
  },
  {
    "id": "LG-03003",
    "customer": "MedPlus Distribution",
    "route": "6 October → Nasr City",
    "status": "In transit",
    "eta": "13:45",
    "risk": "Low"
  },
  {
    "id": "LG-03004",
    "customer": "Urban Home",
    "route": "Port Said → Cairo",
    "status": "Out for delivery",
    "eta": "16:20",
    "risk": "Medium"
  },
  {
    "id": "LG-03005",
    "customer": "Prime Foods",
    "route": "Maadi → New Cairo",
    "status": "Delayed",
    "eta": "18:10",
    "risk": "High"
  },
  {
    "id": "LG-03006",
    "customer": "Atlas Components",
    "route": "Airport Hub → Downtown",
    "status": "Delivered",
    "eta": "21:00",
    "risk": "Low"
  }
],
  drivers: [
  {
    "name": "Omar Adel",
    "vehicle": "Van 204",
    "zone": "West",
    "score": "86%",
    "status": "Exception"
  },
  {
    "name": "Karim Nabil",
    "vehicle": "Bike 88",
    "zone": "East",
    "score": "87%",
    "status": "Available"
  },
  {
    "name": "Mina Sameh",
    "vehicle": "Truck 17",
    "zone": "Airport",
    "score": "88%",
    "status": "On route"
  },
  {
    "name": "Youssef Ali",
    "vehicle": "EV 11",
    "zone": "Downtown",
    "score": "89%",
    "status": "Break"
  },
  {
    "name": "Nour Hassan",
    "vehicle": "Van 322",
    "zone": "New Cairo",
    "score": "90%",
    "status": "Loading"
  }
],
  routes: [
  {
    "name": "Priority SLA lane",
    "stops": 17,
    "distance": "95 km",
    "health": "Optimized"
  },
  {
    "name": "Dense urban cluster",
    "stops": 35,
    "distance": "45 km",
    "health": "Traffic risk"
  },
  {
    "name": "Regional transfer",
    "stops": 11,
    "distance": "238 km",
    "health": "On schedule"
  },
  {
    "name": "Recovery route",
    "stops": 11,
    "distance": "67 km",
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
