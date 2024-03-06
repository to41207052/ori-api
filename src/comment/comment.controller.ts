import { Controller, Get } from '@nestjs/common';
import { CommentService } from './comment.service';


@Controller('comment')
export class CommentController {
    constructor(private readonly commentService: CommentService){}

    @Get()
    async getComment(){
        console.log(`◾️◾️◾️◾️◾️◾️◾️◾️◾️contoroller1◾️◾️◾️◾️◾️◾️◾️◾️◾️`);
        const comment = await this.commentService.findRandComment();
        console.log(`◾️◾️controller2◾️◾️◾️◾️◾️◾️◾️${comment}◾️◾️◾️◾️◾️◾️◾️◾️◾️`);
     return comment
    }
}
