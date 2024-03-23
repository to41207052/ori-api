// import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// @Entity('account')
// export class Account {
//   constructor(
//     accountNumber: number,
//     accountId: string,
//     accountName: string,
//     mailAddress: string,
//   ) {
//     (this.accountNumber = accountNumber),
//       (this.accountId = accountId),
//       (this.accountName = accountName),
//       (this.mailAddress = mailAddress);
//   }

//   // accountのナンバー（特に使用する予定なし）
//   @PrimaryGeneratedColumn('increment', {
//     type: 'int',
//     name: 'account-number',
//   })
//   readonly accountNumber?: number;

//   // ID 一意で ８文字以上
//   @Column({
//     unique: true,
//     length: 8,
//   })
//   accountId!: string;

//   // 32文字以内
//   @Column({
//     type: 'varchar',
//     length: 32,
//   })
//   accountName!: string;

//   @Column({
//     unique: true,
//     type: 'nvarchar',
//     length: 256,
//   })
//   mailAddress!: string;
// }
