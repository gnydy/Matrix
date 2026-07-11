import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();

function write(rel, content) {
  const file = path.join(root, rel);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, content, 'utf8');
  console.log('updated:', rel);
}

const shellPath = path.join(root, 'apps/web-erp/src/components/erp-shell.tsx');
if (fs.existsSync(shellPath)) {
  let shell = fs.readFileSync(shellPath, 'utf8');
  shell = shell.replaceAll('البيانات الأساسية', 'العملاء');
  fs.writeFileSync(shellPath, shell, 'utf8');
  console.log('updated: apps/web-erp/src/components/erp-shell.tsx');
}

write('apps/web-erp/src/components/core-api-client.tsx', `
'use client';

import { FormEvent, useEffect, useState } from 'react';
import { erpApi, field } from './erp-api';

type Customer = {
  id: string;
  name: string;
  phone?: string | null;
  email?: string | null;
};

export function CoreApiClient() {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [showAdd, setShowAdd] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  async function load() {
    setLoading(true);
    setError('');

    try {
      const rows = await erpApi<Customer[]>('sales/parties');
      setCustomers(rows);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'تعذر تحميل العملاء');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    void load();
  }, []);

  async function addCustomer(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formElement = event.currentTarget;
    const form = new FormData(formElement);

    setSaving(true);
    setMessage('');
    setError('');

    try {
      await erpApi('sales/parties', {
        method: 'POST',
        body: JSON.stringify({
          type: 'customer',
          name: field(form, 'name'),
          phone: field(form, 'phone') || undefined,
          email: field(form, 'email') || undefined,
        }),
      });

      formElement.reset();
      setShowAdd(false);
      setMessage('تم حفظ العميل');
      await load();
    } catch (e) {
      setError(e instanceof Error ? e.message : 'تعذر حفظ العميل');
    } finally {
      setSaving(false);
    }
  }

  async function deleteCustomer(customer: Customer) {
    const ok = window.confirm('هل تريد حذف العميل: ' + customer.name + '؟');

    if (!ok) return;

    setSaving(true);
    setMessage('');
    setError('');

    try {
      await erpApi('sales/parties/' + customer.id, {
        method: 'DELETE',
      });

      setMessage('تم حذف العميل');
      await load();
    } catch (e) {
      setError(
        e instanceof Error
          ? e.message
          : 'تعذر حذف العميل. قد يكون مرتبطًا بفواتير أو عمليات مالية.',
      );
    } finally {
      setSaving(false);
    }
  }

  return (
    <div style={{ display: 'grid', gap: 24 }}>
      <section style={{ padding: 24, border: '1px solid #334155', borderRadius: 16, background: '#111827' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
          <div>
            <h1 style={{ fontSize: 28, fontWeight: 800, marginBottom: 8 }}>العملاء</h1>
            <p style={{ color: '#cbd5e1', margin: 0 }}>
              إدارة بيانات العملاء وأرقام التواصل الخاصة بهم.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setShowAdd((value) => !value)}
            style={{ padding: '12px 16px', borderRadius: 12, border: 0, background: '#2563eb', color: 'white', fontWeight: 700, cursor: 'pointer' }}
          >
            {showAdd ? 'إغلاق' : 'إضافة عميل'}
          </button>
        </div>

        {loading ? <p style={{ marginTop: 16 }}>جاري تحميل العملاء...</p> : null}
        {message ? <p style={{ marginTop: 16, color: '#22c55e' }}>{message}</p> : null}
        {error ? <p style={{ marginTop: 16, color: '#ef4444' }}>{error}</p> : null}

        <div style={{ marginTop: 16, padding: 16, border: '1px solid #475569', borderRadius: 12, background: '#0f172a' }}>
          <strong>عدد العملاء: {customers.length}</strong>
        </div>
      </section>

      {showAdd ? (
        <form onSubmit={addCustomer} style={{ padding: 24, border: '1px solid #334155', borderRadius: 16, background: '#111827' }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 16 }}>إضافة عميل جديد</h2>

          <div style={{ display: 'grid', gap: 12, maxWidth: 460 }}>
            <input name="name" required placeholder="اسم العميل" style={{ padding: 12 }} />
            <input name="phone" placeholder="رقم الهاتف" style={{ padding: 12 }} />
            <input name="email" placeholder="البريد الإلكتروني" style={{ padding: 12 }} />

            <button disabled={saving} style={{ padding: 12, cursor: 'pointer' }}>
              {saving ? 'جاري الحفظ...' : 'حفظ العميل'}
            </button>
          </div>
        </form>
      ) : null}

      <section style={{ padding: 24, border: '1px solid #334155', borderRadius: 16, background: '#111827' }}>
        <h2 style={{ fontSize: 22, fontWeight: 700 }}>قائمة العملاء</h2>

        <div style={{ display: 'grid', gap: 8, marginTop: 16 }}>
          {customers.map((customer) => (
            <div
              key={customer.id}
              style={{
                padding: 12,
                border: '1px solid #475569',
                borderRadius: 12,
                display: 'flex',
                justifyContent: 'space-between',
                gap: 12,
                alignItems: 'center',
                flexWrap: 'wrap',
              }}
            >
              <div>
                <strong>{customer.name}</strong>
                <div style={{ color: '#94a3b8' }}>
                  {customer.phone || customer.email || 'لا توجد بيانات اتصال'}
                </div>
              </div>

              <button
                type="button"
                disabled={saving}
                onClick={() => void deleteCustomer(customer)}
                style={{
                  padding: '8px 12px',
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

          {!customers.length ? <p style={{ color: '#94a3b8' }}>لا يوجد عملاء مسجلون.</p> : null}
        </div>
      </section>
    </div>
  );
}
`);

write('apps/web-erp/src/components/inventory-module-client.tsx', `
'use client';

import { FormEvent, useEffect, useState } from 'react';
import { erpApi, field, money, num } from './erp-api';

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
  costPrice?: string | number | null;
  salePrice?: string | number | null;
  stockLevels?: Array<{
    quantity?: string | number | null;
    warehouse?: Warehouse | null;
  }>;
};

function totalStock(product: Product) {
  return (product.stockLevels ?? []).reduce(
    (sum, level) => sum + Number(level.quantity ?? 0),
    0,
  );
}

export function InventoryModuleClient() {
  const [products, setProducts] = useState<Product[]>([]);
  const [warehouses, setWarehouses] = useState<Warehouse[]>([]);
  const [showProductForm, setShowProductForm] = useState(false);
  const [showWarehouseForm, setShowWarehouseForm] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  async function load() {
    setLoading(true);
    setError('');

    try {
      const [productRows, warehouseRows] = await Promise.all([
        erpApi<Product[]>('inventory/products'),
        erpApi<Warehouse[]>('inventory/warehouses'),
      ]);

      setProducts(productRows);
      setWarehouses(warehouseRows);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'تعذر تحميل المخزون');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    void load();
  }, []);

  async function addWarehouse(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formElement = event.currentTarget;
    const form = new FormData(formElement);

    setSaving(true);
    setMessage('');
    setError('');

    try {
      await erpApi('inventory/warehouses', {
        method: 'POST',
        body: JSON.stringify({
          name: field(form, 'name'),
          code: field(form, 'code') || undefined,
        }),
      });

      formElement.reset();
      setShowWarehouseForm(false);
      setMessage('تم حفظ المخزن');
      await load();
    } catch (e) {
      setError(e instanceof Error ? e.message : 'تعذر حفظ المخزن');
    } finally {
      setSaving(false);
    }
  }

  async function addProduct(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formElement = event.currentTarget;
    const form = new FormData(formElement);

    setSaving(true);
    setMessage('');
    setError('');

    try {
      await erpApi('inventory/products', {
        method: 'POST',
        body: JSON.stringify({
          sku: field(form, 'sku'),
          name: field(form, 'name'),
          unit: field(form, 'unit') || 'قطعة',
          type: field(form, 'type') || 'stock',
          costPrice: num(form, 'costPrice'),
          salePrice: num(form, 'salePrice'),
          minStock: num(form, 'minStock'),
        }),
      });

      formElement.reset();
      setShowProductForm(false);
      setMessage('تم حفظ المنتج');
      await load();
    } catch (e) {
      setError(e instanceof Error ? e.message : 'تعذر حفظ المنتج');
    } finally {
      setSaving(false);
    }
  }

  return (
    <div style={{ display: 'grid', gap: 24 }}>
      <section style={{ padding: 24, border: '1px solid #334155', borderRadius: 16, background: '#111827' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
          <div>
            <h1 style={{ fontSize: 28, fontWeight: 800, marginBottom: 8 }}>المخزون</h1>
            <p style={{ color: '#cbd5e1', margin: 0 }}>
              إدارة المنتجات والمخازن والأرصدة المتاحة للبيع.
            </p>
          </div>

          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            <button
              type="button"
              onClick={() => setShowProductForm((value) => !value)}
              style={{ padding: '12px 16px', borderRadius: 12, border: 0, background: '#2563eb', color: 'white', fontWeight: 700, cursor: 'pointer' }}
            >
              {showProductForm ? 'إغلاق المنتج' : 'إضافة منتج'}
            </button>

            <button
              type="button"
              onClick={() => setShowWarehouseForm((value) => !value)}
              style={{ padding: '12px 16px', borderRadius: 12, border: '1px solid #475569', background: '#0f172a', color: '#e5e7eb', fontWeight: 700, cursor: 'pointer' }}
            >
              {showWarehouseForm ? 'إغلاق المخزن' : 'إضافة مخزن'}
            </button>
          </div>
        </div>

        {loading ? <p style={{ marginTop: 16 }}>جاري تحميل المخزون...</p> : null}
        {message ? <p style={{ marginTop: 16, color: '#22c55e' }}>{message}</p> : null}
        {error ? <p style={{ marginTop: 16, color: '#ef4444' }}>{error}</p> : null}

        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 16 }}>
          <strong>المنتجات: {products.length}</strong>
          <strong>المخازن: {warehouses.length}</strong>
        </div>
      </section>

      {showWarehouseForm ? (
        <form onSubmit={addWarehouse} style={{ padding: 24, border: '1px solid #334155', borderRadius: 16, background: '#111827' }}>
          <h2>إضافة مخزن</h2>

          <div style={{ display: 'grid', gap: 12, maxWidth: 460 }}>
            <input name="name" required placeholder="اسم المخزن" style={{ padding: 12 }} />
            <input name="code" placeholder="كود المخزن" style={{ padding: 12 }} />
            <button disabled={saving} style={{ padding: 12 }}>
              {saving ? 'جاري الحفظ...' : 'حفظ المخزن'}
            </button>
          </div>
        </form>
      ) : null}

      {showProductForm ? (
        <form onSubmit={addProduct} style={{ padding: 24, border: '1px solid #334155', borderRadius: 16, background: '#111827' }}>
          <h2>إضافة منتج</h2>

          <div style={{ display: 'grid', gap: 12, maxWidth: 520 }}>
            <input name="sku" required placeholder="كود المنتج" style={{ padding: 12 }} />
            <input name="name" required placeholder="اسم المنتج" style={{ padding: 12 }} />
            <input name="unit" placeholder="الوحدة" defaultValue="قطعة" style={{ padding: 12 }} />

            <select name="type" defaultValue="stock" style={{ padding: 12 }}>
              <option value="stock">منتج مخزني</option>
              <option value="service">خدمة</option>
            </select>

            <input name="costPrice" type="number" placeholder="سعر التكلفة" style={{ padding: 12 }} />
            <input name="salePrice" type="number" placeholder="سعر البيع" style={{ padding: 12 }} />
            <input name="minStock" type="number" placeholder="الحد الأدنى للمخزون" style={{ padding: 12 }} />

            <button disabled={saving} style={{ padding: 12 }}>
              {saving ? 'جاري الحفظ...' : 'حفظ المنتج'}
            </button>
          </div>
        </form>
      ) : null}

      <section style={{ padding: 24, border: '1px solid #334155', borderRadius: 16, background: '#111827' }}>
        <h2>قائمة المنتجات</h2>

        <div style={{ display: 'grid', gap: 8, marginTop: 16 }}>
          {products.map((product) => (
            <div key={product.id} style={{ padding: 12, border: '1px solid #475569', borderRadius: 12 }}>
              <strong>{product.name}</strong>
              <div style={{ color: '#94a3b8' }}>
                {product.sku || 'بدون كود'} · {product.unit || 'وحدة'} · المتاح {totalStock(product)} · بيع {money(product.salePrice)} · تكلفة {money(product.costPrice)}
              </div>
            </div>
          ))}

          {!products.length ? <p style={{ color: '#94a3b8' }}>لا توجد منتجات مسجلة.</p> : null}
        </div>
      </section>

      <section style={{ padding: 24, border: '1px solid #334155', borderRadius: 16, background: '#111827' }}>
        <h2>المخازن</h2>

        <div style={{ display: 'grid', gap: 8, marginTop: 16 }}>
          {warehouses.map((warehouse) => (
            <div key={warehouse.id} style={{ padding: 12, border: '1px solid #475569', borderRadius: 12 }}>
              <strong>{warehouse.name}</strong>
              <div style={{ color: '#94a3b8' }}>{warehouse.code || 'بدون كود'}</div>
            </div>
          ))}

          {!warehouses.length ? <p style={{ color: '#94a3b8' }}>لا توجد مخازن مسجلة.</p> : null}
        </div>
      </section>
    </div>
  );
}
`);