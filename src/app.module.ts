import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProblemsModule } from './problems/problems.module';
import { CommentsModule } from './comments/comments.module';
import { LikesModule } from './likes/likes.module';
import { User } from './users/entities/user.entity';
import { Comment } from './comments/entities/comment.entity';
import { Like } from './likes/entities/like.entity';
import { Problem } from './problems/entities/problem.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'user',
      password: 'pass', 
      database: 'nest_db',
      entities: [User, Comment, Problem, Like],
      synchronize: true,
    }),
    UsersModule,
    LikesModule,
    CommentsModule,
    ProblemsModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
