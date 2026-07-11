import { BadRequestException, Body, Controller, Get, Param, Patch } from '@nestjs/common';
import { payDebtSchema } from '@allinall/erp';
import { CurrentUser } from '../auth/auth.decorators';
import type { JwtPayload } from '../auth/jwt.strategy';
import { PrismaService } from '../prisma/prisma.service';
import { ErpContextService } from './erp-context.service';

type Tx = any;

@Controller('erp/debts')
export class ErpDebtsController {
  constructor(
    private readonly prisma: PrismaService,
    private readonly ctx: ErpContextService,
  ) {}

  private status(amount: number, paid: number): 'open' | 'partial' | 'paid' {
    if (paid >= amount) return 'paid';
    if (paid > 0) return 'partial';
    return 'open';
  }

  private async account(tx: Tx, companyId: string, code: string) {
    return tx.erpAccount.findFirst({ where: { companyId, code, deletedAt: null, isActive: true } });
  }

  private async journal(tx: Tx, companyId: string, ref: string, kind: 'receive' | 'pay', amount: number, createdBy: string) {
    const cash = await this.account(tx, companyId, '1000');
    const receivable = await this.account(tx, companyId, '1100');
    const payable = await this.account(tx, companyId, '2000');
    if (!cash || amount <= 0) return;
    const other = kind === 'receive' ? receivable : payable;
    if (!other) return;
    const lines = kind === 'receive'
      ? [ { accountId: cash.id, debit: amount, credit: 0 }, { accountId: other.id, debit: 0, credit: amount } ]
      : [ { accountId: other.id, debit: amount, credit: 0 }, { accountId: cash.id, debit: 0, credit: amount } ];
    await tx.erpJournalEntry.create({
      data: { companyId, ref: `JE-${ref}`, status: 'posted', postedAt: new Date(), memo: kind === 'receive' ? `تحصيل ${ref}` : `سداد ${ref}`, createdBy, lines: { create: lines } },
    }).catch(() => undefined);
  }

  @Get('receivables')
  async receivables(@CurrentUser() user: JwtPayload) {
    const company = await this.ctx.requireCompany(user);
    const data = await this.prisma.erpReceivable.findMany({ where: { companyId: company.id }, include: { party: true, salesDoc: true, schedules: true }, orderBy: { createdAt: 'desc' } });
    return { ok: true, data };
  }

  @Patch('receivables/:id/pay')
  async payReceivable(@CurrentUser() user: JwtPayload, @Param('id') id: string, @Body() body: unknown) {
    const company = await this.ctx.requireCompany(user);
    const input = payDebtSchema.parse(body);
    const data = await this.prisma.$transaction(async (tx) => {
      const row = await tx.erpReceivable.findFirst({ where: { id, companyId: company.id } });
      if (!row) throw new BadRequestException('المديونية غير موجودة');
      const amount = Number(row.amount);
      const paid = Number(row.paidAmount) + input.amount;
      if (paid > amount + 0.001) throw new BadRequestException('مبلغ التحصيل أكبر من المتبقي');
      const updated = await tx.erpReceivable.update({ where: { id }, data: { paidAmount: paid, status: this.status(amount, paid) }, include: { party: true } });
      await this.journal(tx, company.id, `REC-PAY-${row.ref}-${Date.now()}`, 'receive', input.amount, user.sub);
      return updated;
    });
    return { ok: true, data };
  }

  @Get('payables')
  async payables(@CurrentUser() user: JwtPayload) {
    const company = await this.ctx.requireCompany(user);
    const data = await this.prisma.erpPayable.findMany({ where: { companyId: company.id }, include: { party: true, purchaseDoc: true, schedules: true }, orderBy: { createdAt: 'desc' } });
    return { ok: true, data };
  }

  @Patch('payables/:id/pay')
  async payPayable(@CurrentUser() user: JwtPayload, @Param('id') id: string, @Body() body: unknown) {
    const company = await this.ctx.requireCompany(user);
    const input = payDebtSchema.parse(body);
    const data = await this.prisma.$transaction(async (tx) => {
      const row = await tx.erpPayable.findFirst({ where: { id, companyId: company.id } });
      if (!row) throw new BadRequestException('مديونية المورد غير موجودة');
      const amount = Number(row.amount);
      const paid = Number(row.paidAmount) + input.amount;
      if (paid > amount + 0.001) throw new BadRequestException('مبلغ السداد أكبر من المتبقي');
      const updated = await tx.erpPayable.update({ where: { id }, data: { paidAmount: paid, status: this.status(amount, paid) }, include: { party: true } });
      await this.journal(tx, company.id, `PAY-PAY-${row.ref}-${Date.now()}`, 'pay', input.amount, user.sub);
      return updated;
    });
    return { ok: true, data };
  }

  @Get('overview')
  async overview(@CurrentUser() user: JwtPayload) {
    const company = await this.ctx.requireCompany(user);
    const [receivables, payables] = await Promise.all([
      this.prisma.erpReceivable.findMany({ where: { companyId: company.id } }),
      this.prisma.erpPayable.findMany({ where: { companyId: company.id } }),
    ]);
    const open = (rows: { amount: unknown; paidAmount: unknown }[]) => rows.reduce((s, r) => s + (Number(r.amount) - Number(r.paidAmount)), 0);
    return { ok: true, data: { receivableOpen: open(receivables), payableOpen: open(payables), receivableCount: receivables.length, payableCount: payables.length } };
  }
}
