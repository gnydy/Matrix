import fs from 'node:fs';
import path from 'node:path';

const root = 'E:\\Matrix';

function write(rel, content) {
  const file = path.join(root, rel);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, content, 'utf8');
  console.log('updated:', rel);
}

const page = `
'use client';

import { FormEvent, useMemo, useState } from 'react';

type Product = {
  id: string;
  code: string;
  name: string;
  price: number;
  stock: number;
};

type Line = {
  productId: string;
  code: string;
  name: string;
  quantity: number;
  price: number;
};

const PRODUCTS: Product[] = [
  { id: '1', code: 'MILK-1L', name: 'لبن 1 لتر', price: 35, stock: 50 },
  { id: '2', code: 'RICE-1KG', name: 'أرز 1 كيلو', price: 42, stock: 80 },
  { id: '3', code: 'SUGAR-1KG', name: 'سكر 1 كيلو', price: 38, stock: 70 },
  { id: '4', code: 'OIL-1L', name: 'زيت 1 لتر', price: 95, stock: 40 },
  { id: '5', code: 'TEA-250G', name: 'شاي 250 جرام', price: 65, stock: 35 },
  { id: '6', code: 'WATER-1.5L', name: 'مياه 1.5 لتر', price: 12, stock: 100 },
];

function money(value: number) {
  return new Intl.NumberFormat('ar-EG', {
    style: 'currency',
    currency: 'EGP',
    maximumFractionDigits: 2,
  }).format(value || 0);
}

export default function NewInvoicePage() {
  const [search, setSearch] = useState('');
  const [quantity, setQuantity] = useState('1');
  const [paid, setPaid] = useState('');
  const [discount, setDiscount] = useState('0');
  const [lines, setLines] = useState<Line[]>([]);
  const [message, setMessage] = useState('');

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();

    if (!q) return PRODUCTS;

    return PRODUCTS.filter((product) => {
      return (
        product.code.toLowerCase().includes(q) ||
        product.name.toLowerCase().includes(q)
      );
    });
  }, [search]);

  const subtotal = lines.reduce((sum, line) => sum + line.quantity * line.price, 0);
  const discountValue = Number(discount || 0);
  const total = Math.max(subtotal - discountValue, 0);
  const paidValue = Number(paid || 0);
  const remaining = Math.max(total - paidValue, 0);
  const change = Math.max(paidValue - total, 0);

  function addProduct(product: Product) {
    const qty = Math.max(Number(quantity || 1), 1);

    setLines((current) => {
      const found = current.find((line) => line.productId === product.id);

      if (found) {
        return current.map((line) =>
          line.productId === product.id
            ? { ...line, quantity: line.quantity + qty }
            : line,
        );
      }

      return [
        ...current,
        {
          productId: product.id,
          code: product.code,
          name: product.name,
          quantity: qty,
          price: product.price,
        },
      ];
    });

    setSearch('');
    setQuantity('1');
    setMessage('');
  }

  function submitSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (filtered[0]) {
      addProduct(filtered[0]);
    }
  }

  function updateQty(productId: string, value: string) {
    const qty = Math.max(Number(value || 1), 1);

    setLines((current) =>
      current.map((line) =>
        line.productId === productId ? { ...line, quantity: qty } : line,
      ),
    );
  }

  function updatePrice(productId: string, value: string) {
    const price = Math.max(Number(value || 0), 0);

    setLines((current) =>
      current.map((line) =>
        line.productId === productId ? { ...line, price } : line,
      ),
    );
  }

  function removeLine(productId: string) {
    setLines((current) => current.filter((line) => line.productId !== productId));
  }

  function saveInvoice() {
    if (!lines.length) {
      setMessage('أضف منتجات أولًا');
      return;
    }

    if (paidValue < total) {
      setMessage('المبلغ المدفوع أقل من الإجمالي');
      return;
    }

    setMessage('تم تسجيل الفاتورة تجريبيًا. الخطوة التالية ربطها بالـ API الحقيقي.');
  }

  return (
    <main style={{
      minHeight: '100vh',
      background: '#020617',
      color: '#e5e7eb',
      padding: 24,
      direction: 'rtl',
      fontFamily: 'Arial, sans-serif',
    }}>
      <section style={{
        padding: 24,
        border: '1px solid #334155',
        borderRadius: 20,
        background: '#111827',
        marginBottom: 20,
      }}>
        <h1 style={{ fontSize: 32, margin: '0 0 8px', fontWeight: 900 }}>
          فاتورة جديدة
        </h1>

        <p style={{ margin: 0, color: '#94a3b8' }}>
          صفحة فاتورة واضحة: ابحث عن المنتج، أضفه للفاتورة، عدّل الكمية والسعر، ثم احسب المدفوع والباقي.
        </p>

        {message ? (
          <p style={{ marginTop: 16, color: message.includes('تم') ? '#22c55e' : '#f97316' }}>
            {message}
          </p>
        ) : null}
      </section>

      <section style={{
        display: 'grid',
        gridTemplateColumns: '1.2fr 0.8fr',
        gap: 20,
        alignItems: 'start',
      }}>
        <div style={{ display: 'grid', gap: 20 }}>
          <section style={{
            padding: 24,
            border: '1px solid #334155',
            borderRadius: 20,
            background: '#111827',
          }}>
            <h2 style={{ marginTop: 0 }}>إضافة المنتجات</h2>

            <form onSubmit={submitSearch} style={{
              display: 'grid',
              gridTemplateColumns: '1fr 120px 120px',
              gap: 10,
              marginBottom: 16,
            }}>
              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="اكتب كود المنتج أو اسمه"
                autoFocus
                style={{
                  padding: 14,
                  borderRadius: 12,
                  border: '1px solid #475569',
                  background: '#020617',
                  color: '#e5e7eb',
                  fontSize: 16,
                }}
              />

              <input
                value={quantity}
                onChange={(event) => setQuantity(event.target.value)}
                type="number"
                min="1"
                placeholder="الكمية"
                style={{
                  padding: 14,
                  borderRadius: 12,
                  border: '1px solid #475569',
                  background: '#020617',
                  color: '#e5e7eb',
                  fontSize: 16,
                }}
              />

              <button type="submit" style={{
                border: 0,
                borderRadius: 12,
                background: '#2563eb',
                color: 'white',
                fontWeight: 900,
                cursor: 'pointer',
              }}>
                إضافة
              </button>
            </form>

            <div style={{ display: 'grid', gap: 10 }}>
              {filtered.map((product) => (
                <button
                  key={product.id}
                  type="button"
                  onClick={() => addProduct(product)}
                  style={{
                    textAlign: 'right',
                    padding: 14,
                    borderRadius: 14,
                    border: '1px solid #334155',
                    background: '#0f172a',
                    color: '#e5e7eb',
                    cursor: 'pointer',
                  }}
                >
                  <strong>{product.code} — {product.name}</strong>
                  <div style={{ color: '#94a3b8', marginTop: 4 }}>
                    السعر: {money(product.price)} · المخزون: {product.stock}
                  </div>
                </button>
              ))}
            </div>
          </section>

          <section style={{
            padding: 24,
            border: '1px solid #334155',
            borderRadius: 20,
            background: '#111827',
          }}>
            <h2 style={{ marginTop: 0 }}>بنود الفاتورة</h2>

            <div style={{ display: 'grid', gap: 10 }}>
              {lines.map((line) => (
                <div key={line.productId} style={{
                  display: 'grid',
                  gridTemplateColumns: '1.5fr 110px 130px 130px 80px',
                  gap: 8,
                  alignItems: 'center',
                  padding: 12,
                  border: '1px solid #334155',
                  borderRadius: 14,
                  background: '#0f172a',
                }}>
                  <div>
                    <strong>{line.name}</strong>
                    <div style={{ color: '#94a3b8' }}>{line.code}</div>
                  </div>

                  <input
                    value={line.quantity}
                    onChange={(event) => updateQty(line.productId, event.target.value)}
                    type="number"
                    min="1"
                    style={{ padding: 10 }}
                  />

                  <input
                    value={line.price}
                    onChange={(event) => updatePrice(line.productId, event.target.value)}
                    type="number"
                    min="0"
                    style={{ padding: 10 }}
                  />

                  <strong>{money(line.quantity * line.price)}</strong>

                  <button
                    type="button"
                    onClick={() => removeLine(line.productId)}
                    style={{
                      padding: 10,
                      borderRadius: 10,
                      border: '1px solid #7f1d1d',
                      background: '#450a0a',
                      color: '#fecaca',
                      cursor: 'pointer',
                    }}
                  >
                    حذف
                  </button>
                </div>
              ))}

              {!lines.length ? (
                <p style={{ color: '#94a3b8' }}>لا توجد منتجات في الفاتورة.</p>
              ) : null}
            </div>
          </section>
        </div>

        <aside style={{
          padding: 24,
          border: '1px solid #334155',
          borderRadius: 20,
          background: '#111827',
          position: 'sticky',
          top: 20,
        }}>
          <h2 style={{ marginTop: 0 }}>المحاسبة</h2>

          <div style={{ display: 'grid', gap: 14 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>عدد الأصناف</span>
              <strong>{lines.length}</strong>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>الإجمالي قبل الخصم</span>
              <strong>{money(subtotal)}</strong>
            </div>

            <input
              value={discount}
              onChange={(event) => setDiscount(event.target.value)}
              type="number"
              min="0"
              placeholder="الخصم"
              style={{
                padding: 14,
                borderRadius: 12,
                border: '1px solid #475569',
                background: '#020617',
                color: '#e5e7eb',
                fontSize: 16,
              }}
            />

            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 22 }}>
              <span>الإجمالي النهائي</span>
              <strong>{money(total)}</strong>
            </div>

            <input
              value={paid}
              onChange={(event) => setPaid(event.target.value)}
              type="number"
              min="0"
              placeholder="المبلغ المدفوع"
              style={{
                padding: 14,
                borderRadius: 12,
                border: '1px solid #475569',
                background: '#020617',
                color: '#e5e7eb',
                fontSize: 16,
              }}
            />

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>المتبقي</span>
              <strong style={{ color: remaining > 0 ? '#ef4444' : '#22c55e' }}>
                {money(remaining)}
              </strong>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>الباقي للعميل</span>
              <strong style={{ color: change > 0 ? '#22c55e' : '#94a3b8' }}>
                {money(change)}
              </strong>
            </div>

            <button
              type="button"
              onClick={saveInvoice}
              style={{
                padding: 16,
                border: 0,
                borderRadius: 14,
                background: '#2563eb',
                color: 'white',
                fontSize: 18,
                fontWeight: 900,
                cursor: 'pointer',
              }}
            >
              تسجيل الفاتورة
            </button>

            <button
              type="button"
              onClick={() => window.print()}
              style={{
                padding: 14,
                borderRadius: 14,
                border: '1px solid #475569',
                background: '#0f172a',
                color: '#e5e7eb',
                fontWeight: 800,
                cursor: 'pointer',
              }}
            >
              طباعة
            </button>
          </div>
        </aside>
      </section>
    </main>
  );
}
`;

write('apps/web-erp/src/app/invoices/new/page.tsx', page);
write('apps/web-erp/src/app/(erp)/invoices/new/page.tsx', page);

console.log('DONE: visible invoice page installed');