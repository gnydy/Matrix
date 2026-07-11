const BASE = process.env.API_URL ?? 'http://127.0.0.1:4000/api/v1';
const email = process.env.API_EMAIL ?? 'admin@matrix.local';
const password = process.env.API_PASSWORD ?? 'Admin@2030';

async function req(path, options = {}) {
  const res = await fetch(`${BASE}${path}`, {
    ...options,
    headers: { 'Content-Type': 'application/json', ...(options.headers ?? {}) },
  });
  const text = await res.text();
  let json;
  try { json = text ? JSON.parse(text) : null; } catch { json = text; }
  if (!res.ok) throw new Error(`${options.method ?? 'GET'} ${path} => ${res.status}: ${text}`);
  return json;
}

function data(x) { return x?.data ?? x; }

const login = await req('/auth/login', { method: 'POST', body: JSON.stringify({ email, password }) });
const token = login.data?.token;
if (!token) throw new Error('Login succeeded but token is missing');
const auth = { Authorization: `Bearer ${token}` };
console.log('LOGIN OK');

await req('/erp/reports/dashboard', { headers: auth });
console.log('DASHBOARD OK');

const warehouses = data(await req('/erp/inventory/warehouses', { headers: auth }));
const warehouse = warehouses[0];
if (!warehouse) throw new Error('No warehouse. Run node scripts/api-ready-seed.mjs');
console.log('WAREHOUSE OK:', warehouse.id);

const stamp = Date.now();
const product = data(await req('/erp/inventory/products', {
  method: 'POST',
  headers: auth,
  body: JSON.stringify({ sku: `SMK-${stamp}`, name: `Smoke Product ${stamp}`, unit: 'pcs', type: 'stock', costPrice: 10, salePrice: 20, warehouseId: warehouse.id, initialStock: 5 }),
}));
console.log('PRODUCT OK:', product.id);

const customer = data(await req('/erp/sales/parties', {
  method: 'POST', headers: auth, body: JSON.stringify({ name: `Smoke Customer ${stamp}`, phone: '01000000000' }),
}));
console.log('CUSTOMER OK:', customer.id);

const sale = data(await req('/erp/sales/documents', {
  method: 'POST', headers: auth, body: JSON.stringify({ partyId: customer.id, type: 'invoice', lines: [{ productId: product.id, description: product.name, quantity: 2, unitPrice: 20 }] }),
}));
console.log('SALES DOC OK:', sale.id);

const posted = data(await req(`/erp/sales/documents/${sale.id}/post`, {
  method: 'PATCH', headers: auth, body: JSON.stringify({ warehouseId: warehouse.id }),
}));
console.log('SALES POST OK:', posted.status);

const receivables = data(await req('/erp/debts/receivables', { headers: auth }));
const rec = receivables.find((r) => r.salesDocId === sale.id) ?? receivables[0];
if (rec) {
  await req(`/erp/debts/receivables/${rec.id}/pay`, { method: 'PATCH', headers: auth, body: JSON.stringify({ amount: Number(rec.amount) - Number(rec.paidAmount) }) });
  console.log('RECEIVABLE PAYMENT OK');
}

await req('/erp/accounting/trial-balance', { headers: auth });
console.log('ACCOUNTING OK');
console.log('API READY SMOKE TEST PASSED');
