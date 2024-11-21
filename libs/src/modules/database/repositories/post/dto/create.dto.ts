import { IsInt, IsString, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

/**
 * Create dto
 */
export class CreatePostDto {
  @IsString()
  @Min(5)
  @ApiProperty({ example: 'Title', required: true })
  title: string;

  @IsString()
  @Min(10)
  @ApiProperty({ example: 'Hello world', required: true })
  description: string;

  @IsInt()
  @ApiProperty({ example: 1, required: true })
  authorId: number;
}
