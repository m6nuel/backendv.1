import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Contenido {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  descrip: string;

  @Column({ nullable: true })
  code: string;

  @Column({ nullable: true })
  imgUrl: string;

  @CreateDateColumn()
  created: Date;

  @DeleteDateColumn()
  deleted: Date;
}
