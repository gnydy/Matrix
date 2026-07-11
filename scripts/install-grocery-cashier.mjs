import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();

function write(rel, content) {
  const file = path.join(root, rel);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, content, 'utf8');
  console.log('updated:', rel);
}

const salesControllerPath = path.join(root, 'apps/api/src/erp/erp-sales.controller.ts');
let api = fs.readFileSync(salesControllerPath, 'utf8');

if (!api.includes("@Post('cashier-sale')")) {
  const marker = "  @Patch('documents/:id/post')";

  const method = `
  @Post('cashier-sale')
  async cashierSale(@CurrentUser() user: JwtPayload, @Body() body: unknown) {
    const company = await this.ctx.requireCompany(user);
    const input = (body ?? {}) as Record<string, any>;

    const warehouseId = String(input.warehouseId || '').trim();
    const paidAmount = Number(input.paidAmount || 0);
    const rawLines = Array.isArray(input.lines) ? input.lines : [];

    if (!warehouseId) {
      throw new BadRequestException('اختر المخزن');
    }

    if (rawLines.length === 0) {
      throw new BadRequestException('لا توجد منتجات في الفاتورة');
    }

    const result = await this.prisma.$transaction(async (tx) => {
      let cashParty = await tx.erpParty.findFirst({
        where: {
          companyId: company.id,
          deletedAt: null,
          name: 'عميل نقدي',
          type: { in: ['customer', 'both'] },
        },
      });

      if (!cashParty) {
        cashParty = await tx.erpParty.create({
          data: {
            companyId: company.id,
            type: 'customer',
            name: 'عميل نقدي',
            phone: null,
            email: null,
          },
        });
      }

      const lines = [];

      for (const rawLine of rawLines) {
        const productId = String(rawLine.productId || '').trim();
        const quantity = Number(rawLine.quantity || 0);
        const unitPrice = Number(rawLine.unitPrice || 0);

        if (!productId) {
          throw new BadRequestException('يوجد بند بدون منتج');
        }

        if (!Number.isFinite(quantity) || quantity <= 0) {
          throw new BadRequestException('يوجد بند بكمية غير صحيحة');
        }

        if (!Number.isFinite(unitPrice) || unitPrice <= 0) {
          throw new BadRequestException('يوجد بند بسعر غير صحيح');
        }

        const product = await tx.erpProduct.findFirst({
          where: {
            id: productId,
            companyId: company.id,
            deletedAt: null,
          },
        });

        if (!product) {
          throw new BadRequestException('منتج غير موجود في الفاتورة');
        }

        if (product.type === 'stock') {
          const level = await tx.erpStockLevel.findUnique({
            where: {
              productId_warehouseId: {
                productId: product.id,
                warehouseId,
              },
            },
          });

          const current = level ? Number(level.quantity) : 0;

          if (current < quantity) {
            throw new BadRequestException('رصيد المنتج ' + product.sku + ' غير كافٍ');
          }

          if (level) {
            await tx.erpStockLevel.update({
              where: { id: level.id },
              data: { quantity: current - quantity },
            });
          }
        }

        lines.push({
          productId: product.id,
          description: product.name,
          quantity,
          unitPrice,
          lineTotal: quantity * unitPrice,
        });
      }

      const subtotal = lines.reduce((sum, line) => sum + line.lineTotal, 0);
      const grandTotal = subtotal;
      const ref = this.ctx.nextRef('POS');

      const doc = await tx.erpSalesDocument.create({
        data: {
          companyId: company.id,
          partyId: cashParty.id,
          type: 'invoice',
          ref,
          note: 'بيع كاشير نقدي',
          subtotal,
          grandTotal,
          status: 'posted',
          lines: {
            create: lines,
          },
        },
        include: {
          party: true,
          lines: { include: { product: true } },
        },
      });

      for (const line of lines) {
        const product = await tx.erpProduct.findFirst({
          where: {
            id: line.productId,
            companyId: company.id,
          },
        });

        if (product?.type === 'stock') {
          await tx.erpStockMovement.create({
            data: {
              companyId: company.id,
              productId: line.productId,
              warehouseId,
              type: 'out',
              quantity: line.quantity,
              refType: 'cashier_sale',
              refId: doc.id,
              note: 'بيع كاشير ' + doc.ref,
              createdBy: user.sub,
            },
          });
        }
      }

      const cashAccount =
        (await this.account(tx, company.id, '1000')) ??
        (await this.account(tx, company.id, '1010')) ??
        (await this.account(tx, company.id, '1100'));

      const revenueAccount = await this.account(tx, company.id, '4000');

      if (cashAccount && revenueAccount && grandTotal > 0) {
        await tx.erpJournalEntry.create({
          data: {
            companyId: company.id,
            ref: 'JE-' + ref,
            status: 'posted',
            postedAt: new Date(),
            memo: 'بيع كاشير نقدي ' + ref,
            createdBy: user.sub,
            lines: {
              create: [
                {
                  accountId: cashAccount.id,
                  debit: grandTotal,
                  credit: 0,
                  memo: 'نقدية من بيع كاشير',
                },
                {
                  accountId: revenueAccount.id,
                  debit: 0,
                  credit: grandTotal,
                  memo: 'إيراد مبيعات',
                },
              ],
            },
          },
        }).catch(() => undefined);
      }

      await tx.erpWorkflowInstance.create({
        data: {
          companyId: company.id,
          module: 'sales',
          entityType: 'cashier_sale',
          entityId: doc.id,
          currentStep: 'posted',
          status: 'done',
          metadata: {
            ref: doc.ref,
            paidAmount,
            grandTotal,
            change: paidAmount - grandTotal,
          },
        },
      }).catch(() => undefined);

      return {
        ...doc,
        paidAmount,
        change: paidAmount - grandTotal,
      };
    });

    return { ok: true, data: result };
  }

`;

  if (!api.includes(marker)) {
    throw new Error("لم أجد @Patch('documents/:id/post') داخل erp-sales.controller.ts");
  }

  api = api.replace(marker, method + marker);
  fs.writeFileSync(salesControllerPath, api, 'utf8');
  console.log('updated:', salesControllerPath);
}

write('apps/web-erp/src/components/cashier-module-client.tsx', `
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

type CartLine = {
  productId: string;
  sku: string;
  name: string;
  quantity: number;
  unitPrice: number;
};

type CashierSale = {
  id: string;
  ref?: string | null;
  grandTotal?: string | number | null;
  status?: string | null;
  createdAt?: string | null;
  party?: { name?: string | null } | null;
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

function lineTotal(line: CartLine) {
  return line.quantity * line.unitPrice;
}

export function CashierModuleClient() {
  const [warehouses, setWarehouses] = useState<Warehouse[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [sales, setSales] = useState<CashierSale[]>([]);

  const [warehouseId, setWarehouseId] = useState('');
  const [search, setSearch] = useState('');
  const [quantity, setQuantity] = useState('1');
  const [paidAmount, setPaidAmount] = useState('');
  const [cart, setCart] = useState<CartLine[]>([]);

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(true);

  async function load() {
    setLoading(true);
    setError('');

    try {
      const [warehouseRows, productRows, salesRows] = await Promise.all([
        erpApi<Warehouse[]>('inventory/warehouses'),
        erpApi<Product[]>('inventory/products'),
        erpApi<CashierSale[]>('sales/documents').catch(() => []),
      ]);

      setWarehouses(warehouseRows);
      setProducts(productRows);
      setSales(salesRows);

      if (!warehouseId && warehouseRows[0]) {
        setWarehouseId(warehouseRows[0].id);
      }
    } catch (e) {
      setError(e instanceof Error ? e.message : 'تعذر تحميل بيانات الكاشير');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    void load();
  }, []);

  const filteredProducts = useMemo(() => {
    const q = search.trim().toLowerCase();

    if (!q) return products.slice(0, 30);

    return products
      .filter((product) => {
        const sku = String(product.sku || '').toLowerCase();
        const name = String(product.name || '').toLowerCase();

        return sku.includes(q) || name.includes(q);
      })
      .slice(0, 30);
  }, [products, search]);

  const cartTotal = cart.reduce((sum, line) => sum + lineTotal(line), 0);
  const paid = Number(paidAmount || 0);
  const remaining = cartTotal - paid;
  const change = paid - cartTotal;

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

    const alreadyInCart = cart
      .filter((line) => line.productId === product.id)
      .reduce((sum, line) => sum + line.quantity, 0);

    if (product.type !== 'service' && alreadyInCart + qty > available) {
      setError('الكمية غير كافية. المتاح في المخزن: ' + available);
      return;
    }

    const price = Number(product.salePrice || 0);

    if (!price || price <= 0) {
      setError('هذا المنتج ليس له سعر بيع صحيح');
      return;
    }

    setCart((current) => {
      const exists = current.find((line) => line.productId === product.id);

      if (exists) {
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
    const qty = Number(value || 1);

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

  function clearSale() {
    setCart([]);
    setSearch('');
    setQuantity('1');
    setPaidAmount('');
    setError('');
    setMessage('');
  }

  async function submitSale() {
    if (!warehouseId) {
      setError('اختر المخزن');
      return;
    }

    if (!cart.length) {
      setError('أضف منتجات للفاتورة');
      return;
    }

    if (paid < cartTotal) {
      setError('المبلغ المدفوع أقل من إجمالي الفاتورة');
      return;
    }

    setSaving(true);
    setMessage('');
    setError('');

    try {
      const created = await erpApi<CashierSale & { change?: number }>('sales/cashier-sale', {
        method: 'POST',
        body: JSON.stringify({
          warehouseId,
          paidAmount: paid,
          lines: cart.map((line) => ({
            productId: line.productId,
            quantity: line.quantity,
            unitPrice: line.unitPrice,
          })),
        }),
      });

      setMessage('تم تسجيل البيع. رقم الفاتورة: ' + (created.ref || created.id) + ' — الباقي: ' + money(created.change || 0));
      setCart([]);
      setSearch('');
      setQuantity('1');
      setPaidAmount('');
      await load();
    } catch (e) {
      setError(e instanceof Error ? e.message : 'تعذر تسجيل البيع');
    } finally {
      setSaving(false);
    }
  }

  function submitSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (filteredProducts[0]) {
      addProduct(filteredProducts[0]);
    } else {
      setError('لا يوجد منتج بهذا الكود أو الاسم');
    }
  }

  return (
    <div style={{ display: 'grid', gap: 20 }}>
      <section style={{ padding: 20, border: '1px solid #334155', borderRadius: 16, background: '#111827' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
          <div>
            <h1 style={{ fontSize: 30, fontWeight: 900, marginBottom: 8 }}>كاشير البقالة</h1>
            <p style={{ color: '#cbd5e1', margin: 0 }}>
              سجل ما أخذه العميل، احسب الإجمالي، ثم احفظ البيع. لا تحتاج لكتابة اسم العميل.
            </p>
          </div>

          <button
            type="button"
            onClick={clearSale}
            style={{ padding: '12px 16px', borderRadius: 12, border: '1px solid #475569', background: '#0f172a', color: '#e5e7eb', fontWeight: 800, cursor: 'pointer' }}
          >
            فاتورة جديدة
          </button>
        </div>

        {loading ? <p style={{ marginTop: 16 }}>جاري تحميل الكاشير...</p> : null}
        {message ? <p style={{ marginTop: 16, color: '#22c55e' }}>{message}</p> : null}
        {error ? <p style={{ marginTop: 16, color: '#ef4444' }}>{error}</p> : null}
      </section>

      <section style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 20, alignItems: 'start' }}>
        <div style={{ display: 'grid', gap: 20 }}>
          <section style={{ padding: 20, border: '1px solid #334155', borderRadius: 16, background: '#111827' }}>
            <h2>اختيار المخزن والمنتجات</h2>

            <div style={{ display: 'grid', gap: 12, marginTop: 16 }}>
              <select value={warehouseId} onChange={(event) => setWarehouseId(event.target.value)} style={{ padding: 14, fontSize: 16 }}>
                <option value="">اختر المخزن</option>
                {warehouses.map((warehouse) => (
                  <option key={warehouse.id} value={warehouse.id}>
                    {warehouse.name}
                  </option>
                ))}
              </select>

              <form onSubmit={submitSearch} style={{ display: 'grid', gridTemplateColumns: '1fr 110px 130px', gap: 8 }}>
                <input
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  autoFocus
                  placeholder="اكتب كود المنتج أو اسمه"
                  style={{ padding: 14, fontSize: 16 }}
                />

                <input
                  value={quantity}
                  onChange={(event) => setQuantity(event.target.value)}
                  type="number"
                  min="1"
                  placeholder="الكمية"
                  style={{ padding: 14, fontSize: 16 }}
                />

                <button type="submit" style={{ padding: 14, fontWeight: 800 }}>
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
                    padding: 12,
                    border: '1px solid #475569',
                    borderRadius: 12,
                    background: '#0f172a',
                    color: '#e5e7eb',
                    textAlign: 'right',
                    cursor: 'pointer',
                  }}
                >
                  <strong>{product.sku || 'بدون كود'} — {product.name}</strong>
                  <div style={{ color: '#94a3b8' }}>
                    سعر: {money(product.salePrice)} · المتاح: {warehouseId ? stockInWarehouse(product, warehouseId) : totalStock(product)}
                  </div>
                </button>
              ))}

              {!filteredProducts.length ? <p style={{ color: '#94a3b8' }}>لا توجد منتجات مطابقة.</p> : null}
            </div>
          </section>

          <section style={{ padding: 20, border: '1px solid #334155', borderRadius: 16, background: '#111827' }}>
            <h2>آخر عمليات البيع</h2>

            <div style={{ display: 'grid', gap: 8, marginTop: 16 }}>
              {sales.slice(0, 10).map((sale) => (
                <div key={sale.id} style={{ padding: 12, border: '1px solid #475569', borderRadius: 12 }}>
                  <strong>{sale.ref || sale.id}</strong>
                  <div style={{ color: '#94a3b8' }}>
                    {money(sale.grandTotal)} · {sale.status || 'مسجلة'}
                  </div>
                </div>
              ))}

              {!sales.length ? <p style={{ color: '#94a3b8' }}>لا توجد مبيعات بعد.</p> : null}
            </div>
          </section>
        </div>

        <aside style={{ display: 'grid', gap: 20, position: 'sticky', top: 16 }}>
          <section style={{ padding: 20, border: '1px solid #334155', borderRadius: 16, background: '#111827' }}>
            <h2>الفاتورة الحالية</h2>

            <div style={{ display: 'grid', gap: 8, marginTop: 16 }}>
              {cart.map((line) => (
                <div key={line.productId} style={{ padding: 12, border: '1px solid #475569', borderRadius: 12 }}>
                  <strong>{line.name}</strong>
                  <div style={{ color: '#94a3b8', marginTop: 4 }}>{line.sku || 'بدون كود'}</div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr auto', gap: 8, marginTop: 10, alignItems: 'center' }}>
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

                    <button
                      type="button"
                      onClick={() => removeLine(line.productId)}
                      style={{ padding: 10, borderRadius: 10, border: '1px solid #7f1d1d', background: '#450a0a', color: '#fecaca', cursor: 'pointer' }}
                    >
                      حذف
                    </button>
                  </div>

                  <div style={{ marginTop: 8 }}>
                    <strong>الإجمالي: {money(lineTotal(line))}</strong>
                  </div>
                </div>
              ))}

              {!cart.length ? <p style={{ color: '#94a3b8' }}>لم يتم إضافة منتجات بعد.</p> : null}
            </div>
          </section>

          <section style={{ padding: 20, border: '1px solid #334155', borderRadius: 16, background: '#111827' }}>
            <h2>المحاسبة</h2>

            <div style={{ display: 'grid', gap: 12, marginTop: 16 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 22 }}>
                <span>الإجمالي</span>
                <strong>{money(cartTotal)}</strong>
              </div>

              <input
                value={paidAmount}
                onChange={(event) => setPaidAmount(event.target.value)}
                type="number"
                min="0"
                placeholder="المبلغ المدفوع"
                style={{ padding: 14, fontSize: 18 }}
              />

              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>المتبقي</span>
                <strong style={{ color: remaining > 0 ? '#ef4444' : '#22c55e' }}>{money(Math.max(remaining, 0))}</strong>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>الباقي للعميل</span>
                <strong style={{ color: change >= 0 ? '#22c55e' : '#94a3b8' }}>{money(Math.max(change, 0))}</strong>
              </div>

              <button
                type="button"
                disabled={saving || !cart.length}
                onClick={() => void submitSale()}
                style={{
                  padding: 16,
                  borderRadius: 12,
                  border: 0,
                  background: saving || !cart.length ? '#475569' : '#2563eb',
                  color: 'white',
                  fontWeight: 900,
                  fontSize: 18,
                  cursor: saving || !cart.length ? 'not-allowed' : 'pointer',
                }}
              >
                {saving ? 'جاري تسجيل البيع...' : 'تسجيل البيع'}
              </button>
            </div>
          </section>
        </aside>
      </section>
    </div>
  );
}
`);

write('apps/web-erp/src/app/(erp)/cashier/page.tsx', `
import { redirect } from 'next/navigation';
import { ErpShell } from '@/components/erp-shell';
import { CashierModuleClient } from '@/components/cashier-module-client';
import { getSession } from '@/lib/auth';

export default async function CashierPage() {
  const session = await getSession();

  if (!session) {
    redirect('/login');
  }

  return (
    <ErpShell userName={session.name}>
      <CashierModuleClient />
    </ErpShell>
  );
}
`);

const shellPath = path.join(root, 'apps/web-erp/src/components/erp-shell.tsx');
if (fs.existsSync(shellPath)) {
  let shell = fs.readFileSync(shellPath, 'utf8');

  if (!shell.includes("href: '/cashier'")) {
    shell = shell.replace(
      "const navItems = [",
      "const navItems = [\n  { href: '/cashier', label: 'الكاشير' },",
    );
  }

  fs.writeFileSync(shellPath, shell, 'utf8');
  console.log('updated:', shellPath);
}

console.log('DONE: grocery cashier installed');
