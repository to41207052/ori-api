import { Injectable } from '@nestjs/common';
import fetch from 'node-fetch';
@Injectable()
export class AlbionService {
  constructor() {}

  //   自分のステータスを表示
  async getMyStatus() {
    const res = await fetch(
      'https://gameinfo-sgp.albiononline.com/api/gameinfo/players/qJkHQXYsQI-_H71DF0Qw0Q',
    );
    const data = await res.json();
    return data;
  }

  async getAvatar(): Promise<Buffer> {
    let avatar: string;
    const num: number = Math.floor(Math.random() * 4 + 1);
    switch (num) {
      case 1:
        avatar = 'ADVENTURER_JOURNEYMAN';
        break;
      case 2:
        avatar = 'ADVENTURER_ADEPT';
        break;
      case 3:
        avatar = 'ADVENTURER_EXPERT';
        break;
      case 4:
        avatar = 'ADVENTURER_MASTER';
        break;
    }
    const res = await fetch(
      `https://render.albiononline.com/v1/destiny/${avatar}.png`,
    );
    const data: Buffer = await res.buffer(); // buffer() メソッドを使用する
    return data;
  }

  //   指定された名前を検索してすべて返す
  async getName(name: string) {
    const res = await fetch(
      `https://gameinfo-sgp.albiononline.com/api/gameinfo/search?q=${name}`,
    );
    const data = await res.json();
    return data;
  }

  //   指定されたIDでステータスを検索
  async getStatus(id: string) {
    console.log(id);
    const res = await fetch(
      `https://gameinfo-sgp.albiononline.com/api/gameinfo/players/${id}`,
    );
    const data = await res.json();
    return data;
  }
}
