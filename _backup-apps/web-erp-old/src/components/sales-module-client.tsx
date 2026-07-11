
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

type SalesDocument = {
  id: string;
  ref?: string | null;
  status?: string | null;
  grandTotal?: string | number | null;
  party?: Customer | null;
};

type CartLine = {
  productId: string;
  sku: string;
  name: string;
  quantity: number;
  unitPrice: number;
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

function lineTotal(line: CartLine) {
  return line.quantity * line.unitPrice;
}

export function SalesModuleClient() {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [warehouses, setWarehouses] = useState<Warehouse[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [documents, setDocuments] = useState<SalesDocument[]>([]);

  const [customerId, setCustomerId] = useState('');
  const [warehouseId, setWarehouseId] = useState('');
  const [search, setSearch] = useState('');
  const [quantity, setQuantity] = useState('1');
  const [cart, setCart] = useState<CartLine[]>([]);

  const [showCustomerForm, setShowCustomerForm] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(true);

  async function load() {
    setLoading(true);
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

      if (!customerId && customerRows[0]) setCustomerId(customerRows[0].id);
      if (!warehouseId && warehouseRows[0]) setWarehouseId(warehouseRows[0].id);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'تعذر تحميل بيانات المبيعات');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    void load();
  }, []);

  const filteredProducts = useMemo(() => {
    const q = search.trim().toLowerCase();

    if (!q) return products.slice(0, 20);

    return products
      .filter((product) => {
        const sku = String(product.sku || '').toLowerCase();
        const name = String(product.name || '').toLowerCase();
        return sku.includes(q) || name.includes(q);
      })
      .slice(0, 20);
  }, [products, search]);

  const cartTotal = cart.reduce((sum, line) => sum + lineTotal(line), 0);

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
      setShowCustomerForm(false);
      setCustomerId(created.id);
      setMessage('تم حفظ العميل');
      await load();
    } catch (e) {
      setError(e instanceof Error ? e.message : 'تعذر حفظ العميل');
    } finally {
      setSaving(false);
    }
  }

  function addProduct(product: Product) {
    setError('');

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
    const existingQty = cart
      .filter((line) => line.productId === product.id)
      .reduce((sum, line) => sum + line.quantity, 0);

    if (product.type !== 'service' && existingQty + qty > available) {
      setError('الكمية غير كافية. المتاح في المخزن: ' + available);
      return;
    }

    const price = Number(product.salePrice || 0);

    if (!price || price <= 0) {
      setError('هذا المنتج ليس له سعر بيع صحيح');
      return;
    }

    setCart((current) => {
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

  function removeLine(productId: string) {
    setCart((current) => current.filter((line) => line.productId !== productId));
  }

  function updateQty(productId: string, value: string) {
    const qty = Number(value || 0);

    setCart((current) =>
      current.map((line) =>
        line.productId === productId
          ? { ...line, quantity: Number.isFinite(qty) && qty > 0 ? qty : 1 }
          : line,
      ),
    );
  }

  function updatePrice(productId: string, value: string) {
    const price = Number(value || 0);

    setCart((current) =>
      current.map((line) =>
        line.productId === productId
          ? { ...line, unitPrice: Number.isFinite(price) && price >= 0 ? price : 0 }
          : line,
      ),
    );
  }

  async function submitSale() {
    if (!customerId) {
      setError('اختر العميل');
      return;
    }

    if (!warehouseId) {
      setError('اختر المخزن');
      return;
    }

    if (!cart.length) {
      setError('أضف منتجات إلى الفاتورة');
      return;
    }

    setSaving(true);
    setMessage('');
    setError('');

    try {
      const created = await erpApi<SalesDocument>('sales/documents', {
        method: 'POST',
        body: JSON.stringify({
          partyId: customerId,
          type: 'invoice',
          note: 'فاتورة بيع سريعة',
          lines: cart.map((line) => ({
            productId: line.productId,
            description: line.name,
            quantity: line.quantity,
            unitPrice: line.unitPrice,
          })),
        }),
      });

      await erpApi('sales/documents/' + created.id + '/post', {
        method: 'PATCH',
        body: JSON.stringify({
          warehouseId,
        }),
      });

      setCart([]);
      setSearch('');
      setQuantity('1');
      setMessage('تم حفظ وترحيل الفاتورة وخصم المخزون');
      await load();
    } catch (e) {
      setError(e instanceof Error ? e.message : 'تعذر حفظ الفاتورة');
    } finally {
      setSaving(false);
    }
  }

  function handleSearchSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (filteredProducts[0]) {
      addProduct(filteredProducts[0]);
    } else {
      setError('لا يوجد منتج بهذا الكود أو الاسم');
    }
  }

  return (
    <div style={{ display: 'grid', gap: 24 }}>
      <section style={{ padding: 24, border: '1px solid #334155', borderRadius: 16, background: '#111827' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
          <div>
            <h1 style={{ fontSize: 28, fontWeight: 800, marginBottom: 8 }}>المبيعات السريعة</h1>
            <p style={{ color: '#cbd5e1', margin: 0 }}>
              أضف كل المنتجات في فاتورة واحدة بدل إدخال طلب كامل لكل منتج.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setShowCustomerForm((value) => !value)}
            style={{ padding: '12px 16px', borderRadius: 12, border: '1px solid #475569', background: '#0f172a', color: '#e5e7eb', fontWeight: 700, cursor: 'pointer' }}
          >
            إضافة عميل
          </button>
        </div>

        {loading ? <p style={{ marginTop: 16 }}>جاري تحميل المبيعات...</p> : null}
        {message ? <p style={{ marginTop: 16, color: '#22c55e' }}>{message}</p> : null}
        {error ? <p style={{ marginTop: 16, color: '#ef4444' }}>{error}</p> : null}

        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 16 }}>
          <strong>العملاء: {customers.length}</strong>
          <strong>المنتجات: {products.length}</strong>
          <strong>فواتير البيع: {documents.length}</strong>
          <strong>إجمالي الفاتورة الحالية: {money(cartTotal)}</strong>
        </div>
      </section>

      {showCustomerForm ? (
        <form onSubmit={addCustomer} style={{ padding: 24, border: '1px solid #334155', borderRadius: 16, background: '#111827' }}>
          <h2>إضافة عميل</h2>

          <div style={{ display: 'grid', gap: 12, maxWidth: 460 }}>
            <input name="name" required placeholder="اسم العميل" style={{ padding: 12 }} />
            <input name="phone" placeholder="رقم الهاتف" style={{ padding: 12 }} />
            <input name="email" placeholder="البريد الإلكتروني" style={{ padding: 12 }} />
            <button disabled={saving} style={{ padding: 12 }}>{saving ? 'جاري الحفظ...' : 'حفظ العميل'}</button>
          </div>
        </form>
      ) : null}

      <section style={{ padding: 24, border: '1px solid #334155', borderRadius: 16, background: '#111827' }}>
        <h2>بيانات الفاتورة</h2>

        <div style={{ display: 'grid', gap: 12, gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', marginTop: 16 }}>
          <select value={customerId} onChange={(event) => setCustomerId(event.target.value)} style={{ padding: 12 }}>
            <option value="">اختر العميل</option>
            {customers.map((customer) => (
              <option key={customer.id} value={customer.id}>{customer.name}</option>
            ))}
          </select>

          <select value={warehouseId} onChange={(event) => setWarehouseId(event.target.value)} style={{ padding: 12 }}>
            <option value="">اختر المخزن</option>
            {warehouses.map((warehouse) => (
              <option key={warehouse.id} value={warehouse.id}>{warehouse.name}</option>
            ))}
          </select>
        </div>
      </section>

      <section style={{ padding: 24, border: '1px solid #334155', borderRadius: 16, background: '#111827' }}>
        <h2>إضافة منتجات للفاتورة</h2>

        <form onSubmit={handleSearchSubmit} style={{ display: 'grid', gap: 12, gridTemplateColumns: '2fr 120px 160px', marginTop: 16 }}>
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="اكتب كود المنتج أو اسمه ثم Enter"
            style={{ padding: 12 }}
          />

          <input
            value={quantity}
            onChange={(event) => setQuantity(event.target.value)}
            type="number"
            min="1"
            placeholder="الكمية"
            style={{ padding: 12 }}
          />

          <button type="submit" style={{ padding: 12 }}>
            إضافة أول نتيجة
          </button>
        </form>

        <div style={{ display: 'grid', gap: 8, marginTop: 16 }}>
          {filteredProducts.map((product) => (
            <button
              key={product.id}
              type="button"
              onClick={() => addProduct(product)}
              style={{
                textAlign: 'right',
                padding: 12,
                border: '1px solid #475569',
                borderRadius: 12,
                background: '#0f172a',
                color: '#e5e7eb',
                cursor: 'pointer',
              }}
            >
              <strong>{product.sku || 'بدون كود'} — {product.name}</strong>
              <div style={{ color: '#94a3b8' }}>
                سعر البيع: {money(product.salePrice)} · المتاح في المخزن: {warehouseId ? stockInWarehouse(product, warehouseId) : 0}
              </div>
            </button>
          ))}

          {!filteredProducts.length ? <p style={{ color: '#94a3b8' }}>لا توجد نتائج.</p> : null}
        </div>
      </section>

      <section style={{ padding: 24, border: '1px solid #334155', borderRadius: 16, background: '#111827' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
          <h2>الفاتورة الحالية</h2>
          <strong>الإجمالي: {money(cartTotal)}</strong>
        </div>

        <div style={{ display: 'grid', gap: 8, marginTop: 16 }}>
          {cart.map((line) => (
            <div
              key={line.productId}
              style={{
                padding: 12,
                border: '1px solid #475569',
                borderRadius: 12,
                display: 'grid',
                gap: 8,
                gridTemplateColumns: '2fr 120px 140px 140px 90px',
                alignItems: 'center',
              }}
            >
              <div>
                <strong>{line.sku || 'بدون كود'} — {line.name}</strong>
              </div>

              <input
                value={line.quantity}
                onChange={(event) => updateQty(line.productId, event.target.value)}
                type="number"
                min="1"
                style={{ padding: 10 }}
              />

              <input
                value={line.unitPrice}
                onChange={(event) => updatePrice(line.productId, event.target.value)}
                type="number"
                min="0"
                style={{ padding: 10 }}
              />

              <strong>{money(lineTotal(line))}</strong>

              <button
                type="button"
                onClick={() => removeLine(line.productId)}
                style={{ padding: 10, borderRadius: 10, border: '1px solid #7f1d1d', background: '#450a0a', color: '#fecaca', cursor: 'pointer' }}
              >
                حذف
              </button>
            </div>
          ))}

          {!cart.length ? <p style={{ color: '#94a3b8' }}>لم يتم إضافة منتجات بعد.</p> : null}
        </div>

        <button
          type="button"
          disabled={saving || !cart.length}
          onClick={() => void submitSale()}
          style={{ marginTop: 16, width: '100%', padding: 14, borderRadius: 12, border: 0, background: '#2563eb', color: 'white', fontWeight: 800, cursor: saving || !cart.length ? 'not-allowed' : 'pointer' }}
        >
          {saving ? 'جاري حفظ الفاتورة...' : 'حفظ وترحيل الفاتورة'}
        </button>
      </section>

      <section style={{ padding: 24, border: '1px solid #334155', borderRadius: 16, background: '#111827' }}>
        <h2>آخر فواتير البيع</h2>

        <div style={{ display: 'grid', gap: 8, marginTop: 16 }}>
          {documents.slice(0, 20).map((document) => (
            <div key={document.id} style={{ padding: 12, border: '1px solid #475569', borderRadius: 12 }}>
              <strong>{document.ref || document.id}</strong>
              <div style={{ color: '#94a3b8' }}>
                العميل: {document.party?.name || 'عميل'} · الإجمالي: {money(document.grandTotal)} · الحالة: {document.status || 'مسجلة'}
              </div>
            </div>
          ))}

          {!documents.length ? <p style={{ color: '#94a3b8' }}>لا توجد فواتير بيع.</p> : null}
        </div>
      </section>
    </div>
  );
}
