
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

const groceryExamples = [
  { sku: 'MILK-1L-001', name: 'لبن كامل الدسم 1 لتر', unit: 'عبوة', costPrice: 32, salePrice: 38, minStock: 10 },
  { sku: 'RICE-1KG-001', name: 'أرز أبيض 1 كيلو', unit: 'كيس', costPrice: 28, salePrice: 35, minStock: 20 },
  { sku: 'SUGAR-1KG-001', name: 'سكر أبيض 1 كيلو', unit: 'كيس', costPrice: 30, salePrice: 36, minStock: 20 },
  { sku: 'OIL-1L-001', name: 'زيت طعام 1 لتر', unit: 'زجاجة', costPrice: 55, salePrice: 65, minStock: 12 },
  { sku: 'TEA-250G-001', name: 'شاي 250 جرام', unit: 'علبة', costPrice: 42, salePrice: 50, minStock: 8 },
  { sku: 'SOAP-001', name: 'صابون غسيل', unit: 'قطعة', costPrice: 12, salePrice: 18, minStock: 15 },
  { sku: 'WATER-1.5L-001', name: 'مياه معدنية 1.5 لتر', unit: 'زجاجة', costPrice: 6, salePrice: 10, minStock: 24 },
  { sku: 'BISCUIT-001', name: 'بسكويت سادة', unit: 'عبوة', costPrice: 5, salePrice: 8, minStock: 30 },
];

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

  async function addGroceryExamples() {
    setSaving(true);
    setMessage('');
    setError('');

    try {
      for (const item of groceryExamples) {
        const exists = products.some((product) => product.sku === item.sku);

        if (exists) {
          continue;
        }

        await erpApi('inventory/products', {
          method: 'POST',
          body: JSON.stringify({
            sku: item.sku,
            name: item.name,
            unit: item.unit,
            type: 'stock',
            costPrice: item.costPrice,
            salePrice: item.salePrice,
            minStock: item.minStock,
          }),
        });
      }

      setMessage('تم إضافة أمثلة منتجات ماركت/بقالة');
      await load();
    } catch (e) {
      setError(e instanceof Error ? e.message : 'تعذر إضافة أمثلة المنتجات');
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
              إدارة المنتجات بالكود أو الباركود، والمخازن، والأرصدة المتاحة للبيع.
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

            <button
              type="button"
              disabled={saving}
              onClick={() => void addGroceryExamples()}
              style={{ padding: '12px 16px', borderRadius: 12, border: '1px solid #14532d', background: '#052e16', color: '#bbf7d0', fontWeight: 700, cursor: 'pointer' }}
            >
              أمثلة ماركت/بقالة
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
            <input name="name" required placeholder="اسم المخزن مثال: مخزن الفرع الرئيسي" style={{ padding: 12 }} />
            <input name="code" placeholder="كود المخزن مثال: MAIN-WH" style={{ padding: 12 }} />

            <button disabled={saving} style={{ padding: 12 }}>
              {saving ? 'جاري الحفظ...' : 'حفظ المخزن'}
            </button>
          </div>
        </form>
      ) : null}

      {showProductForm ? (
        <form onSubmit={addProduct} style={{ padding: 24, border: '1px solid #334155', borderRadius: 16, background: '#111827' }}>
          <h2>إضافة منتج</h2>

          <p style={{ color: '#94a3b8' }}>
            استخدم كود أو باركود للمنتج، وليس رقمًا عشوائيًا. أمثلة: MILK-1L-001، RICE-1KG-001، BAR-6223001234567.
          </p>

          <div style={{ display: 'grid', gap: 12, maxWidth: 520 }}>
            <input name="sku" required placeholder="كود المنتج / الباركود مثال: MILK-1L-001" style={{ padding: 12 }} />
            <input name="name" required placeholder="اسم المنتج مثال: لبن كامل الدسم 1 لتر" style={{ padding: 12 }} />
            <input name="unit" placeholder="الوحدة مثال: عبوة / كيس / زجاجة / قطعة" defaultValue="قطعة" style={{ padding: 12 }} />

            <select name="type" defaultValue="stock" style={{ padding: 12 }}>
              <option value="stock">منتج مخزني</option>
              <option value="service">خدمة</option>
            </select>

            <input name="costPrice" type="number" placeholder="سعر التكلفة مثال: 32" style={{ padding: 12 }} />
            <input name="salePrice" type="number" placeholder="سعر البيع مثال: 38" style={{ padding: 12 }} />
            <input name="minStock" type="number" placeholder="الحد الأدنى للمخزون مثال: 10" style={{ padding: 12 }} />

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
                الكود: {product.sku || 'بدون كود'} · الوحدة: {product.unit || 'وحدة'} · المتاح: {totalStock(product)} · بيع: {money(product.salePrice)} · تكلفة: {money(product.costPrice)}
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
              <div style={{ color: '#94a3b8' }}>الكود: {warehouse.code || 'بدون كود'}</div>
            </div>
          ))}

          {!warehouses.length ? <p style={{ color: '#94a3b8' }}>لا توجد مخازن مسجلة.</p> : null}
        </div>
      </section>
    </div>
  );
}
