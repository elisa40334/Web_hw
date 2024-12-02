var express = require('express');
var router = express.Router();
const MongoClient =require('mongodb').MongoClient; 
const url= "mongodb+srv://elisa403:louise102940334@cluster0.xgqidqz.mongodb.net/?retryWrites=true&w=majority";
const recordd=[];
router.get("/chat", function (req, res) {
  let q= req.query;
  if(q.user && q.say){
      let chatobj={user:q.user,say:q.say,time:new Date().toLocaleString()};
      recordd.push(chatobj);
  }
  res.writeHead(200,{"Content-Type":"application/json"});
  res.write(JSON.stringify(recordd));
  res.end();
});
// POST service
router.get("/chat/clear", function (req, res) {
    recordd.length=0;
    res.end();
});
router.get("/chat/save",function(req,res){
  MongoClient.connect(url,function(err,db){
    if(err)throw err;
    const dbo =db.db("mydb");
    dbo.collection("abc").insertMany(recordd, function (err, res) {
    console.log("abc");
      if (err) throw err;
      console.log(`multiple documents were inserted`);
      db.close();
    });
  });
});
router.get("/chat/reload",function(req,res){
    MongoClient.connect(url,function(err,db){
      if(err)throw err;
      const dbo =db.db("mydb");
      dbo.collection("abc").find({}).toArray(function (err, recordd) {
        if (err) throw err;
        res.send(recordd);
        console.log(recordd);
        db.close();
      });
    });
});

module.exports = router;