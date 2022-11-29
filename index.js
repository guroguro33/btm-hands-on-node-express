const express = require("express");
const app = express();

// カウンター機能用
let counter = 1;

app.get("/", (req, res, next) => {
  res.send(`あなたは${counter}人目のお客様です。`);
  counter++;
})

app.get("/reset", (req, res, next) => {
  res.send("リセットしました。")
  counter = 1;
})

app.listen(10000, () => console.log('Example app listening on port 8000!'))