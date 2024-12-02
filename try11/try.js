const express = require("express");
const app = express();
const hostnum = 8088;

app.get("/" , (req , res)=>{
    res.send("asddd")
});

app.listen(hostnum , ()=>{
    console.log(`asdjklsdalskjd:${hostnum}`)
});