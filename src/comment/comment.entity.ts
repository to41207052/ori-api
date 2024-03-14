import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('comment')
export class Comment {
  constructor(commentId: number, comment: string) {
    (this.commentId = commentId), (this.comment = comment);
  }

  @PrimaryGeneratedColumn('increment', {
    type: 'int',
    name: 'comment_id',
  })
  readonly commentId?: number;

  @Column({
    name: 'comment',
    nullable: false,
    type: 'text',
    charset: 'utf8mb4',
    collation: 'utf8mb4_unicode_ci',
  })
  comment: string;
}
