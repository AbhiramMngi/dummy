const express = require("express");
const http = require("http");

const app = express();

app.get("/",  function (req, res) {
    // const db = ctx.get("db");
    // const data = await db.blogger.findMany();

  res.header({
    "Content-Type": "application/json",
  });
  res.send({
    Status: 200,
    message: "Hello",
  });
});

http.createServer(app).listen(5000, function () {
  console.log("server listening at 5000");
});
