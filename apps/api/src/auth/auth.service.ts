import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import type { AuthUser } from '@allinall/contracts';
import { asStringArray } from '@allinall/database';
import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwt: JwtService,
    private readonly audit: AuditService,
  ) {}

  async validateUser(email: string, password: string): Promise<{
    id: string;
    email: string;
    name: string;
    passwordHash: string;
    tenantId: string | null;
    roles: { role: { slug: string; permissions: unknown } }[];
  } | null> {
    const user = await this.prisma.user.findFirst({
      where: { email: email.toLowerCase(), deletedAt: null, status: 'active' },
      include: { roles: { include: { role: true } }, tenant: true },
    });
    if (!user) return null;
    const ok = await bcrypt.compare(password, user.passwordHash);
    if (!ok) return null;
    return user;
  }

  toAuthUser(user: {
    id: string;
    email: string;
    name: string;
    tenantId: string | null;
    roles: { role: { slug: string; permissions: unknown } }[];
  }): AuthUser {
    const roles = user.roles.map((r) => r.role.slug);
    const permissions = new Set<string>();
    for (const r of user.roles) {
      for (const p of asStringArray(r.role.permissions)) permissions.add(p);
    }
    return {
      id: user.id,
      email: user.email,
      name: user.name,
      tenantId: user.tenantId,
      roles,
      permissions: [...permissions],
    };
  }

  signToken(user: AuthUser) {
    return this.jwt.sign({
      sub: user.id,
      email: user.email,
      name: user.name,
      tenantId: user.tenantId,
      roles: user.roles,
      permissions: user.permissions,
    });
  }

  async login(email: string, password: string, ip?: string, userAgent?: string) {
    const user = await this.validateUser(email, password);
    if (!user) {
      await this.audit.writeLogin({ email, success: false, ip, userAgent });
      throw new UnauthorizedException('Invalid credentials');
    }
    const authUser = this.toAuthUser(user);
    const token = this.signToken(authUser);
    await this.audit.writeLogin({
      email,
      success: true,
      userId: user.id,
      ip,
      userAgent,
    });
    await this.audit.write({
      action: 'login',
      entity: 'session',
      actor: user.email,
      userId: user.id,
      tenantId: user.tenantId,
      ip,
      metadata: { email: user.email },
    });
    return { token, user: authUser };
  }

  async me(userId: string): Promise<AuthUser> {
    const user = await this.prisma.user.findFirst({
      where: { id: userId, deletedAt: null, status: 'active' },
      include: { roles: { include: { role: true } } },
    });
    if (!user) throw new UnauthorizedException();
    return this.toAuthUser(user);
  }
}
