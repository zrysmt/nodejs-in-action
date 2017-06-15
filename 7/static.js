var connect = require('connect');
var path = require('path');
var serveStatic  = require('serve-static');

console.log(__dirname);

var app = connect()
	.use(serveStatic(path.join(__dirname,'limit')));  //文件夹/nodejs/code/7/limit


app.listen(3000);