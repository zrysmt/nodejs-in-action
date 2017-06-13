var http = require('http');
var url = require('url');
var items = [];

var server = http.createServer(function(req, res) {
    switch (req.method) {
        case 'POST':
            var item = '';
            req.setEncoding('utf8');
            req.on('data', function(chunk) {
                item += chunk;
            });
            req.on('end', function() {
                items.push(item);
                res.end('OK\n');
            });
            break;
        case 'GET':
            items.forEach(function(item,i){
                res.write(i+')'+item+'\n');
            })
            res.end();
            break;
        case 'DELETE':
            var path = url.parse(req.url).pathname;
            var i = parseInt(path.slice(1),10);
            console.log("i:"+i);
            if(idNaN(i)){
                res.statusCode = 400;
                res.end('Invaild item id');
            }else if(!items[i]){
                res.statusCode = 404;
                res.end('Item Not Found');
            }else{
                items.splice(i,1);
                res.end('OK\n');
            }
            break;
        /*default:
            // res.setHeader('Content-Type','text/plain');
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('使用curl完成请求');
            break;*/
    }
});

server.listen(3000);