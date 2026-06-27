import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import helmet from 'helmet';
import { assertSecureSecretsInProduction } from '@allinall/security';
import { AppModule } from './app.module';
import { getApiPort, getCorsOrigins } from '@allinall/config';

async function bootstrap() {
  assertSecureSecretsInProduction();

  const app = await NestFactory.create(AppModule);
  app.use(
    helmet({
      contentSecurityPolicy: false,
      crossOriginEmbedderPolicy: false,
    }),
  );
  app.setGlobalPrefix('api/v1');
  app.enableCors({
    origin: getCorsOrigins(),
    credentials: true,
    methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  });
  const port = getApiPort();
  await app.listen(port, '127.0.0.1');
  console.log(`Matrix API listening on http://127.0.0.1:${port}/api/v1/health`);
}

bootstrap();
