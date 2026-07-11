export const store = {
  title: "Bakery Grocery Counter",
  arabicDescription: "\u0643\u0627\u0634\u064a\u0631 \u0645\u062e\u0628\u0648\u0632\u0627\u062a \u0648\u0628\u0642\u0627\u0644\u0629",
  useCase: "\u0637\u0644\u0628\u0627\u062a \u0645\u062e\u0628\u0648\u0632\u0627\u062a \u0645\u0639 \u0645\u0646\u062a\u062c\u0627\u062a \u0628\u0642\u0627\u0644\u0629 \u0648\u0645\u062a\u0627\u0628\u0639\u0629 \u062f\u0641\u0639\u0627\u062a",
  targetClient: "Bakery + Grocery",
  positioning: "Bakery Hybrid",
  layout: "bakery-board",
  layoutNote: "\u0644\u0648\u062d\u0629 \u062f\u0641\u0639\u0627\u062a \u0648\u0645\u062e\u0628\u0648\u0632\u0627\u062a \u0628\u062c\u0627\u0646\u0628 \u0643\u0627\u0634\u064a\u0631 \u0628\u0642\u0627\u0644\u0629.",
  accent: "#f43f5e",
  dark: "#881337",
  soft: "#ffe4e6",
  metrics: [
    { label: 'Daily Sales', value: 'EGP 7,400', change: '+14%' },
    { label: 'Open Orders', value: '18', change: '+2' },
    { label: 'Low Stock', value: '9', change: 'needs review' },
    { label: 'Cash Drawer', value: 'EGP 2,060', change: 'balanced' }
  ],
  products: [
  {
    "id": "SKU-06-001",
    "name": "Baladi Bread",
    "category": "Bakery",
    "price": 2,
    "stock": 400,
    "location": "Counter",
    "barcode": "622060001"
  },
  {
    "id": "SKU-06-002",
    "name": "Croissant",
    "category": "Bakery",
    "price": 22,
    "stock": 36,
    "location": "Counter",
    "barcode": "622060002"
  },
  {
    "id": "SKU-06-003",
    "name": "Toast Pack",
    "category": "Bakery",
    "price": 38,
    "stock": 28,
    "location": "Shelf",
    "barcode": "622060003"
  },
  {
    "id": "SKU-06-004",
    "name": "Milk 1L",
    "category": "Dairy",
    "price": 34,
    "stock": 31,
    "location": "Fridge",
    "barcode": "622060004"
  },
  {
    "id": "SKU-06-005",
    "name": "Cheese Pack",
    "category": "Dairy",
    "price": 65,
    "stock": 18,
    "location": "Fridge",
    "barcode": "622060005"
  }
],
  sales: [
  {
    "id": "INV-06-1001",
    "cashier": "Mona",
    "total": 486,
    "items": 9,
    "status": "Paid",
    "time": "09:12"
  },
  {
    "id": "INV-06-1002",
    "cashier": "Karim",
    "total": 230,
    "items": 4,
    "status": "Paid",
    "time": "10:30"
  },
  {
    "id": "INV-06-1003",
    "cashier": "Youssef",
    "total": 780,
    "items": 15,
    "status": "Pending",
    "time": "11:05"
  },
  {
    "id": "INV-06-1004",
    "cashier": "Sara",
    "total": 122,
    "items": 3,
    "status": "Paid",
    "time": "12:41"
  }
],
  lanes: [
    { name: 'Cashier 1', status: 'active', queue: 4 },
    { name: 'Cashier 2', status: 'paused', queue: 1 },
    { name: 'Backoffice', status: 'review', queue: 5 }
  ],
  backendRoutes: ['/api/health', '/api/products', '/api/sales', '/api/inventory', '/api/receipt']
};

export type Product = typeof store.products[number];
export type Sale = typeof store.sales[number];
