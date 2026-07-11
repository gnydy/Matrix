export const store = {
  title: "Butcher Deli Cashier",
  arabicDescription: "\u0643\u0627\u0634\u064a\u0631 \u062c\u0632\u0627\u0631\u0629 \u0648\u062f\u064a\u0644\u064a",
  useCase: "\u0623\u0648\u0632\u0627\u0646\u060c \u0642\u0637\u0627\u0639\u0627\u062a\u060c \u062a\u062d\u0636\u064a\u0631 \u0637\u0644\u0628\u0627\u062a\u060c \u0648\u0637\u0628\u0627\u0639\u0629 \u0625\u064a\u0635\u0627\u0644",
  targetClient: "Butcher/Deli",
  positioning: "Deli Counter",
  layout: "deli-station",
  layoutNote: "\u0645\u062d\u0637\u0629 \u062f\u064a\u0644\u064a \u0628\u0648\u0632\u0646 \u0648\u0642\u0637\u0639 \u0648\u062a\u062c\u0647\u064a\u0632 \u0637\u0644\u0628.",
  accent: "#ef4444",
  dark: "#7f1d1d",
  soft: "#fee2e2",
  metrics: [
    { label: 'Daily Sales', value: 'EGP 8,100', change: '+15%' },
    { label: 'Open Orders', value: '19', change: '+3' },
    { label: 'Low Stock', value: '3', change: 'needs review' },
    { label: 'Cash Drawer', value: 'EGP 2,170', change: 'balanced' }
  ],
  products: [
  {
    "id": "SKU-07-001",
    "name": "Minced Meat 1kg",
    "category": "Deli",
    "price": 310,
    "stock": 12,
    "location": "Cold",
    "barcode": "622070001"
  },
  {
    "id": "SKU-07-002",
    "name": "Chicken 1kg",
    "category": "Deli",
    "price": 155,
    "stock": 19,
    "location": "Cold",
    "barcode": "622070002"
  },
  {
    "id": "SKU-07-003",
    "name": "Cheddar 250g",
    "category": "Deli",
    "price": 78,
    "stock": 28,
    "location": "Counter",
    "barcode": "622070003"
  },
  {
    "id": "SKU-07-004",
    "name": "Olives 500g",
    "category": "Deli",
    "price": 50,
    "stock": 33,
    "location": "Counter",
    "barcode": "622070004"
  },
  {
    "id": "SKU-07-005",
    "name": "Spices Mix",
    "category": "Grocery",
    "price": 18,
    "stock": 72,
    "location": "Shelf",
    "barcode": "622070005"
  }
],
  sales: [
  {
    "id": "INV-07-1001",
    "cashier": "Mona",
    "total": 486,
    "items": 9,
    "status": "Paid",
    "time": "09:12"
  },
  {
    "id": "INV-07-1002",
    "cashier": "Karim",
    "total": 230,
    "items": 4,
    "status": "Paid",
    "time": "10:30"
  },
  {
    "id": "INV-07-1003",
    "cashier": "Youssef",
    "total": 780,
    "items": 15,
    "status": "Pending",
    "time": "11:05"
  },
  {
    "id": "INV-07-1004",
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
    { name: 'Backoffice', status: 'review', queue: 6 }
  ],
  backendRoutes: ['/api/health', '/api/products', '/api/sales', '/api/inventory', '/api/receipt']
};

export type Product = typeof store.products[number];
export type Sale = typeof store.sales[number];
