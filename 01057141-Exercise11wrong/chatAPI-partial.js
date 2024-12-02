//chatAPI.js
const http = require('http');
const url = require('url');
const fs = require('fs');


const chatRecords = [];
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
        let q = url.parse(req.url,true).query;
        let user = q.user
        let say = q.say
        let time = new Date().toLocaleString;
        if (user) {
            let chatObj = {user:user,say:say,time:time};
            chatRecords.push(chatObj);
        }
        res.writeHead(200,{'Content-Type':'application/json'});
        console.log(Json.stringify(chatRecords));
        res.end(JSON.stringify(chatRecords));
    } else if (path == "/chat/clear") {
        // TODO
        while (chatRecords.length > 0) {
            chatRecords.pop();
        }
        res.end();
    } else if (path == "/chat/save") {
        // TODO
        db.save(chatRecords);
        res.end();
    } else if (path == "/chat/reload") {
        // TODO
        res.writeHead(200,{'Content-Type':'application/json'});
        let recordsPromise = db.reload();
        recordsPromise
            .then(function (value){
                console.log("value:" + value);
                for (let chat of value) {
                    console.log("chat:" + JSON.stringify(chat))
                    if (!chat.id)  chatRecords.push(chat);
                }
                console.log("ALL：" + chatRecords);
                res.end(JSON.stringify(chatRecords));
            });
    }
    else {
        res.end();
    }
}).listen(process.env.PORT || 3000);