import { Tema } from 'src/temas/entities/tema.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @CreateDateColumn()
  created: Date;

  @DeleteDateColumn()
  deleted: Date;

  // Relación: Un usuario tiene muchos temas
  @OneToMany(() => Tema, (tema) => tema.user)
  temas: Tema[]; // Este campo representará los temas asociados al usuario
}
