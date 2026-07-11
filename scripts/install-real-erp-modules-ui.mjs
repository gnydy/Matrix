import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();

function write(rel, content) {
  const file = path.join(root, rel);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, content, 'utf8');
  console.log('updated:', rel);
}

function page(componentName, componentFile) {
  return `import { redirect } from 'next/navigation';
import { ErpShell } from '@/components/erp-shell';
import { getSession } from '@/lib/auth';
import { ${componentName} } from '@/components/${componentFile}';

export default async function Page() {
  const session = await getSession();

  if (!session) {
    redirect('/login');
  }

  return (
    <ErpShell userName={session.name}>
      <${componentName} />
    </ErpShell>
  );
}
`;
}

write('apps/web-erp/src/components/erp-api.ts', `
export async function erpApi<T>(path: string, init?: RequestInit): Promise<T> {
  const headers = new Headers(init?.headers);
  headers.set('Content-Type', 'application/json');

  const response = await fetch('/erp/api/erp/proxy/' + path, {
    ...init,
    headers,
    cache: 'no-store',
  });

  const json = await response.json().catch(() => null);

  if (!response.ok || json?.ok === false) {
    throw new Error(json?.error || json?.message || 'تعذر تنفيذ العملية');
  }

  return (json?.data ?? json) as T;
}

export function field(form: FormData, key: string) {
  return String(form.get(key) || '').trim();
}

export function num(form: FormData, key: string) {
  const value = Number(form.get(key) || 0);
  return Number.isFinite(value) ? value : 0;
}

export function money(value: unknown) {
  const numberValue = Number(value || 0);
  return numberValue.toLocaleString('ar-EG', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });
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
  sku: string;
  name: string;
  unit: string;
  type: string;
  costPrice?: string | number | null;
  salePrice?: string | number | null;
  stockLevels?: Array<{ quantity: string | number; warehouse?: Warehouse }>;
};

type Movement = {
  id: string;
  type: string;
  quantity: string | number;
  product?: Product;
  warehouse?: Warehouse;
  createdAt?: string;
};

type Audit = {
  id: string;
  ref?: string | null;
  status?: string | null;
  warehouse?: Warehouse | null;
};

export function InventoryModuleClient() {
  const [warehouses, setWarehouses] = useState<Warehouse[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [movements, setMovements] = useState<Movement[]>([]);
  const [audits, setAudits] = useState<Audit[]>([]);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [saving, setSaving] = useState(false);

  async function load() {
    setError('');
    try {
      const [warehouseRows, productRows, movementRows, auditRows] = await Promise.all([
        erpApi<Warehouse[]>('inventory/warehouses'),
        erpApi<Product[]>('inventory/products'),
        erpApi<Movement[]>('inventory/movements').catch(() => []),
        erpApi<Audit[]>('inventory/audits').catch(() => []),
      ]);

      setWarehouses(warehouseRows);
      setProducts(productRows);
      setMovements(movementRows);
      setAudits(auditRows);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'تعذر تحميل بيانات المخزون');
    }
  }

  useEffect(() => {
    void load();
  }, []);

  async function submitWarehouse(event: FormEvent<HTMLFormElement>) {
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
      setMessage('تم حفظ المخزن');
      await load();
    } catch (e) {
      setError(e instanceof Error ? e.message : 'تعذر حفظ المخزن');
    } finally {
      setSaving(false);
    }
  }

  async function submitProduct(event: FormEvent<HTMLFormElement>) {
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
          unit: field(form, 'unit') || 'pcs',
          type: field(form, 'type') || 'stock',
          costPrice: num(form, 'costPrice'),
          salePrice: num(form, 'salePrice'),
          minStock: num(form, 'minStock'),
        }),
      });

      formElement.reset();
      setMessage('تم حفظ المنتج');
      await load();
    } catch (e) {
      setError(e instanceof Error ? e.message : 'تعذر حفظ المنتج');
    } finally {
      setSaving(false);
    }
  }

  async function submitAudit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formElement = event.currentTarget;
    const form = new FormData(formElement);

    setSaving(true);
    setMessage('');
    setError('');

    try {
      await erpApi('inventory/audits', {
        method: 'POST',
        body: JSON.stringify({
          warehouseId: field(form, 'warehouseId'),
          note: field(form, 'note') || undefined,
        }),
      });

      formElement.reset();
      setMessage('تم إنشاء جرد جديد');
      await load();
    } catch (e) {
      setError(e instanceof Error ? e.message : 'تعذر إنشاء الجرد');
    } finally {
      setSaving(false);
    }
  }

  return (
    <div style={{ display: 'grid', gap: 24 }}>
      <section style={{ padding: 24, border: '1px solid #334155', borderRadius: 16, background: '#111827' }}>
        <h1 style={{ fontSize: 28, fontWeight: 800 }}>المخزون</h1>
        <p style={{ color: '#cbd5e1' }}>إدارة المنتجات والمخازن وحركات الإضافة والصرف والجرد.</p>

        {message ? <p style={{ color: '#22c55e' }}>{message}</p> : null}
        {error ? <p style={{ color: '#ef4444' }}>{error}</p> : null}

        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 16 }}>
          <strong>المنتجات: {products.length}</strong>
          <strong>المخازن: {warehouses.length}</strong>
          <strong>الحركات: {movements.length}</strong>
          <strong>عمليات الجرد: {audits.length}</strong>
        </div>
      </section>

      <section style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
        <form onSubmit={submitWarehouse} style={{ padding: 20, border: '1px solid #334155', borderRadius: 16, background: '#111827' }}>
          <h2>إضافة مخزن</h2>
          <div style={{ display: 'grid', gap: 10 }}>
            <input name="name" required placeholder="اسم المخزن" style={{ padding: 12 }} />
            <input name="code" placeholder="كود المخزن" style={{ padding: 12 }} />
            <button disabled={saving} style={{ padding: 12 }}>حفظ المخزن</button>
          </div>
        </form>

        <form onSubmit={submitProduct} style={{ padding: 20, border: '1px solid #334155', borderRadius: 16, background: '#111827' }}>
          <h2>إضافة منتج</h2>
          <div style={{ display: 'grid', gap: 10 }}>
            <input name="sku" required placeholder="كود المنتج" style={{ padding: 12 }} />
            <input name="name" required placeholder="اسم المنتج" style={{ padding: 12 }} />
            <input name="unit" placeholder="الوحدة" defaultValue="pcs" style={{ padding: 12 }} />
            <select name="type" style={{ padding: 12 }}>
              <option value="stock">منتج مخزني</option>
              <option value="service">خدمة</option>
            </select>
            <input name="costPrice" type="number" placeholder="سعر التكلفة" style={{ padding: 12 }} />
            <input name="salePrice" type="number" placeholder="سعر البيع" style={{ padding: 12 }} />
            <input name="minStock" type="number" placeholder="الحد الأدنى" style={{ padding: 12 }} />
            <button disabled={saving} style={{ padding: 12 }}>حفظ المنتج</button>
          </div>
        </form>

        <form onSubmit={submitAudit} style={{ padding: 20, border: '1px solid #334155', borderRadius: 16, background: '#111827' }}>
          <h2>إنشاء جرد</h2>
          <div style={{ display: 'grid', gap: 10 }}>
            <select name="warehouseId" required style={{ padding: 12 }}>
              <option value="">اختر المخزن</option>
              {warehouses.map((warehouse) => (
                <option key={warehouse.id} value={warehouse.id}>{warehouse.name}</option>
              ))}
            </select>
            <input name="note" placeholder="ملاحظة" style={{ padding: 12 }} />
            <button disabled={saving} style={{ padding: 12 }}>إنشاء الجرد</button>
          </div>
        </form>
      </section>

      <section style={{ padding: 20, border: '1px solid #334155', borderRadius: 16, background: '#111827' }}>
        <h2>المنتجات الحالية</h2>
        <div style={{ display: 'grid', gap: 8 }}>
          {products.map((product) => (
            <div key={product.id} style={{ padding: 12, border: '1px solid #475569', borderRadius: 12 }}>
              <strong>{product.name}</strong>
              <div style={{ color: '#94a3b8' }}>
                {product.sku} · {product.unit} · بيع {money(product.salePrice)} · تكلفة {money(product.costPrice)}
              </div>
            </div>
          ))}
          {!products.length ? <p style={{ color: '#94a3b8' }}>لا توجد منتجات مسجلة.</p> : null}
        </div>
      </section>
    </div>
  );
}
`);

write('apps/web-erp/src/components/sales-module-client.tsx', `
'use client';

import { FormEvent, useEffect, useState } from 'react';
import { erpApi, field, money, num } from './erp-api';

type Party = { id: string; name: string; phone?: string | null; email?: string | null };
type Product = { id: string; name: string; sku?: string | null; salePrice?: string | number | null };
type SalesDocument = {
  id: string;
  ref?: string | null;
  type?: string | null;
  grandTotal?: string | number | null;
  party?: Party | null;
};

export function SalesModuleClient() {
  const [customers, setCustomers] = useState<Party[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [documents, setDocuments] = useState<SalesDocument[]>([]);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [saving, setSaving] = useState(false);

  async function load() {
    setError('');
    try {
      const [customerRows, productRows, documentRows] = await Promise.all([
        erpApi<Party[]>('sales/parties'),
        erpApi<Product[]>('inventory/products'),
        erpApi<SalesDocument[]>('sales/documents').catch(() => []),
      ]);
      setCustomers(customerRows);
      setProducts(productRows);
      setDocuments(documentRows);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'تعذر تحميل بيانات المبيعات');
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
      setMessage('تم حفظ العميل');
      await load();
    } catch (e) {
      setError(e instanceof Error ? e.message : 'تعذر حفظ العميل');
    } finally {
      setSaving(false);
    }
  }

  async function addInvoice(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formElement = event.currentTarget;
    const form = new FormData(formElement);
    const productId = field(form, 'productId');
    const product = products.find((item) => item.id === productId);

    setSaving(true);
    setMessage('');
    setError('');

    try {
      await erpApi('sales/documents', {
        method: 'POST',
        body: JSON.stringify({
          partyId: field(form, 'partyId'),
          type: 'invoice',
          note: field(form, 'note') || undefined,
          lines: [
            {
              productId: productId || undefined,
              description: product?.name || field(form, 'description') || 'بند مبيعات',
              quantity: num(form, 'quantity') || 1,
              unitPrice: num(form, 'unitPrice'),
            },
          ],
        }),
      });

      formElement.reset();
      setMessage('تم حفظ فاتورة البيع');
      await load();
    } catch (e) {
      setError(e instanceof Error ? e.message : 'تعذر حفظ فاتورة البيع');
    } finally {
      setSaving(false);
    }
  }

  return (
    <div style={{ display: 'grid', gap: 24 }}>
      <section style={{ padding: 24, border: '1px solid #334155', borderRadius: 16, background: '#111827' }}>
        <h1 style={{ fontSize: 28, fontWeight: 800 }}>المبيعات</h1>
        <p style={{ color: '#cbd5e1' }}>إدارة العملاء وفواتير البيع ومتابعة قيمة المبيعات.</p>
        {message ? <p style={{ color: '#22c55e' }}>{message}</p> : null}
        {error ? <p style={{ color: '#ef4444' }}>{error}</p> : null}
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 16 }}>
          <strong>العملاء: {customers.length}</strong>
          <strong>فواتير البيع: {documents.length}</strong>
        </div>
      </section>

      <section style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
        <form onSubmit={addCustomer} style={{ padding: 20, border: '1px solid #334155', borderRadius: 16, background: '#111827' }}>
          <h2>إضافة عميل</h2>
          <div style={{ display: 'grid', gap: 10 }}>
            <input name="name" required placeholder="اسم العميل" style={{ padding: 12 }} />
            <input name="phone" placeholder="الهاتف" style={{ padding: 12 }} />
            <input name="email" placeholder="البريد الإلكتروني" style={{ padding: 12 }} />
            <button disabled={saving} style={{ padding: 12 }}>حفظ العميل</button>
          </div>
        </form>

        <form onSubmit={addInvoice} style={{ padding: 20, border: '1px solid #334155', borderRadius: 16, background: '#111827' }}>
          <h2>فاتورة بيع</h2>
          <div style={{ display: 'grid', gap: 10 }}>
            <select name="partyId" required style={{ padding: 12 }}>
              <option value="">اختر العميل</option>
              {customers.map((customer) => (
                <option key={customer.id} value={customer.id}>{customer.name}</option>
              ))}
            </select>

            <select name="productId" style={{ padding: 12 }}>
              <option value="">اختر المنتج</option>
              {products.map((product) => (
                <option key={product.id} value={product.id}>{product.name}</option>
              ))}
            </select>

            <input name="description" placeholder="وصف البند عند عدم اختيار منتج" style={{ padding: 12 }} />
            <input name="quantity" type="number" placeholder="الكمية" defaultValue="1" style={{ padding: 12 }} />
            <input name="unitPrice" type="number" placeholder="سعر الوحدة" required style={{ padding: 12 }} />
            <input name="note" placeholder="ملاحظة" style={{ padding: 12 }} />
            <button disabled={saving} style={{ padding: 12 }}>حفظ الفاتورة</button>
          </div>
        </form>
      </section>

      <section style={{ padding: 20, border: '1px solid #334155', borderRadius: 16, background: '#111827' }}>
        <h2>فواتير البيع</h2>
        <div style={{ display: 'grid', gap: 8 }}>
          {documents.map((document) => (
            <div key={document.id} style={{ padding: 12, border: '1px solid #475569', borderRadius: 12 }}>
              <strong>{document.ref || document.id}</strong>
              <div style={{ color: '#94a3b8' }}>
                {document.party?.name || 'عميل'} · {money(document.grandTotal)}
              </div>
            </div>
          ))}
          {!documents.length ? <p style={{ color: '#94a3b8' }}>لا توجد فواتير بيع مسجلة.</p> : null}
        </div>
      </section>
    </div>
  );
}
`);

write('apps/web-erp/src/components/purchases-module-client.tsx', `
'use client';

import { FormEvent, useEffect, useState } from 'react';
import { erpApi, field, money, num } from './erp-api';

type Party = { id: string; name: string; phone?: string | null; email?: string | null };
type Product = { id: string; name: string; sku?: string | null };
type PurchaseDocument = {
  id: string;
  ref?: string | null;
  grandTotal?: string | number | null;
  party?: Party | null;
};

export function PurchasesModuleClient() {
  const [suppliers, setSuppliers] = useState<Party[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [documents, setDocuments] = useState<PurchaseDocument[]>([]);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [saving, setSaving] = useState(false);

  async function load() {
    setError('');
    try {
      const [supplierRows, productRows, documentRows] = await Promise.all([
        erpApi<Party[]>('purchases/parties'),
        erpApi<Product[]>('inventory/products'),
        erpApi<PurchaseDocument[]>('purchases/documents').catch(() => []),
      ]);
      setSuppliers(supplierRows);
      setProducts(productRows);
      setDocuments(documentRows);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'تعذر تحميل بيانات المشتريات');
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
          name: field(form, 'name'),
          phone: field(form, 'phone') || undefined,
          email: field(form, 'email') || undefined,
        }),
      });

      formElement.reset();
      setMessage('تم حفظ المورد');
      await load();
    } catch (e) {
      setError(e instanceof Error ? e.message : 'تعذر حفظ المورد');
    } finally {
      setSaving(false);
    }
  }

  async function addInvoice(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formElement = event.currentTarget;
    const form = new FormData(formElement);
    const productId = field(form, 'productId');
    const product = products.find((item) => item.id === productId);

    setSaving(true);
    setMessage('');
    setError('');

    try {
      await erpApi('purchases/documents', {
        method: 'POST',
        body: JSON.stringify({
          partyId: field(form, 'partyId'),
          type: 'invoice',
          note: field(form, 'note') || undefined,
          lines: [
            {
              productId: productId || undefined,
              description: product?.name || field(form, 'description') || 'بند مشتريات',
              quantity: num(form, 'quantity') || 1,
              unitPrice: num(form, 'unitPrice'),
            },
          ],
        }),
      });

      formElement.reset();
      setMessage('تم حفظ فاتورة الشراء');
      await load();
    } catch (e) {
      setError(e instanceof Error ? e.message : 'تعذر حفظ فاتورة الشراء');
    } finally {
      setSaving(false);
    }
  }

  return (
    <div style={{ display: 'grid', gap: 24 }}>
      <section style={{ padding: 24, border: '1px solid #334155', borderRadius: 16, background: '#111827' }}>
        <h1 style={{ fontSize: 28, fontWeight: 800 }}>المشتريات</h1>
        <p style={{ color: '#cbd5e1' }}>إدارة الموردين وفواتير الشراء وتكلفة التوريد.</p>
        {message ? <p style={{ color: '#22c55e' }}>{message}</p> : null}
        {error ? <p style={{ color: '#ef4444' }}>{error}</p> : null}
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 16 }}>
          <strong>الموردون: {suppliers.length}</strong>
          <strong>فواتير الشراء: {documents.length}</strong>
        </div>
      </section>

      <section style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
        <form onSubmit={addSupplier} style={{ padding: 20, border: '1px solid #334155', borderRadius: 16, background: '#111827' }}>
          <h2>إضافة مورد</h2>
          <div style={{ display: 'grid', gap: 10 }}>
            <input name="name" required placeholder="اسم المورد" style={{ padding: 12 }} />
            <input name="phone" placeholder="الهاتف" style={{ padding: 12 }} />
            <input name="email" placeholder="البريد الإلكتروني" style={{ padding: 12 }} />
            <button disabled={saving} style={{ padding: 12 }}>حفظ المورد</button>
          </div>
        </form>

        <form onSubmit={addInvoice} style={{ padding: 20, border: '1px solid #334155', borderRadius: 16, background: '#111827' }}>
          <h2>فاتورة شراء</h2>
          <div style={{ display: 'grid', gap: 10 }}>
            <select name="partyId" required style={{ padding: 12 }}>
              <option value="">اختر المورد</option>
              {suppliers.map((supplier) => (
                <option key={supplier.id} value={supplier.id}>{supplier.name}</option>
              ))}
            </select>

            <select name="productId" style={{ padding: 12 }}>
              <option value="">اختر المنتج</option>
              {products.map((product) => (
                <option key={product.id} value={product.id}>{product.name}</option>
              ))}
            </select>

            <input name="description" placeholder="وصف البند عند عدم اختيار منتج" style={{ padding: 12 }} />
            <input name="quantity" type="number" placeholder="الكمية" defaultValue="1" style={{ padding: 12 }} />
            <input name="unitPrice" type="number" placeholder="سعر الوحدة" required style={{ padding: 12 }} />
            <input name="note" placeholder="ملاحظة" style={{ padding: 12 }} />
            <button disabled={saving} style={{ padding: 12 }}>حفظ الفاتورة</button>
          </div>
        </form>
      </section>

      <section style={{ padding: 20, border: '1px solid #334155', borderRadius: 16, background: '#111827' }}>
        <h2>فواتير الشراء</h2>
        <div style={{ display: 'grid', gap: 8 }}>
          {documents.map((document) => (
            <div key={document.id} style={{ padding: 12, border: '1px solid #475569', borderRadius: 12 }}>
              <strong>{document.ref || document.id}</strong>
              <div style={{ color: '#94a3b8' }}>
                {document.party?.name || 'مورد'} · {money(document.grandTotal)}
              </div>
            </div>
          ))}
          {!documents.length ? <p style={{ color: '#94a3b8' }}>لا توجد فواتير شراء مسجلة.</p> : null}
        </div>
      </section>
    </div>
  );
}
`);

write('apps/web-erp/src/components/debts-module-client.tsx', `
'use client';

import { useEffect, useState } from 'react';
import { erpApi, money } from './erp-api';

type Debt = {
  id: string;
  amount?: string | number | null;
  paidAmount?: string | number | null;
  party?: { name?: string | null } | null;
  status?: string | null;
};

type Overview = {
  receivableOpen?: number;
  payableOpen?: number;
  receivableCount?: number;
  payableCount?: number;
};

export function DebtsModuleClient() {
  const [receivables, setReceivables] = useState<Debt[]>([]);
  const [payables, setPayables] = useState<Debt[]>([]);
  const [overview, setOverview] = useState<Overview>({});
  const [error, setError] = useState('');

  async function load() {
    setError('');
    try {
      const [receivableRows, payableRows, overviewData] = await Promise.all([
        erpApi<Debt[]>('debts/receivables'),
        erpApi<Debt[]>('debts/payables'),
        erpApi<Overview>('debts/overview').catch(() => ({})),
      ]);
      setReceivables(receivableRows);
      setPayables(payableRows);
      setOverview(overviewData);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'تعذر تحميل بيانات المديونيات');
    }
  }

  useEffect(() => {
    void load();
  }, []);

  return (
    <div style={{ display: 'grid', gap: 24 }}>
      <section style={{ padding: 24, border: '1px solid #334155', borderRadius: 16, background: '#111827' }}>
        <h1 style={{ fontSize: 28, fontWeight: 800 }}>المديونيات</h1>
        <p style={{ color: '#cbd5e1' }}>متابعة مستحقات العملاء والتزامات الموردين.</p>
        {error ? <p style={{ color: '#ef4444' }}>{error}</p> : null}

        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 16 }}>
          <strong>مستحقات العملاء: {money(overview.receivableOpen)}</strong>
          <strong>التزامات الموردين: {money(overview.payableOpen)}</strong>
        </div>
      </section>

      <section style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
        <div style={{ padding: 20, border: '1px solid #334155', borderRadius: 16, background: '#111827' }}>
          <h2>مستحقات العملاء</h2>
          <div style={{ display: 'grid', gap: 8 }}>
            {receivables.map((row) => (
              <div key={row.id} style={{ padding: 12, border: '1px solid #475569', borderRadius: 12 }}>
                <strong>{row.party?.name || 'عميل'}</strong>
                <div style={{ color: '#94a3b8' }}>المبلغ: {money(row.amount)} · المدفوع: {money(row.paidAmount)}</div>
              </div>
            ))}
            {!receivables.length ? <p style={{ color: '#94a3b8' }}>لا توجد مستحقات عملاء.</p> : null}
          </div>
        </div>

        <div style={{ padding: 20, border: '1px solid #334155', borderRadius: 16, background: '#111827' }}>
          <h2>التزامات الموردين</h2>
          <div style={{ display: 'grid', gap: 8 }}>
            {payables.map((row) => (
              <div key={row.id} style={{ padding: 12, border: '1px solid #475569', borderRadius: 12 }}>
                <strong>{row.party?.name || 'مورد'}</strong>
                <div style={{ color: '#94a3b8' }}>المبلغ: {money(row.amount)} · المدفوع: {money(row.paidAmount)}</div>
              </div>
            ))}
            {!payables.length ? <p style={{ color: '#94a3b8' }}>لا توجد التزامات موردين.</p> : null}
          </div>
        </div>
      </section>
    </div>
  );
}
`);

write('apps/web-erp/src/components/accounting-module-client.tsx', `
'use client';

import { FormEvent, useEffect, useState } from 'react';
import { erpApi, field, money, num } from './erp-api';

type Account = {
  id: string;
  code?: string | null;
  name: string;
  type?: string | null;
};

type JournalEntry = {
  id: string;
  ref?: string | null;
  memo?: string | null;
  status?: string | null;
  lines?: Array<{ debit?: string | number; credit?: string | number; account?: Account | null }>;
};

export function AccountingModuleClient() {
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [saving, setSaving] = useState(false);

  async function load() {
    setError('');
    try {
      const [accountRows, entryRows] = await Promise.all([
        erpApi<Account[]>('accounting/accounts'),
        erpApi<JournalEntry[]>('accounting/entries').catch(() => []),
      ]);
      setAccounts(accountRows);
      setEntries(entryRows);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'تعذر تحميل بيانات الحسابات');
    }
  }

  useEffect(() => {
    void load();
  }, []);

  async function addEntry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formElement = event.currentTarget;
    const form = new FormData(formElement);

    setSaving(true);
    setMessage('');
    setError('');

    try {
      await erpApi('accounting/entries', {
        method: 'POST',
        body: JSON.stringify({
          memo: field(form, 'memo') || undefined,
          lines: [
            {
              accountId: field(form, 'debitAccountId'),
              debit: num(form, 'amount'),
              credit: 0,
              memo: field(form, 'memo') || undefined,
            },
            {
              accountId: field(form, 'creditAccountId'),
              debit: 0,
              credit: num(form, 'amount'),
              memo: field(form, 'memo') || undefined,
            },
          ],
        }),
      });

      formElement.reset();
      setMessage('تم حفظ القيد');
      await load();
    } catch (e) {
      setError(e instanceof Error ? e.message : 'تعذر حفظ القيد');
    } finally {
      setSaving(false);
    }
  }

  return (
    <div style={{ display: 'grid', gap: 24 }}>
      <section style={{ padding: 24, border: '1px solid #334155', borderRadius: 16, background: '#111827' }}>
        <h1 style={{ fontSize: 28, fontWeight: 800 }}>الحسابات</h1>
        <p style={{ color: '#cbd5e1' }}>متابعة دليل الحسابات والقيود اليومية.</p>
        {message ? <p style={{ color: '#22c55e' }}>{message}</p> : null}
        {error ? <p style={{ color: '#ef4444' }}>{error}</p> : null}
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 16 }}>
          <strong>الحسابات: {accounts.length}</strong>
          <strong>القيود: {entries.length}</strong>
        </div>
      </section>

      <form onSubmit={addEntry} style={{ padding: 20, border: '1px solid #334155', borderRadius: 16, background: '#111827' }}>
        <h2>إضافة قيد يومية</h2>
        <div style={{ display: 'grid', gap: 10, maxWidth: 520 }}>
          <select name="debitAccountId" required style={{ padding: 12 }}>
            <option value="">حساب مدين</option>
            {accounts.map((account) => (
              <option key={account.id} value={account.id}>{account.code} - {account.name}</option>
            ))}
          </select>

          <select name="creditAccountId" required style={{ padding: 12 }}>
            <option value="">حساب دائن</option>
            {accounts.map((account) => (
              <option key={account.id} value={account.id}>{account.code} - {account.name}</option>
            ))}
          </select>

          <input name="amount" type="number" required placeholder="المبلغ" style={{ padding: 12 }} />
          <input name="memo" placeholder="البيان" style={{ padding: 12 }} />
          <button disabled={saving} style={{ padding: 12 }}>حفظ القيد</button>
        </div>
      </form>

      <section style={{ padding: 20, border: '1px solid #334155', borderRadius: 16, background: '#111827' }}>
        <h2>آخر القيود</h2>
        <div style={{ display: 'grid', gap: 8 }}>
          {entries.map((entry) => (
            <div key={entry.id} style={{ padding: 12, border: '1px solid #475569', borderRadius: 12 }}>
              <strong>{entry.ref || entry.id}</strong>
              <div style={{ color: '#94a3b8' }}>
                {entry.memo || 'بدون بيان'} · {entry.status || 'مسودة'}
              </div>
            </div>
          ))}
          {!entries.length ? <p style={{ color: '#94a3b8' }}>لا توجد قيود مسجلة.</p> : null}
        </div>
      </section>
    </div>
  );
}
`);

write('apps/web-erp/src/components/hr-module-client.tsx', `
'use client';

import { FormEvent, useEffect, useState } from 'react';
import { erpApi, field } from './erp-api';

type Employee = {
  id: string;
  employeeNo?: string | null;
  name: string;
  email?: string | null;
  phone?: string | null;
  jobTitle?: string | null;
};

export function HrModuleClient() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [attendanceCount, setAttendanceCount] = useState(0);
  const [leaveCount, setLeaveCount] = useState(0);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [saving, setSaving] = useState(false);

  async function load() {
    setError('');
    try {
      const [employeeRows, attendanceRows, leaveRows] = await Promise.all([
        erpApi<Employee[]>('hr/employees'),
        erpApi<unknown[]>('hr/attendance').catch(() => []),
        erpApi<unknown[]>('hr/leave-requests').catch(() => []),
      ]);
      setEmployees(employeeRows);
      setAttendanceCount(attendanceRows.length);
      setLeaveCount(leaveRows.length);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'تعذر تحميل بيانات الموظفين');
    }
  }

  useEffect(() => {
    void load();
  }, []);

  async function addEmployee(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formElement = event.currentTarget;
    const form = new FormData(formElement);

    setSaving(true);
    setMessage('');
    setError('');

    try {
      await erpApi('hr/employees', {
        method: 'POST',
        body: JSON.stringify({
          employeeNo: field(form, 'employeeNo'),
          name: field(form, 'name'),
          email: field(form, 'email') || undefined,
          phone: field(form, 'phone') || undefined,
          jobTitle: field(form, 'jobTitle') || undefined,
        }),
      });

      formElement.reset();
      setMessage('تم حفظ الموظف');
      await load();
    } catch (e) {
      setError(e instanceof Error ? e.message : 'تعذر حفظ الموظف');
    } finally {
      setSaving(false);
    }
  }

  return (
    <div style={{ display: 'grid', gap: 24 }}>
      <section style={{ padding: 24, border: '1px solid #334155', borderRadius: 16, background: '#111827' }}>
        <h1 style={{ fontSize: 28, fontWeight: 800 }}>الموارد البشرية</h1>
        <p style={{ color: '#cbd5e1' }}>إدارة بيانات الموظفين والحضور والإجازات.</p>
        {message ? <p style={{ color: '#22c55e' }}>{message}</p> : null}
        {error ? <p style={{ color: '#ef4444' }}>{error}</p> : null}
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 16 }}>
          <strong>الموظفون: {employees.length}</strong>
          <strong>سجلات الحضور: {attendanceCount}</strong>
          <strong>طلبات الإجازة: {leaveCount}</strong>
        </div>
      </section>

      <form onSubmit={addEmployee} style={{ padding: 20, border: '1px solid #334155', borderRadius: 16, background: '#111827' }}>
        <h2>إضافة موظف</h2>
        <div style={{ display: 'grid', gap: 10, maxWidth: 520 }}>
          <input name="employeeNo" required placeholder="رقم الموظف" style={{ padding: 12 }} />
          <input name="name" required placeholder="اسم الموظف" style={{ padding: 12 }} />
          <input name="jobTitle" placeholder="المسمى الوظيفي" style={{ padding: 12 }} />
          <input name="phone" placeholder="الهاتف" style={{ padding: 12 }} />
          <input name="email" placeholder="البريد الإلكتروني" style={{ padding: 12 }} />
          <button disabled={saving} style={{ padding: 12 }}>حفظ الموظف</button>
        </div>
      </form>

      <section style={{ padding: 20, border: '1px solid #334155', borderRadius: 16, background: '#111827' }}>
        <h2>الموظفون</h2>
        <div style={{ display: 'grid', gap: 8 }}>
          {employees.map((employee) => (
            <div key={employee.id} style={{ padding: 12, border: '1px solid #475569', borderRadius: 12 }}>
              <strong>{employee.name}</strong>
              <div style={{ color: '#94a3b8' }}>{employee.employeeNo} · {employee.jobTitle || 'بدون مسمى وظيفي'}</div>
            </div>
          ))}
          {!employees.length ? <p style={{ color: '#94a3b8' }}>لا يوجد موظفون مسجلون.</p> : null}
        </div>
      </section>
    </div>
  );
}
`);

write('apps/web-erp/src/components/workflow-module-client.tsx', `
'use client';

import { useEffect, useState } from 'react';
import { erpApi } from './erp-api';

type WorkflowInstance = {
  id: string;
  type?: string | null;
  status?: string | null;
  currentStep?: string | null;
  updatedAt?: string | null;
};

type WorkflowStep = {
  id: string;
  name?: string | null;
  module?: string | null;
};

export function WorkflowModuleClient() {
  const [instances, setInstances] = useState<WorkflowInstance[]>([]);
  const [steps, setSteps] = useState<WorkflowStep[]>([]);
  const [error, setError] = useState('');

  async function load() {
    setError('');
    try {
      const [instanceRows, stepRows] = await Promise.all([
        erpApi<WorkflowInstance[]>('workflow/instances'),
        erpApi<WorkflowStep[]>('workflow/steps').catch(() => []),
      ]);
      setInstances(instanceRows);
      setSteps(stepRows);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'تعذر تحميل سير العمل');
    }
  }

  useEffect(() => {
    void load();
  }, []);

  return (
    <div style={{ display: 'grid', gap: 24 }}>
      <section style={{ padding: 24, border: '1px solid #334155', borderRadius: 16, background: '#111827' }}>
        <h1 style={{ fontSize: 28, fontWeight: 800 }}>سير العمل</h1>
        <p style={{ color: '#cbd5e1' }}>متابعة الطلبات والموافقات وخطوات المراجعة.</p>
        {error ? <p style={{ color: '#ef4444' }}>{error}</p> : null}
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 16 }}>
          <strong>العمليات: {instances.length}</strong>
          <strong>خطوات العمل: {steps.length}</strong>
        </div>
      </section>

      <section style={{ padding: 20, border: '1px solid #334155', borderRadius: 16, background: '#111827' }}>
        <h2>العمليات الحالية</h2>
        <div style={{ display: 'grid', gap: 8 }}>
          {instances.map((item) => (
            <div key={item.id} style={{ padding: 12, border: '1px solid #475569', borderRadius: 12 }}>
              <strong>{item.type || 'عملية'}</strong>
              <div style={{ color: '#94a3b8' }}>{item.status || 'قيد المتابعة'}</div>
            </div>
          ))}
          {!instances.length ? <p style={{ color: '#94a3b8' }}>لا توجد عمليات متابعة مسجلة.</p> : null}
        </div>
      </section>
    </div>
  );
}
`);

write('apps/web-erp/src/components/reports-module-client.tsx', `
'use client';

import { useEffect, useState } from 'react';
import { erpApi, money } from './erp-api';

type InventoryOverview = {
  counts?: {
    products?: number;
    warehouses?: number;
    movements?: number;
    audits?: number;
  };
};

type DebtsOverview = {
  receivableOpen?: number;
  payableOpen?: number;
  receivableCount?: number;
  payableCount?: number;
};

type Doc = {
  id: string;
  grandTotal?: string | number | null;
};

export function ReportsModuleClient() {
  const [inventory, setInventory] = useState<InventoryOverview>({});
  const [debts, setDebts] = useState<DebtsOverview>({});
  const [sales, setSales] = useState<Doc[]>([]);
  const [purchases, setPurchases] = useState<Doc[]>([]);
  const [error, setError] = useState('');

  async function load() {
    setError('');
    try {
      const [inventoryData, debtData, salesRows, purchaseRows] = await Promise.all([
        erpApi<InventoryOverview>('inventory/overview').catch(() => ({})),
        erpApi<DebtsOverview>('debts/overview').catch(() => ({})),
        erpApi<Doc[]>('sales/documents').catch(() => []),
        erpApi<Doc[]>('purchases/documents').catch(() => []),
      ]);

      setInventory(inventoryData);
      setDebts(debtData);
      setSales(salesRows);
      setPurchases(purchaseRows);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'تعذر تحميل التقارير');
    }
  }

  useEffect(() => {
    void load();
  }, []);

  const salesTotal = sales.reduce((sum, row) => sum + Number(row.grandTotal || 0), 0);
  const purchasesTotal = purchases.reduce((sum, row) => sum + Number(row.grandTotal || 0), 0);

  return (
    <div style={{ display: 'grid', gap: 24 }}>
      <section style={{ padding: 24, border: '1px solid #334155', borderRadius: 16, background: '#111827' }}>
        <h1 style={{ fontSize: 28, fontWeight: 800 }}>التقارير</h1>
        <p style={{ color: '#cbd5e1' }}>ملخصات تشغيلية عن المخزون والمبيعات والمشتريات والمديونيات.</p>
        {error ? <p style={{ color: '#ef4444' }}>{error}</p> : null}
      </section>

      <section style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
        <div style={{ padding: 18, border: '1px solid #334155', borderRadius: 16, background: '#111827' }}>
          <p style={{ color: '#94a3b8' }}>إجمالي المبيعات</p>
          <strong style={{ fontSize: 26 }}>{money(salesTotal)}</strong>
        </div>

        <div style={{ padding: 18, border: '1px solid #334155', borderRadius: 16, background: '#111827' }}>
          <p style={{ color: '#94a3b8' }}>إجمالي المشتريات</p>
          <strong style={{ fontSize: 26 }}>{money(purchasesTotal)}</strong>
        </div>

        <div style={{ padding: 18, border: '1px solid #334155', borderRadius: 16, background: '#111827' }}>
          <p style={{ color: '#94a3b8' }}>مستحقات العملاء</p>
          <strong style={{ fontSize: 26 }}>{money(debts.receivableOpen)}</strong>
        </div>

        <div style={{ padding: 18, border: '1px solid #334155', borderRadius: 16, background: '#111827' }}>
          <p style={{ color: '#94a3b8' }}>التزامات الموردين</p>
          <strong style={{ fontSize: 26 }}>{money(debts.payableOpen)}</strong>
        </div>

        <div style={{ padding: 18, border: '1px solid #334155', borderRadius: 16, background: '#111827' }}>
          <p style={{ color: '#94a3b8' }}>المنتجات</p>
          <strong style={{ fontSize: 26 }}>{inventory.counts?.products || 0}</strong>
        </div>

        <div style={{ padding: 18, border: '1px solid #334155', borderRadius: 16, background: '#111827' }}>
          <p style={{ color: '#94a3b8' }}>المخازن</p>
          <strong style={{ fontSize: 26 }}>{inventory.counts?.warehouses || 0}</strong>
        </div>
      </section>
    </div>
  );
}
`);

write('apps/web-erp/src/app/(erp)/inventory/page.tsx', page('InventoryModuleClient', 'inventory-module-client'));
write('apps/web-erp/src/app/(erp)/sales/page.tsx', page('SalesModuleClient', 'sales-module-client'));
write('apps/web-erp/src/app/(erp)/purchases/page.tsx', page('PurchasesModuleClient', 'purchases-module-client'));
write('apps/web-erp/src/app/(erp)/debts/page.tsx', page('DebtsModuleClient', 'debts-module-client'));
write('apps/web-erp/src/app/(erp)/accounting/page.tsx', page('AccountingModuleClient', 'accounting-module-client'));
write('apps/web-erp/src/app/(erp)/hr/page.tsx', page('HrModuleClient', 'hr-module-client'));
write('apps/web-erp/src/app/(erp)/workflow/page.tsx', page('WorkflowModuleClient', 'workflow-module-client'));
write('apps/web-erp/src/app/(erp)/reports/page.tsx', page('ReportsModuleClient', 'reports-module-client'));

console.log('DONE: real ERP modules UI installed');