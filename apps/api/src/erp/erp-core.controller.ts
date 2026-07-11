import { BadRequestException, Body, Controller, Get, Post } from '@nestjs/common';
import { createBranchSchema, createDepartmentSchema, createFiscalYearSchema } from '@allinall/erp';
import { CurrentUser } from '../auth/auth.decorators';
import type { JwtPayload } from '../auth/jwt.strategy';
import { PrismaService } from '../prisma/prisma.service';
import { ErpContextService } from './erp-context.service';
import type { ErpOk } from './erp-response';

@Controller('erp/core')
export class ErpCoreController {
  constructor(
    private readonly prisma: PrismaService,
    private readonly ctx: ErpContextService,
  ) {}

  @Get('overview')
  async overview(@CurrentUser() user: JwtPayload): Promise<ErpOk> {
    const company = await this.ctx.requireCompany(user);
    const [branches, fiscalYears, departments, warehouses, products, customers, suppliers] =
      await Promise.all([
        this.prisma.erpBranch.count({ where: { companyId: company.id, deletedAt: null } }),
        this.prisma.erpFiscalYear.count({ where: { companyId: company.id } }),
        this.prisma.erpDepartment.count({ where: { branch: { companyId: company.id }, deletedAt: null } }),
        this.prisma.erpWarehouse.count({ where: { companyId: company.id, deletedAt: null } }),
        this.prisma.erpProduct.count({ where: { companyId: company.id, deletedAt: null } }),
        this.prisma.erpParty.count({ where: { companyId: company.id, deletedAt: null, type: { in: ['customer', 'both'] } } }),
        this.prisma.erpParty.count({ where: { companyId: company.id, deletedAt: null, type: { in: ['supplier', 'both'] } } }),
      ]);
    return {
      ok: true,
      data: { company, counts: { branches, fiscalYears, departments, warehouses, products, customers, suppliers } },
    };
  }

  @Get('branches')
  async branches(@CurrentUser() user: JwtPayload): Promise<ErpOk> {
    const company = await this.ctx.requireCompany(user);
    const data = await this.prisma.erpBranch.findMany({
      where: { companyId: company.id, deletedAt: null },
      include: { departments: { where: { deletedAt: null } }, warehouses: { where: { deletedAt: null } } },
      orderBy: { name: 'asc' },
    });
    return { ok: true, data };
  }

  @Post('branches')
  async createBranch(@CurrentUser() user: JwtPayload, @Body() body: unknown): Promise<ErpOk> {
    const company = await this.ctx.requireCompany(user);
    const input = createBranchSchema.parse(body);
    const data = await this.prisma.erpBranch.create({
      data: { companyId: company.id, ...input },
    });
    return { ok: true, data };
  }

  @Get('departments')
  async departments(@CurrentUser() user: JwtPayload): Promise<ErpOk> {
    const company = await this.ctx.requireCompany(user);
    const data = await this.prisma.erpDepartment.findMany({
      where: { branch: { companyId: company.id }, deletedAt: null },
      include: { branch: true },
      orderBy: { name: 'asc' },
    });
    return { ok: true, data };
  }

  @Post('departments')
  async createDepartment(@CurrentUser() user: JwtPayload, @Body() body: unknown): Promise<ErpOk> {
    const company = await this.ctx.requireCompany(user);
    const input = createDepartmentSchema.parse(body);
    const branch = await this.prisma.erpBranch.findFirst({ where: { id: input.branchId, companyId: company.id, deletedAt: null } });
    if (!branch) throw new BadRequestException('الفرع غير موجود');
    const data = await this.prisma.erpDepartment.create({ data: input });
    return { ok: true, data };
  }

  @Get('fiscal-years')
  async fiscalYears(@CurrentUser() user: JwtPayload): Promise<ErpOk> {
    const company = await this.ctx.requireCompany(user);
    const data = await this.prisma.erpFiscalYear.findMany({
      where: { companyId: company.id },
      orderBy: { startsOn: 'desc' },
    });
    return { ok: true, data };
  }

  @Post('fiscal-years')
  async createFiscalYear(@CurrentUser() user: JwtPayload, @Body() body: unknown): Promise<ErpOk> {
    const company = await this.ctx.requireCompany(user);
    const input = createFiscalYearSchema.parse(body);
    const data = await this.prisma.erpFiscalYear.create({ data: { companyId: company.id, ...input } });
    return { ok: true, data };
  }
}
