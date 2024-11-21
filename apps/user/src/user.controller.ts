import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { UserDto } from '@app/libs/dto/user/user.dto';
import { EntityDto } from '@app/libs/dto/entity.dto';
import { CreateUserDto } from '@app/libs/dto/user/create.dto';
import { UpdateUserDto } from '@app/libs/dto/user/update.dto';
import { DeleteUserDto } from '@app/libs/dto/user/delete.dto';
import { USER_PATTERN } from '@app/libs/constants/patterns/user';
import { UserService } from './user.service';

/**
 * Controller
 */
@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  /**
   * Get users
   */
  @MessagePattern(USER_PATTERN.GET_USERS)
  async getList(): Promise<UserDto[]> {
    return await this.userService.getList();
  }

  /**
   * Get user by id
   */
  @MessagePattern(USER_PATTERN.GET_USER)
  async getView(data: EntityDto): Promise<UserDto> {
    const user = await this.userService.getView(data.entityId);

    if (!user) {
      throw new Error('User not found');
    }

    return user;
  }

  /**
   * Create users
   */
  @MessagePattern(USER_PATTERN.CREATE_USER)
  async createEntity(data: CreateUserDto): Promise<UserDto> {
    return this.userService.createEntity(data);
  }

  /**
   * Update user
   * @param data
   */
  @MessagePattern(USER_PATTERN.UPDATE_USER)
  async updateEntity(data: UpdateUserDto): Promise<UserDto> {
    return this.userService.updateEntity(data);
  }

  /**
   * Delete user
   * @param data
   */
  @MessagePattern(USER_PATTERN.DELETE_USER)
  async deleteEntity(data: DeleteUserDto): Promise<UserDto> {
    return this.userService.deleteUser(data);
  }
}
