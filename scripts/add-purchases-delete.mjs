import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();

function write(rel, content) {
  const file = path.join(root, rel);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, content, 'utf8');
  console.log('updated:', rel);
}

const purchasesControllerPath = path.join(root, 'apps/api/src/erp/erp-purchases.controller.ts');

let api = fs.readFileSync(purchasesControllerPath, 'utf8');

api = api.replace(
  "import { BadRequestException, Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';",
  "import { BadRequestException, Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';",
);

if (!api.includes("@Delete('parties/:id')")) {
  const marker = "  @Post('documents')";
  const method = `
  @Delete('parties/:id')
  async deleteParty(@CurrentUser() user: JwtPayload, @Param('id') id: string) {
    const company = await this.ctx.requireCompany(user);

    const party = await this.prisma.erpParty.findFirst({
      where: {
        id,
        companyId: company.id,
        deletedAt: null,
        type: { in: ['supplier', 'both'] },
      },
    });

    if (!party) {
      throw new BadRequestException('المورد غير موجود');
    }

    const [purchaseDocuments, payables] = await Promise.all([
      this.prisma.erpPurchaseDocument.count({
        where: { companyId: company.id, partyId: id },
      }),
      this.prisma.erpPayable.count({
        where: { companyId: company.id, partyId: id },
      }),
    ]);

    if (purchaseDocuments > 0 || payables > 0) {
      throw new BadRequestException('لا يمكن حذف مورد عليه فواتير أو مديونيات');
    }

    if (party.type === 'both') {
      const data = await this.prisma.erpParty.update({
        where: { id: party.id },
        data: { type: 'customer' },
      });

      return { ok: true, data };
    }

    const data = await this.prisma.erpParty.update({
      where: { id: party.id },
      data: { deletedAt: new Date() },
    });

    return { ok: true, data };
  }

`;
  api = api.replace(marker, method + marker);
}

if (!api.includes("@Delete('documents/:id')")) {
  const marker = "  @Patch('documents/:id/post')";
  const method = `
  @Delete('documents/:id')
  async deleteDocument(@CurrentUser() user: JwtPayload, @Param('id') id: string) {
    const company = await this.ctx.requireCompany(user);

    const doc = await this.prisma.erpPurchaseDocument.findFirst({
      where: {
        id,
        companyId: company.id,
      },
      include: {
        payable: true,
      },
    });

    if (!doc) {
      throw new BadRequestException('فاتورة الشراء غير موجودة');
    }

    if (doc.status === 'posted' || doc.payable) {
      throw new BadRequestException('لا يمكن حذف فاتورة شراء مرحلة. استخدم الإلغاء أو المرتجع');
    }

    await this.prisma.erpPurchaseLine.deleteMany({
      where: {
        purchaseDocId: doc.id,
      },
    });

    const data = await this.prisma.erpPurchaseDocument.delete({
      where: {
        id: doc.id,
      },
    });

    return { ok: true, data };
  }

`;
  api = api.replace(marker, method + marker);
}

fs.writeFileSync(purchasesControllerPath, api, 'utf8');

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
  stockLevels?: Array<{
    quantity?: string | number | null;
  }>;
};

type PurchaseDocument = {
  id: string;
  ref?: string | null;
  status?: string | null;
  grandTotal?: string | number | null;
  party?: Supplier | null;
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

  const [mode, setMode] = useState<'none' | 'supplier' | 'product' | 'expense'>('none');

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
      setMode('none');
      setMessage('تم حفظ المورد');
      await load();
    } catch (e) {
      setError(e instanceof Error ? e.message : 'تعذر حفظ المورد');
    } finally {
      setSaving(false);
    }
  }

  async function deleteSupplier(supplier: Supplier) {
    const ok = window.confirm('هل تريد حذف المورد: ' + supplier.name + '؟');

    if (!ok) return;

    setSaving(true);
    setMessage('');
    setError('');

    try {
      await erpApi('purchases/parties/' + supplier.id, {
        method: 'DELETE',
      });

      setMessage('تم حذف المورد');
      await load();
    } catch (e) {
      setError(e instanceof Error ? e.message : 'تعذر حذف المورد');
    } finally {
      setSaving(false);
    }
  }

  async function deletePurchase(document: PurchaseDocument) {
    const ok = window.confirm('هل تريد حذف فاتورة الشراء: ' + (document.ref || document.id) + '؟');

    if (!ok) return;

    setSaving(true);
    setMessage('');
    setError('');

    try {
      await erpApi('purchases/documents/' + document.id, {
        method: 'DELETE',
      });

      setMessage('تم حذف فاتورة الشراء');
      await load();
    } catch (e) {
      setError(e instanceof Error ? e.message : 'تعذر حذف فاتورة الشراء');
    } finally {
      setSaving(false);
    }
  }

  async function buyProduct(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formElement = event.currentTarget;
    const form = new FormData(formElement);

    const partyId = field(form, 'partyId');
    const warehouseId = field(form, 'warehouseId');
    const productId = field(form, 'productId');
    const quantity = num(form, 'quantity') || 1;
    const unitPrice = num(form, 'unitPrice');

    const product = products.find((item) => item.id === productId);

    if (!partyId) return setError('اختر المورد');
    if (!warehouseId) return setError('اختر المخزن');
    if (!productId || !product) return setError('اختر المنتج');
    if (quantity <= 0) return setError('أدخل كمية صحيحة');
    if (!unitPrice || unitPrice <= 0) return setError('أدخل سعر شراء صحيح');

    setSaving(true);
    setMessage('');
    setError('');

    try {
      const created = await erpApi<PurchaseDocument>('purchases/documents', {
        method: 'POST',
        body: JSON.stringify({
          partyId,
          type: 'invoice',
          note: field(form, 'note') || 'شراء منتج',
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
        body: JSON.stringify({ warehouseId }),
      });

      formElement.reset();
      setMode('none');
      setMessage('تم شراء المنتج وزيادة المخزون');
      await load();
    } catch (e) {
      setError(e instanceof Error ? e.message : 'تعذر إتمام شراء المنتج');
    } finally {
      setSaving(false);
    }
  }

  async function buyExpense(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formElement = event.currentTarget;
    const form = new FormData(formElement);

    const partyId = field(form, 'partyId');
    const description = field(form, 'description');
    const quantity = num(form, 'quantity') || 1;
    const unitPrice = num(form, 'unitPrice');

    if (!partyId) return setError('اختر المورد');
    if (!description) return setError('اكتب وصف الشراء');
    if (quantity <= 0) return setError('أدخل كمية صحيحة');
    if (!unitPrice || unitPrice <= 0) return setError('أدخل قيمة صحيحة');

    setSaving(true);
    setMessage('');
    setError('');

    try {
      const created = await erpApi<PurchaseDocument>('purchases/documents', {
        method: 'POST',
        body: JSON.stringify({
          partyId,
          type: 'invoice',
          note: field(form, 'note') || 'شراء خدمة أو مصروف',
          lines: [
            {
              description,
              quantity,
              unitPrice,
            },
          ],
        }),
      });

      await erpApi('purchases/documents/' + created.id + '/post', {
        method: 'PATCH',
        body: JSON.stringify({}),
      });

      formElement.reset();
      setMode('none');
      setMessage('تم تسجيل الشراء');
      await load();
    } catch (e) {
      setError(e instanceof Error ? e.message : 'تعذر تسجيل الشراء');
    } finally {
      setSaving(false);
    }
  }

  return (
    <div style={{ display: 'grid', gap: 24 }}>
      <section style={{ padding: 24, border: '1px solid #334155', borderRadius: 16, background: '#111827' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
          <div>
            <h1 style={{ fontSize: 28, fontWeight: 800, marginBottom: 8 }}>المشتريات</h1>
            <p style={{ color: '#cbd5e1', margin: 0 }}>
              تسجيل شراء المنتجات للمخزون أو شراء الخدمات والمصروفات.
            </p>
          </div>

          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            <button type="button" onClick={() => setMode(mode === 'supplier' ? 'none' : 'supplier')} style={{ padding: '12px 16px', borderRadius: 12, border: '1px solid #475569', background: '#0f172a', color: '#e5e7eb', fontWeight: 700, cursor: 'pointer' }}>
              إضافة مورد
            </button>

            <button type="button" onClick={() => setMode(mode === 'product' ? 'none' : 'product')} style={{ padding: '12px 16px', borderRadius: 12, border: 0, background: '#2563eb', color: 'white', fontWeight: 700, cursor: 'pointer' }}>
              شراء منتج
            </button>

            <button type="button" onClick={() => setMode(mode === 'expense' ? 'none' : 'expense')} style={{ padding: '12px 16px', borderRadius: 12, border: '1px solid #14532d', background: '#052e16', color: '#bbf7d0', fontWeight: 700, cursor: 'pointer' }}>
              شراء خدمة / مصروف
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

      {mode === 'supplier' ? (
        <form onSubmit={addSupplier} style={{ padding: 24, border: '1px solid #334155', borderRadius: 16, background: '#111827' }}>
          <h2>إضافة مورد</h2>
          <div style={{ display: 'grid', gap: 12, maxWidth: 460 }}>
            <input name="name" required placeholder="اسم المورد" style={{ padding: 12 }} />
            <input name="phone" placeholder="رقم الهاتف" style={{ padding: 12 }} />
            <input name="email" placeholder="البريد الإلكتروني" style={{ padding: 12 }} />
            <button disabled={saving} style={{ padding: 12 }}>{saving ? 'جاري الحفظ...' : 'حفظ المورد'}</button>
          </div>
        </form>
      ) : null}

      {mode === 'product' ? (
        <form onSubmit={buyProduct} style={{ padding: 24, border: '1px solid #334155', borderRadius: 16, background: '#111827' }}>
          <h2>شراء منتج للمخزون</h2>

          <div style={{ display: 'grid', gap: 12, maxWidth: 560 }}>
            <select name="partyId" required style={{ padding: 12 }}>
              <option value="">اختر المورد</option>
              {suppliers.map((supplier) => <option key={supplier.id} value={supplier.id}>{supplier.name}</option>)}
            </select>

            <select name="warehouseId" required style={{ padding: 12 }}>
              <option value="">اختر المخزن</option>
              {warehouses.map((warehouse) => <option key={warehouse.id} value={warehouse.id}>{warehouse.name}</option>)}
            </select>

            <select name="productId" required style={{ padding: 12 }}>
              <option value="">اختر المنتج</option>
              {products.map((product) => (
                <option key={product.id} value={product.id}>
                  {product.sku || 'بدون كود'} — {product.name} — الرصيد الحالي: {totalStock(product)}
                </option>
              ))}
            </select>

            <input name="quantity" type="number" min="1" defaultValue="1" required placeholder="الكمية المشتراة" style={{ padding: 12 }} />
            <input name="unitPrice" type="number" min="0" required placeholder="سعر الشراء للوحدة" style={{ padding: 12 }} />
            <input name="note" placeholder="ملاحظة" style={{ padding: 12 }} />

            <button disabled={saving} style={{ padding: 12 }}>
              {saving ? 'جاري الشراء...' : 'شراء المنتج وإضافته للمخزون'}
            </button>
          </div>
        </form>
      ) : null}

      {mode === 'expense' ? (
        <form onSubmit={buyExpense} style={{ padding: 24, border: '1px solid #334155', borderRadius: 16, background: '#111827' }}>
          <h2>شراء خدمة / مصروف</h2>

          <div style={{ display: 'grid', gap: 12, maxWidth: 560 }}>
            <select name="partyId" required style={{ padding: 12 }}>
              <option value="">اختر المورد</option>
              {suppliers.map((supplier) => <option key={supplier.id} value={supplier.id}>{supplier.name}</option>)}
            </select>

            <input name="description" required placeholder="الوصف مثال: صيانة ثلاجة / نقل بضاعة / كهرباء" style={{ padding: 12 }} />
            <input name="quantity" type="number" min="1" defaultValue="1" required placeholder="الكمية" style={{ padding: 12 }} />
            <input name="unitPrice" type="number" min="0" required placeholder="القيمة" style={{ padding: 12 }} />
            <input name="note" placeholder="ملاحظة" style={{ padding: 12 }} />

            <button disabled={saving} style={{ padding: 12 }}>
              {saving ? 'جاري التسجيل...' : 'تسجيل الشراء'}
            </button>
          </div>
        </form>
      ) : null}

      <section style={{ padding: 24, border: '1px solid #334155', borderRadius: 16, background: '#111827' }}>
        <h2>فواتير الشراء</h2>

        <div style={{ display: 'grid', gap: 8, marginTop: 16 }}>
          {documents.map((document) => (
            <div key={document.id} style={{ padding: 12, border: '1px solid #475569', borderRadius: 12, display: 'flex', justifyContent: 'space-between', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
              <div>
                <strong>{document.ref || document.id}</strong>
                <div style={{ color: '#94a3b8' }}>
                  المورد: {document.party?.name || 'مورد'} · الإجمالي: {money(document.grandTotal)} · الحالة: {document.status || 'مسجلة'}
                </div>
              </div>

              <button
                type="button"
                disabled={saving}
                onClick={() => void deletePurchase(document)}
                style={{ padding: '8px 12px', borderRadius: 10, border: '1px solid #7f1d1d', background: '#450a0a', color: '#fecaca', cursor: 'pointer' }}
              >
                حذف
              </button>
            </div>
          ))}

          {!documents.length ? <p style={{ color: '#94a3b8' }}>لا توجد فواتير شراء مسجلة.</p> : null}
        </div>
      </section>

      <section style={{ padding: 24, border: '1px solid #334155', borderRadius: 16, background: '#111827' }}>
        <h2>الموردون</h2>

        <div style={{ display: 'grid', gap: 8, marginTop: 16 }}>
          {suppliers.map((supplier) => (
            <div key={supplier.id} style={{ padding: 12, border: '1px solid #475569', borderRadius: 12, display: 'flex', justifyContent: 'space-between', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
              <div>
                <strong>{supplier.name}</strong>
                <div style={{ color: '#94a3b8' }}>
                  {supplier.phone || supplier.email || 'لا توجد بيانات اتصال'}
                </div>
              </div>

              <button
                type="button"
                disabled={saving}
                onClick={() => void deleteSupplier(supplier)}
                style={{ padding: '8px 12px', borderRadius: 10, border: '1px solid #7f1d1d', background: '#450a0a', color: '#fecaca', cursor: 'pointer' }}
              >
                حذف
              </button>
            </div>
          ))}

          {!suppliers.length ? <p style={{ color: '#94a3b8' }}>لا يوجد موردون مسجلون.</p> : null}
        </div>
      </section>
    </div>
  );
}
`);

console.log('DONE: purchases delete added');