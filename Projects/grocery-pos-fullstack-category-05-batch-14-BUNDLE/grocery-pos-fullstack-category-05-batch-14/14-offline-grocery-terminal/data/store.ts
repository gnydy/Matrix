export const store = {
  title: "Offline Grocery Terminal",
  arabicDescription: "\u0643\u0627\u0634\u064a\u0631 Offline Mock",
  useCase: "\u0648\u0627\u062c\u0647\u0629 \u062a\u0648\u0636\u062d \u0639\u0645\u0644 POS \u0639\u0646\u062f \u0627\u0646\u0642\u0637\u0627\u0639 \u0627\u0644\u0634\u0628\u0643\u0629 \u0648\u0645\u0632\u0627\u0645\u0646\u0629 \u0644\u0627\u062d\u0642\u0629",
  targetClient: "Weak Internet Store",
  positioning: "Offline Ready",
  layout: "offline-console",
  layoutNote: "\u062d\u0627\u0644\u0629 \u0627\u062a\u0635\u0627\u0644 \u0648\u0645\u0632\u0627\u0645\u0646\u0629 Offline Mock.",
  accent: "#71717a",
  dark: "#18181b",
  soft: "#f4f4f5",
  metrics: [
    { label: 'Daily Sales', value: 'EGP 13,000', change: '+13%' },
    { label: 'Open Orders', value: '26', change: '+5' },
    { label: 'Low Stock', value: '3', change: 'needs review' },
    { label: 'Cash Drawer', value: 'EGP 2,940', change: 'balanced' }
  ],
  products: [
  {
    "id": "SKU-14-001",
    "name": "Sugar 1kg",
    "category": "Grocery",
    "price": 42,
    "stock": 112,
    "location": "Aisle 1",
    "barcode": "622140001"
  },
  {
    "id": "SKU-14-002",
    "name": "Rice 1kg",
    "category": "Grocery",
    "price": 39,
    "stock": 85,
    "location": "Aisle 1",
    "barcode": "622140002"
  },
  {
    "id": "SKU-14-003",
    "name": "Tea Box",
    "category": "Drinks",
    "price": 58,
    "stock": 48,
    "location": "Aisle 2",
    "barcode": "622140003"
  },
  {
    "id": "SKU-14-004",
    "name": "Milk 1L",
    "category": "Dairy",
    "price": 34,
    "stock": 31,
    "location": "Fridge",
    "barcode": "622140004"
  },
  {
    "id": "SKU-14-005",
    "name": "Eggs 12",
    "category": "Dairy",
    "price": 76,
    "stock": 19,
    "location": "Fridge",
    "barcode": "622140005"
  },
  {
    "id": "SKU-14-006",
    "name": "Oil 1L",
    "category": "Grocery",
    "price": 88,
    "stock": 22,
    "location": "Aisle 3",
    "barcode": "622140006"
  }
],
  sales: [
  {
    "id": "INV-14-1001",
    "cashier": "Mona",
    "total": 486,
    "items": 9,
    "status": "Paid",
    "time": "09:12"
  },
  {
    "id": "INV-14-1002",
    "cashier": "Karim",
    "total": 230,
    "items": 4,
    "status": "Paid",
    "time": "10:30"
  },
  {
    "id": "INV-14-1003",
    "cashier": "Youssef",
    "total": 780,
    "items": 15,
    "status": "Pending",
    "time": "11:05"
  },
  {
    "id": "INV-14-1004",
    "cashier": "Sara",
    "total": 122,
    "items": 3,
    "status": "Paid",
    "time": "12:41"
  }
],
  lanes: [
    { name: 'Cashier 1', status: 'active', queue: 4 },
    { name: 'Cashier 2', status: 'paused', queue: 3 },
    { name: 'Backoffice', status: 'review', queue: 8 }
  ],
  backendRoutes: ['/api/health', '/api/products', '/api/sales', '/api/inventory', '/api/receipt']
};

export type Product = typeof store.products[number];
export type Sale = typeof store.sales[number];
