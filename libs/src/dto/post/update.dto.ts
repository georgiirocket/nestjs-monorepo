import { ApiProperty, PickType } from '@nestjs/swagger';
import { CreatePostDto } from './create.dto';
import { IsInt } from 'class-validator';

/**
 * Update dto
 */
export class UpdatePostDto extends PickType(CreatePostDto, [
  'title',
  'description',
]) {
  @IsInt()
  @ApiProperty({ example: 1, required: true })
  id: number;
}
