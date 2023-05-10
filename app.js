const express = require("express");
const app = express()

app.get("/",(req,res)=>{
  res.end("simple template")
})

app.get("*",(req,res)=>{
  res.end("what are you doing here?")
})

app.listen(process.env.PORT || 3000,()=>console.log("running..."))
