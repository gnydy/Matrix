import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();

function write(rel, content) {
  const file = path.join(root, rel);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, content, 'utf8');
  console.log('updated:', rel);
}

write('apps/web-erp/src/components/new-invoice-client.tsx', `
'use client';

import { FormEvent, useEffect, useMemo, useState } from 'react';
import { erpApi, money } from './erp-api';

type Warehouse = {
  id: string;
  name: string;
  code?: string | null;
};

type Product = {
  id: string;
  sku?: string | null;
  name: string;
  unit?: string | null;
  type?: string | null;
  salePrice?: string | number | null;
  stockLevels?: Array<{
    warehouseId?: string | null;
    quantity?: string | number | null;
    warehouse?: Warehouse | null;
  }>;
};

type InvoiceLine = {
  productId: string;
  sku: string;
  name: string;
  quantity: number;
  unitPrice: number;
};

type InvoiceResult = {
  id: string;
  ref?: string | null;
  grandTotal?: string | number | null;
  change?: string | number | null;
};

function stockInWarehouse(product: Product, warehouseId: string) {
  return (product.stockLevels ?? [])
    .filter((level) => {
      if (level.warehouseId) return level.warehouseId === warehouseId;
      if (level.warehouse?.id) return level.warehouse.id === warehouseId;
      return false;
    })
    .reduce((sum, level) => sum + Number(level.quantity ?? 0), 0);
}

function totalStock(product: Product) {
  return (product.stockLevels ?? []).reduce(
    (sum, level) => sum + Number(level.quantity ?? 0),
    0,
  );
}

function lineTotal(line: InvoiceLine) {
  return line.quantity * line.unitPrice;
}

export function NewInvoiceClient() {
  const [warehouses, setWarehouses] = useState<Warehouse[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

  const [warehouseId, setWarehouseId] = useState('');
  const [search, setSearch] = useState('');
  const [quantity, setQuantity] = useState('1');
  const [paidAmount, setPaidAmount] = useState('');
  const [discount, setDiscount] = useState('0');
  const [lines, setLines] = useState<InvoiceLine[]>([]);

  const [lastInvoice, setLastInvoice] = useState<InvoiceResult | null>(null);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  async function load() {
    setLoading(true);
    setError('');

    try {
      const [warehouseRows, productRows] = await Promise.all([
        erpApi<Warehouse[]>('inventory/warehouses'),
        erpApi<Product[]>('inventory/products'),
      ]);

      setWarehouses(Array.isArray(warehouseRows) ? warehouseRows : []);
      setProducts(Array.isArray(productRows) ? productRows : []);

      if (!warehouseId && warehouseRows?.[0]) {
        setWarehouseId(warehouseRows[0].id);
      }
    } catch (e) {
      setError(e instanceof Error ? e.message : 'تعذر تحميل بيانات الفاتورة');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    void load();
  }, []);

  const filteredProducts = useMemo(() => {
    const q = search.trim().toLowerCase();

    if (!q) return products.slice(0, 24);

    return products
      .filter((product) => {
        const sku = String(product.sku || '').toLowerCase();
        const name = String(product.name || '').toLowerCase();

        return sku.includes(q) || name.includes(q);
      })
      .slice(0, 24);
  }, [products, search]);

  const subtotal = lines.reduce((sum, line) => sum + lineTotal(line), 0);
  const discountValue = Number(discount || 0);
  const grandTotal = Math.max(subtotal - discountValue, 0);
  const paid = Number(paidAmount || 0);
  const remaining = Math.max(grandTotal - paid, 0);
  const change = Math.max(paid - grandTotal, 0);

  function addProduct(product: Product) {
    setError('');
    setLastInvoice(null);

    if (!warehouseId) {
      setError('اختر المخزن أولًا');
      return;
    }

    const qty = Number(quantity || 1);

    if (!Number.isFinite(qty) || qty <= 0) {
      setError('أدخل كمية صحيحة');
      return;
    }

    const available = product.type === 'service' ? Infinity : stockInWarehouse(product, warehouseId);

    const already = lines
      .filter((line) => line.productId === product.id)
      .reduce((sum, line) => sum + line.quantity, 0);

    if (product.type !== 'service' && already + qty > available) {
      setError('الكمية غير كافية. المتاح: ' + available);
      return;
    }

    const price = Number(product.salePrice || 0);

    if (!price || price <= 0) {
      setError('هذا المنتج ليس له سعر بيع صحيح');
      return;
    }

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
          sku: product.sku || '',
          name: product.name,
          quantity: qty,
          unitPrice: price,
        },
      ];
    });

    setSearch('');
    setQuantity('1');
  }

  function submitSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!filteredProducts.length) {
      setError('لا يوجد منتج بهذا الكود أو الاسم');
      return;
    }

    addProduct(filteredProducts[0]);
  }

  function updateQuantity(productId: string, value: string) {
    const qty = Number(value || 1);

    setLines((current) =>
      current.map((line) =>
        line.productId === productId
          ? { ...line, quantity: Number.isFinite(qty) && qty > 0 ? qty : 1 }
          : line,
      ),
    );
  }

  function updatePrice(productId: string, value: string) {
    const price = Number(value || 0);

    setLines((current) =>
      current.map((line) =>
        line.productId === productId
          ? { ...line, unitPrice: Number.isFinite(price) && price >= 0 ? price : 0 }
          : line,
      ),
    );
  }

  function removeLine(productId: string) {
    setLines((current) => current.filter((line) => line.productId !== productId));
  }

  function clearInvoice() {
    setLines([]);
    setSearch('');
    setQuantity('1');
    setPaidAmount('');
    setDiscount('0');
    setLastInvoice(null);
    setMessage('');
    setError('');
  }

  async function saveInvoice() {
    if (!warehouseId) {
      setError('اختر المخزن');
      return;
    }

    if (!lines.length) {
      setError('أضف منتجات إلى الفاتورة');
      return;
    }

    if (discountValue < 0) {
      setError('الخصم لا يمكن أن يكون بالسالب');
      return;
    }

    if (paid < grandTotal) {
      setError('المبلغ المدفوع أقل من إجمالي الفاتورة');
      return;
    }

    setSaving(true);
    setMessage('');
    setError('');
    setLastInvoice(null);

    try {
      const created = await erpApi<InvoiceResult>('sales/cashier-sale', {
        method: 'POST',
        body: JSON.stringify({
          warehouseId,
          paidAmount: paid,
          discount: discountValue,
          lines: lines.map((line) => ({
            productId: line.productId,
            quantity: line.quantity,
            unitPrice: line.unitPrice,
          })),
        }),
      });

      setLastInvoice(created);
      setMessage('تم تسجيل الفاتورة بنجاح: ' + (created.ref || created.id));
      setLines([]);
      setSearch('');
      setQuantity('1');
      setPaidAmount('');
      setDiscount('0');
      await load();
    } catch (e) {
      setError(e instanceof Error ? e.message : 'تعذر تسجيل الفاتورة');
    } finally {
      setSaving(false);
    }
  }

  function printInvoice() {
    window.print();
  }

  return (
    <div style={{ display: 'grid', gap: 20 }}>
      <style>{\`
        @media print {
          body * {
            visibility: hidden;
          }

          #invoice-print, #invoice-print * {
            visibility: visible;
          }

          #invoice-print {
            position: absolute;
            inset: 0;
            padding: 24px;
            background: white !important;
            color: black !important;
          }

          .no-print {
            display: none !important;
          }
        }
      \`}</style>

      <section className="no-print" style={{ padding: 22, border: '1px solid #334155', borderRadius: 18, background: '#111827' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
          <div>
            <h1 style={{ fontSize: 30, fontWeight: 900, marginBottom: 8 }}>فاتورة جديدة</h1>
            <p style={{ color: '#cbd5e1', margin: 0 }}>
              صفحة بيع سريعة: أضف المنتجات، احسب الإجمالي، سجل الفاتورة، واطبعها.
            </p>
          </div>

          <button
            type="button"
            onClick={clearInvoice}
            style={{ padding: '12px 16px', borderRadius: 12, border: '1px solid #475569', background: '#0f172a', color: '#e5e7eb', fontWeight: 800, cursor: 'pointer' }}
          >
            فاتورة جديدة فارغة
          </button>
        </div>

        {loading ? <p style={{ marginTop: 14 }}>جاري تحميل البيانات...</p> : null}
        {message ? <p style={{ marginTop: 14, color: '#22c55e' }}>{message}</p> : null}
        {error ? <p style={{ marginTop: 14, color: '#ef4444' }}>{error}</p> : null}
      </section>

      <section className="no-print" style={{ display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: 20, alignItems: 'start' }}>
        <div style={{ display: 'grid', gap: 20 }}>
          <section style={{ padding: 22, border: '1px solid #334155', borderRadius: 18, background: '#111827' }}>
            <h2 style={{ marginBottom: 14 }}>إضافة المنتجات</h2>

            <div style={{ display: 'grid', gap: 12 }}>
              <select
                value={warehouseId}
                onChange={(event) => setWarehouseId(event.target.value)}
                style={{ padding: 14, borderRadius: 12, border: '1px solid #475569', background: '#020617', color: '#e5e7eb', fontSize: 16 }}
              >
                <option value="">اختر المخزن</option>
                {warehouses.map((warehouse) => (
                  <option key={warehouse.id} value={warehouse.id}>
                    {warehouse.name}
                  </option>
                ))}
              </select>

              <form onSubmit={submitSearch} style={{ display: 'grid', gridTemplateColumns: '1fr 110px 120px', gap: 8 }}>
                <input
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  autoFocus
                  placeholder="كود المنتج أو اسمه"
                  style={{ padding: 14, borderRadius: 12, border: '1px solid #475569', background: '#020617', color: '#e5e7eb', fontSize: 16 }}
                />

                <input
                  value={quantity}
                  onChange={(event) => setQuantity(event.target.value)}
                  type="number"
                  min="1"
                  placeholder="الكمية"
                  style={{ padding: 14, borderRadius: 12, border: '1px solid #475569', background: '#020617', color: '#e5e7eb', fontSize: 16 }}
                />

                <button type="submit" style={{ padding: 14, borderRadius: 12, border: 0, background: '#2563eb', color: 'white', fontWeight: 900, cursor: 'pointer' }}>
                  إضافة
                </button>
              </form>
            </div>

            <div style={{ display: 'grid', gap: 8, marginTop: 16 }}>
              {filteredProducts.map((product) => (
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
                  <strong>{product.sku || 'بدون كود'} — {product.name}</strong>
                  <div style={{ color: '#94a3b8', marginTop: 4 }}>
                    السعر: {money(product.salePrice)} · المتاح: {warehouseId ? stockInWarehouse(product, warehouseId) : totalStock(product)}
                  </div>
                </button>
              ))}

              {!filteredProducts.length ? <p style={{ color: '#94a3b8' }}>لا توجد منتجات مطابقة.</p> : null}
            </div>
          </section>
        </div>

        <aside style={{ display: 'grid', gap: 20, position: 'sticky', top: 16 }}>
          <section style={{ padding: 22, border: '1px solid #334155', borderRadius: 18, background: '#111827' }}>
            <h2>ملخص المحاسبة</h2>

            <div style={{ display: 'grid', gap: 12, marginTop: 16 }}>
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
                style={{ padding: 14, borderRadius: 12, border: '1px solid #475569', background: '#020617', color: '#e5e7eb', fontSize: 17 }}
              />

              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 22 }}>
                <span>الإجمالي النهائي</span>
                <strong>{money(grandTotal)}</strong>
              </div>

              <input
                value={paidAmount}
                onChange={(event) => setPaidAmount(event.target.value)}
                type="number"
                min="0"
                placeholder="المبلغ المدفوع"
                style={{ padding: 14, borderRadius: 12, border: '1px solid #475569', background: '#020617', color: '#e5e7eb', fontSize: 17 }}
              />

              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>المتبقي</span>
                <strong style={{ color: remaining > 0 ? '#ef4444' : '#22c55e' }}>{money(remaining)}</strong>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>الباقي للعميل</span>
                <strong style={{ color: change > 0 ? '#22c55e' : '#94a3b8' }}>{money(change)}</strong>
              </div>

              <button
                type="button"
                disabled={saving || !lines.length}
                onClick={() => void saveInvoice()}
                style={{
                  padding: 16,
                  borderRadius: 14,
                  border: 0,
                  background: saving || !lines.length ? '#475569' : '#2563eb',
                  color: 'white',
                  fontWeight: 900,
                  fontSize: 18,
                  cursor: saving || !lines.length ? 'not-allowed' : 'pointer',
                }}
              >
                {saving ? 'جاري تسجيل الفاتورة...' : 'تسجيل الفاتورة'}
              </button>

              <button
                type="button"
                onClick={printInvoice}
                style={{ padding: 14, borderRadius: 14, border: '1px solid #475569', background: '#0f172a', color: '#e5e7eb', fontWeight: 800, cursor: 'pointer' }}
              >
                طباعة الفاتورة
              </button>
            </div>
          </section>
        </aside>
      </section>

      <section id="invoice-print" style={{ padding: 22, border: '1px solid #334155', borderRadius: 18, background: '#111827' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap', borderBottom: '1px solid #334155', paddingBottom: 14 }}>
          <div>
            <h2 style={{ margin: 0 }}>فاتورة بيع</h2>
            <p style={{ margin: '6px 0 0', color: '#94a3b8' }}>Matrix ERP</p>
          </div>

          <div style={{ textAlign: 'left' }}>
            <strong>{lastInvoice?.ref ? 'رقم الفاتورة: ' + lastInvoice.ref : 'فاتورة جديدة'}</strong>
            <p style={{ margin: '6px 0 0', color: '#94a3b8' }}>{new Date().toLocaleString('ar-EG')}</p>
          </div>
        </div>

        <div style={{ display: 'grid', gap: 8, marginTop: 16 }}>
          {lines.map((line) => (
            <div
              key={line.productId}
              style={{
                display: 'grid',
                gridTemplateColumns: '2fr 100px 120px 120px 90px',
                gap: 8,
                alignItems: 'center',
                padding: 12,
                border: '1px solid #334155',
                borderRadius: 12,
              }}
            >
              <div>
                <strong>{line.name}</strong>
                <div style={{ color: '#94a3b8' }}>{line.sku || 'بدون كود'}</div>
              </div>

              <input
                className="no-print"
                value={line.quantity}
                onChange={(event) => updateQuantity(line.productId, event.target.value)}
                type="number"
                min="1"
                style={{ padding: 10 }}
              />

              <input
                className="no-print"
                value={line.unitPrice}
                onChange={(event) => updatePrice(line.productId, event.target.value)}
                type="number"
                min="0"
                style={{ padding: 10 }}
              />

              <strong>{money(lineTotal(line))}</strong>

              <button
                className="no-print"
                type="button"
                onClick={() => removeLine(line.productId)}
                style={{ padding: 10, borderRadius: 10, border: '1px solid #7f1d1d', background: '#450a0a', color: '#fecaca', cursor: 'pointer' }}
              >
                حذف
              </button>
            </div>
          ))}

          {!lines.length ? <p style={{ color: '#94a3b8' }}>لا توجد أصناف في الفاتورة.</p> : null}
        </div>

        <div style={{ marginTop: 16, display: 'grid', gap: 8, maxWidth: 420, marginInlineStart: 'auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>الإجمالي قبل الخصم</span>
            <strong>{money(subtotal)}</strong>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>الخصم</span>
            <strong>{money(discountValue)}</strong>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 20 }}>
            <span>الإجمالي النهائي</span>
            <strong>{money(grandTotal)}</strong>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>المدفوع</span>
            <strong>{money(paid)}</strong>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>الباقي للعميل</span>
            <strong>{money(change)}</strong>
          </div>
        </div>
      </section>
    </div>
  );
}
`);

write('apps/web-erp/src/app/(erp)/invoices/new/page.tsx', `
import { redirect } from 'next/navigation';
import { ErpShell } from '@/components/erp-shell';
import { NewInvoiceClient } from '@/components/new-invoice-client';
import { getSession } from '@/lib/auth';

export default async function NewInvoicePage() {
  const session = await getSession();

  if (!session) {
    redirect('/login');
  }

  return (
    <ErpShell userName={session.name}>
      <NewInvoiceClient />
    </ErpShell>
  );
}
`);

const shellPath = path.join(root, 'apps/web-erp/src/components/erp-shell.tsx');

if (fs.existsSync(shellPath)) {
  let shell = fs.readFileSync(shellPath, 'utf8');

  if (!shell.includes("href: '/invoices/new'") && !shell.includes('href="/invoices/new"')) {
    shell = shell.replace(
      'const navItems = [',
      "const navItems = [\\n  { href: '/invoices/new', label: 'فاتورة جديدة' },",
    );
  }

  shell = shell.replaceAll('[\\n', '[\n');
  shell = shell.replaceAll('\\n  {', '\n  {');

  fs.writeFileSync(shellPath, shell, 'utf8');
  console.log('checked:', 'apps/web-erp/src/components/erp-shell.tsx');
}

console.log('DONE: new invoice page installed');