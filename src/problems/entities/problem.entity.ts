import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from '../../users/entities/user.entity';

@Entity()
export class Problem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  photo: number;

  @Column('timestamp')
  timestamp: Date;

  @ManyToOne(() => User, user => user.problems)
  user: User;
    likes: any;
    comments: any;
}
