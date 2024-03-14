
# mysql リセット時
コンテナ立ち上げ<br>
docker-compose up -d<br>
<br>
コンテナ入る<br>
docker exec -it ID /bin/bash<br>
<br>
utf-8設定でmysqlに入る<br>
mysql --default-character-set=utf8mb4 -u root -p<br>
<br>
mysqlで認証プロトコルの更新<br>
ALTER USER 'root' IDENTIFIED WITH mysql_native_password BY 'root';<br>
<br>
してね<br>
<br>

# 現在の実装
## comment GET
http://localhost:3000/comment に接続するとcommentのオブジェクトがランダムで帰ってきます


## comment POST
http://localhost:3000/comment/post へPOST してみてください、Thunder-Clientなどを使用<br>
bodyに <br>
{
    "comment" : "ここにコメント"
}<br>
して send するとデータベース comment テーブルに挿入されます

## account POST
http://localhost:3000/account/post<br>
body<br>
{
    "accountId": "ID",
    "accountName": "Name",
    "mailAddress": "MailAddress",
    "password": "Password"
}<br>
<span style="color:red"><b>!!!注意!!! 現状insert失敗した場合でもaccount-numberが進みます</b></span>

## account POST(LOGIN)
http://localhost:3000/account/login<br>
body<br>
{
    "id": "ID",
    "pass": "pass"
}<br>
id,passがない場合エラーします。<br>
二つの値がテーブル<br>
 存在する場合: true<br>
     ない場合: false <br>