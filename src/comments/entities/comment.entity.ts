import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Problem } from '../../problems/entities/problem.entity';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;

  @Column('timestamp')
  timestamp: Date;

  @ManyToOne(() => User, user => user.comments)
  user: User;

  @ManyToOne(() => Problem, problem => problem.comments)
  problem: Problem;
}
