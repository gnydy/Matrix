export const site = {
  name: 'DeliveryPay COD Control',
  slug: 'deliverypay-cod-control',
  category: 'Logistics & Delivery Systems',
  industry: 'COD Logistics',
  client: 'Cash-on-delivery logistics company',
  audience: 'COD delivery firms, e-commerce logistics, local couriers',
  positioning: 'A COD-focused logistics template for collected cash, unsettled orders, courier balances, reconciliations, and risk alerts.',
  visual: 'Finance-ops dashboard with cash collection cards, reconciliation tables, courier balances, and risk warnings',
  complexity: 'Advanced',
  hero: 'Control cash-on-delivery operations with courier balances, reconciliations, and settlement visibility.',
  cta: 'Open COD Control',
  accent: '#059669',
  dark: '#064e3b',
  metrics: [
  {
    "label": "Active shipments",
    "value": "4,580",
    "note": "+12.4%"
  },
  {
    "label": "On-time rate",
    "value": "97.2%",
    "note": "SLA protected"
  },
  {
    "label": "Open exceptions",
    "value": "38",
    "note": "Needs review"
  },
  {
    "label": "Fleet utilization",
    "value": "88%",
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
    "id": "LG-20001",
    "customer": "Northstar Retail",
    "route": "Cairo → Giza",
    "status": "Delivered",
    "eta": "09:30",
    "risk": "Low"
  },
  {
    "id": "LG-20002",
    "customer": "BlueCart Egypt",
    "route": "Alexandria → Cairo",
    "status": "Awaiting pickup",
    "eta": "11:15",
    "risk": "Medium"
  },
  {
    "id": "LG-20003",
    "customer": "MedPlus Distribution",
    "route": "6 October → Nasr City",
    "status": "Customs review",
    "eta": "13:45",
    "risk": "Low"
  },
  {
    "id": "LG-20004",
    "customer": "Urban Home",
    "route": "Port Said → Cairo",
    "status": "In transit",
    "eta": "16:20",
    "risk": "Low"
  },
  {
    "id": "LG-20005",
    "customer": "Prime Foods",
    "route": "Maadi → New Cairo",
    "status": "Out for delivery",
    "eta": "18:10",
    "risk": "Medium"
  },
  {
    "id": "LG-20006",
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
    "score": "88%",
    "status": "On route"
  },
  {
    "name": "Karim Nabil",
    "vehicle": "Bike 88",
    "zone": "East",
    "score": "89%",
    "status": "Break"
  },
  {
    "name": "Mina Sameh",
    "vehicle": "Truck 17",
    "zone": "Airport",
    "score": "90%",
    "status": "Loading"
  },
  {
    "name": "Youssef Ali",
    "vehicle": "EV 11",
    "zone": "Downtown",
    "score": "91%",
    "status": "Exception"
  },
  {
    "name": "Nour Hassan",
    "vehicle": "Van 322",
    "zone": "New Cairo",
    "score": "92%",
    "status": "Available"
  }
],
  routes: [
  {
    "name": "Priority SLA lane",
    "stops": 14,
    "distance": "146 km",
    "health": "Optimized"
  },
  {
    "name": "Dense urban cluster",
    "stops": 34,
    "distance": "62 km",
    "health": "Traffic risk"
  },
  {
    "name": "Regional transfer",
    "stops": 8,
    "distance": "340 km",
    "health": "On schedule"
  },
  {
    "name": "Recovery route",
    "stops": 13,
    "distance": "101 km",
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
