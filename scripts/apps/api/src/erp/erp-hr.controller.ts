import { BadRequestException, Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { createAttendanceSchema, createEmployeeSchema, createLeaveRequestSchema, updateLeaveStatusSchema } from '@allinall/erp';
import { CurrentUser } from '../auth/auth.decorators';
import type { JwtPayload } from '../auth/jwt.strategy';
import { PrismaService } from '../prisma/prisma.service';
import { ErpContextService } from './erp-context.service';

@Controller('erp/hr')
export class ErpHrController {
  constructor(
    private readonly prisma: PrismaService,
    private readonly ctx: ErpContextService,
  ) {}

  @Get('employees')
  async employees(@CurrentUser() user: JwtPayload) {
    const company = await this.ctx.requireCompany(user);
    const data = await this.prisma.erpEmployee.findMany({ where: { companyId: company.id, deletedAt: null }, include: { department: true }, orderBy: { name: 'asc' } });
    return { ok: true, data };
  }

  @Post('employees')
  async createEmployee(@CurrentUser() user: JwtPayload, @Body() body: unknown) {
    const company = await this.ctx.requireCompany(user);
    const input = createEmployeeSchema.parse(body);
    const data = await this.prisma.erpEmployee.create({ data: { companyId: company.id, ...input, email: input.email || null } });
    return { ok: true, data };
  }

  @Get('attendance')
  async attendance(@CurrentUser() user: JwtPayload) {
    const company = await this.ctx.requireCompany(user);
    const data = await this.prisma.erpAttendance.findMany({ where: { employee: { companyId: company.id } }, include: { employee: true }, orderBy: { workDate: 'desc' }, take: 200 });
    return { ok: true, data };
  }

  @Post('attendance')
  async createAttendance(@CurrentUser() user: JwtPayload, @Body() body: unknown) {
    const company = await this.ctx.requireCompany(user);
    const input = createAttendanceSchema.parse(body);
    const employee = await this.prisma.erpEmployee.findFirst({ where: { id: input.employeeId, companyId: company.id, deletedAt: null } });
    if (!employee) throw new BadRequestException('الموظف غير موجود');
    const data = await this.prisma.erpAttendance.upsert({
      where: { employeeId_workDate: { employeeId: input.employeeId, workDate: input.workDate } },
      update: { checkIn: input.checkIn, checkOut: input.checkOut, note: input.note },
      create: input,
    });
    return { ok: true, data };
  }

  @Get('leave-requests')
  async leaveRequests(@CurrentUser() user: JwtPayload) {
    const company = await this.ctx.requireCompany(user);
    const data = await this.prisma.erpLeaveRequest.findMany({ where: { employee: { companyId: company.id } }, include: { employee: true }, orderBy: { createdAt: 'desc' }, take: 200 });
    return { ok: true, data };
  }

  @Post('leave-requests')
  async createLeaveRequest(@CurrentUser() user: JwtPayload, @Body() body: unknown) {
    const company = await this.ctx.requireCompany(user);
    const input = createLeaveRequestSchema.parse(body);
    const employee = await this.prisma.erpEmployee.findFirst({ where: { id: input.employeeId, companyId: company.id, deletedAt: null } });
    if (!employee) throw new BadRequestException('الموظف غير موجود');
    const data = await this.prisma.erpLeaveRequest.create({ data: input });
    return { ok: true, data };
  }

  @Patch('leave-requests/:id/status')
  async updateLeaveStatus(@CurrentUser() user: JwtPayload, @Param('id') id: string, @Body() body: unknown) {
    const company = await this.ctx.requireCompany(user);
    const input = updateLeaveStatusSchema.parse(body);
    const existing = await this.prisma.erpLeaveRequest.findFirst({ where: { id, employee: { companyId: company.id } } });
    if (!existing) throw new BadRequestException('طلب الإجازة غير موجود');
    const data = await this.prisma.erpLeaveRequest.update({ where: { id }, data: { status: input.status } });
    return { ok: true, data };
  }
}
