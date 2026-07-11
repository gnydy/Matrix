export const store = {
  title: "Enterprise Retail Chain OS",
  arabicDescription: "\u0646\u0638\u0627\u0645 \u0633\u0644\u0633\u0644\u0629 \u0636\u062e\u0645\u0629",
  useCase: "Enterprise POS Mock \u0644\u0633\u0644\u0633\u0644\u0629 \u0628\u0642\u0627\u0644\u0629 \u0645\u062a\u0639\u062f\u062f\u0629 \u0627\u0644\u0645\u062f\u0646",
  targetClient: "Retail Chain",
  positioning: "Enterprise OS",
  layout: "enterprise-command",
  layoutNote: "\u0645\u0631\u0643\u0632 \u0623\u0648\u0627\u0645\u0631 Enterprise \u0644\u0639\u062f\u0629 \u0641\u0631\u0648\u0639 \u0648\u0645\u062f\u0646.",
  accent: "#78716c",
  dark: "#292524",
  soft: "#f5f5f4",
  metrics: [
    { label: 'Daily Sales', value: 'EGP 17,200', change: '+10%' },
    { label: 'Open Orders', value: '32', change: '+1' },
    { label: 'Low Stock', value: '9', change: 'needs review' },
    { label: 'Cash Drawer', value: 'EGP 3,600', change: 'balanced' }
  ],
  products: [
  {
    "id": "SKU-20-001",
    "name": "Sugar Carton",
    "category": "Wholesale",
    "price": 840,
    "stock": 18,
    "location": "Pallet A",
    "barcode": "622200001"
  },
  {
    "id": "SKU-20-002",
    "name": "Rice Sack 25kg",
    "category": "Wholesale",
    "price": 920,
    "stock": 10,
    "location": "Pallet B",
    "barcode": "622200002"
  },
  {
    "id": "SKU-20-003",
    "name": "Oil Box",
    "category": "Wholesale",
    "price": 1050,
    "stock": 14,
    "location": "Pallet C",
    "barcode": "622200003"
  },
  {
    "id": "SKU-20-004",
    "name": "Tea Carton",
    "category": "Wholesale",
    "price": 1450,
    "stock": 7,
    "location": "Pallet D",
    "barcode": "622200004"
  },
  {
    "id": "SKU-20-005",
    "name": "Pasta Box",
    "category": "Wholesale",
    "price": 680,
    "stock": 22,
    "location": "Pallet E",
    "barcode": "622200005"
  }
],
  sales: [
  {
    "id": "INV-20-1001",
    "cashier": "Mona",
    "total": 486,
    "items": 9,
    "status": "Paid",
    "time": "09:12"
  },
  {
    "id": "INV-20-1002",
    "cashier": "Karim",
    "total": 230,
    "items": 4,
    "status": "Paid",
    "time": "10:30"
  },
  {
    "id": "INV-20-1003",
    "cashier": "Youssef",
    "total": 780,
    "items": 15,
    "status": "Pending",
    "time": "11:05"
  },
  {
    "id": "INV-20-1004",
    "cashier": "Sara",
    "total": 122,
    "items": 3,
    "status": "Paid",
    "time": "12:41"
  }
],
  lanes: [
    { name: 'Cashier 1', status: 'active', queue: 2 },
    { name: 'Cashier 2', status: 'paused', queue: 3 },
    { name: 'Backoffice', status: 'review', queue: 4 }
  ],
  backendRoutes: ['/api/health', '/api/products', '/api/sales', '/api/inventory', '/api/receipt']
};

export type Product = typeof store.products[number];
export type Sale = typeof store.sales[number];
