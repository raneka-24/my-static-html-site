//express を呼び出す
const express = require('express');
//インスタンス化をする
const app = express();
//PORTを指定する
const PORT = 3000;
//expressを使い、ローカルサーバーを立ち上げる
app.listen(PORT, () => console.log('サーバーが起動しました'));
