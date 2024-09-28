import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Contenido {
  @PrimaryGeneratedColumn()
  id: number;
}
