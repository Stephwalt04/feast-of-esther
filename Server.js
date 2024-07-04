const express = require("express");
const request = require("request");
const app = express();



app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});



app.get("/proxy", (req, res) => {
  const url =
    "https://script.google.com/macros/s/AKfycbz1rskrNhQG1VFjeZz2ZuP1vNHXoX1_d1tyX5mr59viBHBgslYuzUGN-o37zYgRE6ri/exec";
  request(url).pipe(res);
});


app.listen(3001, () => {
  console.log("Proxy server running on port 3001");
});