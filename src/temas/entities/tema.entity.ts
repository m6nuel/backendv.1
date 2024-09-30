import { User } from 'src/user/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Tema {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  tema: string;

  @CreateDateColumn()
  created: Date;

  @DeleteDateColumn()
  deleted: Date;

  // Relación: Muchos temas pertenecen a un usuario
  @ManyToOne(() => User, (user) => user.temas)
  user: User; // Este campo representará al usuario propietario del tema
}
