import { Injectable, Logger } from '@nestjs/common';
import { Account } from './accounts.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
import { findAccountDto } from './accounts.request';

@Injectable()
export class AccountsService {
  private readonly logger = new Logger(AccountsService.name);
  constructor(
    @InjectRepository(Account)
    private readonly accountsRepository: Repository<Account>,
  ) {}

  /**アカウント登録 */
  async registerAccount(account: QueryDeepPartialEntity<Account>) {
    console.log('いんさーとするぞ');
    try {
      await this.accountsRepository.insert(account);
      return;
    } catch (error) {
      this.logger.error('MailAddress,もしくはaccountIdは既に使用されています');
      throw new Error('やりなおすがよい');
    }
  }

  /**アカウント認証? */
  async findAccount(account: findAccountDto): Promise<boolean> {
    console.log(`受け取ったオブジェクトの中身:${JSON.stringify(account)}`);
    const id: string = account.id;
    const pass: string = account.pass;
    console.log(`
    受け取りました
    id      :${id} 
    password:${pass}
    `);

    const query = await this.accountsRepository.findOne({
      where: { accountId: id, password: pass },
    });
    console.log(`
    探しています
    ${JSON.stringify(query)}
    `);
    if (query) {
      console.log(`こんにちは、${query.accountName}殿`);
      return true;
    } else if (!query) {
      console.log('誰だ貴様は');
      return false;
    }
  }
}
