import { PrismaService } from '@app/libs/modules/database/prisma.service';
import { PostDto } from './post.dto';
import { CreatePostDto } from './create.dto';
import { UpdatePostDto } from './update.dto';
import { DeletePostDto } from './delete.dto';

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
  async getView(id: number): Promise<PostDto | null> {
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
