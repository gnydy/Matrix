export const site = {
  "name": "Warehouse Retail Grocery POS",
  "slug": "16-warehouse-retail-grocery-pos",
  "scale": "Warehouse + retail",
  "positioning": "نظام واجهة يربط البيع بالمخزن الخلفي والاستلام والتسليم.",
  "audience": "مخزن بقالة يبيع تجزئة وجملة",
  "cta": "Connect retail checkout with warehouse movement",
  "accent": "stone",
  "primary": "stone-700",
  "bg": "stone-50",
  "tint": "stone-200",
  "dark": "stone-900",
  "metrics": [
    {
      "label": "Today revenue",
      "value": "EGP 88,900",
      "note": "Mock daily sales"
    },
    {
      "label": "Orders",
      "value": "196",
      "note": "Receipts today"
    },
    {
      "label": "Products",
      "value": "6,400",
      "note": "Catalog size"
    },
    {
      "label": "Cashiers",
      "value": "4",
      "note": "1 branch(es)"
    }
  ],
  "features": [
    "Backroom stock",
    "Pick tickets",
    "Retail/wholesale toggle",
    "Receiving dock status"
  ],
  "products": [
    {
      "sku": "G-001",
      "name": "Rice 1kg",
      "category": "Staples",
      "price": "EGP 42",
      "stock": 154,
      "velocity": "Fast"
    },
    {
      "sku": "G-002",
      "name": "Sugar 1kg",
      "category": "Staples",
      "price": "EGP 36",
      "stock": 91,
      "velocity": "Fast"
    },
    {
      "sku": "G-003",
      "name": "Tea Pack",
      "category": "Drinks",
      "price": "EGP 58",
      "stock": 36,
      "velocity": "Normal"
    },
    {
      "sku": "G-004",
      "name": "Milk Carton",
      "category": "Dairy",
      "price": "EGP 32",
      "stock": 24,
      "velocity": "Fresh"
    },
    {
      "sku": "G-005",
      "name": "Cheese 500g",
      "category": "Dairy",
      "price": "EGP 74",
      "stock": 18,
      "velocity": "Fresh"
    },
    {
      "sku": "G-006",
      "name": "Cooking Oil",
      "category": "Staples",
      "price": "EGP 89",
      "stock": 12,
      "velocity": "Critical"
    },
    {
      "sku": "G-007",
      "name": "Pasta",
      "category": "Staples",
      "price": "EGP 24",
      "stock": 210,
      "velocity": "Fast"
    },
    {
      "sku": "G-008",
      "name": "Tuna Can",
      "category": "Canned",
      "price": "EGP 65",
      "stock": 42,
      "velocity": "Normal"
    },
    {
      "sku": "G-009",
      "name": "Biscuits",
      "category": "Snacks",
      "price": "EGP 18",
      "stock": 130,
      "velocity": "Fast"
    },
    {
      "sku": "G-010",
      "name": "Water 1.5L",
      "category": "Drinks",
      "price": "EGP 12",
      "stock": 240,
      "velocity": "Fast"
    }
  ],
  "cart": [
    {
      "name": "Rice 1kg",
      "qty": 2,
      "total": "EGP 84"
    },
    {
      "name": "Milk Carton",
      "qty": 3,
      "total": "EGP 96"
    },
    {
      "name": "Biscuits",
      "qty": 5,
      "total": "EGP 90"
    }
  ],
  "alerts": [
    {
      "title": "Cooking Oil low stock",
      "level": "critical",
      "time": "11 min ago"
    },
    {
      "title": "Cashier lane variance needs review",
      "level": "warning",
      "time": "28 min ago"
    },
    {
      "title": "Supplier delivery due today",
      "level": "info",
      "time": "1 hr ago"
    }
  ],
  "orders": [
    {
      "id": "INV-1024",
      "customer": "Walk-in",
      "method": "Cash",
      "amount": "EGP 270",
      "status": "Paid"
    },
    {
      "id": "INV-1025",
      "customer": "Mohamed A.",
      "method": "Card",
      "amount": "EGP 612",
      "status": "Paid"
    },
    {
      "id": "INV-1026",
      "customer": "Delivery order",
      "method": "COD",
      "amount": "EGP 430",
      "status": "Picking"
    }
  ],
  "departments": [
    "Staples",
    "Dairy",
    "Fresh",
    "Snacks",
    "Drinks",
    "Household"
  ],
  "risk": "High",
  "layout": "warehouse"
} as const;
