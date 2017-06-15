var connect = require('connect');
var path = require('path');
var serveStatic  = require('serve-static');
var compression  = require('compression');

var app = connect()
	.use(compression())
	.use(serveStatic(path.join(__dirname,'limit')))  //文件夹/nodejs/code/7/limit
	// .use(compression())

app.listen(3000);