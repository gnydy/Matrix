export const site = {
  name: 'WarehouseDispatch Hub',
  slug: 'warehousedispatch-hub',
  category: 'Logistics & Delivery Systems',
  industry: 'Fulfillment',
  client: 'Warehouse and dispatch operation',
  audience: 'Fulfillment centers, warehouses, e-commerce operators',
  positioning: 'A warehouse dispatch front-end for outbound waves, pick-pack status, loading bays, and courier handoff.',
  visual: 'Warehouse bay grid, outbound wave cards, pick-pack progress, and carrier handoff tables',
  complexity: 'Advanced',
  hero: 'Turn warehouse dispatch into a controlled flow from pick list to carrier handoff.',
  cta: 'Run Dispatch Wave',
  accent: '#4f46e5',
  dark: '#1e1b4b',
  metrics: [
  {
    "label": "Active shipments",
    "value": "2,662",
    "note": "+12.4%"
  },
  {
    "label": "On-time rate",
    "value": "97.6%",
    "note": "SLA protected"
  },
  {
    "label": "Open exceptions",
    "value": "24",
    "note": "Needs review"
  },
  {
    "label": "Fleet utilization",
    "value": "74%",
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
    "id": "LG-06001",
    "customer": "Northstar Retail",
    "route": "Cairo → Giza",
    "status": "Out for delivery",
    "eta": "09:30",
    "risk": "Medium"
  },
  {
    "id": "LG-06002",
    "customer": "BlueCart Egypt",
    "route": "Alexandria → Cairo",
    "status": "Delayed",
    "eta": "11:15",
    "risk": "High"
  },
  {
    "id": "LG-06003",
    "customer": "MedPlus Distribution",
    "route": "6 October → Nasr City",
    "status": "Delivered",
    "eta": "13:45",
    "risk": "Low"
  },
  {
    "id": "LG-06004",
    "customer": "Urban Home",
    "route": "Port Said → Cairo",
    "status": "Awaiting pickup",
    "eta": "16:20",
    "risk": "Medium"
  },
  {
    "id": "LG-06005",
    "customer": "Prime Foods",
    "route": "Maadi → New Cairo",
    "status": "Customs review",
    "eta": "18:10",
    "risk": "Low"
  },
  {
    "id": "LG-06006",
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
    "score": "89%",
    "status": "Break"
  },
  {
    "name": "Karim Nabil",
    "vehicle": "Bike 88",
    "zone": "East",
    "score": "90%",
    "status": "Loading"
  },
  {
    "name": "Mina Sameh",
    "vehicle": "Truck 17",
    "zone": "Airport",
    "score": "91%",
    "status": "Exception"
  },
  {
    "name": "Youssef Ali",
    "vehicle": "EV 11",
    "zone": "Downtown",
    "score": "92%",
    "status": "Available"
  },
  {
    "name": "Nour Hassan",
    "vehicle": "Van 322",
    "zone": "New Cairo",
    "score": "93%",
    "status": "On route"
  }
],
  routes: [
  {
    "name": "Priority SLA lane",
    "stops": 15,
    "distance": "104 km",
    "health": "Optimized"
  },
  {
    "name": "Dense urban cluster",
    "stops": 38,
    "distance": "48 km",
    "health": "Traffic risk"
  },
  {
    "name": "Regional transfer",
    "stops": 10,
    "distance": "256 km",
    "health": "On schedule"
  },
  {
    "name": "Recovery route",
    "stops": 11,
    "distance": "73 km",
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
