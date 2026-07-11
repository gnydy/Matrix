export const store = {
  title: "Franchise Grocery HQ",
  arabicDescription: "\u0625\u062f\u0627\u0631\u0629 \u0641\u0631\u0648\u0639 Franchise",
  useCase: "\u0645\u0631\u0643\u0632 \u062a\u062d\u0643\u0645 \u0644\u0644\u0641\u0631\u0648\u0639\u060c \u0645\u0628\u064a\u0639\u0627\u062a\u060c \u062a\u0648\u0631\u064a\u062f\u060c \u0648\u0645\u0642\u0627\u0631\u0646\u0629 \u0623\u062f\u0627\u0621",
  targetClient: "Franchise Network",
  positioning: "Franchise HQ",
  layout: "hq-analytics",
  layoutNote: "\u062a\u062d\u0643\u0645 \u0641\u0631\u0648\u0639 Franchise \u0648\u062a\u062d\u0644\u064a\u0644 \u0627\u0644\u0623\u062f\u0627\u0621.",
  accent: "#ec4899",
  dark: "#831843",
  soft: "#fce7f3",
  metrics: [
    { label: 'Daily Sales', value: 'EGP 16,500', change: '+9%' },
    { label: 'Open Orders', value: '31', change: '+5' },
    { label: 'Low Stock', value: '8', change: 'needs review' },
    { label: 'Cash Drawer', value: 'EGP 3,490', change: 'balanced' }
  ],
  products: [
  {
    "id": "SKU-19-001",
    "name": "Sugar 1kg",
    "category": "Grocery",
    "price": 42,
    "stock": 112,
    "location": "Aisle 1",
    "barcode": "622190001"
  },
  {
    "id": "SKU-19-002",
    "name": "Rice 1kg",
    "category": "Grocery",
    "price": 39,
    "stock": 85,
    "location": "Aisle 1",
    "barcode": "622190002"
  },
  {
    "id": "SKU-19-003",
    "name": "Tea Box",
    "category": "Drinks",
    "price": 58,
    "stock": 48,
    "location": "Aisle 2",
    "barcode": "622190003"
  },
  {
    "id": "SKU-19-004",
    "name": "Milk 1L",
    "category": "Dairy",
    "price": 34,
    "stock": 31,
    "location": "Fridge",
    "barcode": "622190004"
  },
  {
    "id": "SKU-19-005",
    "name": "Eggs 12",
    "category": "Dairy",
    "price": 76,
    "stock": 19,
    "location": "Fridge",
    "barcode": "622190005"
  },
  {
    "id": "SKU-19-006",
    "name": "Oil 1L",
    "category": "Grocery",
    "price": 88,
    "stock": 22,
    "location": "Aisle 3",
    "barcode": "622190006"
  }
],
  sales: [
  {
    "id": "INV-19-1001",
    "cashier": "Mona",
    "total": 486,
    "items": 9,
    "status": "Paid",
    "time": "09:12"
  },
  {
    "id": "INV-19-1002",
    "cashier": "Karim",
    "total": 230,
    "items": 4,
    "status": "Paid",
    "time": "10:30"
  },
  {
    "id": "INV-19-1003",
    "cashier": "Youssef",
    "total": 780,
    "items": 15,
    "status": "Pending",
    "time": "11:05"
  },
  {
    "id": "INV-19-1004",
    "cashier": "Sara",
    "total": 122,
    "items": 3,
    "status": "Paid",
    "time": "12:41"
  }
],
  lanes: [
    { name: 'Cashier 1', status: 'active', queue: 5 },
    { name: 'Cashier 2', status: 'paused', queue: 2 },
    { name: 'Backoffice', status: 'review', queue: 8 }
  ],
  backendRoutes: ['/api/health', '/api/products', '/api/sales', '/api/inventory', '/api/receipt']
};

export type Product = typeof store.products[number];
export type Sale = typeof store.sales[number];
