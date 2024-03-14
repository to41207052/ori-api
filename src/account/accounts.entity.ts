import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('account')
export class Account {
  // constructor(
  //   accountNumber: number,
  //   accountId: string,
  //   accountName: string,
  //   mailAddress: string,
  //   password: string,
  // ) {
  //   (this.accountNumber = accountNumber),
  //     (this.accountId = accountId),
  //     (this.accountName = accountName),
  //     (this.mailAddress = mailAddress),
  //     (this.password = password);
  // }

  // accountのナンバー（特に使用する予定なし）
  @PrimaryGeneratedColumn('increment', {
    type: 'int',
    name: 'account-number',
  })
  readonly accountNumber?: number;

  // ID 一意
  @Column({
    unique: true,
    type: 'varchar',
    length: 256,
    name: 'account-id',
    nullable: false,
  })
  accountId!: string;

  // 32文字以内
  @Column({
    type: 'varchar',
    length: 32,
    name: 'account-name',
  })
  accountName!: string;

  @Column({
    unique: true,
    type: 'varchar',
    length: 256,
    name: 'mail-address',
  })
  mailAddress!: string;

  @Column({
    type: 'varchar',
    length: 256,
    name: 'password',
  })
  password!: string;
}
