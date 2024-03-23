import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // CORSオプションを設定
  const corsOptions: CorsOptions = {
    origin: 'http://localhost:3000', // 許可するオリジン
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 200,
  };

  app.enableCors(corsOptions); // CORSを有効化

  await app.listen(3300);
}
bootstrap();
