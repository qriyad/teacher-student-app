import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Comment } from '../../comments/entities/comment.entity';
import { Problem } from '../../problems/entities/problem.entity';
import { Like } from '../../likes/entities/like.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  role: string;

  @Column()
  email: string;

  @OneToMany(() => Comment, comment => comment.user)
  comments: Comment[];

  @OneToMany(() => Problem, problem => problem.user)
  problems: Problem[];

  @OneToMany(() => Like, like => like.user)
  likes: Like[];
}
