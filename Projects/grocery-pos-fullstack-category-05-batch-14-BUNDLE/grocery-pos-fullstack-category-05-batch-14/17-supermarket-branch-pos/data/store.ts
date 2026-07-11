export const store = {
  title: "Supermarket Branch POS",
  arabicDescription: "\u0641\u0631\u0639 \u0633\u0648\u0628\u0631\u0645\u0627\u0631\u0643\u062a",
  useCase: "Front + Backoffice \u0644\u0641\u0631\u0639 \u0648\u0627\u062d\u062f: \u0643\u0627\u0634\u064a\u0631 \u0648\u0645\u062e\u0632\u0648\u0646 \u0648\u062a\u0642\u0627\u0631\u064a\u0631",
  targetClient: "Supermarket Branch",
  positioning: "Branch POS",
  layout: "branch-dashboard",
  layoutNote: "\u0641\u0631\u0639 \u0633\u0648\u0628\u0631\u0645\u0627\u0631\u0643\u062a \u0628\u062a\u0642\u0627\u0631\u064a\u0631 \u0648\u0645\u062e\u0632\u0648\u0646 \u0648\u0643\u0627\u0634\u064a\u0631.",
  accent: "#22c55e",
  dark: "#14532d",
  soft: "#dcfce7",
  metrics: [
    { label: 'Daily Sales', value: 'EGP 15,100', change: '+16%' },
    { label: 'Open Orders', value: '29', change: '+3' },
    { label: 'Low Stock', value: '6', change: 'needs review' },
    { label: 'Cash Drawer', value: 'EGP 3,270', change: 'balanced' }
  ],
  products: [
  {
    "id": "SKU-17-001",
    "name": "Sugar 1kg",
    "category": "Grocery",
    "price": 42,
    "stock": 112,
    "location": "Aisle 1",
    "barcode": "622170001"
  },
  {
    "id": "SKU-17-002",
    "name": "Rice 1kg",
    "category": "Grocery",
    "price": 39,
    "stock": 85,
    "location": "Aisle 1",
    "barcode": "622170002"
  },
  {
    "id": "SKU-17-003",
    "name": "Tea Box",
    "category": "Drinks",
    "price": 58,
    "stock": 48,
    "location": "Aisle 2",
    "barcode": "622170003"
  },
  {
    "id": "SKU-17-004",
    "name": "Milk 1L",
    "category": "Dairy",
    "price": 34,
    "stock": 31,
    "location": "Fridge",
    "barcode": "622170004"
  },
  {
    "id": "SKU-17-005",
    "name": "Eggs 12",
    "category": "Dairy",
    "price": 76,
    "stock": 19,
    "location": "Fridge",
    "barcode": "622170005"
  },
  {
    "id": "SKU-17-006",
    "name": "Oil 1L",
    "category": "Grocery",
    "price": 88,
    "stock": 22,
    "location": "Aisle 3",
    "barcode": "622170006"
  }
],
  sales: [
  {
    "id": "INV-17-1001",
    "cashier": "Mona",
    "total": 486,
    "items": 9,
    "status": "Paid",
    "time": "09:12"
  },
  {
    "id": "INV-17-1002",
    "cashier": "Karim",
    "total": 230,
    "items": 4,
    "status": "Paid",
    "time": "10:30"
  },
  {
    "id": "INV-17-1003",
    "cashier": "Youssef",
    "total": 780,
    "items": 15,
    "status": "Pending",
    "time": "11:05"
  },
  {
    "id": "INV-17-1004",
    "cashier": "Sara",
    "total": 122,
    "items": 3,
    "status": "Paid",
    "time": "12:41"
  }
],
  lanes: [
    { name: 'Cashier 1', status: 'active', queue: 3 },
    { name: 'Cashier 2', status: 'paused', queue: 3 },
    { name: 'Backoffice', status: 'review', queue: 6 }
  ],
  backendRoutes: ['/api/health', '/api/products', '/api/sales', '/api/inventory', '/api/receipt']
};

export type Product = typeof store.products[number];
export type Sale = typeof store.sales[number];
