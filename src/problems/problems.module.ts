import { Module } from '@nestjs/common';
import { ProblemsService } from './problems.service';
import { ProblemsController } from './problems.controller';

@Module({
  controllers: [ProblemsController],
  providers: [ProblemsService],
})
export class ProblemsModule {}
