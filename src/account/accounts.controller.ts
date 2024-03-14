import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { findAccountDto } from './accounts.request';
import { JwtService } from '@nestjs/jwt';
import { JwtModule } from '@nestjs/jwt';

@Controller('account')
export class AccountsController {
  constructor(
    private readonly accountsService: AccountsService,
    private readonly jwtService: JwtService,
    private readonly jwtModule: JwtModule,
  ) {}
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
    const judge = await this.accountsService.findAccount(account);
    if (judge === true) {
      console.log('トークンの生成を開始');
      console.log(this.jwtService.sign({ id: account.id }));
      const secret = JwtModule.register({ secret: 'aewawfwq' });
      const accessToken = this.jwtService.sign({ id: account.id });
      // console.log(`アクセストークンです：${accessToken}`);
    } else {
      console.log(judge);
      throw new Error('しらんなあ');
    }
  }
}
