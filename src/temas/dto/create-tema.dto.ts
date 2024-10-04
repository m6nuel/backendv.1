import { IsNumber, IsString } from 'class-validator';

export class CreateTemaDto {
  @IsString()
  tema: string;

  @IsNumber()
  userId: number;
}
