//chatAPI.js
const http = require('http');
const url = require('url');
const fs = require('fs');
const chatRecords = [];

// const db = require('./chat_database.js')

// TODO

http.createServer(function (req, res) {
    
    let path = url.parse(req.url, true).pathname;
    
    console.log("Request:" + path);
    
    if (path == "/") {
        // TODO
        fs.readFile('index.html',function(err,data){
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write(data);
            return res.end();
        });
    } 
    else if (path == "/chat") {
        // TODO
        console.log("Request2:" + path);
        let q = url.parse(req.url,true).query;
        let user = q.user
        let say = q.say
        let time = new Date().toLocaleString;
        console.log("lalala"+q.user);
        if (user) {
            let chatObj = {user:user,say:say,time:time};
            chatRecords.push(chatObj);
        }
        res.writeHead(200,{'Content-Type':'application/json'});
        console.log(Json.stringify(chatRecords));
        res.end(Json.stringify(chatRecords));
        
    } else {
        res.end();
    }
}).listen(8080);