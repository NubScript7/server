const express = require("express");
const fs = require("fs") = express();

app.set("view engine","pug")

get("*",(req,res)=>{
  const path = req.url.slice(1,req.url.length);
  res.render(path)
})

app.use((err,req,res)=>{
  res.status(503).send("how did we get here?")
})

app.listen(process.env.PORT || 3000)
