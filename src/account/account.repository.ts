// import { Repository } from 'typeorm';
// import { Account } from './accounts.entity';

// export const ACCOUNT_REPOSITORY = Symbol('USER_REPOSITORY');
// export interface AccountRepository
//   extends Repository<Account>,
//     AccountRepositoryAddition {}
// export interface AccountRepositoryAddition {
//   findAccount(id: string): Promise<Account>;
// }

// export const UserRepositoryProvider = {
//   provide: ACCOUNT_REPOSITORY,
//   useFactory: (qr: QeryRunner): AccountRepository =>
//     qr.manager.getRepository(Account).extend<AccountRepositoryAddition>({
//         async findAccount(id: string): Promise<Account> {
//             return await this.find({ where: {id} })
//         }
//     }),
// };

// @Inject(ACCOUNT_REPOSITORY) private AccountRepository: AccountRepository