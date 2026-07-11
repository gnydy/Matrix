import { store } from '@/data/store';

export function money(value: number) {
  return new Intl.NumberFormat('en-EG', { style: 'currency', currency: 'EGP', maximumFractionDigits: 0 }).format(value);
}

export function getInventorySummary() {
  const totalStock = store.products.reduce((sum, product) => sum + product.stock, 0);
  const lowStock = store.products.filter((product) => product.stock < 25);
  const value = store.products.reduce((sum, product) => sum + product.stock * product.price, 0);
  return { totalStock, lowStock, value };
}

export function createReceipt(payload: { items: Array<{ id: string; qty: number }>; cashier?: string }) {
  const items = payload.items.map((item) => {
    const product = store.products.find((p) => p.id === item.id);
    if (!product) return null;
    return { ...product, qty: item.qty, lineTotal: product.price * item.qty };
  }).filter(Boolean) as Array<{ name: string; price: number; qty: number; lineTotal: number }>;
  const subtotal = items.reduce((sum, item) => sum + item.lineTotal, 0);
  const tax = Math.round(subtotal * 0.14);
  return {
    receiptId: `RCPT-${Date.now()}`,
    cashier: payload.cashier ?? 'Demo Cashier',
    items,
    subtotal,
    tax,
    total: subtotal + tax
  };
}
