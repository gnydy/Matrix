import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import type { Request } from 'express';
import { loginSchema } from '@allinall/validation';
import { AuthService } from './auth.service';
import { CurrentUser, Public } from './auth.decorators';
import type { JwtPayload } from './jwt.strategy';
import { clientIp, enforceRateLimit } from '../common/security.util';

@Controller('auth')
export class AuthController {
  constructor(private readonly auth: AuthService) {}

  @Public()
  @Post('login')
  async login(@Body() body: unknown, @Req() req: Request) {
    const ip = clientIp(req);
    enforceRateLimit('auth:login', ip, 10, 15 * 60 * 1000);

    const parsed = loginSchema.safeParse(body);
    if (!parsed.success) {
      return { ok: false, error: 'Invalid login payload' };
    }
    const userAgent = req.headers['user-agent'];
    const result = await this.auth.login(
      parsed.data.email,
      parsed.data.password,
      ip,
      userAgent ?? undefined,
    );
    return { ok: true, data: result };
  }

  @Post('logout')
  logout() {
    return { ok: true, data: null };
  }

  @Get('me')
  async me(@CurrentUser() user: JwtPayload) {
    const profile = await this.auth.me(user.sub);
    return { ok: true, data: profile };
  }
}
