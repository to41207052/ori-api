// import { Inject, Injectable } from "@nestjs/common";
// import { EntityRepository, Repository, getManager } from "typeorm";
// import { Comment } from "./comment.entity";
// // import myDatasource from
// // export const commentRepository = myDataSource.getRepository(Comment).extend({
// @Injectable()
// @EntityRepository(Comment)
// export class CommentRepository extends Repository<Comment>{
//     constructor(){
//         const manager = getManager();
//         super(Comment, manager);
//     }

//     async randomComment():Promise<Comment>{

        

//         console.log(`@@@@@@@@@@repository .createQueryBuilder 死んでも実行したく無いようだ@@@@@@@@@@`);
//         // すべてのコメントの数を確認
//         // const count = await this.createQueryBuilder('Comment')
//         // .select('COUNT(*)', 'count')
//         // .getRawOne();
//         const random:number = 5
//         // const random = await Math.floor(Math.random()* count + 1);
        
//         const randComment =await this.createQueryBuilder('Comment')
//         .select([
//             'Comment.comment'
//         ])
//         .where('Comment.comment_id = :random', {random})
//         .getOne();

//         return randComment
//     }
// }