import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { findAccountDto } from './accounts.request';

@Controller('account')
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}
  /**アカウント登録 */
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

  /**アカウント認証? */
  @Post('login')
  @UsePipes(new ValidationPipe({ transform: true }))
  async findAccount(@Body() account: findAccountDto) {
    console.log(account);
    return await this.accountsService.findAccount(account);
  }
}
