export const store = {
  title: "Inventory First POS",
  arabicDescription: "\u0643\u0627\u0634\u064a\u0631 \u0645\u062e\u0632\u0648\u0646 \u0623\u0648\u0644\u064b\u0627",
  useCase: "\u062a\u0646\u0628\u064a\u0647\u0627\u062a \u0646\u0642\u0635\u060c \u0635\u0644\u0627\u062d\u064a\u0629\u060c \u062d\u0631\u0643\u0629 \u0645\u062e\u0632\u0648\u0646 \u0648\u0631\u0628\u0637 \u0627\u0644\u0641\u0627\u062a\u0648\u0631\u0629",
  targetClient: "Stock Heavy Store",
  positioning: "Inventory Control",
  layout: "inventory-wall",
  layoutNote: "\u0645\u062e\u0632\u0648\u0646 \u0648\u062a\u0646\u0628\u064a\u0647\u0627\u062a \u0642\u0628\u0644 \u0627\u0644\u0628\u064a\u0639.",
  accent: "#64748b",
  dark: "#0f172a",
  soft: "#f1f5f9",
  metrics: [
    { label: 'Daily Sales', value: 'EGP 12,300', change: '+12%' },
    { label: 'Open Orders', value: '25', change: '+4' },
    { label: 'Low Stock', value: '9', change: 'needs review' },
    { label: 'Cash Drawer', value: 'EGP 2,830', change: 'balanced' }
  ],
  products: [
  {
    "id": "SKU-13-001",
    "name": "Sugar 1kg",
    "category": "Grocery",
    "price": 42,
    "stock": 112,
    "location": "Aisle 1",
    "barcode": "622130001"
  },
  {
    "id": "SKU-13-002",
    "name": "Rice 1kg",
    "category": "Grocery",
    "price": 39,
    "stock": 85,
    "location": "Aisle 1",
    "barcode": "622130002"
  },
  {
    "id": "SKU-13-003",
    "name": "Tea Box",
    "category": "Drinks",
    "price": 58,
    "stock": 48,
    "location": "Aisle 2",
    "barcode": "622130003"
  },
  {
    "id": "SKU-13-004",
    "name": "Milk 1L",
    "category": "Dairy",
    "price": 34,
    "stock": 31,
    "location": "Fridge",
    "barcode": "622130004"
  },
  {
    "id": "SKU-13-005",
    "name": "Eggs 12",
    "category": "Dairy",
    "price": 76,
    "stock": 19,
    "location": "Fridge",
    "barcode": "622130005"
  },
  {
    "id": "SKU-13-006",
    "name": "Oil 1L",
    "category": "Grocery",
    "price": 88,
    "stock": 22,
    "location": "Aisle 3",
    "barcode": "622130006"
  }
],
  sales: [
  {
    "id": "INV-13-1001",
    "cashier": "Mona",
    "total": 486,
    "items": 9,
    "status": "Paid",
    "time": "09:12"
  },
  {
    "id": "INV-13-1002",
    "cashier": "Karim",
    "total": 230,
    "items": 4,
    "status": "Paid",
    "time": "10:30"
  },
  {
    "id": "INV-13-1003",
    "cashier": "Youssef",
    "total": 780,
    "items": 15,
    "status": "Pending",
    "time": "11:05"
  },
  {
    "id": "INV-13-1004",
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
    { name: 'Backoffice', status: 'review', queue: 7 }
  ],
  backendRoutes: ['/api/health', '/api/products', '/api/sales', '/api/inventory', '/api/receipt']
};

export type Product = typeof store.products[number];
export type Sale = typeof store.sales[number];
