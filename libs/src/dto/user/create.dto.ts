import { IsString, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

/**
 * Create dto
 */
export class CreateUserDto {
  @IsString()
  @Min(2)
  @ApiProperty({ example: 'Piter', required: true })
  name: string;
}
