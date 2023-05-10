const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app)
const io = require("socket.io")(server);

app.get("/",(req,res)=>{
  res.end("simple template")
})

app.get("*",(req,res)=>{
  res.end("what are you doing here?")
})

server.listen(process.env.PORT || 3000)
