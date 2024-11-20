import { Controller, Get } from '@nestjs/common';
import { PrismaService } from '@app/libs/services/database/prisma.service';

@Controller('api')
export class GatewayController {
  constructor(private prismaService: PrismaService) {}

  @Get('hello')
  async getHello(): Promise<any> {
    return this.prismaService.user.findMany({});
  }
}
