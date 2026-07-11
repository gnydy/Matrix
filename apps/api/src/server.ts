import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const app = express();

const PORT = Number(process.env.PORT || 4000);
const JWT_SECRET = process.env.JWT_SECRET || 'dev_secret_change_me';

app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ limit: '2mb' }));

function ok(data: unknown) {
  return { ok: true, data };
}

function toNumber(value: unknown, fallback = 0) {
  const number = Number(value ?? fallback);
  return Number.isFinite(number) ? number : fallback;
}

function text(value: unknown) {
  return String(value ?? '').trim();
}

function ref(prefix: string) {
  const stamp = new Date().toISOString().replace(/[-:TZ.]/g, '').slice(0, 14);
  const random = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `${prefix}-${stamp}-${random}`;
}

function signToken(user: any) {
  return jwt.sign(
    {
      email: user.email,
      name: user.name,
      tenantId: user.companyId,
      roles: [user.role || 'owner'],
      permissions: ['*'],
    },
    JWT_SECRET,
    { subject: user.id, expiresIn: '7d' },
  );
}

async function auth(req: any, res: any, next: any) {
  const header = String(req.headers.authorization || '');
  const token = header.startsWith('Bearer ') ? header.slice(7) : '';

  if (!token) {
    res.status(401).json({ ok: false, error: 'Unauthorized' });
    return;
  }

  try {
    const payload = jwt.verify(token, JWT_SECRET) as any;
    const user = await prisma.user.findFirst({
      where: { id: String(payload.sub), status: 'active' },
      include: { company: true },
    });

    if (!user) {
      res.status(401).json({ ok: false, error: 'Unauthorized' });
      return;
    }

    req.user = user;
    req.companyId = user.companyId;
    next();
  } catch {
    res.status(401).json({ ok: false, error: 'Unauthorized' });
  }
}

function asyncRoute(handler: any) {
  return (req: any, res: any, next: any) => Promise.resolve(handler(req, res, next)).catch(next);
}

async function account(tx: any, companyId: string, code: string) {
  return tx.erpAccount.findFirst({ where: { companyId, code, isActive: true } });
}

async function addJournal(tx: any, companyId: string, userId: string, memo: string, lines: Array<{ accountCode: string; debit?: number; credit?: number; memo?: string }>, prefix = 'JE') {
  const debit = lines.reduce((sum, line) => sum + toNumber(line.debit), 0);
  const credit = lines.reduce((sum, line) => sum + toNumber(line.credit), 0);

  if (Math.abs(debit - credit) > 0.001 || debit <= 0) return null;

  const resolved = [];

  for (const line of lines) {
    const acc = await account(tx, companyId, line.accountCode);
    if (!acc) return null;
    resolved.push({ accountId: acc.id, debit: toNumber(line.debit), credit: toNumber(line.credit), memo: line.memo });
  }

  return tx.erpJournalEntry.create({
    data: {
      companyId,
      ref: ref(prefix),
      status: 'posted',
      postedAt: new Date(),
      memo,
      createdBy: userId,
      lines: { create: resolved },
    },
    include: { lines: { include: { account: true } } },
  });
}

async function ensureStockLevel(tx: any, companyId: string, productId: string, warehouseId: string) {
  let level = await tx.erpStockLevel.findUnique({ where: { productId_warehouseId: { productId, warehouseId } } });
  if (!level) {
    level = await tx.erpStockLevel.create({ data: { companyId, productId, warehouseId, quantity: 0 } });
  }
  return level;
}

async function changeStock(tx: any, args: { companyId: string; productId: string; warehouseId: string; quantity: number; direction: 'in' | 'out'; refType: string; refId: string; note?: string; userId?: string }) {
  const product = await tx.erpProduct.findFirst({ where: { id: args.productId, companyId: args.companyId, deletedAt: null } });
  if (!product) throw new Error('Ù…Ù†ØªØ¬ ØºÙŠØ± Ù…ÙˆØ¬ÙˆØ¯');
  if (product.type !== 'stock') return;

  const level = await ensureStockLevel(tx, args.companyId, args.productId, args.warehouseId);
  const current = toNumber(level.quantity);
  const qty = toNumber(args.quantity);
  const next = args.direction === 'in' ? current + qty : current - qty;

  if (next < 0) {
    throw new Error(`Ø±ØµÙŠØ¯ Ø§Ù„Ù…Ù†ØªØ¬ ${product.sku} ØºÙŠØ± ÙƒØ§ÙÙ. Ø§Ù„Ù…ØªØ§Ø­: ${current}`);
  }

  await tx.erpStockLevel.update({ where: { id: level.id }, data: { quantity: next } });
  await tx.erpStockMovement.create({
    data: {
      companyId: args.companyId,
      productId: args.productId,
      warehouseId: args.warehouseId,
      type: args.direction,
      quantity: qty,
      refType: args.refType,
      refId: args.refId,
      note: args.note,
      createdBy: args.userId,
    },
  });
}

async function ensureCashParty(tx: any, companyId: string) {
  let party = await tx.erpParty.findFirst({ where: { companyId, deletedAt: null, name: 'Ø¹Ù…ÙŠÙ„ Ù†Ù‚Ø¯ÙŠ', type: { in: ['customer', 'both'] } } });
  if (!party) {
    party = await tx.erpParty.create({ data: { companyId, type: 'customer', name: 'Ø¹Ù…ÙŠÙ„ Ù†Ù‚Ø¯ÙŠ' } });
  }
  return party;
}

function lineInput(rawLines: any[]) {
  return rawLines.map((line) => {
    const quantity = toNumber(line.quantity, 1);
    const unitPrice = toNumber(line.unitPrice, 0);
    const description = text(line.description) || 'Ø¨Ù†Ø¯';

    if (quantity <= 0) throw new Error('ÙŠÙˆØ¬Ø¯ Ø¨Ù†Ø¯ Ø¨ÙƒÙ…ÙŠØ© ØºÙŠØ± ØµØ­ÙŠØ­Ø©');
    if (unitPrice < 0) throw new Error('ÙŠÙˆØ¬Ø¯ Ø¨Ù†Ø¯ Ø¨Ø³Ø¹Ø± ØºÙŠØ± ØµØ­ÙŠØ­');

    return {
      productId: text(line.productId) || null,
      description,
      quantity,
      unitPrice,
      lineTotal: quantity * unitPrice,
    };
  });
}

app.get('/api/v1/health', (_req, res) => {
  res.json(ok({ status: 'ok', service: 'matrix-api', time: new Date().toISOString() }));
});

app.post('/api/v1/auth/login', asyncRoute(async (req: any, res: any) => {
  const email = text(req.body.email).toLowerCase();
  const password = String(req.body.password || '');

  const user = await prisma.user.findFirst({ where: { email, status: 'active' }, include: { company: true } });
  if (!user) {
    res.status(401).json({ ok: false, error: 'Ø¨ÙŠØ§Ù†Ø§Øª Ø§Ù„Ø¯Ø®ÙˆÙ„ ØºÙŠØ± ØµØ­ÙŠØ­Ø©' });
    return;
  }

  const valid = await bcrypt.compare(password, user.passwordHash);
  if (!valid) {
    res.status(401).json({ ok: false, error: 'Ø¨ÙŠØ§Ù†Ø§Øª Ø§Ù„Ø¯Ø®ÙˆÙ„ ØºÙŠØ± ØµØ­ÙŠØ­Ø©' });
    return;
  }

  const token = signToken(user);
  res.json(ok({
    token,
    user: {
      id: user.id,
      email: user.email,
      name: user.name,
      tenantId: user.companyId,
      roles: [user.role || 'owner'],
      permissions: ['*'],
    },
  }));
}));

app.use('/api/v1/erp', auth);

app.get('/api/v1/erp/dashboard', asyncRoute(async (req: any, res: any) => {
  const companyId = req.companyId;
  const [products, stock, sales, purchases, employees, receivables, payables] = await Promise.all([
    prisma.erpProduct.count({ where: { companyId, deletedAt: null } }),
    prisma.erpStockLevel.aggregate({ where: { companyId }, _sum: { quantity: true } }),
    prisma.erpSalesDocument.aggregate({ where: { companyId, status: 'posted' }, _sum: { grandTotal: true }, _count: true }),
    prisma.erpPurchaseDocument.aggregate({ where: { companyId, status: 'posted' }, _sum: { grandTotal: true }, _count: true }),
    prisma.hrEmployee.count({ where: { companyId, deletedAt: null } }),
    prisma.erpReceivable.aggregate({ where: { companyId, status: 'open' }, _sum: { amount: true } }),
    prisma.erpPayable.aggregate({ where: { companyId, status: 'open' }, _sum: { amount: true } }),
  ]);

  res.json(ok({ products, stockQuantity: stock._sum.quantity || 0, sales, purchases, employees, receivables, payables }));
}));

app.get('/api/v1/erp/inventory/warehouses', asyncRoute(async (req: any, res: any) => {
  const rows = await prisma.erpWarehouse.findMany({ where: { companyId: req.companyId, deletedAt: null }, orderBy: { createdAt: 'asc' } });
  res.json(ok(rows));
}));

app.post('/api/v1/erp/inventory/warehouses', asyncRoute(async (req: any, res: any) => {
  const code = text(req.body.code) || `WH-${Date.now()}`;
  const name = text(req.body.name);
  if (!name) throw new Error('Ø§ÙƒØªØ¨ Ø§Ø³Ù… Ø§Ù„Ù…Ø®Ø²Ù†');

  const row = await prisma.erpWarehouse.create({ data: { companyId: req.companyId, code, name } });
  res.json(ok(row));
}));

app.get('/api/v1/erp/inventory/products', asyncRoute(async (req: any, res: any) => {
  const rows = await prisma.erpProduct.findMany({
    where: { companyId: req.companyId, deletedAt: null },
    include: { stockLevels: { include: { warehouse: true } } },
    orderBy: { createdAt: 'desc' },
  });
  res.json(ok(rows));
}));

app.post('/api/v1/erp/inventory/products', asyncRoute(async (req: any, res: any) => {
  const sku = text(req.body.sku || req.body.code || req.body.barcode);
  const name = text(req.body.name);
  if (!sku) throw new Error('Ø§ÙƒØªØ¨ ÙƒÙˆØ¯ Ø§Ù„Ù…Ù†ØªØ¬');
  if (!name) throw new Error('Ø§ÙƒØªØ¨ Ø§Ø³Ù… Ø§Ù„Ù…Ù†ØªØ¬');

  const product = await prisma.erpProduct.create({
    data: {
      companyId: req.companyId,
      sku,
      barcode: text(req.body.barcode) || null,
      name,
      type: text(req.body.type) || 'stock',
      unit: text(req.body.unit) || 'Ù‚Ø·Ø¹Ø©',
      costPrice: toNumber(req.body.costPrice),
      salePrice: toNumber(req.body.salePrice),
    },
  });
  res.json(ok(product));
}));

app.post('/api/v1/erp/inventory/stock/adjust', asyncRoute(async (req: any, res: any) => {
  const productId = text(req.body.productId);
  const warehouseId = text(req.body.warehouseId);
  const quantity = toNumber(req.body.quantity);
  if (!productId || !warehouseId) throw new Error('Ø§Ø®ØªØ± Ø§Ù„Ù…Ù†ØªØ¬ ÙˆØ§Ù„Ù…Ø®Ø²Ù†');

  const result = await prisma.$transaction(async (tx) => {
    const level = await ensureStockLevel(tx, req.companyId, productId, warehouseId);
    await tx.erpStockLevel.update({ where: { id: level.id }, data: { quantity } });
    await tx.erpStockMovement.create({
      data: { companyId: req.companyId, productId, warehouseId, type: 'adjust', quantity, refType: 'adjustment', refId: ref('ADJ'), note: text(req.body.note), createdBy: req.user.id },
    });
    return tx.erpProduct.findFirst({ where: { id: productId }, include: { stockLevels: { include: { warehouse: true } } } });
  });

  res.json(ok(result));
}));

app.get('/api/v1/erp/sales/parties', asyncRoute(async (req: any, res: any) => {
  const rows = await prisma.erpParty.findMany({ where: { companyId: req.companyId, deletedAt: null, type: { in: ['customer', 'both'] } }, orderBy: { createdAt: 'desc' } });
  res.json(ok(rows));
}));

app.post('/api/v1/erp/sales/parties', asyncRoute(async (req: any, res: any) => {
  const name = text(req.body.name);
  if (!name) throw new Error('Ø§ÙƒØªØ¨ Ø§Ø³Ù… Ø§Ù„Ø¹Ù…ÙŠÙ„');
  const row = await prisma.erpParty.create({ data: { companyId: req.companyId, type: text(req.body.type) || 'customer', name, phone: text(req.body.phone) || null, email: text(req.body.email) || null } });
  res.json(ok(row));
}));

app.delete('/api/v1/erp/sales/parties/:id', asyncRoute(async (req: any, res: any) => {
  const id = req.params.id;
  const docCount = await prisma.erpSalesDocument.count({ where: { companyId: req.companyId, partyId: id } });
  const recCount = await prisma.erpReceivable.count({ where: { companyId: req.companyId, partyId: id } });
  if (docCount || recCount) throw new Error('Ù„Ø§ ÙŠÙ…ÙƒÙ† Ø­Ø°Ù Ø¹Ù…ÙŠÙ„ Ø¹Ù„ÙŠÙ‡ ÙÙˆØ§ØªÙŠØ± Ø£Ùˆ Ù…Ø¯ÙŠÙˆÙ†ÙŠØ§Øª');
  const row = await prisma.erpParty.update({ where: { id }, data: { deletedAt: new Date() } });
  res.json(ok(row));
}));

app.get('/api/v1/erp/sales/documents', asyncRoute(async (req: any, res: any) => {
  const rows = await prisma.erpSalesDocument.findMany({
    where: { companyId: req.companyId },
    include: { party: true, lines: { include: { product: true } } },
    orderBy: { createdAt: 'desc' },
  });
  res.json(ok(rows));
}));

app.post('/api/v1/erp/sales/documents', asyncRoute(async (req: any, res: any) => {
  const partyId = text(req.body.partyId);
  const rawLines = Array.isArray(req.body.lines) ? req.body.lines : [];
  if (!partyId) throw new Error('Ø§Ø®ØªØ± Ø§Ù„Ø¹Ù…ÙŠÙ„');
  if (!rawLines.length) throw new Error('Ø£Ø¶Ù Ø¨Ù†ÙˆØ¯ Ø§Ù„ÙØ§ØªÙˆØ±Ø©');

  const lines = lineInput(rawLines);
  const subtotal = lines.reduce((sum, line) => sum + line.lineTotal, 0);
  const doc = await prisma.erpSalesDocument.create({
    data: { companyId: req.companyId, partyId, type: text(req.body.type) || 'invoice', ref: ref('SAL'), note: text(req.body.note), subtotal, grandTotal: subtotal, status: 'draft', lines: { create: lines } },
    include: { party: true, lines: { include: { product: true } } },
  });
  res.json(ok(doc));
}));

app.patch('/api/v1/erp/sales/documents/:id/post', asyncRoute(async (req: any, res: any) => {
  const warehouseId = text(req.body.warehouseId);
  if (!warehouseId) throw new Error('Ø§Ø®ØªØ± Ø§Ù„Ù…Ø®Ø²Ù†');

  const result = await prisma.$transaction(async (tx) => {
    const doc = await tx.erpSalesDocument.findFirst({ where: { id: req.params.id, companyId: req.companyId }, include: { lines: true, party: true } });
    if (!doc) throw new Error('ÙØ§ØªÙˆØ±Ø© Ø§Ù„Ø¨ÙŠØ¹ ØºÙŠØ± Ù…ÙˆØ¬ÙˆØ¯Ø©');
    if (doc.status === 'posted') return doc;

    for (const line of doc.lines) {
      if (line.productId) {
        await changeStock(tx, { companyId: req.companyId, productId: line.productId, warehouseId, quantity: toNumber(line.quantity), direction: 'out', refType: 'sales', refId: doc.id, note: `ÙØ§ØªÙˆØ±Ø© Ø¨ÙŠØ¹ ${doc.ref}`, userId: req.user.id });
      }
    }

    const posted = await tx.erpSalesDocument.update({ where: { id: doc.id }, data: { status: 'posted', postedAt: new Date() }, include: { party: true, lines: { include: { product: true } } } });
    await tx.erpReceivable.create({ data: { companyId: req.companyId, partyId: doc.partyId, salesDocId: doc.id, amount: toNumber(doc.grandTotal), paidAmount: 0, status: 'open' } });
    await addJournal(tx, req.companyId, req.user.id, `ÙØ§ØªÙˆØ±Ø© Ø¨ÙŠØ¹ ${doc.ref}`, [
      { accountCode: '1100', debit: toNumber(doc.grandTotal), memo: 'Ø¹Ù…ÙŠÙ„ / Ø­Ø³Ø§Ø¨Ø§Øª Ù…Ø¯ÙŠÙ†Ø©' },
      { accountCode: '4000', credit: toNumber(doc.grandTotal), memo: 'Ø¥ÙŠØ±Ø§Ø¯ Ù…Ø¨ÙŠØ¹Ø§Øª' },
    ]);
    return posted;
  });

  res.json(ok(result));
}));

app.delete('/api/v1/erp/sales/documents/:id', asyncRoute(async (req: any, res: any) => {
  const doc = await prisma.erpSalesDocument.findFirst({ where: { id: req.params.id, companyId: req.companyId } });
  if (!doc) throw new Error('Ø§Ù„ÙØ§ØªÙˆØ±Ø© ØºÙŠØ± Ù…ÙˆØ¬ÙˆØ¯Ø©');
  if (doc.status === 'posted') throw new Error('Ù„Ø§ ÙŠÙ…ÙƒÙ† Ø­Ø°Ù ÙØ§ØªÙˆØ±Ø© Ù…Ø±Ø­Ù„Ø©');
  const row = await prisma.erpSalesDocument.delete({ where: { id: doc.id } });
  res.json(ok(row));
}));

app.post('/api/v1/erp/sales/cashier-sale', asyncRoute(async (req: any, res: any) => {
  const warehouseId = text(req.body.warehouseId);
  const paidAmount = toNumber(req.body.paidAmount);
  const rawLines = Array.isArray(req.body.lines) ? req.body.lines : [];
  if (!warehouseId) throw new Error('Ø§Ø®ØªØ± Ø§Ù„Ù…Ø®Ø²Ù†');
  if (!rawLines.length) throw new Error('Ù„Ø§ ØªÙˆØ¬Ø¯ Ù…Ù†ØªØ¬Ø§Øª ÙÙŠ Ø§Ù„ÙØ§ØªÙˆØ±Ø©');

  const result = await prisma.$transaction(async (tx) => {
    const party = await ensureCashParty(tx, req.companyId);
    const lines = lineInput(rawLines);
    const subtotal = lines.reduce((sum, line) => sum + line.lineTotal, 0);
    if (paidAmount < subtotal) throw new Error('Ø§Ù„Ù…Ø¨Ù„Øº Ø§Ù„Ù…Ø¯ÙÙˆØ¹ Ø£Ù‚Ù„ Ù…Ù† Ø¥Ø¬Ù…Ø§Ù„ÙŠ Ø§Ù„ÙØ§ØªÙˆØ±Ø©');

    const doc = await tx.erpSalesDocument.create({
      data: { companyId: req.companyId, partyId: party.id, type: 'invoice', ref: ref('POS'), note: 'Ø¨ÙŠØ¹ ÙƒØ§Ø´ÙŠØ± Ù†Ù‚Ø¯ÙŠ', subtotal, grandTotal: subtotal, status: 'posted', postedAt: new Date(), lines: { create: lines } },
      include: { party: true, lines: { include: { product: true } } },
    });

    for (const line of lines) {
      if (line.productId) {
        await changeStock(tx, { companyId: req.companyId, productId: line.productId, warehouseId, quantity: line.quantity, direction: 'out', refType: 'cashier_sale', refId: doc.id, note: `Ø¨ÙŠØ¹ ÙƒØ§Ø´ÙŠØ± ${doc.ref}`, userId: req.user.id });
      }
    }

    await addJournal(tx, req.companyId, req.user.id, `Ø¨ÙŠØ¹ ÙƒØ§Ø´ÙŠØ± Ù†Ù‚Ø¯ÙŠ ${doc.ref}`, [
      { accountCode: '1000', debit: subtotal, memo: 'Ù†Ù‚Ø¯ÙŠØ© Ù…Ù† Ø§Ù„ÙƒØ§Ø´ÙŠØ±' },
      { accountCode: '4000', credit: subtotal, memo: 'Ø¥ÙŠØ±Ø§Ø¯ Ù…Ø¨ÙŠØ¹Ø§Øª' },
    ]);

    return { ...doc, paidAmount, change: paidAmount - subtotal };
  });

  res.json(ok(result));
}));

app.get('/api/v1/erp/purchases/parties', asyncRoute(async (req: any, res: any) => {
  const rows = await prisma.erpParty.findMany({ where: { companyId: req.companyId, deletedAt: null, type: { in: ['supplier', 'both'] } }, orderBy: { createdAt: 'desc' } });
  res.json(ok(rows));
}));

app.post('/api/v1/erp/purchases/parties', asyncRoute(async (req: any, res: any) => {
  const name = text(req.body.name);
  if (!name) throw new Error('Ø§ÙƒØªØ¨ Ø§Ø³Ù… Ø§Ù„Ù…ÙˆØ±Ø¯');
  const row = await prisma.erpParty.create({ data: { companyId: req.companyId, type: text(req.body.type) || 'supplier', name, phone: text(req.body.phone) || null, email: text(req.body.email) || null } });
  res.json(ok(row));
}));

app.delete('/api/v1/erp/purchases/parties/:id', asyncRoute(async (req: any, res: any) => {
  const id = req.params.id;
  const docCount = await prisma.erpPurchaseDocument.count({ where: { companyId: req.companyId, partyId: id } });
  const payCount = await prisma.erpPayable.count({ where: { companyId: req.companyId, partyId: id } });
  if (docCount || payCount) throw new Error('Ù„Ø§ ÙŠÙ…ÙƒÙ† Ø­Ø°Ù Ù…ÙˆØ±Ø¯ Ø¹Ù„ÙŠÙ‡ ÙÙˆØ§ØªÙŠØ± Ø£Ùˆ Ù…Ø¯ÙŠÙˆÙ†ÙŠØ§Øª');
  const row = await prisma.erpParty.update({ where: { id }, data: { deletedAt: new Date() } });
  res.json(ok(row));
}));

app.get('/api/v1/erp/purchases/documents', asyncRoute(async (req: any, res: any) => {
  const rows = await prisma.erpPurchaseDocument.findMany({ where: { companyId: req.companyId }, include: { party: true, lines: { include: { product: true } } }, orderBy: { createdAt: 'desc' } });
  res.json(ok(rows));
}));

app.post('/api/v1/erp/purchases/documents', asyncRoute(async (req: any, res: any) => {
  const partyId = text(req.body.partyId);
  const rawLines = Array.isArray(req.body.lines) ? req.body.lines : [];
  if (!partyId) throw new Error('Ø§Ø®ØªØ± Ø§Ù„Ù…ÙˆØ±Ø¯');
  if (!rawLines.length) throw new Error('Ø£Ø¶Ù Ø¨Ù†ÙˆØ¯ Ø§Ù„ÙØ§ØªÙˆØ±Ø©');

  const lines = lineInput(rawLines);
  const subtotal = lines.reduce((sum, line) => sum + line.lineTotal, 0);
  const doc = await prisma.erpPurchaseDocument.create({
    data: { companyId: req.companyId, partyId, type: text(req.body.type) || 'invoice', ref: ref('PUR'), note: text(req.body.note), subtotal, grandTotal: subtotal, status: 'draft', lines: { create: lines } },
    include: { party: true, lines: { include: { product: true } } },
  });
  res.json(ok(doc));
}));

app.patch('/api/v1/erp/purchases/documents/:id/post', asyncRoute(async (req: any, res: any) => {
  const warehouseId = text(req.body.warehouseId);

  const result = await prisma.$transaction(async (tx) => {
    const doc = await tx.erpPurchaseDocument.findFirst({ where: { id: req.params.id, companyId: req.companyId }, include: { lines: true, party: true } });
    if (!doc) throw new Error('ÙØ§ØªÙˆØ±Ø© Ø§Ù„Ø´Ø±Ø§Ø¡ ØºÙŠØ± Ù…ÙˆØ¬ÙˆØ¯Ø©');
    if (doc.status === 'posted') return doc;

    for (const line of doc.lines) {
      if (line.productId) {
        if (!warehouseId) throw new Error('Ø§Ø®ØªØ± Ø§Ù„Ù…Ø®Ø²Ù† Ù„Ø¥Ø¶Ø§ÙØ© Ø§Ù„Ù…Ù†ØªØ¬Ø§Øª');
        await changeStock(tx, { companyId: req.companyId, productId: line.productId, warehouseId, quantity: toNumber(line.quantity), direction: 'in', refType: 'purchase', refId: doc.id, note: `ÙØ§ØªÙˆØ±Ø© Ø´Ø±Ø§Ø¡ ${doc.ref}`, userId: req.user.id });
      }
    }

    const posted = await tx.erpPurchaseDocument.update({ where: { id: doc.id }, data: { status: 'posted', postedAt: new Date() }, include: { party: true, lines: { include: { product: true } } } });
    await tx.erpPayable.create({ data: { companyId: req.companyId, partyId: doc.partyId, purchaseDocId: doc.id, amount: toNumber(doc.grandTotal), paidAmount: 0, status: 'open' } });
    await addJournal(tx, req.companyId, req.user.id, `ÙØ§ØªÙˆØ±Ø© Ø´Ø±Ø§Ø¡ ${doc.ref}`, [
      { accountCode: '1200', debit: toNumber(doc.grandTotal), memo: 'Ù…Ø®Ø²ÙˆÙ† / Ù…Ø´ØªØ±ÙŠØ§Øª' },
      { accountCode: '2000', credit: toNumber(doc.grandTotal), memo: 'Ù…ÙˆØ±Ø¯ / Ø­Ø³Ø§Ø¨Ø§Øª Ø¯Ø§Ø¦Ù†Ø©' },
    ]);
    return posted;
  });

  res.json(ok(result));
}));

app.delete('/api/v1/erp/purchases/documents/:id', asyncRoute(async (req: any, res: any) => {
  const doc = await prisma.erpPurchaseDocument.findFirst({ where: { id: req.params.id, companyId: req.companyId } });
  if (!doc) throw new Error('ÙØ§ØªÙˆØ±Ø© Ø§Ù„Ø´Ø±Ø§Ø¡ ØºÙŠØ± Ù…ÙˆØ¬ÙˆØ¯Ø©');
  if (doc.status === 'posted') throw new Error('Ù„Ø§ ÙŠÙ…ÙƒÙ† Ø­Ø°Ù ÙØ§ØªÙˆØ±Ø© Ø´Ø±Ø§Ø¡ Ù…Ø±Ø­Ù„Ø©');
  const row = await prisma.erpPurchaseDocument.delete({ where: { id: doc.id } });
  res.json(ok(row));
}));

app.get('/api/v1/erp/accounting/accounts', asyncRoute(async (req: any, res: any) => {
  const rows = await prisma.erpAccount.findMany({ where: { companyId: req.companyId }, orderBy: { code: 'asc' } });
  res.json(ok(rows));
}));

app.post('/api/v1/erp/accounting/accounts', asyncRoute(async (req: any, res: any) => {
  const code = text(req.body.code);
  const name = text(req.body.name);
  if (!code || !name) throw new Error('Ø§ÙƒØªØ¨ ÙƒÙˆØ¯ ÙˆØ§Ø³Ù… Ø§Ù„Ø­Ø³Ø§Ø¨');
  const row = await prisma.erpAccount.create({ data: { companyId: req.companyId, code, name, type: text(req.body.type) || 'asset' } });
  res.json(ok(row));
}));

app.get('/api/v1/erp/accounting/entries', asyncRoute(async (req: any, res: any) => {
  const rows = await prisma.erpJournalEntry.findMany({ where: { companyId: req.companyId }, include: { lines: { include: { account: true } } }, orderBy: { createdAt: 'desc' } });
  res.json(ok(rows));
}));

app.post('/api/v1/erp/accounting/entries', asyncRoute(async (req: any, res: any) => {
  const rawLines = Array.isArray(req.body.lines) ? req.body.lines : [];
  if (rawLines.length < 2) throw new Error('Ø§Ù„Ù‚ÙŠØ¯ ÙŠØ¬Ø¨ Ø£Ù† ÙŠØ­ØªÙˆÙŠ Ø¹Ù„Ù‰ Ø³Ø·Ø±ÙŠÙ† Ø¹Ù„Ù‰ Ø§Ù„Ø£Ù‚Ù„');

  const debit = rawLines.reduce((sum: number, line: any) => sum + toNumber(line.debit), 0);
  const credit = rawLines.reduce((sum: number, line: any) => sum + toNumber(line.credit), 0);
  if (Math.abs(debit - credit) > 0.001 || debit <= 0) throw new Error('Ø§Ù„Ù‚ÙŠØ¯ ØºÙŠØ± Ù…ØªØ²Ù†');

  const row = await prisma.erpJournalEntry.create({
    data: {
      companyId: req.companyId,
      ref: ref('JE'),
      memo: text(req.body.memo),
      status: 'posted',
      postedAt: new Date(),
      createdBy: req.user.id,
      lines: { create: rawLines.map((line: any) => ({ accountId: text(line.accountId), debit: toNumber(line.debit), credit: toNumber(line.credit), memo: text(line.memo) })) },
    },
    include: { lines: { include: { account: true } } },
  });
  res.json(ok(row));
}));

app.get('/api/v1/erp/hr/employees', asyncRoute(async (req: any, res: any) => {
  const rows = await prisma.hrEmployee.findMany({ where: { companyId: req.companyId, deletedAt: null }, orderBy: { createdAt: 'desc' } });
  res.json(ok(rows));
}));

app.post('/api/v1/erp/hr/employees', asyncRoute(async (req: any, res: any) => {
  const name = text(req.body.name);
  if (!name) throw new Error('Ø§ÙƒØªØ¨ Ø§Ø³Ù… Ø§Ù„Ù…ÙˆØ¸Ù');
  const code = text(req.body.code || req.body.employeeCode) || `EMP-${Date.now()}`;
  const row = await prisma.hrEmployee.create({
    data: { companyId: req.companyId, code, name, phone: text(req.body.phone) || null, jobTitle: text(req.body.jobTitle) || null, department: text(req.body.department) || null, baseSalary: toNumber(req.body.baseSalary ?? req.body.salary), status: text(req.body.status) || 'active', hiredAt: req.body.hiredAt ? new Date(req.body.hiredAt) : null },
  });
  res.json(ok(row));
}));

app.get(['/api/v1/erp/hr/attendance', '/api/v1/erp/hr/attendances'], asyncRoute(async (req: any, res: any) => {
  const rows = await prisma.hrAttendance.findMany({ where: { companyId: req.companyId }, include: { employee: true }, orderBy: { createdAt: 'desc' } });
  res.json(ok(rows));
}));

app.post(['/api/v1/erp/hr/attendance', '/api/v1/erp/hr/attendances'], asyncRoute(async (req: any, res: any) => {
  const employeeId = text(req.body.employeeId);
  const date = text(req.body.date);
  if (!employeeId || !date) throw new Error('Ø§Ø®ØªØ± Ø§Ù„Ù…ÙˆØ¸Ù ÙˆØ§Ù„ØªØ§Ø±ÙŠØ®');
  const row = await prisma.hrAttendance.create({ data: { companyId: req.companyId, employeeId, date, status: text(req.body.status) || 'present', checkIn: text(req.body.checkIn) || null, checkOut: text(req.body.checkOut) || null, note: text(req.body.note) || null }, include: { employee: true } });
  res.json(ok(row));
}));

app.get(['/api/v1/erp/hr/payroll', '/api/v1/erp/hr/payrolls', '/api/v1/erp/hr/payroll-runs'], asyncRoute(async (req: any, res: any) => {
  const rows = await prisma.hrPayroll.findMany({ where: { companyId: req.companyId }, include: { employee: true }, orderBy: { createdAt: 'desc' } });
  res.json(ok(rows));
}));

app.post(['/api/v1/erp/hr/payroll', '/api/v1/erp/hr/payrolls', '/api/v1/erp/hr/payroll-runs'], asyncRoute(async (req: any, res: any) => {
  const employeeId = text(req.body.employeeId);
  const month = text(req.body.month);
  if (!employeeId || !month) throw new Error('Ø§Ø®ØªØ± Ø§Ù„Ù…ÙˆØ¸Ù ÙˆØ§Ù„Ø´Ù‡Ø±');
  const baseSalary = toNumber(req.body.baseSalary ?? req.body.salary);
  const additions = toNumber(req.body.additions);
  const deductions = toNumber(req.body.deductions);
  const netSalary = toNumber(req.body.netSalary, baseSalary + additions - deductions);
  const row = await prisma.hrPayroll.create({ data: { companyId: req.companyId, employeeId, month, baseSalary, additions, deductions, netSalary, status: text(req.body.status) || 'paid', note: text(req.body.note) || null }, include: { employee: true } });
  res.json(ok(row));
}));

app.get('/api/v1/erp/debts/receivables', asyncRoute(async (req: any, res: any) => {
  const rows = await prisma.erpReceivable.findMany({ where: { companyId: req.companyId }, include: { party: true, salesDoc: true }, orderBy: { createdAt: 'desc' } });
  res.json(ok(rows));
}));

app.get('/api/v1/erp/debts/payables', asyncRoute(async (req: any, res: any) => {
  const rows = await prisma.erpPayable.findMany({ where: { companyId: req.companyId }, include: { party: true, purchaseDoc: true }, orderBy: { createdAt: 'desc' } });
  res.json(ok(rows));
}));

app.get('/api/v1/erp/projects', asyncRoute(async (req: any, res: any) => {
  const rows = await prisma.erpProject.findMany({ where: { companyId: req.companyId }, orderBy: { createdAt: 'desc' } });
  res.json(ok(rows));
}));

app.post('/api/v1/erp/projects', asyncRoute(async (req: any, res: any) => {
  const name = text(req.body.name);
  if (!name) throw new Error('Ø§ÙƒØªØ¨ Ø§Ø³Ù… Ø§Ù„Ù…Ø´Ø±ÙˆØ¹');
  const row = await prisma.erpProject.create({ data: { companyId: req.companyId, code: text(req.body.code) || ref('PRJ'), name, status: text(req.body.status) || 'active', budget: toNumber(req.body.budget) } });
  res.json(ok(row));
}));

app.get('/api/v1/erp/manufacturing/orders', asyncRoute(async (req: any, res: any) => {
  const rows = await prisma.erpProductionOrder.findMany({ where: { companyId: req.companyId }, orderBy: { createdAt: 'desc' } });
  res.json(ok(rows));
}));

app.post('/api/v1/erp/manufacturing/orders', asyncRoute(async (req: any, res: any) => {
  const product = text(req.body.product);
  if (!product) throw new Error('Ø§ÙƒØªØ¨ Ø§Ù„Ù…Ù†ØªØ¬ Ø§Ù„Ù…Ø·Ù„ÙˆØ¨ ØªØµÙ†ÙŠØ¹Ù‡');
  const row = await prisma.erpProductionOrder.create({ data: { companyId: req.companyId, code: text(req.body.code) || ref('MO'), product, quantity: toNumber(req.body.quantity), status: text(req.body.status) || 'planned' } });
  res.json(ok(row));
}));

app.get('/api/v1/erp/reports/summary', asyncRoute(async (req: any, res: any) => {
  const companyId = req.companyId;
  const [sales, purchases, products, employees, journalEntries] = await Promise.all([
    prisma.erpSalesDocument.aggregate({ where: { companyId, status: 'posted' }, _sum: { grandTotal: true }, _count: true }),
    prisma.erpPurchaseDocument.aggregate({ where: { companyId, status: 'posted' }, _sum: { grandTotal: true }, _count: true }),
    prisma.erpProduct.count({ where: { companyId, deletedAt: null } }),
    prisma.hrEmployee.count({ where: { companyId, deletedAt: null } }),
    prisma.erpJournalEntry.count({ where: { companyId } }),
  ]);
  res.json(ok({ sales, purchases, products, employees, journalEntries }));
}));

app.use((req, res) => {
  res.status(404).json({ ok: false, error: 'Route not found', path: req.path });
});

app.use((error: any, _req: any, res: any, _next: any) => {
  console.error(error);
  res.status(400).json({ ok: false, error: error?.message || 'Ø­Ø¯Ø« Ø®Ø·Ø£ ØºÙŠØ± Ù…ØªÙˆÙ‚Ø¹' });
});

app.listen(PORT, () => {
  console.log(`Matrix API running on http://127.0.0.1:${PORT}/api/v1`);
});

