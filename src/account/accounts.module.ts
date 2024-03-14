import { TypeOrmModule } from '@nestjs/typeorm';
import { Account } from './accounts.entity';
import { Module } from '@nestjs/common';
import { AccountsController } from './accounts.controller';
import { AccountsService } from './accounts.service';
import { JwtModule, JwtService } from '@nestjs/jwt';

@Module({
  imports: [
    TypeOrmModule.forFeature([Account]),
    JwtModule.register({
      secret: 'dgfserq3tefawef323fe2t5ue567j5',
      secretOrPrivateKey: 'asasfasfasfa',
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [AccountsController],
  providers: [AccountsService, JwtService],
})
export class AccountsModule {}
