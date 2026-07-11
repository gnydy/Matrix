export const store = {
  title: "Family Mini Market",
  arabicDescription: "\u0645\u064a\u0646\u064a \u0645\u0627\u0631\u0643\u062a \u0639\u0627\u0626\u0644\u064a",
  useCase: "\u0648\u0627\u062c\u0647\u0629 \u0628\u0633\u064a\u0637\u0629 \u0644\u0644\u0639\u0627\u0626\u0644\u0629 \u0645\u0639 \u0635\u0644\u0627\u062d\u064a\u0627\u062a \u0648\u0643\u0627\u0634\u064a\u0631\u064a\u0646",
  targetClient: "Mini Market",
  positioning: "Family Retail",
  layout: "family-ops",
  layoutNote: "\u0648\u0627\u062c\u0647\u0629 \u0633\u0647\u0644\u0629 \u0644\u0623\u0633\u0631\u0629 \u062a\u062f\u064a\u0631 \u0645\u064a\u0646\u064a \u0645\u0627\u0631\u0643\u062a.",
  accent: "#f97316",
  dark: "#7c2d12",
  soft: "#ffedd5",
  metrics: [
    { label: 'Daily Sales', value: 'EGP 10,200', change: '+9%' },
    { label: 'Open Orders', value: '22', change: '+1' },
    { label: 'Low Stock', value: '6', change: 'needs review' },
    { label: 'Cash Drawer', value: 'EGP 2,500', change: 'balanced' }
  ],
  products: [
  {
    "id": "SKU-10-001",
    "name": "Sugar 1kg",
    "category": "Grocery",
    "price": 42,
    "stock": 112,
    "location": "Aisle 1",
    "barcode": "622100001"
  },
  {
    "id": "SKU-10-002",
    "name": "Rice 1kg",
    "category": "Grocery",
    "price": 39,
    "stock": 85,
    "location": "Aisle 1",
    "barcode": "622100002"
  },
  {
    "id": "SKU-10-003",
    "name": "Tea Box",
    "category": "Drinks",
    "price": 58,
    "stock": 48,
    "location": "Aisle 2",
    "barcode": "622100003"
  },
  {
    "id": "SKU-10-004",
    "name": "Milk 1L",
    "category": "Dairy",
    "price": 34,
    "stock": 31,
    "location": "Fridge",
    "barcode": "622100004"
  },
  {
    "id": "SKU-10-005",
    "name": "Eggs 12",
    "category": "Dairy",
    "price": 76,
    "stock": 19,
    "location": "Fridge",
    "barcode": "622100005"
  },
  {
    "id": "SKU-10-006",
    "name": "Oil 1L",
    "category": "Grocery",
    "price": 88,
    "stock": 22,
    "location": "Aisle 3",
    "barcode": "622100006"
  }
],
  sales: [
  {
    "id": "INV-10-1001",
    "cashier": "Mona",
    "total": 486,
    "items": 9,
    "status": "Paid",
    "time": "09:12"
  },
  {
    "id": "INV-10-1002",
    "cashier": "Karim",
    "total": 230,
    "items": 4,
    "status": "Paid",
    "time": "10:30"
  },
  {
    "id": "INV-10-1003",
    "cashier": "Youssef",
    "total": 780,
    "items": 15,
    "status": "Pending",
    "time": "11:05"
  },
  {
    "id": "INV-10-1004",
    "cashier": "Sara",
    "total": 122,
    "items": 3,
    "status": "Paid",
    "time": "12:41"
  }
],
  lanes: [
    { name: 'Cashier 1', status: 'active', queue: 4 },
    { name: 'Cashier 2', status: 'paused', queue: 2 },
    { name: 'Backoffice', status: 'review', queue: 4 }
  ],
  backendRoutes: ['/api/health', '/api/products', '/api/sales', '/api/inventory', '/api/receipt']
};

export type Product = typeof store.products[number];
export type Sale = typeof store.sales[number];
