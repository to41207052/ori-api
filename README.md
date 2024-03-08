
# mysql リセット時
コンテナ立ち上げ
docker-compose up -d

コンテナ入る
docker exec -it ID /bin/bash

utf-8設定でmysqlに入る
mysql --default-character-set=utf8mb4 -u root -p

mysqlで認証プロトコルの更新
ALTER USER 'root' IDENTIFIED WITH mysql_native_password BY 'root';

してね

# 現在の実装
## GET
http://localhost:3000/comment に接続するとcommentのオブジェクトがランダムで帰ってきます