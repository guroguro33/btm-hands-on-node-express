const express = require("express");
const app = express();

// カウンター機能用
let counter = 1;

app.get("/", (req, res, next) => {
  res.send(`あなたは${counter}人目のお客様です。`);
  counter++;
})

app.get("/reset", (req, res, next) => {
  res.send("カウンタをリセットしました。")
  counter = 1;
})

// サーバーを起動したら、リクエストを10000番ポートで待ち受ける設定（renderのデフォルトのポート番号）
app.listen(10000, () => console.log('Example app listening on port 10000!'))