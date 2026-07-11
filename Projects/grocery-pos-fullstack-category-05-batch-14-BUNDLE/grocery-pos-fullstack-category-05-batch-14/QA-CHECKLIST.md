# QA Checklist

- [ ] No `next.config.ts` remains.
- [ ] `npm install --include=optional --legacy-peer-deps --no-audit --no-fund` succeeds in each template.
- [ ] `node_modules/next` exists.
- [ ] `node_modules/.bin/next.cmd` exists on Windows.
- [ ] `/api/health` returns JSON.
- [ ] `/api/products` returns product data.
- [ ] `/api/sales` accepts POST with items.
- [ ] Home POS UI is responsive.
- [ ] Navigation pages render.
- [ ] Build passes after dependencies are installed.
