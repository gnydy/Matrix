export const store = {
  title: "Scale Produce POS",
  arabicDescription: "\u0643\u0627\u0634\u064a\u0631 \u062e\u0636\u0627\u0631 \u0648\u0641\u0627\u0643\u0647\u0629 \u0628\u0627\u0644\u0648\u0632\u0646",
  useCase: "\u0648\u0632\u0646 \u0628\u0627\u0644\u0643\u064a\u0644\u0648\u060c \u0628\u0627\u0631\u0643\u0648\u062f\u060c \u0623\u0633\u0639\u0627\u0631 \u0645\u062a\u063a\u064a\u0631\u0629 \u062d\u0633\u0628 \u0627\u0644\u064a\u0648\u0645",
  targetClient: "Produce Shop",
  positioning: "Weight Sales",
  layout: "scale-console",
  layoutNote: "\u0648\u0627\u062c\u0647\u0629 \u0648\u0632\u0646 \u0648\u0633\u0639\u0631 \u0628\u0627\u0644\u0643\u064a\u0644\u0648 \u0648\u0645\u0644\u0627\u062d\u0638\u0627\u062a \u062c\u0648\u062f\u0629.",
  accent: "#84cc16",
  dark: "#365314",
  soft: "#ecfccb",
  metrics: [
    { label: 'Daily Sales', value: 'EGP 6,700', change: '+13%' },
    { label: 'Open Orders', value: '17', change: '+1' },
    { label: 'Low Stock', value: '8', change: 'needs review' },
    { label: 'Cash Drawer', value: 'EGP 1,950', change: 'balanced' }
  ],
  products: [
  {
    "id": "SKU-05-001",
    "name": "Tomato 1kg",
    "category": "Produce",
    "price": 18,
    "stock": 76,
    "location": "Scale",
    "barcode": "622050001"
  },
  {
    "id": "SKU-05-002",
    "name": "Potato 1kg",
    "category": "Produce",
    "price": 15,
    "stock": 120,
    "location": "Scale",
    "barcode": "622050002"
  },
  {
    "id": "SKU-05-003",
    "name": "Banana 1kg",
    "category": "Produce",
    "price": 32,
    "stock": 44,
    "location": "Scale",
    "barcode": "622050003"
  },
  {
    "id": "SKU-05-004",
    "name": "Apple 1kg",
    "category": "Produce",
    "price": 75,
    "stock": 21,
    "location": "Scale",
    "barcode": "622050004"
  },
  {
    "id": "SKU-05-005",
    "name": "Lemon 1kg",
    "category": "Produce",
    "price": 28,
    "stock": 34,
    "location": "Scale",
    "barcode": "622050005"
  }
],
  sales: [
  {
    "id": "INV-05-1001",
    "cashier": "Mona",
    "total": 486,
    "items": 9,
    "status": "Paid",
    "time": "09:12"
  },
  {
    "id": "INV-05-1002",
    "cashier": "Karim",
    "total": 230,
    "items": 4,
    "status": "Paid",
    "time": "10:30"
  },
  {
    "id": "INV-05-1003",
    "cashier": "Youssef",
    "total": 780,
    "items": 15,
    "status": "Pending",
    "time": "11:05"
  },
  {
    "id": "INV-05-1004",
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
    { name: 'Backoffice', status: 'review', queue: 4 }
  ],
  backendRoutes: ['/api/health', '/api/products', '/api/sales', '/api/inventory', '/api/receipt']
};

export type Product = typeof store.products[number];
export type Sale = typeof store.sales[number];
