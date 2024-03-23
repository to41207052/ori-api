import { Module } from '@nestjs/common';
import { AlbionController } from './albion.controller';
import { AlbionService } from './albion.service';
@Module({
  controllers: [AlbionController],
  providers: [AlbionService],
})
export class AlbionModule {}
