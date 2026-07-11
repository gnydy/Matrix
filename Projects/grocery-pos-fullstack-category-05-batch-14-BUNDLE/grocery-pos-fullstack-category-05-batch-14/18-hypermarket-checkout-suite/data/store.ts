export const store = {
  title: "Hypermarket Checkout Suite",
  arabicDescription: "\u0647\u0627\u064a\u0628\u0631 \u0645\u0627\u0631\u0643\u062a",
  useCase: "\u0648\u0627\u062c\u0647\u0629 \u0643\u062b\u064a\u0641\u0629 \u0644\u0644\u0640 lanes\u060c managers\u060c returns\u060c departments",
  targetClient: "Large Store",
  positioning: "Hypermarket Suite",
  layout: "hyper-grid",
  layoutNote: "\u0647\u0627\u064a\u0628\u0631\u0645\u0627\u0631\u0643\u062a dense UI \u0645\u0639 returns \u0648departments.",
  accent: "#a855f7",
  dark: "#581c87",
  soft: "#f3e8ff",
  metrics: [
    { label: 'Daily Sales', value: 'EGP 15,800', change: '+8%' },
    { label: 'Open Orders', value: '30', change: '+4' },
    { label: 'Low Stock', value: '7', change: 'needs review' },
    { label: 'Cash Drawer', value: 'EGP 3,380', change: 'balanced' }
  ],
  products: [
  {
    "id": "SKU-18-001",
    "name": "Sugar Carton",
    "category": "Wholesale",
    "price": 840,
    "stock": 18,
    "location": "Pallet A",
    "barcode": "622180001"
  },
  {
    "id": "SKU-18-002",
    "name": "Rice Sack 25kg",
    "category": "Wholesale",
    "price": 920,
    "stock": 10,
    "location": "Pallet B",
    "barcode": "622180002"
  },
  {
    "id": "SKU-18-003",
    "name": "Oil Box",
    "category": "Wholesale",
    "price": 1050,
    "stock": 14,
    "location": "Pallet C",
    "barcode": "622180003"
  },
  {
    "id": "SKU-18-004",
    "name": "Tea Carton",
    "category": "Wholesale",
    "price": 1450,
    "stock": 7,
    "location": "Pallet D",
    "barcode": "622180004"
  },
  {
    "id": "SKU-18-005",
    "name": "Pasta Box",
    "category": "Wholesale",
    "price": 680,
    "stock": 22,
    "location": "Pallet E",
    "barcode": "622180005"
  }
],
  sales: [
  {
    "id": "INV-18-1001",
    "cashier": "Mona",
    "total": 486,
    "items": 9,
    "status": "Paid",
    "time": "09:12"
  },
  {
    "id": "INV-18-1002",
    "cashier": "Karim",
    "total": 230,
    "items": 4,
    "status": "Paid",
    "time": "10:30"
  },
  {
    "id": "INV-18-1003",
    "cashier": "Youssef",
    "total": 780,
    "items": 15,
    "status": "Pending",
    "time": "11:05"
  },
  {
    "id": "INV-18-1004",
    "cashier": "Sara",
    "total": 122,
    "items": 3,
    "status": "Paid",
    "time": "12:41"
  }
],
  lanes: [
    { name: 'Cashier 1', status: 'active', queue: 4 },
    { name: 'Cashier 2', status: 'paused', queue: 1 },
    { name: 'Backoffice', status: 'review', queue: 7 }
  ],
  backendRoutes: ['/api/health', '/api/products', '/api/sales', '/api/inventory', '/api/receipt']
};

export type Product = typeof store.products[number];
export type Sale = typeof store.sales[number];
