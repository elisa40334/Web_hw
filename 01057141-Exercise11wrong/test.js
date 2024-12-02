const http = require('http');
const url = require('url');
let a = {};
    
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'application/json'});
    // res.write(req.url);
    let q = url.parse(req.url,true).query;
    let txt = q.year + " " + q.month;
    let chatRecords = {};
    let user = q.year
    let say = q.month
    if (user) {
        let chatObj = {user:user,say:say};
        chatRecords.push(chatObj);
        console.log(`sfkjdsfjdsf${chatObj.user}fssdfs${chatObj.say}`)
    }
    res.end(`sfkjdsfjdsf${user}fssdfs${say}`);
}).listen(8000);