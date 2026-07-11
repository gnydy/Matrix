export const store = {
  title: "Warehouse Retail POS",
  arabicDescription: "\u0645\u062e\u0632\u0646 \u0648\u0628\u064a\u0639 \u0645\u0628\u0627\u0634\u0631",
  useCase: "\u0648\u0627\u062c\u0647\u0629 \u0645\u062e\u0632\u0646 \u064a\u0628\u064a\u0639 \u0644\u0644\u0645\u0633\u062a\u0647\u0644\u0643 \u0648\u0627\u0644\u062c\u0645\u0644\u0629 \u0641\u064a \u0646\u0641\u0633 \u0627\u0644\u0648\u0642\u062a",
  targetClient: "Warehouse Shop",
  positioning: "Warehouse Retail",
  layout: "warehouse-floor",
  layoutNote: "\u0628\u064a\u0639 \u0645\u0628\u0627\u0634\u0631 \u0645\u0646 \u0645\u062e\u0632\u0646 \u0645\u0639 \u0645\u0648\u0627\u0642\u0639 \u062a\u062e\u0632\u064a\u0646.",
  accent: "#eab308",
  dark: "#713f12",
  soft: "#fef9c3",
  metrics: [
    { label: 'Daily Sales', value: 'EGP 14,400', change: '+15%' },
    { label: 'Open Orders', value: '28', change: '+2' },
    { label: 'Low Stock', value: '5', change: 'needs review' },
    { label: 'Cash Drawer', value: 'EGP 3,160', change: 'balanced' }
  ],
  products: [
  {
    "id": "SKU-16-001",
    "name": "Sugar Carton",
    "category": "Wholesale",
    "price": 840,
    "stock": 18,
    "location": "Pallet A",
    "barcode": "622160001"
  },
  {
    "id": "SKU-16-002",
    "name": "Rice Sack 25kg",
    "category": "Wholesale",
    "price": 920,
    "stock": 10,
    "location": "Pallet B",
    "barcode": "622160002"
  },
  {
    "id": "SKU-16-003",
    "name": "Oil Box",
    "category": "Wholesale",
    "price": 1050,
    "stock": 14,
    "location": "Pallet C",
    "barcode": "622160003"
  },
  {
    "id": "SKU-16-004",
    "name": "Tea Carton",
    "category": "Wholesale",
    "price": 1450,
    "stock": 7,
    "location": "Pallet D",
    "barcode": "622160004"
  },
  {
    "id": "SKU-16-005",
    "name": "Pasta Box",
    "category": "Wholesale",
    "price": 680,
    "stock": 22,
    "location": "Pallet E",
    "barcode": "622160005"
  }
],
  sales: [
  {
    "id": "INV-16-1001",
    "cashier": "Mona",
    "total": 486,
    "items": 9,
    "status": "Paid",
    "time": "09:12"
  },
  {
    "id": "INV-16-1002",
    "cashier": "Karim",
    "total": 230,
    "items": 4,
    "status": "Paid",
    "time": "10:30"
  },
  {
    "id": "INV-16-1003",
    "cashier": "Youssef",
    "total": 780,
    "items": 15,
    "status": "Pending",
    "time": "11:05"
  },
  {
    "id": "INV-16-1004",
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
    { name: 'Backoffice', status: 'review', queue: 5 }
  ],
  backendRoutes: ['/api/health', '/api/products', '/api/sales', '/api/inventory', '/api/receipt']
};

export type Product = typeof store.products[number];
export type Sale = typeof store.sales[number];
