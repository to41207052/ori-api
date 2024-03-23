import { Injectable } from '@nestjs/common';

@Injectable()
export class AlbionService {
  constructor() {}

  //   自分のステータスを表示
  async getMyStatus() {
    const res = await fetch(
      'https://gameinfo-sgp.albiononline.com/api/gameinfo/players/qJkHQXYsQI-_H71DF0Qw0Q',
    );
    console.log(res);
    const data = await res.json();
    console.log(`IN SERVICE :${JSON.stringify(data)}`);
    return data;
  }

  //   指定された名前を検索してすべて返す
  async getName(name: string) {
    const res = await fetch(
      `https://gameinfo-sgp.albiononline.com/api/gameinfo/search?q=${name}`,
    );
    const data = await res.json();
    console.log(`IN SERVICE: ${data}`);
    return data;
  }

  //   指定されたIDでステータスを検索
  async getStatus(id: string) {
    const res = await fetch(
      `https://gameinfo-sgp.albiononline.com/api/gameinfo/players/${id}`,
    );
    const data = await res.json();
    return data;
  }
}
