export const store = {
  title: "Multi Cashier Market",
  arabicDescription: "\u0639\u062f\u0629 \u0643\u0627\u0634\u064a\u0631\u0627\u062a",
  useCase: "\u0625\u062f\u0627\u0631\u0629 \u0623\u0643\u062b\u0631 \u0645\u0646 \u0646\u0642\u0637\u0629 \u0628\u064a\u0639\u060c \u0637\u0648\u0627\u0628\u064a\u0631\u060c \u0648\u0635\u0644\u0627\u062d\u064a\u0627\u062a",
  targetClient: "Medium Market",
  positioning: "Multi Terminal",
  layout: "cashier-cluster",
  layoutNote: "\u0625\u062f\u0627\u0631\u0629 \u0639\u062f\u0629 \u0643\u0627\u0634\u064a\u0631\u0627\u062a \u0648lanes.",
  accent: "#3b82f6",
  dark: "#1e3a8a",
  soft: "#dbeafe",
  metrics: [
    { label: 'Daily Sales', value: 'EGP 13,700', change: '+14%' },
    { label: 'Open Orders', value: '27', change: '+1' },
    { label: 'Low Stock', value: '4', change: 'needs review' },
    { label: 'Cash Drawer', value: 'EGP 3,050', change: 'balanced' }
  ],
  products: [
  {
    "id": "SKU-15-001",
    "name": "Sugar 1kg",
    "category": "Grocery",
    "price": 42,
    "stock": 112,
    "location": "Aisle 1",
    "barcode": "622150001"
  },
  {
    "id": "SKU-15-002",
    "name": "Rice 1kg",
    "category": "Grocery",
    "price": 39,
    "stock": 85,
    "location": "Aisle 1",
    "barcode": "622150002"
  },
  {
    "id": "SKU-15-003",
    "name": "Tea Box",
    "category": "Drinks",
    "price": 58,
    "stock": 48,
    "location": "Aisle 2",
    "barcode": "622150003"
  },
  {
    "id": "SKU-15-004",
    "name": "Milk 1L",
    "category": "Dairy",
    "price": 34,
    "stock": 31,
    "location": "Fridge",
    "barcode": "622150004"
  },
  {
    "id": "SKU-15-005",
    "name": "Eggs 12",
    "category": "Dairy",
    "price": 76,
    "stock": 19,
    "location": "Fridge",
    "barcode": "622150005"
  },
  {
    "id": "SKU-15-006",
    "name": "Oil 1L",
    "category": "Grocery",
    "price": 88,
    "stock": 22,
    "location": "Aisle 3",
    "barcode": "622150006"
  }
],
  sales: [
  {
    "id": "INV-15-1001",
    "cashier": "Mona",
    "total": 486,
    "items": 9,
    "status": "Paid",
    "time": "09:12"
  },
  {
    "id": "INV-15-1002",
    "cashier": "Karim",
    "total": 230,
    "items": 4,
    "status": "Paid",
    "time": "10:30"
  },
  {
    "id": "INV-15-1003",
    "cashier": "Youssef",
    "total": 780,
    "items": 15,
    "status": "Pending",
    "time": "11:05"
  },
  {
    "id": "INV-15-1004",
    "cashier": "Sara",
    "total": 122,
    "items": 3,
    "status": "Paid",
    "time": "12:41"
  }
],
  lanes: [
    { name: 'Cashier 1', status: 'active', queue: 5 },
    { name: 'Cashier 2', status: 'paused', queue: 1 },
    { name: 'Backoffice', status: 'review', queue: 4 }
  ],
  backendRoutes: ['/api/health', '/api/products', '/api/sales', '/api/inventory', '/api/receipt']
};

export type Product = typeof store.products[number];
export type Sale = typeof store.sales[number];
