import { BadRequestException, Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { createAccountSchema, createJournalEntrySchema } from '@allinall/erp';
import { CurrentUser } from '../auth/auth.decorators';
import type { JwtPayload } from '../auth/jwt.strategy';
import { PrismaService } from '../prisma/prisma.service';
import { ErpContextService } from './erp-context.service';

@Controller('erp/accounting')
export class ErpAccountingController {
  constructor(
    private readonly prisma: PrismaService,
    private readonly ctx: ErpContextService,
  ) {}

  @Get('accounts')
  async accounts(@CurrentUser() user: JwtPayload) {
    const company = await this.ctx.requireCompany(user);
    const data = await this.prisma.erpAccount.findMany({ where: { companyId: company.id, deletedAt: null, isActive: true }, orderBy: { code: 'asc' } });
    return { ok: true, data };
  }

  @Post('accounts')
  async createAccount(@CurrentUser() user: JwtPayload, @Body() body: unknown) {
    const company = await this.ctx.requireCompany(user);
    const input = createAccountSchema.parse(body);
    const data = await this.prisma.erpAccount.create({ data: { companyId: company.id, ...input } });
    return { ok: true, data };
  }

  @Get('entries')
  async entries(@CurrentUser() user: JwtPayload) {
    const company = await this.ctx.requireCompany(user);
    const data = await this.prisma.erpJournalEntry.findMany({ where: { companyId: company.id }, include: { lines: { include: { account: true } } }, orderBy: { createdAt: 'desc' }, take: 200 });
    return { ok: true, data };
  }

  @Post('entries')
  async createEntry(@CurrentUser() user: JwtPayload, @Body() body: unknown) {
    const company = await this.ctx.requireCompany(user);
    const input = createJournalEntrySchema.parse(body);
    const ref = input.ref ?? this.ctx.nextRef('JE');
    const debit = input.lines.reduce((s, l) => s + l.debit, 0);
    const credit = input.lines.reduce((s, l) => s + l.credit, 0);
    if (Math.abs(debit - credit) > 0.001) throw new BadRequestException('القيد غير متوازن — المدين يجب أن يساوي الدائن');
    const data = await this.prisma.erpJournalEntry.create({ data: { companyId: company.id, ref, memo: input.memo, createdBy: user.sub, lines: { create: input.lines } }, include: { lines: { include: { account: true } } } });
    return { ok: true, data };
  }

  @Patch('entries/:id/post')
  async postEntry(@CurrentUser() user: JwtPayload, @Param('id') id: string) {
    const company = await this.ctx.requireCompany(user);
    const entry = await this.prisma.erpJournalEntry.findFirst({ where: { id, companyId: company.id } });
    if (!entry) throw new BadRequestException('القيد غير موجود');
    if (entry.status !== 'draft') throw new BadRequestException('القيد ليس مسودة');
    const data = await this.prisma.erpJournalEntry.update({ where: { id }, data: { status: 'posted', postedAt: new Date() }, include: { lines: { include: { account: true } } } });
    return { ok: true, data };
  }

  @Get('trial-balance')
  async trialBalance(@CurrentUser() user: JwtPayload) {
    const company = await this.ctx.requireCompany(user);
    const accounts = await this.prisma.erpAccount.findMany({ where: { companyId: company.id, deletedAt: null }, include: { lines: { include: { entry: true } } }, orderBy: { code: 'asc' } });
    const data = accounts.map((a) => {
      const postedLines = a.lines.filter((l) => l.entry.status === 'posted');
      const debit = postedLines.reduce((s, l) => s + Number(l.debit), 0);
      const credit = postedLines.reduce((s, l) => s + Number(l.credit), 0);
      return { id: a.id, code: a.code, name: a.name, type: a.type, debit, credit, balance: debit - credit };
    });
    return { ok: true, data };
  }
}
