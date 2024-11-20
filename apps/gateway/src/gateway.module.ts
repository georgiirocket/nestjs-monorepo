import { Module } from '@nestjs/common';
import { GatewayController } from './gateway.controller';
import { ConfigModule } from '@nestjs/config';
import { ENV_FILE_PATH } from '@app/libs/constants';
import * as Joi from 'joi';
import { PrismaService } from '@app/libs/services/database/prisma.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ENV_FILE_PATH,
      validationSchema: Joi.object({
        GATEWAY_PORT: Joi.string().required(),
      }),
    }),
  ],
  controllers: [GatewayController],
  providers: [PrismaService],
})
export class GatewayModule {}
