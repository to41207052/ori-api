import { Inject, Injectable } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { Comment } from "./comment.entity";
// import myDatasource from
// export const commentRepository = myDataSource.getRepository(Comment).extend({
@Injectable()
@EntityRepository(Comment)
export class CommentRepository extends Repository<Comment>{
    async randomComment():Promise<Comment>{

        console.log(`◾️◾️◾️◾️◾️◾️◾️◾️◾️ここはどうやら実行されてない◾️◾️◾️◾️◾️◾️◾️◾️◾️`);
        // すべてのコメントの数を確認
        const count = await this.createQueryBuilder('Comment')
        .select('COUNT(*)', 'count')
        .getRawOne();
        
        const random = await Math.floor(Math.random()* count + 1);
        
        const randComment =await this.createQueryBuilder('Comment')
        .select([
            'Comment.comment'
        ])
        .where('Comment.comment_id = :random', {random})
        .getOne();

        return await randComment
    }
}