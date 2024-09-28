import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Subtema {
  @PrimaryGeneratedColumn()
  id: number;
}
