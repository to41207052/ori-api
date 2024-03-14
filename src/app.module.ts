import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentModule } from './comment/comment.module';
import { AccountsModule } from './account/accounts.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    AccountsModule,
    CommentModule,
    JwtModule.register({
      secret: 'dgfserq3tefawef323fe2t5ue567j5',
      secretOrPrivateKey: 'asasfasfasfa',
      signOptions: { expiresIn: '1h' },
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT, 10) || 3306,
      username: process.env.DB_USERNAME || 'root',
      password: process.env.DB_PASSWORD || 'root',
      database: process.env.DB_DATABASE || 'comment_db',
      charset: 'utf8mb4',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    // {
    //   provide: APP_INTERCEPTOR,
    //   useClass: ResponseInterceptor
    // }
  ],
})
export class AppModule {}
