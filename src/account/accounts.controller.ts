import { Body, Controller, Post } from '@nestjs/common';
import { AccountsService } from './accounts.service';

@Controller('account')
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}

  @Post('post')
  async registerAccount(
    @Body()
    account: {
      accountId: string;
      accountName: string;
      mailAddress: string;
      password: string;
    },
  ) {
    console.log('OK,登録している');
    console.log(account);
    await this.accountsService.registerAccount(account);
    return console.log(`
    ようこそ ${account.accountName}様
    登録完了です。
    `);
  }
}
