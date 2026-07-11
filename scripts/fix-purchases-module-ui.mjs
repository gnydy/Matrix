	import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();

function write(rel, content) {
  const file = path.join(root, rel);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, content, 'utf8');
  console.log('updated:', rel);
}

write('apps/web-erp/src/components/purchases-module-client.tsx', `
'use client';

import { FormEvent, useEffect, useState } from 'react';
import { erpApi, field, money, num } from './erp-api';

type Supplier = {
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
  costPrice?: string | number | null;
  salePrice?: string | number | null;
  stockLevels?: Array<{
    quantity?: string | number | null;
    warehouseId?: string | null;
    warehouse?: Warehouse | null;
  }>;
};

type PurchaseDocument = {
  id: string;
  ref?: string | null;
  status?: string | null;
  grandTotal?: string | number | null;
  partyId?: string | null;
  party?: Supplier | null;
  lines?: Array<{
    id?: string;
    description?: string | null;
    quantity?: string | number | null;
    unitPrice?: string | number | null;
    lineTotal?: string | number | null;
    product?: Product | null;
  }>;
};

function totalStock(product: Product) {
  return (product.stockLevels ?? []).reduce(
    (sum, level) => sum + Number(level.quantity ?? 0),
    0,
  );
}

export function PurchasesModuleClient() {
  const [suppliers, setSuppliers] = useState<Supplier[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [warehouses, setWarehouses] = useState<Warehouse[]>([]);
  const [documents, setDocuments] = useState<PurchaseDocument[]>([]);

  const [showSupplierForm, setShowSupplierForm] = useState(false);
  const [showInvoiceForm, setShowInvoiceForm] = useState(false);

  const [selectedProductId, setSelectedProductId] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(true);

  async function load() {
    setLoading(true);
    setError('');

    try {
      const [supplierRows, productRows, warehouseRows, documentRows] =
        await Promise.all([
          erpApi<Supplier[]>('purchases/parties'),
          erpApi<Product[]>('inventory/products'),
          erpApi<Warehouse[]>('inventory/warehouses'),
          erpApi<PurchaseDocument[]>('purchases/documents').catch(() => []),
        ]);

      setSuppliers(supplierRows);
      setProducts(productRows);
      setWarehouses(warehouseRows);
      setDocuments(documentRows);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'تعذر تحميل بيانات المشتريات');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    void load();
  }, []);

  async function addSupplier(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formElement = event.currentTarget;
    const form = new FormData(formElement);

    setSaving(true);
    setMessage('');
    setError('');

    try {
      await erpApi('purchases/parties', {
        method: 'POST',
        body: JSON.stringify({
          type: 'supplier',
          name: field(form, 'name'),
          phone: field(form, 'phone') || undefined,
          email: field(form, 'email') || undefined,
        }),
      });

      formElement.reset();
      setShowSupplierForm(false);
      setMessage('تم حفظ المورد');
      await load();
    } catch (e) {
      setError(e instanceof Error ? e.message : 'تعذر حفظ المورد');
    } finally {
      setSaving(false);
    }
  }

  async function createAndPostPurchase(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formElement = event.currentTarget;
    const form = new FormData(formElement);

    const partyId = field(form, 'partyId');
    const warehouseId = field(form, 'warehouseId');
    const productId = field(form, 'productId');
    const quantity = num(form, 'quantity') || 1;
    const unitPrice = num(form, 'unitPrice');

    const product = products.find((item) => item.id === productId);

    if (!partyId) {
      setError('اختر المورد');
      return;
    }

    if (!warehouseId) {
      setError('اختر المخزن الذي ستدخل إليه البضاعة');
      return;
    }

    if (!productId || !product) {
      setError('اختر المنتج');
      return;
    }

    if (quantity <= 0) {
      setError('أدخل كمية صحيحة');
      return;
    }

    if (!unitPrice || unitPrice <= 0) {
      setError('أدخل سعر شراء صحيح');
      return;
    }

    setSaving(true);
    setMessage('');
    setError('');

    try {
      const created = await erpApi<PurchaseDocument>('purchases/documents', {
        method: 'POST',
        body: JSON.stringify({
          partyId,
          type: 'invoice',
          note: field(form, 'note') || undefined,
          lines: [
            {
              productId,
              description: product.name,
              quantity,
              unitPrice,
            },
          ],
        }),
      });

      await erpApi('purchases/documents/' + created.id + '/post', {
        method: 'PATCH',
        body: JSON.stringify({
          warehouseId,
        }),
      });

      formElement.reset();
      setSelectedProductId('');
      setShowInvoiceForm(false);
      setMessage('تم حفظ وترحيل فاتورة الشراء وزيادة المخزون');
      await load();
    } catch (e) {
      setError(e instanceof Error ? e.message : 'تعذر حفظ أو ترحيل فاتورة الشراء');
    } finally {
      setSaving(false);
    }
  }

  const selectedProduct = products.find((item) => item.id === selectedProductId);

  return (
    <div style={{ display: 'grid', gap: 24 }}>
      <section style={{ padding: 24, border: '1px solid #334155', borderRadius: 16, background: '#111827' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
          <div>
            <h1 style={{ fontSize: 28, fontWeight: 800, marginBottom: 8 }}>المشتريات</h1>
            <p style={{ color: '#cbd5e1', margin: 0 }}>
              إدارة الموردين وفواتير الشراء. عند ترحيل فاتورة الشراء تزيد الكمية في المخزون.
            </p>
          </div>

          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            <button
              type="button"
              onClick={() => setShowSupplierForm((value) => !value)}
              style={{ padding: '12px 16px', borderRadius: 12, border: 0, background: '#2563eb', color: 'white', fontWeight: 700, cursor: 'pointer' }}
            >
              {showSupplierForm ? 'إغلاق المورد' : 'إضافة مورد'}
            </button>

            <button
              type="button"
              onClick={() => setShowInvoiceForm((value) => !value)}
              style={{ padding: '12px 16px', borderRadius: 12, border: '1px solid #14532d', background: '#052e16', color: '#bbf7d0', fontWeight: 700, cursor: 'pointer' }}
            >
              {showInvoiceForm ? 'إغلاق الفاتورة' : 'فاتورة شراء'}
            </button>
          </div>
        </div>

        {loading ? <p style={{ marginTop: 16 }}>جاري تحميل المشتريات...</p> : null}
        {message ? <p style={{ marginTop: 16, color: '#22c55e' }}>{message}</p> : null}
        {error ? <p style={{ marginTop: 16, color: '#ef4444' }}>{error}</p> : null}

        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 16 }}>
          <strong>الموردون: {suppliers.length}</strong>
          <strong>فواتير الشراء: {documents.length}</strong>
          <strong>المنتجات: {products.length}</strong>
          <strong>المخازن: {warehouses.length}</strong>
        </div>
      </section>

      {showSupplierForm ? (
        <form onSubmit={addSupplier} style={{ padding: 24, border: '1px solid #334155', borderRadius: 16, background: '#111827' }}>
          <h2>إضافة مورد</h2>

          <div style={{ display: 'grid', gap: 12, maxWidth: 460 }}>
            <input name="name" required placeholder="اسم المورد" style={{ padding: 12 }} />
            <input name="phone" placeholder="رقم الهاتف" style={{ padding: 12 }} />
            <input name="email" placeholder="البريد الإلكتروني" style={{ padding: 12 }} />

            <button disabled={saving} style={{ padding: 12 }}>
              {saving ? 'جاري الحفظ...' : 'حفظ المورد'}
            </button>
          </div>
        </form>
      ) : null}

      {showInvoiceForm ? (
        <form onSubmit={createAndPostPurchase} style={{ padding: 24, border: '1px solid #334155', borderRadius: 16, background: '#111827' }}>
          <h2>فاتورة شراء</h2>

          <div style={{ display: 'grid', gap: 12, maxWidth: 560 }}>
            <select name="partyId" required style={{ padding: 12 }}>
              <option value="">اختر المورد</option>
              {suppliers.map((supplier) => (
                <option key={supplier.id} value={supplier.id}>
                  {supplier.name}
                </option>
              ))}
            </select>

            <select name="warehouseId" required style={{ padding: 12 }}>
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
                const priceInput = document.querySelector<HTMLInputElement>('input[name="unitPrice"]');

                if (priceInput && product?.costPrice != null) {
                  priceInput.value = String(product.costPrice);
                }
              }}
              style={{ padding: 12 }}
            >
              <option value="">اختر المنتج</option>
              {products.map((product) => (
                <option key={product.id} value={product.id}>
                  {product.sku || 'بدون كود'} — {product.name} — المتاح: {totalStock(product)}
                </option>
              ))}
            </select>

            {selectedProduct ? (
              <p style={{ color: '#94a3b8', margin: 0 }}>
                المنتج: {selectedProduct.name} · الكود: {selectedProduct.sku || 'بدون كود'} · الرصيد الحالي: {totalStock(selectedProduct)}
              </p>
            ) : null}

            <input name="quantity" type="number" min="1" defaultValue="1" required placeholder="الكمية الواردة" style={{ padding: 12 }} />
            <input name="unitPrice" type="number" min="0" required placeholder="سعر الشراء للوحدة" style={{ padding: 12 }} />
            <input name="note" placeholder="ملاحظة" style={{ padding: 12 }} />

            <button disabled={saving} style={{ padding: 12 }}>
              {saving ? 'جاري الحفظ والترحيل...' : 'حفظ وترحيل فاتورة الشراء'}
            </button>
          </div>
        </form>
      ) : null}

      <section style={{ padding: 24, border: '1px solid #334155', borderRadius: 16, background: '#111827' }}>
        <h2>فواتير الشراء</h2>

        <div style={{ display: 'grid', gap: 8, marginTop: 16 }}>
          {documents.map((document) => (
            <div key={document.id} style={{ padding: 12, border: '1px solid #475569', borderRadius: 12 }}>
              <strong>{document.ref || document.id}</strong>
              <div style={{ color: '#94a3b8' }}>
                المورد: {document.party?.name || 'مورد'} · الإجمالي: {money(document.grandTotal)} · الحالة: {document.status || 'مسجلة'}
              </div>

              {document.lines?.length ? (
                <ul style={{ marginTop: 8 }}>
                  {document.lines.map((line, index) => (
                    <li key={line.id || index}>
                      {line.product?.sku || 'بدون كود'} — {line.product?.name || line.description || 'بند'} — كمية {line.quantity} — {money(line.lineTotal)}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}

          {!documents.length ? <p style={{ color: '#94a3b8' }}>لا توجد فواتير شراء مسجلة.</p> : null}
        </div>
      </section>

      <section style={{ padding: 24, border: '1px solid #334155', borderRadius: 16, background: '#111827' }}>
        <h2>الموردون</h2>

        <div style={{ display: 'grid', gap: 8, marginTop: 16 }}>
          {suppliers.map((supplier) => (
            <div key={supplier.id} style={{ padding: 12, border: '1px solid #475569', borderRadius: 12 }}>
              <strong>{supplier.name}</strong>
              <div style={{ color: '#94a3b8' }}>
                {supplier.phone || supplier.email || 'لا توجد بيانات اتصال'}
              </div>
            </div>
          ))}

          {!suppliers.length ? <p style={{ color: '#94a3b8' }}>لا يوجد موردون مسجلون.</p> : null}
        </div>
      </section>
    </div>
  );
}
`);