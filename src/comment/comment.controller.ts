import { Controller, Get } from '@nestjs/common';
import { CommentService } from './comment.service';


@Controller('comment')
export class CommentController {
    constructor(private readonly commentService: CommentService){}

    @Get()
    async getComment(){

        const comment = await this.commentService.randomComment();

     return comment
    }
}
