import { Controller, Get } from '@nestjs/common';
import { Public } from '../auth/auth.decorators';

@Controller('health')
export class HealthController {
  @Public()
  @Get()
  health() {
    return { ok: true, service: 'matrix-api', ts: new Date().toISOString() };
  }
}
