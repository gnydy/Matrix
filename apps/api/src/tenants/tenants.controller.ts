import { Controller, Get } from '@nestjs/common';
import { CurrentUser } from '../auth/auth.decorators';
import type { JwtPayload } from '../auth/jwt.strategy';
import { PrismaService } from '../prisma/prisma.service';

@Controller('tenants')
export class TenantsController {
  constructor(private readonly prisma: PrismaService) {}

  @Get('me')
  async me(@CurrentUser() user: JwtPayload) {
    if (!user.tenantId) return { ok: true, data: null };
    const tenant = await this.prisma.tenant.findUnique({ where: { id: user.tenantId } });
    return { ok: true, data: tenant };
  }
}
