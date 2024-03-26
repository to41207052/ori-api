import { Controller, Get, Param } from '@nestjs/common';
import { AlbionService } from './albion.service';
@Controller('albion')
export class AlbionController {
  constructor(private readonly albionService: AlbionService) {}

  @Get('mystatus')
  async getmyStatus() {
    const data = await this.albionService.getMyStatus();
    console.log(`IN CONTROLLER:${data}`);
    return data;
  }

  // 名前を文字列で検索してヒットしたものをすべて返す
  @Get(':name')
  async getName(@Param('name') name: string) {
    const data = await this.albionService.getName(name);
    return data;
  }

  // idを指定されたSTATUSを返す
  @Get('status/:id')
  async getStatus() {
    const data = await this.albionService.getMyStatus();
    return data;
  }
}