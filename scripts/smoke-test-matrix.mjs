/**
 * فحص شامل — Matrix (موقع + API + Control Center)
 */
import http from 'node:http';

const MARKETING = process.env.MATRIX_MARKETING_URL ?? 'http://127.0.0.1:3010';
const PLATFORM = process.env.MATRIX_PLATFORM_URL ?? 'http://127.0.0.1:3001';
const API = process.env.MATRIX_API_URL ?? 'http://127.0.0.1:4000';
const GATEWAY = process.env.MATRIX_GATEWAY_URL ?? 'http://127.0.0.1:8080';
const ERP = process.env.MATRIX_ERP_URL ?? 'http://127.0.0.1:3002';

const ADMIN_EMAIL = 'admin@matrix.local';
const ADMIN_PASSWORD = 'matrix_admin_change_me';

const marketingRoutes = [
  '/',
  '/about',
  '/services',
  '/services/erp',
  '/services/custom',
  '/services/web-mobile',
  '/packages',
  '/calculator',
  '/request',
  '/contact',
  '/faq',
  '/privacy',
  '/terms',
  '/robots.txt',
  '/sitemap.xml',
];

const platformRoutes = [
  '/control/login',
  '/control',
  '/control/leads',
  '/control/customers',
  '/control/quotes',
  '/control/projects',
  '/control/payments',
  '/control/users',
  '/control/roles',
  '/control/settings',
  '/control/catalog',
  '/control/login-audit',
  '/control/logs',
  '/control/visitors',
  '/control/events',
  '/control/abandoned',
];

function request(url, options = {}) {
  return new Promise((resolve, reject) => {
    const parsed = new URL(url);
    const req = http.request(
      {
        hostname: parsed.hostname,
        port: parsed.port,
        path: parsed.pathname + parsed.search,
        method: options.method ?? 'GET',
        headers: options.headers ?? {},
        timeout: options.timeout ?? 120000,
      },
      (res) => {
        const chunks = [];
        res.on('data', (c) => chunks.push(c));
        res.on('end', () => {
          resolve({
            status: res.statusCode ?? 0,
            headers: res.headers,
            body: Buffer.concat(chunks).toString('utf8'),
          });
        });
      },
    );
    req.on('error', reject);
    req.on('timeout', () => {
      req.destroy();
      reject(new Error(`timeout: ${url}`));
    });
    if (options.body) req.write(options.body);
    req.end();
  });
}

function postJson(url, data, headers = {}) {
  const body = JSON.stringify(data);
  return request(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Content-Length': String(Buffer.byteLength(body)), ...headers },
    body,
  });
}

async function checkRoute(base, path, expect = (s) => s >= 200 && s < 400) {
  const url = `${base}${path}`;
  try {
    const res = await request(url);
    const ok = expect(res.status);
    return { path, status: res.status, ok, error: ok ? null : `unexpected ${res.status}` };
  } catch (e) {
    return { path, status: 0, ok: false, error: e.message };
  }
}

async function main() {
  const failures = [];
  console.log('Matrix smoke test\n');

  // API health
  try {
    const health = await request(`${API}/api/v1/health`);
    const json = JSON.parse(health.body);
    if (health.status !== 200 || !json.ok) {
      failures.push({ area: 'api', path: '/api/v1/health', error: `status=${health.status} body=${health.body.slice(0, 120)}` });
    } else {
      console.log('✓ API health');
    }
  } catch (e) {
    failures.push({ area: 'api', path: '/api/v1/health', error: e.message });
  }

  // Marketing pages
  for (const path of marketingRoutes) {
    const r = await checkRoute(MARKETING, path);
    console.log(r.ok ? '✓' : '✗', `marketing ${path} (${r.status})`);
    if (!r.ok) failures.push({ area: 'marketing', path, error: r.error });
  }

  // Gateway marketing
  const gwHome = await checkRoute(GATEWAY, '/');
  console.log(gwHome.ok ? '✓' : '✗', `gateway / (${gwHome.status})`);
  if (!gwHome.ok) failures.push({ area: 'gateway', path: '/', error: gwHome.error });

  const erpHome = await checkRoute(ERP, '/erp');
  console.log(erpHome.ok ? '✓' : '✗', `erp home (${erpHome.status})`);
  if (!erpHome.ok) failures.push({ area: 'erp', path: '/erp', error: erpHome.error });

  for (const slug of ['inventory', 'sales', 'accounting']) {
    const r = await checkRoute(ERP, `/erp/${slug}`);
    console.log(r.ok ? '✓' : '✗', `erp /${slug} (${r.status})`);
    if (!r.ok) failures.push({ area: 'erp', path: `/erp/${slug}`, error: r.error });
  }

  // Platform public login
  const loginPage = await checkRoute(PLATFORM, '/control/login');
  console.log(loginPage.ok ? '✓' : '✗', `platform login (${loginPage.status})`);
  if (!loginPage.ok) failures.push({ area: 'platform', path: '/control/login', error: loginPage.error });

  // API login
  let token = null;
  try {
    const login = await postJson(`${API}/api/v1/auth/login`, {
      email: ADMIN_EMAIL,
      password: ADMIN_PASSWORD,
    });
    const json = JSON.parse(login.body);
    if (login.status !== 200 && login.status !== 201) {
      failures.push({ area: 'api', path: '/api/v1/auth/login', error: login.body.slice(0, 200) });
    } else if (!json.data?.token) {
      failures.push({ area: 'api', path: '/api/v1/auth/login', error: 'no token' });
    } else {
      token = json.data.token;
      console.log('✓ API login');
    }
  } catch (e) {
    failures.push({ area: 'api', path: '/api/v1/auth/login', error: e.message });
  }

  // Platform session login
  let sessionCookie = null;
  try {
    const platLogin = await postJson(`${PLATFORM}/control/api/auth/login`, {
      email: ADMIN_EMAIL,
      password: ADMIN_PASSWORD,
    });
    if (platLogin.status !== 200) {
      failures.push({ area: 'platform', path: '/control/api/auth/login', error: platLogin.body.slice(0, 200) });
    } else {
      const setCookie = platLogin.headers['set-cookie'];
      const raw = Array.isArray(setCookie) ? setCookie.join(';') : setCookie ?? '';
      const match = raw.match(/matrix_admin_session=([^;]+)/);
      sessionCookie = match?.[1] ?? null;
      console.log(sessionCookie ? '✓ platform session login' : '✗ platform session cookie missing');
      if (!sessionCookie) failures.push({ area: 'platform', path: '/control/api/auth/login', error: 'no cookie' });
    }
  } catch (e) {
    failures.push({ area: 'platform', path: '/control/api/auth/login', error: e.message });
  }

  // Protected platform routes (with cookie — skip if login failed)
  if (!sessionCookie) {
    console.log('⊘ skipping protected platform routes (no session)');
  } else {
    const cookieHeader = { Cookie: `matrix_admin_session=${sessionCookie}` };
    for (const path of platformRoutes.filter((p) => p !== '/control/login')) {
      try {
        const res = await request(`${PLATFORM}${path}`, { headers: cookieHeader });
        const ok = res.status >= 200 && res.status < 400;
        console.log(ok ? '✓' : '✗', `platform ${path} (${res.status})`);
        if (!ok) failures.push({ area: 'platform', path, error: `status ${res.status}` });
      } catch (e) {
        failures.push({ area: 'platform', path, error: e.message });
        console.log('✗', path, e.message);
      }
    }
  }

  // Lead submission
  try {
    const lead = await postJson(`${MARKETING}/api/public/leads`, {
      name: 'Smoke Test',
      email: 'smoke@test.local',
      phone: '0500000000',
      source: 'request',
      requestType: 'erp',
      message: 'automated smoke test',
    });
    const json = JSON.parse(lead.body);
    const ok = lead.status === 200 || lead.status === 201;
    console.log(ok ? '✓' : '✗', `lead API (${lead.status}) ref=${json.ref ?? '—'}`);
    if (!ok) failures.push({ area: 'marketing', path: '/api/public/leads', error: lead.body.slice(0, 200) });
  } catch (e) {
    failures.push({ area: 'marketing', path: '/api/public/leads', error: e.message });
  }

  // API me with token
  if (token) {
    try {
      const me = await request(`${API}/api/v1/auth/me`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const ok = me.status === 200;
      console.log(ok ? '✓' : '✗', `API /auth/me (${me.status})`);
      if (!ok) failures.push({ area: 'api', path: '/api/v1/auth/me', error: me.body.slice(0, 120) });
    } catch (e) {
      failures.push({ area: 'api', path: '/api/v1/auth/me', error: e.message });
    }
  }

  console.log('');
  if (failures.length) {
    console.log(`FAILED: ${failures.length} issue(s)`);
    for (const f of failures) console.log(`  - [${f.area}] ${f.path}: ${f.error}`);
    process.exit(1);
  }
  console.log('ALL CHECKS PASSED');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
