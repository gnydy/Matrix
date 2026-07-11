export const store = {
  title: "Night Shift Convenience",
  arabicDescription: "\u0643\u0627\u0634\u064a\u0631 \u0648\u0631\u062f\u064a\u0627\u062a \u0644\u064a\u0644\u064a\u0629",
  useCase: "\u0648\u0631\u062f\u064a\u0629 \u0644\u064a\u0644\u064a\u0629\u060c \u0625\u063a\u0644\u0627\u0642 \u0635\u0646\u062f\u0648\u0642\u060c \u0645\u0646\u062a\u062c\u0627\u062a \u0633\u0631\u064a\u0639\u0629 \u0627\u0644\u062d\u0631\u0643\u0629",
  targetClient: "Convenience Store",
  positioning: "Shift Control",
  layout: "night-shift",
  layoutNote: "\u062a\u0635\u0645\u064a\u0645 \u062f\u0627\u0643\u0646 \u0644\u0648\u0631\u062f\u064a\u0629 \u0644\u064a\u0644\u064a\u0629 \u0645\u0639 \u0625\u063a\u0644\u0627\u0642 \u0635\u0646\u062f\u0648\u0642.",
  accent: "#8b5cf6",
  dark: "#4c1d95",
  soft: "#ede9fe",
  metrics: [
    { label: 'Daily Sales', value: 'EGP 8,800', change: '+16%' },
    { label: 'Open Orders', value: '20', change: '+4' },
    { label: 'Low Stock', value: '4', change: 'needs review' },
    { label: 'Cash Drawer', value: 'EGP 2,280', change: 'balanced' }
  ],
  products: [
  {
    "id": "SKU-08-001",
    "name": "Sugar 1kg",
    "category": "Grocery",
    "price": 42,
    "stock": 112,
    "location": "Aisle 1",
    "barcode": "622080001"
  },
  {
    "id": "SKU-08-002",
    "name": "Rice 1kg",
    "category": "Grocery",
    "price": 39,
    "stock": 85,
    "location": "Aisle 1",
    "barcode": "622080002"
  },
  {
    "id": "SKU-08-003",
    "name": "Tea Box",
    "category": "Drinks",
    "price": 58,
    "stock": 48,
    "location": "Aisle 2",
    "barcode": "622080003"
  },
  {
    "id": "SKU-08-004",
    "name": "Milk 1L",
    "category": "Dairy",
    "price": 34,
    "stock": 31,
    "location": "Fridge",
    "barcode": "622080004"
  },
  {
    "id": "SKU-08-005",
    "name": "Eggs 12",
    "category": "Dairy",
    "price": 76,
    "stock": 19,
    "location": "Fridge",
    "barcode": "622080005"
  },
  {
    "id": "SKU-08-006",
    "name": "Oil 1L",
    "category": "Grocery",
    "price": 88,
    "stock": 22,
    "location": "Aisle 3",
    "barcode": "622080006"
  }
],
  sales: [
  {
    "id": "INV-08-1001",
    "cashier": "Mona",
    "total": 486,
    "items": 9,
    "status": "Paid",
    "time": "09:12"
  },
  {
    "id": "INV-08-1002",
    "cashier": "Karim",
    "total": 230,
    "items": 4,
    "status": "Paid",
    "time": "10:30"
  },
  {
    "id": "INV-08-1003",
    "cashier": "Youssef",
    "total": 780,
    "items": 15,
    "status": "Pending",
    "time": "11:05"
  },
  {
    "id": "INV-08-1004",
    "cashier": "Sara",
    "total": 122,
    "items": 3,
    "status": "Paid",
    "time": "12:41"
  }
],
  lanes: [
    { name: 'Cashier 1', status: 'active', queue: 2 },
    { name: 'Cashier 2', status: 'paused', queue: 3 },
    { name: 'Backoffice', status: 'review', queue: 7 }
  ],
  backendRoutes: ['/api/health', '/api/products', '/api/sales', '/api/inventory', '/api/receipt']
};

export type Product = typeof store.products[number];
export type Sale = typeof store.sales[number];
