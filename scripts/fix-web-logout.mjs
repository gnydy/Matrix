import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();

function write(rel, content) {
  const file = path.join(root, rel);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, content, 'utf8');
  console.log('updated:', rel);
}

function walk(dir, out = []) {
  if (!fs.existsSync(dir)) return out;

  for (const item of fs.readdirSync(dir, { withFileTypes: true })) {
    if (item.name === 'node_modules' || item.name === '.next' || item.name === 'dist') continue;

    const full = path.join(dir, item.name);

    if (item.isDirectory()) {
      walk(full, out);
    } else if (/\.(ts|tsx)$/.test(item.name)) {
      out.push(full);
    }
  }

  return out;
}

const cookieNames = new Set([
  'session',
  'token',
  'accessToken',
  'matrix_session',
  'matrix_token',
  'erp_session',
  'erp_token',
  'allinall_session',
  'aia_session',
]);

const srcDir = path.join(root, 'apps', 'web-erp', 'src');

for (const file of walk(srcDir)) {
  const code = fs.readFileSync(file, 'utf8');

  const patterns = [
    /cookies\(\)\.get\(\s*['"`]([^'"`]+)['"`]/g,
    /cookies\(\)\.set\(\s*['"`]([^'"`]+)['"`]/g,
    /cookieStore\.get\(\s*['"`]([^'"`]+)['"`]/g,
    /cookieStore\.set\(\s*['"`]([^'"`]+)['"`]/g,
    /\.cookies\.set\(\s*['"`]([^'"`]+)['"`]/g,
    /[A-Z0-9_]*COOKIE[A-Z0-9_]*\s*=\s*['"`]([^'"`]+)['"`]/g,
    /[A-Z0-9_]*SESSION[A-Z0-9_]*\s*=\s*['"`]([^'"`]+)['"`]/g,
  ];

  for (const pattern of patterns) {
    let match;

    while ((match = pattern.exec(code))) {
      if (match[1] && !match[1].includes(' ')) {
        cookieNames.add(match[1]);
      }
    }
  }
}

const cookiesArray = JSON.stringify([...cookieNames], null, 2);

const logoutRoute = `
import { NextRequest, NextResponse } from 'next/server';

const COOKIE_NAMES = ${cookiesArray};

function clearAuthCookies(response: NextResponse) {
  for (const name of COOKIE_NAMES) {
    const safeName = encodeURIComponent(name);

    response.headers.append(
      'Set-Cookie',
      safeName + '=; Path=/; Max-Age=0; HttpOnly; SameSite=Lax',
    );

    response.headers.append(
      'Set-Cookie',
      safeName + '=; Path=/erp; Max-Age=0; HttpOnly; SameSite=Lax',
    );
  }

  return response;
}

export async function GET(request: NextRequest) {
  const response = NextResponse.redirect(new URL('/erp/login', request.url));

  return clearAuthCookies(response);
}

export async function POST() {
  const response = NextResponse.json({ ok: true });

  return clearAuthCookies(response);
}
`;

write('apps/web-erp/src/app/(erp)/logout/route.ts', logoutRoute);
write('apps/web-erp/src/app/api/auth/logout/route.ts', logoutRoute);

const shellPath = path.join(root, 'apps', 'web-erp', 'src', 'components', 'erp-shell.tsx');

if (fs.existsSync(shellPath)) {
  let shell = fs.readFileSync(shellPath, 'utf8');

  shell = shell
    .replaceAll('href="/api/auth/logout"', 'href="/logout"')
    .replaceAll("href='/api/auth/logout'", "href='/logout'")
    .replaceAll('href="/erp/api/auth/logout"', 'href="/logout"')
    .replaceAll("href='/erp/api/auth/logout'", "href='/logout'")
    .replaceAll('href="/erp/logout"', 'href="/logout"')
    .replaceAll("href='/erp/logout'", "href='/logout'");

  fs.writeFileSync(shellPath, shell, 'utf8');
  console.log('checked:', 'apps/web-erp/src/components/erp-shell.tsx');
}

console.log('DONE: logout fixed');
console.log('Detected cookies:', [...cookieNames].join(', '));