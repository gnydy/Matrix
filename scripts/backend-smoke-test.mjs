const API = process.env.MATRIX_API_URL ?? 'http://127.0.0.1:4000';
const email = process.env.MATRIX_EMAIL ?? 'admin@matrix.local';
const password = process.env.MATRIX_PASSWORD ?? 'Admin@2030';

async function req(method, path, token, body) {
  const res = await fetch(API + '/api/v1' + path, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: 'Bearer ' + token } : {}),
    },
    body: body === undefined ? undefined : JSON.stringify(body),
  });
  const text = await res.text();
  let data;
  try { data = text ? JSON.parse(text) : null; } catch { data = text; }
  if (!res.ok) {
    console.error(method, path, res.status, data);
    process.exit(1);
  }
  console.log('OK', method, path);
  return data;
}

const login = await req('POST', '/auth/login', '', { email, password });
const token = login.token ?? login.data?.token;
if (!token) throw new Error('No token in login response');

const wh = await req('POST', '/erp/inventory/warehouses', token, { name: 'Smoke Warehouse ' + Date.now(), code: 'SMK' + Date.now() });
const warehouseId = wh.data.id;
const product = await req('POST', '/erp/inventory/products', token, {
  sku: 'SMK-' + Date.now(),
  name: 'Smoke Product',
  unit: 'pcs',
  type: 'stock',
  costPrice: 50,
  salePrice: 100,
  warehouseId,
  initialStock: 10,
});
const productId = product.data.id;
const customer = await req('POST', '/erp/sales/parties', token, { name: 'Smoke Customer', phone: '01000000000' });
const invoice = await req('POST', '/erp/sales/documents', token, {
  partyId: customer.data.id,
  type: 'invoice',
  lines: [{ productId, description: 'Smoke Product', quantity: 2, unitPrice: 100 }],
});
await req('PATCH', '/erp/sales/documents/' + invoice.data.id + '/post', token, { warehouseId });
await req('GET', '/erp/reports/dashboard', token);
console.log('BACKEND SMOKE TEST PASSED');
