var http = require('http');

var server = http.createServer(function(req,res){
	var url = "http://www.baidu.com";
	var body = '<p>跳转<a href="'+url+'">'+url+'</a></p>'
	res.setHeader('Location',url); //指定跳转的url
	res.setHeader('Content-Length',body.length);
	res.setHeader('Content-Type','text/plain');
	res.statusCode = 302;
	res.statusMessage = 'redirect';
	console.log(body);
	res.end(body);
});


server.listen(3000);