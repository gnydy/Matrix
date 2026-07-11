import fs from 'node:fs';
import path from 'node:path';

const root = 'E:\\Matrix';
const web = path.join(root, 'apps', 'web-erp');

function rm(rel) {
  const full = path.join(web, rel);
  if (fs.existsSync(full)) {
    fs.rmSync(full, { recursive: true, force: true });
    console.log('removed:', rel);
  }
}

function write(rel, content) {
  const full = path.join(web, rel);
  fs.mkdirSync(path.dirname(full), { recursive: true });
  fs.writeFileSync(full, content, 'utf8');
  console.log('written:', rel);
}

// امسح الصفحات المكررة والمسببة للأخطاء
rm('src/app/(erp)/invoices');
rm('src/app/invoices');

// صفحة الفاتورة داخل ERP الحقيقي
write('src/app/erp/invoices/new/page.tsx', String.raw`
'use client';

import { useMemo, useState } from 'react';

type Product = {
  id: string;
  code: string;
  name: string;
  price: number;
  stock: number;
};

type Line = {
  id: string;
  code: string;
  name: string;
  qty: number;
  price: number;
};

const products: Product[] = [
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
  const [qty, setQty] = useState('1');
  const [paid, setPaid] = useState('');
  const [discount, setDiscount] = useState('0');
  const [lines, setLines] = useState<Line[]>([]);
  const [message, setMessage] = useState('');

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();

    if (!q) return products;

    return products.filter((p) =>
      p.code.toLowerCase().includes(q) || p.name.toLowerCase().includes(q),
    );
  }, [search]);

  const subtotal = lines.reduce((sum, line) => sum + line.qty * line.price, 0);
  const discountValue = Math.max(Number(discount || 0), 0);
  const total = Math.max(subtotal - discountValue, 0);
  const paidValue = Math.max(Number(paid || 0), 0);
  const remaining = Math.max(total - paidValue, 0);
  const change = Math.max(paidValue - total, 0);

  function addProduct(product: Product) {
    const quantity = Math.max(Number(qty || 1), 1);

    setLines((current) => {
      const found = current.find((line) => line.id === product.id);

      if (found) {
        return current.map((line) =>
          line.id === product.id ? { ...line, qty: line.qty + quantity } : line,
        );
      }

      return [
        ...current,
        {
          id: product.id,
          code: product.code,
          name: product.name,
          qty: quantity,
          price: product.price,
        },
      ];
    });

    setSearch('');
    setQty('1');
    setMessage('');
  }

  function updateQty(id: string, value: string) {
    const quantity = Math.max(Number(value || 1), 1);

    setLines((current) =>
      current.map((line) => (line.id === id ? { ...line, qty: quantity } : line)),
    );
  }

  function updatePrice(id: string, value: string) {
    const price = Math.max(Number(value || 0), 0);

    setLines((current) =>
      current.map((line) => (line.id === id ? { ...line, price } : line)),
    );
  }

  function saveInvoice() {
    if (!lines.length) {
      setMessage('أضف منتجات إلى الفاتورة أولًا');
      return;
    }

    if (paidValue < total) {
      setMessage('المبلغ المدفوع أقل من الإجمالي');
      return;
    }

    setMessage('تم تسجيل الفاتورة تجريبيًا داخل ERP. الخطوة التالية ربطها بالـ API.');
  }

  return (
    <div style={{ display: 'grid', gap: 20 }}>
      <section style={{
        padding: 24,
        border: '1px solid #334155',
        borderRadius: 20,
        background: '#111827',
      }}>
        <h1 style={{ margin: '0 0 8px', fontSize: 34, color: '#22c55e' }}>
          فاتورة جديدة
        </h1>
        <p style={{ margin: 0, color: '#94a3b8' }}>
          صفحة الفاتورة الآن داخل الـ ERP نفسه. أضف المنتجات، احسب الإجمالي، ثم سجل الفاتورة.
        </p>
        {message ? (
          <p style={{ marginTop: 14, color: message.includes('تم') ? '#22c55e' : '#f97316' }}>
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

            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 120px',
              gap: 10,
              marginBottom: 16,
            }}>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="كود المنتج أو اسمه"
                autoFocus
                style={{
                  padding: 14,
                  borderRadius: 12,
                  background: '#020617',
                  color: '#e5e7eb',
                  border: '1px solid #475569',
                }}
              />

              <input
                value={qty}
                onChange={(e) => setQty(e.target.value)}
                type="number"
                min="1"
                placeholder="الكمية"
                style={{
                  padding: 14,
                  borderRadius: 12,
                  background: '#020617',
                  color: '#e5e7eb',
                  border: '1px solid #475569',
                }}
              />
            </div>

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
                <div key={line.id} style={{
                  display: 'grid',
                  gridTemplateColumns: '1.5fr 90px 120px 120px 80px',
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
                    value={line.qty}
                    onChange={(e) => updateQty(line.id, e.target.value)}
                    type="number"
                    min="1"
                    style={{ padding: 10 }}
                  />

                  <input
                    value={line.price}
                    onChange={(e) => updatePrice(line.id, e.target.value)}
                    type="number"
                    min="0"
                    style={{ padding: 10 }}
                  />

                  <strong>{money(line.qty * line.price)}</strong>

                  <button
                    type="button"
                    onClick={() => setLines((current) => current.filter((x) => x.id !== line.id))}
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
              onChange={(e) => setDiscount(e.target.value)}
              type="number"
              min="0"
              placeholder="الخصم"
              style={{
                padding: 14,
                borderRadius: 12,
                background: '#020617',
                color: '#e5e7eb',
                border: '1px solid #475569',
              }}
            />

            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 22 }}>
              <span>الإجمالي النهائي</span>
              <strong>{money(total)}</strong>
            </div>

            <input
              value={paid}
              onChange={(e) => setPaid(e.target.value)}
              type="number"
              min="0"
              placeholder="المبلغ المدفوع"
              style={{
                padding: 14,
                borderRadius: 12,
                background: '#020617',
                color: '#e5e7eb',
                border: '1px solid #475569',
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
    </div>
  );
}
`);

console.log('DONE: invoice page placed inside ERP');