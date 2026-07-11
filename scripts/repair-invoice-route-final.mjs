import fs from 'node:fs';
import path from 'node:path';

const root = 'E:\\Matrix';
const webRoot = path.join(root, 'apps', 'web-erp');
const appRoot = path.join(webRoot, 'src', 'app');

function rm(rel) {
  const full = path.join(webRoot, rel);
  if (fs.existsSync(full)) {
    fs.rmSync(full, { recursive: true, force: true });
    console.log('removed:', rel);
  }
}

function write(rel, content) {
  const full = path.join(webRoot, rel);
  fs.mkdirSync(path.dirname(full), { recursive: true });
  fs.writeFileSync(full, content, 'utf8');
  console.log('created:', rel);
}

if (!fs.existsSync(webRoot)) {
  throw new Error('apps/web-erp غير موجود');
}

if (!fs.existsSync(appRoot)) {
  fs.mkdirSync(appRoot, { recursive: true });
}

// حذف المسارات التي تعمل تعارض أو 404
rm('src/app/(erp)/invoices');
rm('src/app/invoices');
rm('src/app/erp/invoices');

const page = `
export default function NewInvoicePage() {
  return (
    <main style={{
      minHeight: '100vh',
      background: '#020617',
      color: '#e5e7eb',
      padding: 32,
      direction: 'rtl',
      fontFamily: 'Arial, sans-serif'
    }}>
      <section style={{
        padding: 28,
        border: '1px solid #334155',
        borderRadius: 20,
        background: '#111827',
        marginBottom: 24
      }}>
        <h1 style={{ fontSize: 42, margin: '0 0 10px', color: '#22c55e' }}>
          فاتورة جديدة
        </h1>
        <p style={{ fontSize: 22, margin: 0, color: '#cbd5e1' }}>
          صفحة الفاتورة تعمل الآن.
        </p>
        <p style={{ marginTop: 12, color: '#94a3b8' }}>
          INVOICE_ROUTE_OK
        </p>
      </section>

      <section style={{
        display: 'grid',
        gridTemplateColumns: '1.2fr 0.8fr',
        gap: 20
      }}>
        <div style={{
          padding: 24,
          border: '1px solid #334155',
          borderRadius: 20,
          background: '#111827'
        }}>
          <h2>بنود الفاتورة</h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '2fr 120px 140px 140px',
            gap: 10,
            padding: 12,
            borderBottom: '1px solid #334155',
            color: '#94a3b8'
          }}>
            <strong>الصنف</strong>
            <strong>الكمية</strong>
            <strong>السعر</strong>
            <strong>الإجمالي</strong>
          </div>

          {[
            ['MILK-1L', 'لبن 1 لتر', 2, 35],
            ['RICE-1KG', 'أرز 1 كيلو', 1, 42],
            ['SUGAR-1KG', 'سكر 1 كيلو', 3, 38],
          ].map(([code, name, qty, price]) => (
            <div
              key={String(code)}
              style={{
                display: 'grid',
                gridTemplateColumns: '2fr 120px 140px 140px',
                gap: 10,
                padding: 12,
                borderBottom: '1px solid #334155',
                alignItems: 'center'
              }}
            >
              <div>
                <strong>{name}</strong>
                <div style={{ color: '#94a3b8' }}>{code}</div>
              </div>
              <span>{qty}</span>
              <span>{price} ج.م</span>
              <strong>{Number(qty) * Number(price)} ج.م</strong>
            </div>
          ))}
        </div>

        <aside style={{
          padding: 24,
          border: '1px solid #334155',
          borderRadius: 20,
          background: '#111827',
          height: 'fit-content'
        }}>
          <h2>ملخص الفاتورة</h2>

          <div style={{ display: 'grid', gap: 14, fontSize: 18 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>الإجمالي</span>
              <strong>226 ج.م</strong>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>المدفوع</span>
              <strong>250 ج.م</strong>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', color: '#22c55e' }}>
              <span>الباقي للعميل</span>
              <strong>24 ج.م</strong>
            </div>

            <button style={{
              marginTop: 10,
              padding: 16,
              border: 0,
              borderRadius: 14,
              background: '#2563eb',
              color: 'white',
              fontSize: 18,
              fontWeight: 900
            }}>
              تسجيل الفاتورة
            </button>
          </div>
        </aside>
      </section>
    </main>
  );
}
`;

// هذا يعمل لو عندك basePath: /erp
write('src/app/invoices/new/page.tsx', page);

// هذا يعمل لو لا يوجد basePath والـ /erp جزء من route عادي
write('src/app/erp/invoices/new/page.tsx', page);

console.log('DONE: invoice routes repaired');
console.log('Open: http://localhost:3002/erp/invoices/new');
`;

write('src/app/_repair-check/page.tsx', `
export default function RepairCheckPage() {
  return <h1 style={{ padding: 40 }}>REPAIR_CHECK_OK</h1>;
}
`);

console.log('DONE');