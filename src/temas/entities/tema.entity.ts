import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Tema {
  @PrimaryGeneratedColumn()
  id: number;
}
