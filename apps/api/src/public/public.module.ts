import { Module } from '@nestjs/common';
import { PublicLeadsController } from './leads.controller';

@Module({
  controllers: [PublicLeadsController],
})
export class PublicModule {}
