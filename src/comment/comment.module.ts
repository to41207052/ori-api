import { Module } from '@nestjs/common';
import { CommentController } from './comment.controller';
import { CommentService } from './comment.service';
import {CommentRepository} from './comment.repository'
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comment } from './comment.entity';
@Module({
  imports:[
     TypeOrmModule.forFeature([
      CommentRepository,
      Comment
    ]), 
     
  ],
  controllers: [CommentController],
  providers: [CommentService]
})
export class CommentModule {}
