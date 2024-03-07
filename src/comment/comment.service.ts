import { Injectable } from '@nestjs/common';
// import { CommentRepository } from './comment.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Comment } from './comment.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CommentService {
    constructor(
        @InjectRepository(Comment)
        private readonly commentRepository: Repository<Comment>,
        ){}

        async randomComment(): Promise<Comment> {
            const count = await this.commentRepository.createQueryBuilder('Comment')
            .select('COUNT(*)', 'count')
            .getRawOne();

            const a:string = count.count;
            console.log(a)
            
            
            const b: number = parseInt(a)
            console.log(b)

            const random: number = Math.floor(Math.random()* b + 1)
            console.log(random)

            const randComment = await this.commentRepository.createQueryBuilder('Comment')
            .select([
                'Comment.comment'
            ])
            .where('Comment.comment_id = :random', {random})
            .getOne();

            return randComment
        }
    }
    