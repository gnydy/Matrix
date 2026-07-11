export const store = {
  title: "Express Superette Checkout",
  arabicDescription: "\u0643\u0627\u0634\u064a\u0631 \u0633\u0631\u064a\u0639 \u0644\u0633\u0648\u0628\u0631\u062a \u0635\u063a\u064a\u0631",
  useCase: "Checkout \u0633\u0631\u064a\u0639 \u0645\u0639 \u0639\u0631\u0628\u0629 \u0648\u0641\u0648\u0627\u062a\u064a\u0631 \u0648\u0645\u0648\u0631\u062f\u064a\u0646",
  targetClient: "Superette",
  positioning: "Quick Checkout",
  layout: "speed-lane",
  layoutNote: "\u0648\u0627\u062c\u0647\u0629 Checkout \u0633\u0631\u064a\u0639\u0629 \u0645\u0639 \u0627\u062e\u062a\u0635\u0627\u0631\u0627\u062a \u0643\u0628\u064a\u0631\u0629.",
  accent: "#f59e0b",
  dark: "#78350f",
  soft: "#fef3c7",
  metrics: [
    { label: 'Daily Sales', value: 'EGP 5,300', change: '+11%' },
    { label: 'Open Orders', value: '15', change: '+4' },
    { label: 'Low Stock', value: '6', change: 'needs review' },
    { label: 'Cash Drawer', value: 'EGP 1,730', change: 'balanced' }
  ],
  products: [
  {
    "id": "SKU-03-001",
    "name": "Sugar 1kg",
    "category": "Grocery",
    "price": 42,
    "stock": 112,
    "location": "Aisle 1",
    "barcode": "622030001"
  },
  {
    "id": "SKU-03-002",
    "name": "Rice 1kg",
    "category": "Grocery",
    "price": 39,
    "stock": 85,
    "location": "Aisle 1",
    "barcode": "622030002"
  },
  {
    "id": "SKU-03-003",
    "name": "Tea Box",
    "category": "Drinks",
    "price": 58,
    "stock": 48,
    "location": "Aisle 2",
    "barcode": "622030003"
  },
  {
    "id": "SKU-03-004",
    "name": "Milk 1L",
    "category": "Dairy",
    "price": 34,
    "stock": 31,
    "location": "Fridge",
    "barcode": "622030004"
  },
  {
    "id": "SKU-03-005",
    "name": "Eggs 12",
    "category": "Dairy",
    "price": 76,
    "stock": 19,
    "location": "Fridge",
    "barcode": "622030005"
  },
  {
    "id": "SKU-03-006",
    "name": "Oil 1L",
    "category": "Grocery",
    "price": 88,
    "stock": 22,
    "location": "Aisle 3",
    "barcode": "622030006"
  }
],
  sales: [
  {
    "id": "INV-03-1001",
    "cashier": "Mona",
    "total": 486,
    "items": 9,
    "status": "Paid",
    "time": "09:12"
  },
  {
    "id": "INV-03-1002",
    "cashier": "Karim",
    "total": 230,
    "items": 4,
    "status": "Paid",
    "time": "10:30"
  },
  {
    "id": "INV-03-1003",
    "cashier": "Youssef",
    "total": 780,
    "items": 15,
    "status": "Pending",
    "time": "11:05"
  },
  {
    "id": "INV-03-1004",
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
    { name: 'Backoffice', status: 'review', queue: 7 }
  ],
  backendRoutes: ['/api/health', '/api/products', '/api/sales', '/api/inventory', '/api/receipt']
};

export type Product = typeof store.products[number];
export type Sale = typeof store.sales[number];
