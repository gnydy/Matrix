export const store = {
  title: "Neighborhood Market POS",
  arabicDescription: "\u0643\u0627\u0634\u064a\u0631 \u0633\u0648\u0628\u0631 \u0645\u0627\u0631\u0643\u062a \u062d\u064a",
  useCase: "\u0648\u0627\u062c\u0647\u0629 \u0639\u0645\u0644\u064a\u0629 \u0644\u0628\u0642\u0627\u0644\u0629 \u0645\u062a\u0648\u0633\u0637\u0629 \u0645\u0639 \u0645\u0628\u064a\u0639\u0627\u062a \u0648\u0645\u062e\u0632\u0648\u0646",
  targetClient: "Local Market",
  positioning: "Fast Retail",
  layout: "split-dashboard",
  layoutNote: "\u062a\u0642\u0633\u064a\u0645 \u0648\u0627\u0636\u062d \u0628\u064a\u0646 \u0627\u0644\u0645\u0628\u064a\u0639\u0627\u062a \u0627\u0644\u064a\u0648\u0645\u064a\u0629 \u0648\u0633\u0644\u0629 \u0627\u0644\u0643\u0627\u0634\u064a\u0631.",
  accent: "#38bdf8",
  dark: "#0c4a6e",
  soft: "#e0f2fe",
  metrics: [
    { label: 'Daily Sales', value: 'EGP 4,600', change: '+10%' },
    { label: 'Open Orders', value: '14', change: '+3' },
    { label: 'Low Stock', value: '5', change: 'needs review' },
    { label: 'Cash Drawer', value: 'EGP 1,620', change: 'balanced' }
  ],
  products: [
  {
    "id": "SKU-02-001",
    "name": "Sugar 1kg",
    "category": "Grocery",
    "price": 42,
    "stock": 112,
    "location": "Aisle 1",
    "barcode": "622020001"
  },
  {
    "id": "SKU-02-002",
    "name": "Rice 1kg",
    "category": "Grocery",
    "price": 39,
    "stock": 85,
    "location": "Aisle 1",
    "barcode": "622020002"
  },
  {
    "id": "SKU-02-003",
    "name": "Tea Box",
    "category": "Drinks",
    "price": 58,
    "stock": 48,
    "location": "Aisle 2",
    "barcode": "622020003"
  },
  {
    "id": "SKU-02-004",
    "name": "Milk 1L",
    "category": "Dairy",
    "price": 34,
    "stock": 31,
    "location": "Fridge",
    "barcode": "622020004"
  },
  {
    "id": "SKU-02-005",
    "name": "Eggs 12",
    "category": "Dairy",
    "price": 76,
    "stock": 19,
    "location": "Fridge",
    "barcode": "622020005"
  },
  {
    "id": "SKU-02-006",
    "name": "Oil 1L",
    "category": "Grocery",
    "price": 88,
    "stock": 22,
    "location": "Aisle 3",
    "barcode": "622020006"
  }
],
  sales: [
  {
    "id": "INV-02-1001",
    "cashier": "Mona",
    "total": 486,
    "items": 9,
    "status": "Paid",
    "time": "09:12"
  },
  {
    "id": "INV-02-1002",
    "cashier": "Karim",
    "total": 230,
    "items": 4,
    "status": "Paid",
    "time": "10:30"
  },
  {
    "id": "INV-02-1003",
    "cashier": "Youssef",
    "total": 780,
    "items": 15,
    "status": "Pending",
    "time": "11:05"
  },
  {
    "id": "INV-02-1004",
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
    { name: 'Backoffice', status: 'review', queue: 6 }
  ],
  backendRoutes: ['/api/health', '/api/products', '/api/sales', '/api/inventory', '/api/receipt']
};

export type Product = typeof store.products[number];
export type Sale = typeof store.sales[number];
