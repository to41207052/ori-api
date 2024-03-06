import { Injectable } from '@nestjs/common';
import { CommentRepository } from './comment.repository';

@Injectable()
export class CommentService {

    constructor(private readonly commentRepository: CommentRepository){}


    async findRandComment(){
        console.log(`◾️◾️◾️◾️◾️◾️◾️◾️◾️service1◾️◾️◾️◾️◾️◾️◾️◾️◾️`);
        const comment = await this.commentRepository.randomComment();
        console.log(`◾️◾️◾️◾️◾️◾️◾️◾️◾️${comment}◾️◾️◾️◾️◾️◾️◾️◾️◾️`);
        // console.log(`◾️◾️◾️◾️◾️◾️◾️◾️◾️${this.commentRepository.randomComment()}◾️◾️◾️◾️◾️◾️◾️◾️◾️`);
        return comment
    }
    
}
