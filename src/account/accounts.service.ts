import { Injectable, Logger } from '@nestjs/common';
import { Account } from './accounts.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

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
    }
  }
}
