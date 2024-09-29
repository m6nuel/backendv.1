import { IsOptional, IsString } from 'class-validator';

export class CreateContenidoDto {
  @IsString()
  title: string;

  @IsString()
  descrip: string;

  @IsString()
  @IsOptional()
  code: string;

  @IsString()
  @IsOptional()
  imgUrl: string;
}
