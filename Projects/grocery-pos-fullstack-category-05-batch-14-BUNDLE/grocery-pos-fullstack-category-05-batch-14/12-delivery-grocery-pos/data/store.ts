export const store = {
  title: "Delivery Grocery POS",
  arabicDescription: "\u0643\u0627\u0634\u064a\u0631 \u0637\u0644\u0628\u0627\u062a \u062a\u0648\u0635\u064a\u0644",
  useCase: "\u0637\u0644\u0628\u0627\u062a \u0647\u0627\u062a\u0641/\u0648\u0627\u062a\u0633\u0627\u0628\u060c \u062a\u062c\u0647\u064a\u0632\u060c \u062a\u0648\u0635\u064a\u0644\u060c \u0648\u0645\u062a\u0627\u0628\u0639\u0629 \u0643\u0627\u0628\u062a\u0646",
  targetClient: "Delivery Grocery",
  positioning: "Delivery POS",
  layout: "delivery-command",
  layoutNote: "\u062a\u062c\u0647\u064a\u0632 \u0637\u0644\u0628\u0627\u062a \u062a\u0648\u0635\u064a\u0644 \u0648\u0645\u062a\u0627\u0628\u0639\u0629 \u062d\u0627\u0644\u0629.",
  accent: "#14b8a6",
  dark: "#134e4a",
  soft: "#ccfbf1",
  metrics: [
    { label: 'Daily Sales', value: 'EGP 11,600', change: '+11%' },
    { label: 'Open Orders', value: '24', change: '+3' },
    { label: 'Low Stock', value: '8', change: 'needs review' },
    { label: 'Cash Drawer', value: 'EGP 2,720', change: 'balanced' }
  ],
  products: [
  {
    "id": "SKU-12-001",
    "name": "Minced Meat 1kg",
    "category": "Deli",
    "price": 310,
    "stock": 12,
    "location": "Cold",
    "barcode": "622120001"
  },
  {
    "id": "SKU-12-002",
    "name": "Chicken 1kg",
    "category": "Deli",
    "price": 155,
    "stock": 19,
    "location": "Cold",
    "barcode": "622120002"
  },
  {
    "id": "SKU-12-003",
    "name": "Cheddar 250g",
    "category": "Deli",
    "price": 78,
    "stock": 28,
    "location": "Counter",
    "barcode": "622120003"
  },
  {
    "id": "SKU-12-004",
    "name": "Olives 500g",
    "category": "Deli",
    "price": 50,
    "stock": 33,
    "location": "Counter",
    "barcode": "622120004"
  },
  {
    "id": "SKU-12-005",
    "name": "Spices Mix",
    "category": "Grocery",
    "price": 18,
    "stock": 72,
    "location": "Shelf",
    "barcode": "622120005"
  }
],
  sales: [
  {
    "id": "INV-12-1001",
    "cashier": "Mona",
    "total": 486,
    "items": 9,
    "status": "Paid",
    "time": "09:12"
  },
  {
    "id": "INV-12-1002",
    "cashier": "Karim",
    "total": 230,
    "items": 4,
    "status": "Paid",
    "time": "10:30"
  },
  {
    "id": "INV-12-1003",
    "cashier": "Youssef",
    "total": 780,
    "items": 15,
    "status": "Pending",
    "time": "11:05"
  },
  {
    "id": "INV-12-1004",
    "cashier": "Sara",
    "total": 122,
    "items": 3,
    "status": "Paid",
    "time": "12:41"
  }
],
  lanes: [
    { name: 'Cashier 1', status: 'active', queue: 2 },
    { name: 'Cashier 2', status: 'paused', queue: 1 },
    { name: 'Backoffice', status: 'review', queue: 6 }
  ],
  backendRoutes: ['/api/health', '/api/products', '/api/sales', '/api/inventory', '/api/receipt']
};

export type Product = typeof store.products[number];
export type Sale = typeof store.sales[number];
