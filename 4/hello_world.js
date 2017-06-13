var http = require('http');

var server = http.createServer(function(req,res){
	var body = "Hello World";
	res.setHeader('Content-Length',body.length);
	res.setHeader('Content-Type','text/plain');
	console.log('hello world');
	res.end(body);
});


server.listen(3000);