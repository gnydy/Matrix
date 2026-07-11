export const store = {
  title: "Wholesale Counter OS",
  arabicDescription: "\u0643\u0627\u0634\u064a\u0631 \u062c\u0645\u0644\u0629",
  useCase: "\u0628\u064a\u0639 \u0643\u0645\u064a\u0627\u062a \u0643\u0628\u064a\u0631\u0629 \u0648\u062a\u0633\u0639\u064a\u0631 \u062c\u0645\u0644\u0629 \u0648\u062d\u062f\u0648\u062f \u0627\u0626\u062a\u0645\u0627\u0646",
  targetClient: "Wholesale Store",
  positioning: "Wholesale Flow",
  layout: "wholesale-grid",
  layoutNote: "\u062c\u062f\u0627\u0648\u0644 \u062c\u0645\u0644\u0629 \u0648\u0633\u0639\u0631 \u0643\u0645\u064a\u0629 \u0648\u0627\u0626\u062a\u0645\u0627\u0646 \u0639\u0645\u064a\u0644.",
  accent: "#6366f1",
  dark: "#312e81",
  soft: "#e0e7ff",
  metrics: [
    { label: 'Daily Sales', value: 'EGP 6,000', change: '+12%' },
    { label: 'Open Orders', value: '16', change: '+5' },
    { label: 'Low Stock', value: '7', change: 'needs review' },
    { label: 'Cash Drawer', value: 'EGP 1,840', change: 'balanced' }
  ],
  products: [
  {
    "id": "SKU-04-001",
    "name": "Sugar Carton",
    "category": "Wholesale",
    "price": 840,
    "stock": 18,
    "location": "Pallet A",
    "barcode": "622040001"
  },
  {
    "id": "SKU-04-002",
    "name": "Rice Sack 25kg",
    "category": "Wholesale",
    "price": 920,
    "stock": 10,
    "location": "Pallet B",
    "barcode": "622040002"
  },
  {
    "id": "SKU-04-003",
    "name": "Oil Box",
    "category": "Wholesale",
    "price": 1050,
    "stock": 14,
    "location": "Pallet C",
    "barcode": "622040003"
  },
  {
    "id": "SKU-04-004",
    "name": "Tea Carton",
    "category": "Wholesale",
    "price": 1450,
    "stock": 7,
    "location": "Pallet D",
    "barcode": "622040004"
  },
  {
    "id": "SKU-04-005",
    "name": "Pasta Box",
    "category": "Wholesale",
    "price": 680,
    "stock": 22,
    "location": "Pallet E",
    "barcode": "622040005"
  }
],
  sales: [
  {
    "id": "INV-04-1001",
    "cashier": "Mona",
    "total": 486,
    "items": 9,
    "status": "Paid",
    "time": "09:12"
  },
  {
    "id": "INV-04-1002",
    "cashier": "Karim",
    "total": 230,
    "items": 4,
    "status": "Paid",
    "time": "10:30"
  },
  {
    "id": "INV-04-1003",
    "cashier": "Youssef",
    "total": 780,
    "items": 15,
    "status": "Pending",
    "time": "11:05"
  },
  {
    "id": "INV-04-1004",
    "cashier": "Sara",
    "total": 122,
    "items": 3,
    "status": "Paid",
    "time": "12:41"
  }
],
  lanes: [
    { name: 'Cashier 1', status: 'active', queue: 2 },
    { name: 'Cashier 2', status: 'paused', queue: 2 },
    { name: 'Backoffice', status: 'review', queue: 8 }
  ],
  backendRoutes: ['/api/health', '/api/products', '/api/sales', '/api/inventory', '/api/receipt']
};

export type Product = typeof store.products[number];
export type Sale = typeof store.sales[number];
