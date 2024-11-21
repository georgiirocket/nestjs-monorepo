import { PrismaService } from '@app/libs/modules/database/prisma.service';
import { UserDto } from './dto/user.dto';
import { CreateUserDto } from './dto/create.dto';
import { UpdateUserDto } from './dto/update.dto';
import { DeleteUserDto } from './dto/delete.dto';

/**
 * Repository
 */
export class UserRepository {
  constructor(private readonly prismaService: PrismaService) {}

  /**
   * Get entities
   */
  async getList(): Promise<UserDto[]> {
    return this.prismaService.user.findMany({});
  }

  /**
   * Get entity
   * @param id
   */
  async getView(id: number): Promise<UserDto> {
    return this.prismaService.user.findUnique({ where: { id } });
  }

  /**
   * Create entity
   * @param data
   */
  async createEntity(data: CreateUserDto): Promise<UserDto> {
    return this.prismaService.user.create({ data });
  }

  /**
   * Update entity
   * @param data
   */
  async updateEntity(data: UpdateUserDto): Promise<UserDto> {
    return this.prismaService.user.update({
      where: { id: data.id },
      data: { name: data.name },
    });
  }

  /**
   * Delete entity
   * @param data
   */
  async deleteUser(data: DeleteUserDto): Promise<UserDto> {
    return this.prismaService.user.delete({ where: data });
  }
}
