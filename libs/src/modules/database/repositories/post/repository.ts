import { PrismaService } from '@app/libs/modules/database/prisma.service';
import { PostDto } from './dto/post.dto';
import { CreatePostDto } from './dto/create.dto';
import { UpdatePostDto } from './dto/update.dto';
import { DeletePostDto } from './dto/delete.dto';

/**
 * Repository
 */
export class PostRepository {
  constructor(private readonly prismaService: PrismaService) {}

  /**
   * Get entities
   */
  async getList(): Promise<PostDto[]> {
    return this.prismaService.post.findMany({});
  }

  /**
   * Get entity
   * @param id
   */
  async getView(id: number): Promise<PostDto> {
    return this.prismaService.post.findUnique({ where: { id } });
  }

  /**
   * Create entity
   * @param data
   */
  async createEntity(data: CreatePostDto): Promise<PostDto> {
    return this.prismaService.post.create({ data });
  }

  /**
   * Update entity
   * @param data
   */
  async updateEntity(data: UpdatePostDto): Promise<PostDto> {
    return this.prismaService.post.update({
      where: { id: data.id },
      data: { title: data.title, description: data.description },
    });
  }

  /**
   * Delete entity
   * @param data
   */
  async deleteUser(data: DeletePostDto): Promise<PostDto> {
    return this.prismaService.post.delete({ where: data });
  }
}
