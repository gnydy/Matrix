export const store = {
  title: "Mobile Grocery Cart",
  arabicDescription: "\u0643\u0627\u0634\u064a\u0631 \u0643\u0634\u0643 \u0645\u062a\u0646\u0642\u0644",
  useCase: "POS \u062e\u0641\u064a\u0641 \u0644\u0644\u0628\u0627\u0639\u0629 \u0627\u0644\u0645\u062a\u0646\u0642\u0644\u064a\u0646 \u0645\u0639 \u0645\u062e\u0632\u0648\u0646 \u0645\u062d\u062f\u0648\u062f",
  targetClient: "Kiosk / Cart",
  positioning: "Mobile POS",
  layout: "mobile-first",
  layoutNote: "\u0648\u0627\u062c\u0647\u0629 \u0645\u0648\u0628\u0627\u064a\u0644/\u062a\u0627\u0628\u0644\u062a \u0644\u0644\u0628\u0627\u0626\u0639 \u0627\u0644\u0645\u062a\u0646\u0642\u0644.",
  accent: "#06b6d4",
  dark: "#164e63",
  soft: "#cffafe",
  metrics: [
    { label: 'Daily Sales', value: 'EGP 9,500', change: '+8%' },
    { label: 'Open Orders', value: '21', change: '+5' },
    { label: 'Low Stock', value: '5', change: 'needs review' },
    { label: 'Cash Drawer', value: 'EGP 2,390', change: 'balanced' }
  ],
  products: [
  {
    "id": "SKU-09-001",
    "name": "Sugar 1kg",
    "category": "Grocery",
    "price": 42,
    "stock": 112,
    "location": "Aisle 1",
    "barcode": "622090001"
  },
  {
    "id": "SKU-09-002",
    "name": "Rice 1kg",
    "category": "Grocery",
    "price": 39,
    "stock": 85,
    "location": "Aisle 1",
    "barcode": "622090002"
  },
  {
    "id": "SKU-09-003",
    "name": "Tea Box",
    "category": "Drinks",
    "price": 58,
    "stock": 48,
    "location": "Aisle 2",
    "barcode": "622090003"
  },
  {
    "id": "SKU-09-004",
    "name": "Milk 1L",
    "category": "Dairy",
    "price": 34,
    "stock": 31,
    "location": "Fridge",
    "barcode": "622090004"
  },
  {
    "id": "SKU-09-005",
    "name": "Eggs 12",
    "category": "Dairy",
    "price": 76,
    "stock": 19,
    "location": "Fridge",
    "barcode": "622090005"
  },
  {
    "id": "SKU-09-006",
    "name": "Oil 1L",
    "category": "Grocery",
    "price": 88,
    "stock": 22,
    "location": "Aisle 3",
    "barcode": "622090006"
  }
],
  sales: [
  {
    "id": "INV-09-1001",
    "cashier": "Mona",
    "total": 486,
    "items": 9,
    "status": "Paid",
    "time": "09:12"
  },
  {
    "id": "INV-09-1002",
    "cashier": "Karim",
    "total": 230,
    "items": 4,
    "status": "Paid",
    "time": "10:30"
  },
  {
    "id": "INV-09-1003",
    "cashier": "Youssef",
    "total": 780,
    "items": 15,
    "status": "Pending",
    "time": "11:05"
  },
  {
    "id": "INV-09-1004",
    "cashier": "Sara",
    "total": 122,
    "items": 3,
    "status": "Paid",
    "time": "12:41"
  }
],
  lanes: [
    { name: 'Cashier 1', status: 'active', queue: 3 },
    { name: 'Cashier 2', status: 'paused', queue: 1 },
    { name: 'Backoffice', status: 'review', queue: 8 }
  ],
  backendRoutes: ['/api/health', '/api/products', '/api/sales', '/api/inventory', '/api/receipt']
};

export type Product = typeof store.products[number];
export type Sale = typeof store.sales[number];
