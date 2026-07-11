import { Controller, Get } from '@nestjs/common';
import { CurrentUser } from '../auth/auth.decorators';
import type { JwtPayload } from '../auth/jwt.strategy';
import { PrismaService } from '../prisma/prisma.service';
import { ErpContextService } from './erp-context.service';

@Controller('erp/reports')
export class ErpReportsController {
  constructor(
    private readonly prisma: PrismaService,
    private readonly ctx: ErpContextService,
  ) {}

  @Get('dashboard')
  async dashboard(@CurrentUser() user: JwtPayload) {
    const company = await this.ctx.requireCompany(user);
    const [products, warehouses, salesDocs, purchaseDocs, receivables, payables, employees, journalEntries] = await Promise.all([
      this.prisma.erpProduct.count({ where: { companyId: company.id, deletedAt: null } }),
      this.prisma.erpWarehouse.count({ where: { companyId: company.id, deletedAt: null } }),
      this.prisma.erpSalesDocument.findMany({ where: { companyId: company.id } }),
      this.prisma.erpPurchaseDocument.findMany({ where: { companyId: company.id } }),
      this.prisma.erpReceivable.findMany({ where: { companyId: company.id } }),
      this.prisma.erpPayable.findMany({ where: { companyId: company.id } }),
      this.prisma.erpEmployee.count({ where: { companyId: company.id, deletedAt: null } }),
      this.prisma.erpJournalEntry.count({ where: { companyId: company.id } }),
    ]);
    const sum = (rows: { grandTotal?: unknown; amount?: unknown; paidAmount?: unknown }[], field: 'grandTotal' | 'amount') => rows.reduce((s, r) => s + Number(r[field] ?? 0), 0);
    const open = (rows: { amount: unknown; paidAmount: unknown }[]) => rows.reduce((s, r) => s + (Number(r.amount) - Number(r.paidAmount)), 0);
    return {
      ok: true,
      data: {
        company,
        counts: { products, warehouses, salesDocuments: salesDocs.length, purchaseDocuments: purchaseDocs.length, employees, journalEntries },
        totals: { sales: sum(salesDocs, 'grandTotal'), purchases: sum(purchaseDocs, 'grandTotal'), receivableOpen: open(receivables), payableOpen: open(payables) },
      },
    };
  }

  @Get('stock')
  async stock(@CurrentUser() user: JwtPayload) {
    const company = await this.ctx.requireCompany(user);
    const levels = await this.prisma.erpStockLevel.findMany({ where: { product: { companyId: company.id } }, include: { product: true, warehouse: true } });
    const data = levels.map((l) => ({ productId: l.productId, sku: l.product.sku, product: l.product.name, warehouse: l.warehouse.name, quantity: Number(l.quantity), minStock: Number(l.product.minStock), lowStock: Number(l.quantity) <= Number(l.product.minStock) }));
    return { ok: true, data };
  }

  @Get('sales')
  async sales(@CurrentUser() user: JwtPayload) {
    const company = await this.ctx.requireCompany(user);
    const docs = await this.prisma.erpSalesDocument.findMany({ where: { companyId: company.id }, include: { party: true, lines: true }, orderBy: { createdAt: 'desc' }, take: 200 });
    return { ok: true, data: docs };
  }

  @Get('purchases')
  async purchases(@CurrentUser() user: JwtPayload) {
    const company = await this.ctx.requireCompany(user);
    const docs = await this.prisma.erpPurchaseDocument.findMany({ where: { companyId: company.id }, include: { party: true, lines: true }, orderBy: { createdAt: 'desc' }, take: 200 });
    return { ok: true, data: docs };
  }
}
