import { Module } from '@nestjs/common';
import { GatewayController } from './gateway.controller';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { PrismaModule } from '@app/libs/modules/database/prisma.module';

@Module({
  imports: [
    PrismaModule,
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        GATEWAY_PORT: Joi.string().required(),
      }),
    }),
  ],
  controllers: [GatewayController],
})
export class GatewayModule {}
