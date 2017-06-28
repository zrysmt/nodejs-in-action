var http = require('http');
var url = require('url');

var target = url.parse(process.argv[2]);

var req  = http.get(target,function(res){
	res.pipe(process.stdout);
})