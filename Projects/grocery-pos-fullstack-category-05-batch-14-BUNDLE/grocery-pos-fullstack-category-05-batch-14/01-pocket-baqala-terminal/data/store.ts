export const store = {
  title: "Pocket Baqala Terminal",
  arabicDescription: "\u0643\u0627\u0634\u064a\u0631 \u0628\u0642\u0627\u0644\u0629 \u0635\u063a\u064a\u0631\u0629 \u062c\u062f\u064b\u0627",
  useCase: "\u0645\u062d\u0644 \u0628\u0642\u0627\u0644\u0629 \u0635\u063a\u064a\u0631 \u0628\u0645\u0646\u062a\u062c\u0627\u062a \u064a\u0648\u0645\u064a\u0629 \u0648\u0643\u0627\u0634\u064a\u0631 \u0633\u0631\u064a\u0639",
  targetClient: "Small Shop",
  positioning: "Compact POS",
  layout: "minimal-counter",
  layoutNote: "\u0648\u0627\u062c\u0647\u0629 \u0643\u0627\u0634\u064a\u0631 \u0645\u0636\u063a\u0648\u0637\u0629 \u0628\u0639\u0645\u0648\u062f \u0645\u0646\u062a\u062c\u0627\u062a \u0648\u0639\u0645\u0648\u062f \u0641\u0627\u062a\u0648\u0631\u0629 \u0645\u0628\u0627\u0634\u0631.",
  accent: "#10b981",
  dark: "#064e3b",
  soft: "#d1fae5",
  metrics: [
    { label: 'Daily Sales', value: 'EGP 3,900', change: '+9%' },
    { label: 'Open Orders', value: '13', change: '+2' },
    { label: 'Low Stock', value: '4', change: 'needs review' },
    { label: 'Cash Drawer', value: 'EGP 1,510', change: 'balanced' }
  ],
  products: [
  {
    "id": "SKU-01-001",
    "name": "Sugar 1kg",
    "category": "Grocery",
    "price": 42,
    "stock": 112,
    "location": "Aisle 1",
    "barcode": "622010001"
  },
  {
    "id": "SKU-01-002",
    "name": "Rice 1kg",
    "category": "Grocery",
    "price": 39,
    "stock": 85,
    "location": "Aisle 1",
    "barcode": "622010002"
  },
  {
    "id": "SKU-01-003",
    "name": "Tea Box",
    "category": "Drinks",
    "price": 58,
    "stock": 48,
    "location": "Aisle 2",
    "barcode": "622010003"
  },
  {
    "id": "SKU-01-004",
    "name": "Milk 1L",
    "category": "Dairy",
    "price": 34,
    "stock": 31,
    "location": "Fridge",
    "barcode": "622010004"
  },
  {
    "id": "SKU-01-005",
    "name": "Eggs 12",
    "category": "Dairy",
    "price": 76,
    "stock": 19,
    "location": "Fridge",
    "barcode": "622010005"
  },
  {
    "id": "SKU-01-006",
    "name": "Oil 1L",
    "category": "Grocery",
    "price": 88,
    "stock": 22,
    "location": "Aisle 3",
    "barcode": "622010006"
  }
],
  sales: [
  {
    "id": "INV-01-1001",
    "cashier": "Mona",
    "total": 486,
    "items": 9,
    "status": "Paid",
    "time": "09:12"
  },
  {
    "id": "INV-01-1002",
    "cashier": "Karim",
    "total": 230,
    "items": 4,
    "status": "Paid",
    "time": "10:30"
  },
  {
    "id": "INV-01-1003",
    "cashier": "Youssef",
    "total": 780,
    "items": 15,
    "status": "Pending",
    "time": "11:05"
  },
  {
    "id": "INV-01-1004",
    "cashier": "Sara",
    "total": 122,
    "items": 3,
    "status": "Paid",
    "time": "12:41"
  }
],
  lanes: [
    { name: 'Cashier 1', status: 'active', queue: 3 },
    { name: 'Cashier 2', status: 'paused', queue: 2 },
    { name: 'Backoffice', status: 'review', queue: 5 }
  ],
  backendRoutes: ['/api/health', '/api/products', '/api/sales', '/api/inventory', '/api/receipt']
};

export type Product = typeof store.products[number];
export type Sale = typeof store.sales[number];
