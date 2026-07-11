import { BadRequestException, Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { createPartySchema, createSalesDocSchema, postDocumentSchema } from '@allinall/erp';
import { CurrentUser } from '../auth/auth.decorators';
import type { JwtPayload } from '../auth/jwt.strategy';
import { PrismaService } from '../prisma/prisma.service';
import { ErpContextService } from './erp-context.service';

type Tx = any;

@Controller('erp/sales')
export class ErpSalesController {
  constructor(
    private readonly prisma: PrismaService,
    private readonly ctx: ErpContextService,
  ) {}

  private async account(tx: Tx, companyId: string, code: string) {
    return tx.erpAccount.findFirst({ where: { companyId, code, deletedAt: null, isActive: true } });
  }

  private async createJournalForSale(tx: Tx, companyId: string, ref: string, amount: number, createdBy: string) {
    const receivable = await this.account(tx, companyId, '1100');
    const revenue = await this.account(tx, companyId, '4000');
    if (!receivable || !revenue || amount <= 0) return;
    await tx.erpJournalEntry.create({
      data: {
        companyId,
        ref: `JE-${ref}`,
        status: 'posted',
        postedAt: new Date(),
        memo: `ترحيل فاتورة بيع ${ref}`,
        createdBy,
        lines: { create: [
          { accountId: receivable.id, debit: amount, credit: 0, memo: 'مديونية عميل' },
          { accountId: revenue.id, debit: 0, credit: amount, memo: 'إيراد مبيعات' },
        ] },
      },
    }).catch(() => undefined);
  }

  @Get('documents')
  async documents(@CurrentUser() user: JwtPayload) {
    const company = await this.ctx.requireCompany(user);
    const data = await this.prisma.erpSalesDocument.findMany({
      where: { companyId: company.id },
      include: { party: true, lines: { include: { product: true } }, receivable: true },
      orderBy: { createdAt: 'desc' },
      take: 200,
    });
    return { ok: true, data };
  }

  @Get('documents/:id')
  async document(@CurrentUser() user: JwtPayload, @Param('id') id: string) {
    const company = await this.ctx.requireCompany(user);
    const data = await this.prisma.erpSalesDocument.findFirst({
      where: { id, companyId: company.id },
      include: { party: true, lines: { include: { product: true } }, receivable: true },
    });
    if (!data) throw new BadRequestException('مستند البيع غير موجود');
    return { ok: true, data };
  }

  @Get('parties')
  async parties(@CurrentUser() user: JwtPayload) {
    const company = await this.ctx.requireCompany(user);
    const data = await this.prisma.erpParty.findMany({
      where: { companyId: company.id, deletedAt: null, type: { in: ['customer', 'both'] } },
      orderBy: { name: 'asc' },
    });
    return { ok: true, data };
  }

  @Post('parties')
  async createParty(@CurrentUser() user: JwtPayload, @Body() body: unknown) {
    const company = await this.ctx.requireCompany(user);
    const input = createPartySchema.parse({ type: 'customer', ...(body as Record<string, unknown>) });
    const data = await this.prisma.erpParty.create({ data: { companyId: company.id, ...input, email: input.email || null } });
    return { ok: true, data };
  }


  @Delete('parties/:id')
  async deleteParty(@CurrentUser() user: JwtPayload, @Param('id') id: string) {
    const company = await this.ctx.requireCompany(user);

    const party = await this.prisma.erpParty.findFirst({
      where: {
        id,
        companyId: company.id,
        deletedAt: null,
        type: { in: ['customer', 'both'] },
      },
    });

    if (!party) {
      throw new BadRequestException('العميل غير موجود');
    }

    const [salesDocuments, receivables] = await Promise.all([
      this.prisma.erpSalesDocument.count({
        where: {
          companyId: company.id,
          partyId: id,
        },
      }),
      this.prisma.erpReceivable.count({
        where: {
          companyId: company.id,
          partyId: id,
        },
      }),
    ]);

    if (salesDocuments > 0 || receivables > 0) {
      throw new BadRequestException('لا يمكن حذف عميل عليه فواتير أو مديونيات');
    }

    if (party.type === 'both') {
      const data = await this.prisma.erpParty.update({
        where: { id: party.id },
        data: { type: 'supplier' },
      });

      return { ok: true, data };
    }

    const data = await this.prisma.erpParty.update({
      where: { id: party.id },
      data: { deletedAt: new Date() },
    });

    return { ok: true, data };
  }

  @Post('documents')
  async createDocument(@CurrentUser() user: JwtPayload, @Body() body: unknown) {
    const company = await this.ctx.requireCompany(user);
    const input = createSalesDocSchema.parse(body);
    const party = await this.prisma.erpParty.findFirst({ where: { id: input.partyId, companyId: company.id, deletedAt: null, type: { in: ['customer', 'both'] } } });
    if (!party) throw new BadRequestException('العميل غير موجود');

    for (const line of input.lines) {
      if (!line.productId) continue;
      const product = await this.prisma.erpProduct.findFirst({ where: { id: line.productId, companyId: company.id, deletedAt: null } });
      if (!product) throw new BadRequestException('صنف غير موجود في الفاتورة');
    }

    const ref = input.ref ?? this.ctx.nextRef('SAL');
    const lines = input.lines.map((l) => ({ productId: l.productId || null, description: l.description, quantity: l.quantity, unitPrice: l.unitPrice, lineTotal: l.quantity * l.unitPrice }));
    const subtotal = lines.reduce((s, l) => s + l.lineTotal, 0);
    const data = await this.prisma.erpSalesDocument.create({
      data: { companyId: company.id, partyId: input.partyId, type: input.type, ref, note: input.note, subtotal, grandTotal: subtotal, lines: { create: lines } },
      include: { lines: { include: { product: true } }, party: true },
    });
    return { ok: true, data };
  }


  @Post('cashier-sale')
  async cashierSale(@CurrentUser() user: JwtPayload, @Body() body: unknown) {
    const company = await this.ctx.requireCompany(user);
    const input = (body ?? {}) as Record<string, any>;

    const warehouseId = String(input.warehouseId || '').trim();
    const paidAmount = Number(input.paidAmount || 0);
    const rawLines = Array.isArray(input.lines) ? input.lines : [];

    if (!warehouseId) {
      throw new BadRequestException('اختر المخزن');
    }

    if (rawLines.length === 0) {
      throw new BadRequestException('لا توجد منتجات في الفاتورة');
    }

    const result = await this.prisma.$transaction(async (tx) => {
      let cashParty = await tx.erpParty.findFirst({
        where: {
          companyId: company.id,
          deletedAt: null,
          name: 'عميل نقدي',
          type: { in: ['customer', 'both'] },
        },
      });

      if (!cashParty) {
        cashParty = await tx.erpParty.create({
          data: {
            companyId: company.id,
            type: 'customer',
            name: 'عميل نقدي',
            phone: null,
            email: null,
          },
        });
      }

      const lines = [];

      for (const rawLine of rawLines) {
        const productId = String(rawLine.productId || '').trim();
        const quantity = Number(rawLine.quantity || 0);
        const unitPrice = Number(rawLine.unitPrice || 0);

        if (!productId) {
          throw new BadRequestException('يوجد بند بدون منتج');
        }

        if (!Number.isFinite(quantity) || quantity <= 0) {
          throw new BadRequestException('يوجد بند بكمية غير صحيحة');
        }

        if (!Number.isFinite(unitPrice) || unitPrice <= 0) {
          throw new BadRequestException('يوجد بند بسعر غير صحيح');
        }

        const product = await tx.erpProduct.findFirst({
          where: {
            id: productId,
            companyId: company.id,
            deletedAt: null,
          },
        });

        if (!product) {
          throw new BadRequestException('منتج غير موجود في الفاتورة');
        }

        if (product.type === 'stock') {
          const level = await tx.erpStockLevel.findUnique({
            where: {
              productId_warehouseId: {
                productId: product.id,
                warehouseId,
              },
            },
          });

          const current = level ? Number(level.quantity) : 0;

          if (current < quantity) {
            throw new BadRequestException('رصيد المنتج ' + product.sku + ' غير كافٍ');
          }

          if (level) {
            await tx.erpStockLevel.update({
              where: { id: level.id },
              data: { quantity: current - quantity },
            });
          }
        }

        lines.push({
          productId: product.id,
          description: product.name,
          quantity,
          unitPrice,
          lineTotal: quantity * unitPrice,
        });
      }

      const subtotal = lines.reduce((sum, line) => sum + line.lineTotal, 0);
      const grandTotal = subtotal;
      const ref = this.ctx.nextRef('POS');

      const doc = await tx.erpSalesDocument.create({
        data: {
          companyId: company.id,
          partyId: cashParty.id,
          type: 'invoice',
          ref,
          note: 'بيع كاشير نقدي',
          subtotal,
          grandTotal,
          status: 'posted',
          lines: {
            create: lines,
          },
        },
        include: {
          party: true,
          lines: { include: { product: true } },
        },
      });

      for (const line of lines) {
        const product = await tx.erpProduct.findFirst({
          where: {
            id: line.productId,
            companyId: company.id,
          },
        });

        if (product?.type === 'stock') {
          await tx.erpStockMovement.create({
            data: {
              companyId: company.id,
              productId: line.productId,
              warehouseId,
              type: 'out',
              quantity: line.quantity,
              refType: 'cashier_sale',
              refId: doc.id,
              note: 'بيع كاشير ' + doc.ref,
              createdBy: user.sub,
            },
          });
        }
      }

      const cashAccount =
        (await this.account(tx, company.id, '1000')) ??
        (await this.account(tx, company.id, '1010')) ??
        (await this.account(tx, company.id, '1100'));

      const revenueAccount = await this.account(tx, company.id, '4000');

      if (cashAccount && revenueAccount && grandTotal > 0) {
        await tx.erpJournalEntry.create({
          data: {
            companyId: company.id,
            ref: 'JE-' + ref,
            status: 'posted',
            postedAt: new Date(),
            memo: 'بيع كاشير نقدي ' + ref,
            createdBy: user.sub,
            lines: {
              create: [
                {
                  accountId: cashAccount.id,
                  debit: grandTotal,
                  credit: 0,
                  memo: 'نقدية من بيع كاشير',
                },
                {
                  accountId: revenueAccount.id,
                  debit: 0,
                  credit: grandTotal,
                  memo: 'إيراد مبيعات',
                },
              ],
            },
          },
        }).catch(() => undefined);
      }

      await tx.erpWorkflowInstance.create({
        data: {
          companyId: company.id,
          module: 'sales',
          entityType: 'cashier_sale',
          entityId: doc.id,
          currentStep: 'posted',
          status: 'done',
          metadata: {
            ref: doc.ref,
            paidAmount,
            grandTotal,
            change: paidAmount - grandTotal,
          },
        },
      }).catch(() => undefined);

      return {
        ...doc,
        paidAmount,
        change: paidAmount - grandTotal,
      };
    });

    return { ok: true, data: result };
  }

  @Patch('documents/:id/post')
  async postDocument(@CurrentUser() user: JwtPayload, @Param('id') id: string, @Body() body: unknown) {
    const company = await this.ctx.requireCompany(user);
    const input = postDocumentSchema.parse(body ?? {});
    const result = await this.prisma.$transaction(async (tx) => {
      const doc = await tx.erpSalesDocument.findFirst({
        where: { id, companyId: company.id },
        include: { lines: { include: { product: true } }, receivable: true },
      });
      if (!doc) throw new BadRequestException('فاتورة البيع غير موجودة');
      if (doc.status === 'posted') return doc;
      if (doc.status === 'cancelled') throw new BadRequestException('لا يمكن ترحيل فاتورة ملغاة');

      const stockLines = doc.lines.filter((l) => l.productId && l.product?.type === 'stock');
      if (stockLines.length > 0 && !input.warehouseId) throw new BadRequestException('يجب إرسال warehouseId لترحيل أصناف مخزنية');

      for (const line of stockLines) {
        const level = await tx.erpStockLevel.findUnique({ where: { productId_warehouseId: { productId: line.productId as string, warehouseId: input.warehouseId as string } } });
        const current = level ? Number(level.quantity) : 0;
        const qty = Number(line.quantity);
        if (current < qty) throw new BadRequestException(`رصيد الصنف ${line.product?.sku ?? line.description} غير كافٍ`);
        if (level) await tx.erpStockLevel.update({ where: { id: level.id }, data: { quantity: current - qty } });
        await tx.erpStockMovement.create({
          data: { companyId: company.id, productId: line.productId as string, warehouseId: input.warehouseId as string, type: 'out', quantity: qty, refType: 'sales_invoice', refId: doc.id, note: `بيع ${doc.ref}`, createdBy: user.sub },
        });
      }

      if (doc.type === 'invoice' && !doc.receivable) {
        await tx.erpReceivable.create({
          data: { companyId: company.id, partyId: doc.partyId, salesDocId: doc.id, ref: `REC-${doc.ref}`, amount: doc.grandTotal, dueDate: doc.dueDate },
        });
        await this.createJournalForSale(tx, company.id, doc.ref, Number(doc.grandTotal), user.sub);
      }

      await tx.erpWorkflowInstance.create({
        data: { companyId: company.id, module: 'sales', entityType: 'sales_document', entityId: doc.id, currentStep: 'posted', status: 'done', metadata: { ref: doc.ref } },
      }).catch(() => undefined);

      return tx.erpSalesDocument.update({ where: { id: doc.id }, data: { status: 'posted' }, include: { party: true, lines: { include: { product: true } }, receivable: true } });
    });
    return { ok: true, data: result };
  }
}
