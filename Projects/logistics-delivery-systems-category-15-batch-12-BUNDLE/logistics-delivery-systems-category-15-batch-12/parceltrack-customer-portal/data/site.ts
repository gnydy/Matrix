export const site = {
  name: 'ParcelTrack Customer Portal',
  slug: 'parceltrack-customer-portal',
  category: 'Logistics & Delivery Systems',
  industry: 'Parcel Tracking',
  client: 'Parcel delivery company',
  audience: 'Parcel companies, courier firms, marketplace delivery teams',
  positioning: 'A customer tracking portal with tracking number lookup, shipment milestones, support requests, and delivery preferences.',
  visual: 'Customer-first tracking screen with timeline, delivery preference cards, and help center entry points',
  complexity: 'Medium',
  hero: 'Let customers track parcels, update delivery preferences, and request support without calling your team.',
  cta: 'Track a Parcel',
  accent: '#0284c7',
  dark: '#082f49',
  metrics: [
  {
    "label": "Active shipments",
    "value": "3,073",
    "note": "+12.4%"
  },
  {
    "label": "On-time rate",
    "value": "93.0%",
    "note": "SLA protected"
  },
  {
    "label": "Open exceptions",
    "value": "27",
    "note": "Needs review"
  },
  {
    "label": "Fleet utilization",
    "value": "77%",
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
    "id": "LG-09001",
    "customer": "Northstar Retail",
    "route": "Cairo → Giza",
    "status": "Awaiting pickup",
    "eta": "09:30",
    "risk": "Medium"
  },
  {
    "id": "LG-09002",
    "customer": "BlueCart Egypt",
    "route": "Alexandria → Cairo",
    "status": "Customs review",
    "eta": "11:15",
    "risk": "Low"
  },
  {
    "id": "LG-09003",
    "customer": "MedPlus Distribution",
    "route": "6 October → Nasr City",
    "status": "In transit",
    "eta": "13:45",
    "risk": "Low"
  },
  {
    "id": "LG-09004",
    "customer": "Urban Home",
    "route": "Port Said → Cairo",
    "status": "Out for delivery",
    "eta": "16:20",
    "risk": "Medium"
  },
  {
    "id": "LG-09005",
    "customer": "Prime Foods",
    "route": "Maadi → New Cairo",
    "status": "Delayed",
    "eta": "18:10",
    "risk": "High"
  },
  {
    "id": "LG-09006",
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
    "score": "92%",
    "status": "Available"
  },
  {
    "name": "Karim Nabil",
    "vehicle": "Bike 88",
    "zone": "East",
    "score": "93%",
    "status": "On route"
  },
  {
    "name": "Mina Sameh",
    "vehicle": "Truck 17",
    "zone": "Airport",
    "score": "94%",
    "status": "Break"
  },
  {
    "name": "Youssef Ali",
    "vehicle": "EV 11",
    "zone": "Downtown",
    "score": "95%",
    "status": "Loading"
  },
  {
    "name": "Nour Hassan",
    "vehicle": "Van 322",
    "zone": "New Cairo",
    "score": "96%",
    "status": "Exception"
  }
],
  routes: [
  {
    "name": "Priority SLA lane",
    "stops": 18,
    "distance": "113 km",
    "health": "Optimized"
  },
  {
    "name": "Dense urban cluster",
    "stops": 32,
    "distance": "51 km",
    "health": "Traffic risk"
  },
  {
    "name": "Regional transfer",
    "stops": 9,
    "distance": "274 km",
    "health": "On schedule"
  },
  {
    "name": "Recovery route",
    "stops": 11,
    "distance": "79 km",
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
