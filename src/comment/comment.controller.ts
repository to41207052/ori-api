import { Body, Controller, Get, Post } from '@nestjs/common';
import { CommentService } from './comment.service';


@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

    // 接続するとコメントがランダムに返ってくる http://localhost:3000/comment
    @Get()
    async getComment(){
        const commentOBJ = await this.commentService.randomComment();
        return commentOBJ.comment
    }

    // データを挿入する
    @Post('post')
    async postComment(
        @Body() comment : {comment: string}
    ){
        await this.commentService.PostComment(comment);
        return console.log(`
        ${comment.comment} 
        INSERT 完了しました`);
    }
}
