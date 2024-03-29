import { Controller, Get, Param, Res } from '@nestjs/common';
import { Response } from 'express';
import { AlbionService } from './albion.service';
@Controller('albion')
export class AlbionController {
  constructor(private readonly albionService: AlbionService) {}

  @Get('mystatus')
  // 自分のステータスを取得
  async getmyStatus() {
    const data = await this.albionService.getMyStatus();
    console.log(`MYSTATUS:${data}`);
    return data;
  }

  // ランダムなアバター画像を返す
  @Get('avatar')
  async getAvatar(@Res() res: Response) {
    const data = await this.albionService.getAvatar();
    res.set('Content-Type', 'image/png');
    res.send(data);
  }

  // 名前を文字列で検索してヒットしたものをすべて返す
  @Get(':name')
  async getName(@Param('name') name: string) {
    const data = await this.albionService.getName(name);
    return data;
  }

  // idを指定されたSTATUSを返す
  @Get('status/:id')
  async getStatus(@Param('id') id: string) {
    const data = await this.albionService.getStatus(id);
    console.log(`STATUS:${data}`);
    return data;
  }
}
