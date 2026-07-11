import { BadRequestException, Body, Controller, Get, NotFoundException, Param, Patch, Post } from '@nestjs/common';
import {
  createProductSchema,
  createStockAuditSchema,
  createWarehouseSchema,
  stockMovementSchema,
  updateStockAuditLinesSchema,
} from '@allinall/erp';
import { CurrentUser } from '../auth/auth.decorators';
import type { JwtPayload } from '../auth/jwt.strategy';
import { PrismaService } from '../prisma/prisma.service';
import { ErpContextService } from './erp-context.service';

type Tx = any;

@Controller('erp/inventory')
export class ErpInventoryController {
  constructor(
    private readonly prisma: PrismaService,
    private readonly ctx: ErpContextService,
  ) {}

  private async changeStock(
    tx: Tx,
    params: {
      companyId: string;
      productId: string;
      warehouseId: string;
      type: 'in' | 'out' | 'adjust';
      quantity: number;
      refType?: string;
      refId?: string;
      note?: string;
      createdBy?: string;
    },
  ) {
    const product = await tx.erpProduct.findFirst({ where: { id: params.productId, companyId: params.companyId, deletedAt: null } });
    if (!product) throw new BadRequestException('الصنف غير موجود');
    if (product.type !== 'stock') return null;

    const warehouse = await tx.erpWarehouse.findFirst({ where: { id: params.warehouseId, companyId: params.companyId, deletedAt: null } });
    if (!warehouse) throw new BadRequestException('المخزن غير موجود');

    const level = await tx.erpStockLevel.findUnique({
      where: { productId_warehouseId: { productId: params.productId, warehouseId: params.warehouseId } },
    });
    const current = level ? Number(level.quantity) : 0;
    const nextQty = params.type === 'in' ? current + params.quantity : params.type === 'out' ? current - params.quantity : params.quantity;
    if (nextQty < 0) throw new BadRequestException(`رصيد الصنف ${product.sku} غير كافٍ`);

    if (level) {
      await tx.erpStockLevel.update({ where: { id: level.id }, data: { quantity: nextQty } });
    } else {
      await tx.erpStockLevel.create({ data: { productId: params.productId, warehouseId: params.warehouseId, quantity: nextQty } });
    }

    return tx.erpStockMovement.create({
      data: {
        companyId: params.companyId,
        productId: params.productId,
        warehouseId: params.warehouseId,
        type: params.type,
        quantity: params.quantity,
        refType: params.refType,
        refId: params.refId,
        note: params.note,
        createdBy: params.createdBy,
      },
    });
  }

  @Get('overview')
  async overview(@CurrentUser() user: JwtPayload) {
    const company = await this.ctx.requireCompany(user);
    const [products, warehouses, movements, audits, lowStockRows] = await Promise.all([
      this.prisma.erpProduct.count({ where: { companyId: company.id, deletedAt: null } }),
      this.prisma.erpWarehouse.count({ where: { companyId: company.id, deletedAt: null } }),
      this.prisma.erpStockMovement.count({ where: { companyId: company.id } }),
      this.prisma.erpStockAudit.count({ where: { companyId: company.id } }),
      this.prisma.erpProduct.findMany({
        where: { companyId: company.id, deletedAt: null, type: 'stock' },
        include: { stockLevels: true },
      }),
    ]);
    const lowStock = lowStockRows.filter((p) => p.stockLevels.reduce((s, l) => s + Number(l.quantity), 0) <= Number(p.minStock)).length;
    return { ok: true, data: { counts: { products, warehouses, movements, audits, lowStock } } };
  }

  @Get('products')
  async products(@CurrentUser() user: JwtPayload) {
    const company = await this.ctx.requireCompany(user);
    const data = await this.prisma.erpProduct.findMany({
      where: { companyId: company.id, deletedAt: null },
      include: { stockLevels: { include: { warehouse: true } } },
      orderBy: { name: 'asc' },
    });
    return { ok: true, data };
  }

  @Get('products/:id')
  async product(@CurrentUser() user: JwtPayload, @Param('id') id: string) {
    const company = await this.ctx.requireCompany(user);
    const data = await this.prisma.erpProduct.findFirst({
      where: { id, companyId: company.id, deletedAt: null },
      include: { stockLevels: { include: { warehouse: true } }, movements: { take: 50, orderBy: { createdAt: 'desc' } } },
    });
    if (!data) throw new NotFoundException('الصنف غير موجود');
    return { ok: true, data };
  }

  @Post('products')
  async createProduct(@CurrentUser() user: JwtPayload, @Body() body: unknown) {
    const company = await this.ctx.requireCompany(user);
    const input = createProductSchema.parse(body);
    const { warehouseId, initialStock, ...productInput } = input;
    const data = await this.prisma.$transaction(async (tx) => {
      const product = await tx.erpProduct.create({ data: { companyId: company.id, ...productInput } });
      if (product.type === 'stock' && initialStock > 0) {
        if (!warehouseId) throw new BadRequestException('يجب إرسال warehouseId مع الرصيد الافتتاحي');
        await this.changeStock(tx, {
          companyId: company.id,
          productId: product.id,
          warehouseId,
          type: 'in',
          quantity: initialStock,
          refType: 'opening_balance',
          refId: product.id,
          note: 'رصيد افتتاحي',
          createdBy: user.sub,
        });
      }
      return product;
    });
    return { ok: true, data };
  }

  @Get('warehouses')
  async warehouses(@CurrentUser() user: JwtPayload) {
    const company = await this.ctx.requireCompany(user);
    const data = await this.prisma.erpWarehouse.findMany({
      where: { companyId: company.id, deletedAt: null },
      include: { branch: true, levels: { include: { product: true } } },
      orderBy: { name: 'asc' },
    });
    return { ok: true, data };
  }

  @Post('warehouses')
  async createWarehouse(@CurrentUser() user: JwtPayload, @Body() body: unknown) {
    const company = await this.ctx.requireCompany(user);
    const input = createWarehouseSchema.parse(body);
    const data = await this.prisma.erpWarehouse.create({ data: { companyId: company.id, ...input } });
    return { ok: true, data };
  }

  @Get('stock-levels')
  async stockLevels(@CurrentUser() user: JwtPayload) {
    const company = await this.ctx.requireCompany(user);
    const data = await this.prisma.erpStockLevel.findMany({
      where: { product: { companyId: company.id, deletedAt: null } },
      include: { product: true, warehouse: true },
      orderBy: { updatedAt: 'desc' },
    });
    return { ok: true, data };
  }

  @Get('movements')
  async movements(@CurrentUser() user: JwtPayload) {
    const company = await this.ctx.requireCompany(user);
    const data = await this.prisma.erpStockMovement.findMany({
      where: { companyId: company.id },
      include: { product: true, warehouse: true },
      orderBy: { createdAt: 'desc' },
      take: 200,
    });
    return { ok: true, data };
  }

  @Post('movements')
  async createMovement(@CurrentUser() user: JwtPayload, @Body() body: unknown) {
    const company = await this.ctx.requireCompany(user);
    const input = stockMovementSchema.parse(body);
    const data = await this.prisma.$transaction((tx) =>
      this.changeStock(tx, { ...input, companyId: company.id, createdBy: user.sub, refType: 'manual' }),
    );
    return { ok: true, data };
  }

  @Get('audits')
  async audits(@CurrentUser() user: JwtPayload) {
    const company = await this.ctx.requireCompany(user);
    const data = await this.prisma.erpStockAudit.findMany({
      where: { companyId: company.id },
      include: { warehouse: true, _count: { select: { lines: true } } },
      orderBy: { createdAt: 'desc' },
    });
    return { ok: true, data };
  }

  @Get('audits/:id')
  async auditDetail(@CurrentUser() user: JwtPayload, @Param('id') id: string) {
    const company = await this.ctx.requireCompany(user);
    const audit = await this.prisma.erpStockAudit.findFirst({
      where: { id, companyId: company.id },
      include: { warehouse: true, lines: { include: { product: true } } },
    });
    if (!audit) throw new NotFoundException('الجرد غير موجود');
    return { ok: true, data: audit };
  }

  @Post('audits')
  async createAudit(@CurrentUser() user: JwtPayload, @Body() body: unknown) {
    const company = await this.ctx.requireCompany(user);
    const input = createStockAuditSchema.parse(body);
    const warehouse = await this.prisma.erpWarehouse.findFirst({ where: { id: input.warehouseId, companyId: company.id, deletedAt: null } });
    if (!warehouse) throw new BadRequestException('المخزن غير صالح');
    const products = await this.prisma.erpProduct.findMany({
      where: { companyId: company.id, type: 'stock', deletedAt: null },
      include: { stockLevels: { where: { warehouseId: warehouse.id } } },
    });
    const ref = this.ctx.nextRef('AUD');
    const audit = await this.prisma.$transaction(async (tx) => {
      const created = await tx.erpStockAudit.create({
        data: { companyId: company.id, warehouseId: warehouse.id, ref, note: input.note, createdBy: user.sub, status: 'draft' },
      });
      if (products.length > 0) {
        await tx.erpStockAuditLine.createMany({
          data: products.map((p) => {
            const systemQty = p.stockLevels[0] ? Number(p.stockLevels[0].quantity) : 0;
            return { auditId: created.id, productId: p.id, systemQty, countedQty: systemQty, varianceQty: 0 };
          }),
        });
      }
      return created;
    });
    return { ok: true, data: audit };
  }

  @Patch('audits/:id/lines')
  async updateAuditLines(@CurrentUser() user: JwtPayload, @Param('id') id: string, @Body() body: unknown) {
    const company = await this.ctx.requireCompany(user);
    const input = updateStockAuditLinesSchema.parse(body);
    const audit = await this.prisma.erpStockAudit.findFirst({ where: { id, companyId: company.id } });
    if (!audit) throw new NotFoundException('الجرد غير موجود');
    if (audit.status === 'posted' || audit.status === 'cancelled') throw new BadRequestException('لا يمكن تعديل جرد مرحّل أو ملغى');
    await this.prisma.$transaction(async (tx) => {
      for (const line of input.lines) {
        const existing = await tx.erpStockAuditLine.findFirst({ where: { auditId: id, productId: line.productId } });
        if (!existing) continue;
        const variance = line.countedQty - Number(existing.systemQty);
        await tx.erpStockAuditLine.update({ where: { id: existing.id }, data: { countedQty: line.countedQty, varianceQty: variance, note: line.note } });
      }
    });
    return this.auditDetail(user, id);
  }

  @Patch('audits/:id/start')
  async startAudit(@CurrentUser() user: JwtPayload, @Param('id') id: string) {
    const company = await this.ctx.requireCompany(user);
    const audit = await this.prisma.erpStockAudit.findFirst({ where: { id, companyId: company.id } });
    if (!audit) throw new NotFoundException('الجرد غير موجود');
    if (audit.status !== 'draft') throw new BadRequestException('الجرد ليس في حالة مسودة');
    const data = await this.prisma.erpStockAudit.update({ where: { id }, data: { status: 'counting', countedAt: new Date() } });
    return { ok: true, data };
  }

  @Patch('audits/:id/post')
  async postAudit(@CurrentUser() user: JwtPayload, @Param('id') id: string) {
    const company = await this.ctx.requireCompany(user);
    const audit = await this.prisma.erpStockAudit.findFirst({ where: { id, companyId: company.id }, include: { lines: true } });
    if (!audit) throw new NotFoundException('الجرد غير موجود');
    if (audit.status !== 'counting' && audit.status !== 'draft') throw new BadRequestException('لا يمكن ترحيل هذا الجرد');
    await this.prisma.$transaction(async (tx) => {
      for (const line of audit.lines) {
        const variance = Number(line.varianceQty);
        if (variance === 0) continue;
        await this.changeStock(tx, {
          companyId: company.id,
          productId: line.productId,
          warehouseId: audit.warehouseId,
          type: variance > 0 ? 'in' : 'out',
          quantity: Math.abs(variance),
          refType: 'stock_audit',
          refId: audit.id,
          note: variance > 0 ? 'جرد — زيادة' : 'جرد — نقص',
          createdBy: user.sub,
        });
      }
      await tx.erpStockAudit.update({ where: { id }, data: { status: 'posted', postedAt: new Date() } });
    });
    return this.auditDetail(user, id);
  }
}
