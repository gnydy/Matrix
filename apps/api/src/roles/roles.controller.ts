import { Controller, Get } from '@nestjs/common';
import { asStringArray } from '@allinall/database';
import { Permissions } from '../auth/auth.guard';
import { PrismaService } from '../prisma/prisma.service';

@Controller('roles')
export class RolesController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  @Permissions('roles:read')
  async list() {
    const roles = await this.prisma.role.findMany({ orderBy: { name: 'asc' } });
    return {
      ok: true,
      data: roles.map((r) => ({
        ...r,
        permissions: asStringArray(r.permissions),
      })),
    };
  }
}
