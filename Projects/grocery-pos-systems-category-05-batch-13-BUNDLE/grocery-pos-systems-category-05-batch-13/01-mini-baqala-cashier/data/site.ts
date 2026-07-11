export const site = {
  "name": "Mini Baqala Cashier",
  "slug": "01-mini-baqala-cashier",
  "scale": "Small corner grocery",
  "positioning": "خفيف وسريع للبقالة الصغيرة التي تحتاج بيع يومي بدون تعقيد.",
  "audience": "بقالة صغيرة / محل تموين حي",
  "cta": "Start a fast daily cashier workflow",
  "accent": "emerald",
  "primary": "emerald-600",
  "bg": "emerald-50",
  "tint": "emerald-100",
  "dark": "emerald-700",
  "metrics": [
    {
      "label": "Today revenue",
      "value": "EGP 8,450",
      "note": "Mock daily sales"
    },
    {
      "label": "Orders",
      "value": "94",
      "note": "Receipts today"
    },
    {
      "label": "Products",
      "value": "320",
      "note": "Catalog size"
    },
    {
      "label": "Cashiers",
      "value": "1",
      "note": "1 branch(es)"
    }
  ],
  "features": [
    "Quick item keypad",
    "Cash drawer summary",
    "Daily shift close",
    "Low-stock shelf alerts"
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
  "risk": "Low",
  "layout": "compact"
} as const;
