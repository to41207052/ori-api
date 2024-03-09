import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

// テストスイートを定義
describe('AppController (e2e)', () => {
  // テストケースで使用する INestApplicationを宣言
  let app: INestApplication;

  // AppModuleをインポートしてコンパイル
  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    // nestアプリケーションを実体化してappに代入
    app = moduleFixture.createNestApplication();
    // アプリケーション初期化
    await app.init();
  });

  // it でテストケースを定義 ' ' は名前
  it('/ (GET)', () => {

    // HTTPサーバーをリクエストするためのオブエクトを取得
    return request(app.getHttpServer())
      // エンドポイントにリクエストを行う
      .get('/')
      // ステータスコードが２００かどうか
      .expect(200)
      // レスポンス本文が Hello World かどうか
      .expect('Hello World!');
  });
});
