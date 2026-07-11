import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();

function write(rel, content) {
  const file = path.join(root, rel);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, content, 'utf8');
  console.log('updated:', rel);
}

write('apps/web-erp/src/components/cashier-module-client.tsx', `
'use client';

import { FormEvent, useEffect, useMemo, useState } from 'react';
import { erpApi, field, money, num } from './erp-api';

type Customer = {
  id: string;
  name: string;
  phone?: string | null;
  email?: string | null;
};

type Warehouse = {
  id: string;
  name: string;
};

type Product = {
  id: string;
  name: string;
  sku?: string | null;
  salePrice?: string | number | null;
  type?: string | null;
  stockLevels?: Array<{
    warehouseId?: string | null;
    quantity?: string | number | null;
    warehouse?: Warehouse | null;
  }>;
};

type SalesLine = {
  id?: string;
  description?: string | null;
  quantity?: string | number | null;
  unitPrice?: string | number | null;
  lineTotal?: string | number | null;
  product?: Product | null;
};

type SalesDocument = {
  id: string;
  ref?: string | null;
  status?: string | null;
  grandTotal?: string | number | null;
  createdAt?: string | null;
  partyId?: string | null;
  party?: Customer | null;
  lines?: SalesLine[];
};

function totalStock(product: Product) {
  return (product.stockLevels ?? []).reduce(
    (sum, level) => sum + Number(level.quantity ?? 0),
    0,
  );
}

function stockInWarehouse(product: Product, warehouseId: string) {
  return (product.stockLevels ?? [])
    .filter((level) => {
      if (level.warehouseId) return level.warehouseId === warehouseId;
      if (level.warehouse?.id) return level.warehouse.id === warehouseId;
      return false;
    })
    .reduce((sum, level) => sum + Number(level.quantity ?? 0), 0);
}

function todayOnly(rows: SalesDocument[]) {
  const today = new Date().toISOString().slice(0, 10);

  return rows.filter((row) => {
    if (!row.createdAt) return true;
    return String(row.createdAt).slice(0, 10) === today;
  });
}

export function CashierModuleClient() {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [warehouses, setWarehouses] = useState<Warehouse[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [documents, setDocuments] = useState<SalesDocument[]>([]);

  const [selectedCustomerId, setSelectedCustomerId] = useState('');
  const [selectedProductId, setSelectedProductId] = useState('');
  const [selectedWarehouseId, setSelectedWarehouseId] = useState('');

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [saving, setSaving] = useState(false);

  async function load() {
    setError('');

    try {
      const [customerRows, warehouseRows, productRows, documentRows] =
        await Promise.all([
          erpApi<Customer[]>('sales/parties'),
          erpApi<Warehouse[]>('inventory/warehouses'),
          erpApi<Product[]>('inventory/products'),
          erpApi<SalesDocument[]>('sales/documents').catch(() => []),
        ]);

      setCustomers(customerRows);
      setWarehouses(warehouseRows);
      setProducts(productRows);
      setDocuments(documentRows);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'تعذر تحميل بيانات الكاشير');
    }
  }

  useEffect(() => {
    void load();
  }, []);

  const selectedCustomer = customers.find((customer) => customer.id === selectedCustomerId);
  const selectedProduct = products.find((product) => product.id === selectedProductId);

  const customerPurchases = useMemo(() => {
    if (!selectedCustomerId) return [];

    return documents.filter((document) => {
      if (document.partyId) return document.partyId === selectedCustomerId;
      if (document.party?.id) return document.party.id === selectedCustomerId;
      return false;
    });
  }, [documents, selectedCustomerId]);

  const todaySales = useMemo(() => todayOnly(documents), [documents]);

  const todayTotal = todaySales.reduce(
    (sum, document) => sum + Number(document.grandTotal ?? 0),
    0,
  );

  async function addCustomer(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formElement = event.currentTarget;
    const form = new FormData(formElement);

    setSaving(true);
    setMessage('');
    setError('');

    try {
      const created = await erpApi<Customer>('sales/parties', {
        method: 'POST',
        body: JSON.stringify({
          type: 'customer',
          name: field(form, 'name'),
          phone: field(form, 'phone') || undefined,
          email: field(form, 'email') || undefined,
        }),
      });

      formElement.reset();
      setSelectedCustomerId(created.id);
      setMessage('تم تسجيل العميل');
      await load();
    } catch (e) {
      setError(e instanceof Error ? e.message : 'تعذر تسجيل العميل');
    } finally {
      setSaving(false);
    }
  }

  async function createCashSale(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formElement = event.currentTarget;
    const form = new FormData(formElement);

    const partyId = field(form, 'partyId');
    const productId = field(form, 'productId');
    const warehouseId = field(form, 'warehouseId');
    const quantity = num(form, 'quantity') || 1;
    const unitPrice = num(form, 'unitPrice');

    const product = products.find((item) => item.id === productId);

    if (!partyId) {
      setError('اختر العميل');
      return;
    }

    if (!warehouseId) {
      setError('اختر المخزن');
      return;
    }

    if (!productId || !product) {
      setError('اختر المنتج');
      return;
    }

    if (!unitPrice || unitPrice <= 0) {
      setError('أدخل سعر بيع صحيح');
      return;
    }

    const available = stockInWarehouse(product, warehouseId);

    if (product.type !== 'service' && available < quantity) {
      setError(\`الكمية غير كافية في هذا المخزن. المتاح: \${available}\`);
      return;
    }

    setSaving(true);
    setMessage('');
    setError('');

    try {
      const created = await erpApi<SalesDocument>('sales/documents', {
        method: 'POST',
        body: JSON.stringify({
          partyId,
          type: 'invoice',
          note: field(form, 'note') || 'بيع كاشير',
          lines: [
            {
              productId,
              warehouseId,
              description: product.name,
              quantity,
              unitPrice,
            },
          ],
        }),
      });

      await erpApi(\`sales/documents/\${created.id}/post\`, {
        method: 'POST',
        body: JSON.stringify({}),
      });

      formElement.reset();
      setSelectedCustomerId(partyId);
      setSelectedProductId('');
      setMessage('تم البيع وخصم الكمية من المخزون');
      await load();
    } catch (e) {
      setError(e instanceof Error ? e.message : 'تعذر إتمام البيع');
    } finally {
      setSaving(false);
    }
  }

  return (
    <div style={{ display: 'grid', gap: 24 }}>
      <section style={{ padding: 24, border: '1px solid #334155', borderRadius: 16, background: '#111827' }}>
        <h1 style={{ fontSize: 28, fontWeight: 800 }}>الكاشير</h1>
        <p style={{ color: '#cbd5e1' }}>
          تسجيل البيع السريع، خصم المخزون، ومتابعة مشتريات العميل.
        </p>

        {message ? <p style={{ color: '#22c55e' }}>{message}</p> : null}
        {error ? <p style={{ color: '#ef4444' }}>{error}</p> : null}

        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 16 }}>
          <strong>مبيعات اليوم: {todaySales.length}</strong>
          <strong>إجمالي اليوم: {money(todayTotal)}</strong>
          <strong>العملاء: {customers.length}</strong>
          <strong>المنتجات: {products.length}</strong>
        </div>
      </section>

      <section style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
        <form onSubmit={addCustomer} style={{ padding: 20, border: '1px solid #334155', borderRadius: 16, background: '#111827' }}>
          <h2>تسجيل عميل سريع</h2>

          <div style={{ display: 'grid', gap: 10 }}>
            <input name="name" required placeholder="اسم العميل" style={{ padding: 12 }} />
            <input name="phone" placeholder="رقم الهاتف" style={{ padding: 12 }} />
            <input name="email" placeholder="البريد الإلكتروني" style={{ padding: 12 }} />

            <button disabled={saving} style={{ padding: 12 }}>
              حفظ العميل
            </button>
          </div>
        </form>

        <form onSubmit={createCashSale} style={{ padding: 20, border: '1px solid #334155', borderRadius: 16, background: '#111827' }}>
          <h2>عملية بيع</h2>

          <div style={{ display: 'grid', gap: 10 }}>
            <select
              name="partyId"
              required
              value={selectedCustomerId}
              onChange={(event) => setSelectedCustomerId(event.target.value)}
              style={{ padding: 12 }}
            >
              <option value="">اختر العميل</option>
              {customers.map((customer) => (
                <option key={customer.id} value={customer.id}>
                  {customer.name}
                </option>
              ))}
            </select>

            <select
              name="warehouseId"
              required
              value={selectedWarehouseId}
              onChange={(event) => setSelectedWarehouseId(event.target.value)}
              style={{ padding: 12 }}
            >
              <option value="">اختر المخزن</option>
              {warehouses.map((warehouse) => (
                <option key={warehouse.id} value={warehouse.id}>
                  {warehouse.name}
                </option>
              ))}
            </select>

            <select
              name="productId"
              required
              value={selectedProductId}
              onChange={(event) => {
                const productId = event.target.value;
                setSelectedProductId(productId);

                const product = products.find((item) => item.id === productId);
                const priceInput = document.querySelector<HTMLInputElement>('input[name=\"unitPrice\"]');

                if (priceInput && product?.salePrice != null) {
                  priceInput.value = String(product.salePrice);
                }
              }}
              style={{ padding: 12 }}
            >
              <option value="">اختر المنتج</option>
              {products.map((product) => (
                <option key={product.id} value={product.id}>
                  {product.name} — المتاح: {totalStock(product)}
                </option>
              ))}
            </select>

            {selectedProduct && selectedWarehouseId ? (
              <p style={{ color: '#94a3b8', margin: 0 }}>
                المتاح في المخزن المختار: {stockInWarehouse(selectedProduct, selectedWarehouseId)}
              </p>
            ) : null}

            <input name="quantity" type="number" min="1" defaultValue="1" required placeholder="الكمية" style={{ padding: 12 }} />
            <input name="unitPrice" type="number" min="0" required placeholder="سعر البيع" style={{ padding: 12 }} />
            <input name="note" placeholder="ملاحظة" style={{ padding: 12 }} />

            <button disabled={saving} style={{ padding: 12 }}>
              {saving ? 'جاري البيع...' : 'بيع وخصم من المخزون'}
            </button>
          </div>
        </form>
      </section>

      <section style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
        <div style={{ padding: 20, border: '1px solid #334155', borderRadius: 16, background: '#111827' }}>
          <h2>ما اشتراه العميل</h2>

          {!selectedCustomer ? (
            <p style={{ color: '#94a3b8' }}>اختر عميلًا لعرض مشترياته.</p>
          ) : (
            <p style={{ color: '#cbd5e1' }}>
              العميل: <strong>{selectedCustomer.name}</strong>
            </p>
          )}

          <div style={{ display: 'grid', gap: 8 }}>
            {customerPurchases.map((document) => (
              <div key={document.id} style={{ padding: 12, border: '1px solid #475569', borderRadius: 12 }}>
                <strong>{document.ref || document.id}</strong>
                <div style={{ color: '#94a3b8' }}>
                  الإجمالي: {money(document.grandTotal)} · الحالة: {document.status || 'مسجلة'}
                </div>

                {document.lines?.length ? (
                  <ul style={{ marginTop: 8 }}>
                    {document.lines.map((line, index) => (
                      <li key={line.id || index}>
                        {line.product?.name || line.description || 'بند'} — كمية {line.quantity} — {money(line.lineTotal)}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}

            {selectedCustomer && !customerPurchases.length ? (
              <p style={{ color: '#94a3b8' }}>لا توجد مشتريات لهذا العميل.</p>
            ) : null}
          </div>
        </div>

        <div style={{ padding: 20, border: '1px solid #334155', borderRadius: 16, background: '#111827' }}>
          <h2>مبيعات اليوم</h2>

          <div style={{ display: 'grid', gap: 8 }}>
            {todaySales.map((document) => (
              <div key={document.id} style={{ padding: 12, border: '1px solid #475569', borderRadius: 12 }}>
                <strong>{document.party?.name || 'عميل'}</strong>
                <div style={{ color: '#94a3b8' }}>
                  {document.ref || document.id} · {money(document.grandTotal)} · {document.status || 'مسجلة'}
                </div>
              </div>
            ))}

            {!todaySales.length ? (
              <p style={{ color: '#94a3b8' }}>لا توجد مبيعات اليوم.</p>
            ) : null}
          </div>
        </div>
      </section>
    </div>
  );
}
`);

write('apps/web-erp/src/app/(erp)/cashier/page.tsx', `
import { redirect } from 'next/navigation';
import { ErpShell } from '@/components/erp-shell';
import { getSession } from '@/lib/auth';
import { CashierModuleClient } from '@/components/cashier-module-client';

export default async function CashierPage() {
  const session = await getSession();

  if (!session) {
    redirect('/login');
  }

  const roles = session.roles ?? [];
  const isAllowed = roles.includes('owner') || roles.includes('cashier');

  if (!isAllowed) {
    redirect('/inventory');
  }

  return (
    <ErpShell userName={session.name}>
      <CashierModuleClient />
    </ErpShell>
  );
}
`);

write('apps/web-erp/src/app/(erp)/page.tsx', `
import { redirect } from 'next/navigation';
import { getSession } from '@/lib/auth';

export default async function ErpHomePage() {
  const session = await getSession();

  if (!session) {
    redirect('/login');
  }

  const roles = session.roles ?? [];

  if (roles.includes('cashier')) {
    redirect('/cashier');
  }

  if (roles.includes('owner')) {
    redirect('/core');
  }

  redirect('/inventory');
}
`);

console.log('DONE: cashier module installed');