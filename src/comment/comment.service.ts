import { Injectable } from '@nestjs/common';
// import { CommentRepository } from './comment.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Comment } from './comment.entity';
import { Repository } from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

@Injectable()
export class CommentService {
    constructor(
        @InjectRepository(Comment)
        private readonly commentRepository: Repository<Comment>,
        ){}

        async randomComment(): Promise<Comment> {
            // レコードの数がオブジェクトで帰ってくる
            const count = await this.commentRepository.createQueryBuilder('Comment')
            .select('COUNT(*)', 'count')
            .getRawOne();

            // レコード数オブジェクトから文字列を抜き出し
            const a:string = count.count;
            console.log(a)
            
            // 抜き出したオブジェクトを数字にする
            const b: number = parseInt(a)
            console.log(b)

            // １〜レコード数内でランダムな数字を作成
            const random: number = Math.floor(Math.random()* b + 1)
            console.log(random)

            // テーブルからランダムな数字に対応するIDのコメントを引き出して返す
            const randComment = await this.commentRepository.createQueryBuilder('Comment')
            .select([
                'Comment.comment'
            ])
            .where('Comment.comment_id = :random', {random})
            .getOne();

            console.log(`
            レコードの数:${b}
            作成したランダム数:${random}
            引き出したコメント:${JSON.stringify(randComment)}
            `)
            return randComment
        }

        async PostComment(comment:QueryDeepPartialEntity<Comment> ){
            // コメントをインサートする

            await this.commentRepository.insert(comment);
            return 
        }
    }
    