import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Problem } from '../../problems/entities/problem.entity';

@Entity()
export class Like {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, user => user.likes)
  user: User;

  @ManyToOne(() => Problem, problem => problem.likes)
  problem: Problem;
}
