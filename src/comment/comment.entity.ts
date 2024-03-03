import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm'


@Entity('comment')
export class Comment {

    constructor(
        commentId: number,
        comment: string
    ){
        this.commentId = commentId,
        this.comment = comment
    }

    @PrimaryGeneratedColumn('increment',{
        type: 'int',
        name: 'comment_id',
    })
    readonly commentId?: number;

    @Column('text', {
        name: 'comment',
        nullable: false,
    })
    comment: string;
}
