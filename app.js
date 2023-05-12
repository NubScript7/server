const express = require("express");
const cors = require("cors");
const ip = require("ip");
const fs = require("fs") = express();

app.use(cors());
app.set("view engine","pug");

app.get("/ip",(req,res)=>{
  res.send(ip.address())
})

app.get("*",(req,res)=>{
  const path = req.url.slice(1,req.url.length);
  res.render(path);
})

app.use((err,req,res)=>{
  res.status(503).send("how did we get here?");
})

app.listen(process.env.PORT || 3000);
